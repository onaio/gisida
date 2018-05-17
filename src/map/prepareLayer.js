import * as d3 from 'd3';
import Mustache from 'mustache';
import csvToGEOjson from './csvToGEOjson';
import aggregateFormData from '../connectors/ona-api/aggregateFormData';
import getData from '../connectors/ona-api/data';
import { loadJSON, loadCSV } from '../utils/files';
import { generateFilterOptions, processFilters } from '../utils/filters';
import { requestData, receiveData, getCurrentState } from '../store/actions/actions';
import parseData from './../utils/parseData';
import addLayer from './addLayer';
import getSliderLayers from './getSliderLayers';
import buildTimeseriesData from './buildTimeseriesData';

/**
 * Builds labels based on label spec and layer data
 * @param {*} layerObj
 * @param {*} labels
 */
export function buildLabels(layerObj, tsLayerObj, period) {
  const labels = [];
  const layerData = typeof tsLayerObj !== 'undefined'
    ? [...tsLayerObj.periodData[period].data]
    : [...layerObj.source.data];
  const {
    coordinates, join, label, labelData,
  } = layerObj.labels;

  // loop through all labels
  for (let l = 0; l < labelData.length; l += 1) {
    // loop through all data
    for (let d = 0; d < layerData.length; d += 1) {
      // check for join match between label and datum
      if (labelData[l][join[0]] === layerData[d][join[1]]) {
        // stash datum and coordi ates in label, push to labels array
        labels.push({
          ...labelData[l],
          data: { ...layerData[d] },
          label: Mustache.render(label, layerData[d]),
          coordinates: [labelData[l][coordinates[0]], labelData[l][coordinates[1]]],
        });
        // remove datum from layerData for faster looping
        layerData.splice(d, 1);
        // stop looping throuh layerData for this label
        break;
      }
    }
  }

  return labels;
}

/**
 * Dispaches actions indicating layer is ready to render
 * @param {*} layer
 * @param {*} dispatch
 */
function renderData(mapId, layer, dispatch) {
  let layerObj = { ...layer };
  const currentState = dispatch(getCurrentState());
  const { mapConfig } = currentState.APP;
  const { timeseries } = currentState[mapId];
  let { layers } = currentState[mapId];

  // Generate Mapbox StyleSpec
  layerObj = addLayer(layerObj, mapConfig);
  layerObj.visible = true;
  layers = { ...layers, [layerObj.id]: layerObj };
  const sliderLayers = getSliderLayers(layers);
  const newStops = { stops: layerObj.stops, id: layer.id };
  const timeseriesMap = buildTimeseriesData(
    layerObj,
    newStops,
    sliderLayers,
    timeseries,
    layers,
  );
  if (timeseriesMap[layer.id]) {
    let mbLayer = null;
    // TODO - simplify this
    switch (layer.type) {
      case 'circle':
        mbLayer = layerObj.styleSpec;
        break;
      case 'fill':
        mbLayer = layerObj.styleSpec;
        break;
      case 'line':
        mbLayer = layerObj.styleSpec;
        break;
      case 'symbol':
        mbLayer = layerObj.styleSpec;
        break;
      default:
        mbLayer = null;
    }
    timeseriesMap[layer.id].mapBoxLayer = mbLayer;
  }
  const newTimeSeries = Object.assign({}, timeseries, timeseriesMap);

  // Check if layer has labels and add before dispatch
  if (!layerObj.labels) {
    dispatch(receiveData(mapId, layerObj, newTimeSeries));
  } else if (!layerObj.labels.labelData) {
    // Load labels from CSV
    loadCSV(layerObj.labels.data, (labelData) => {
      layerObj.labels.labelData = labelData;

      // if no timeseries, build one set of labels
      if (!newTimeSeries[layerObj.id]) {
        layerObj.labels.labels = buildLabels(layerObj);
      // if timeseries, build labels for every timeperiod
      } else {
        layerObj.labels.labels = {};
        newTimeSeries[layerObj.id].period.forEach((period) => {
          layerObj.labels.labels[period] =
            buildLabels(layerObj, newTimeSeries[layerObj.id], period);
        });
      }

      dispatch(receiveData(mapId, layerObj, newTimeSeries));
    });
  } else {
    layerObj.labels.labels = buildLabels(layerObj);
    dispatch(receiveData(mapId, layerObj, newTimeSeries));
  }
}

/**
 * Loads layer data from CSV or GeoJSON source
 * @param {*} layer
 * @param {*} source
 * @param {*} dispatch
 */
function readData(mapId, layer, dispatch) {
  const layerObj = { ...layer };
  const sourceURL = layer.source.data;
  const fileType = sourceURL.split('.').pop();
  if (fileType === 'csv') {
    loadCSV(layerObj.source.data, (data) => {
      let parsedData;
      if (layerObj.source.type === 'geojson') {
        parsedData = csvToGEOjson(layerObj, data);
      } else if (layerObj['data-parse']) {
        parsedData = parseData(layerObj['data-parse'], data);
      } else {
        parsedData = data;
      }
      layerObj.source.data = parsedData;
      layerObj.mergedData = parsedData;
      if (layerObj.aggregate && layerObj.aggregate.filter) {
        layerObj.filterOptions = generateFilterOptions(layerObj);
      }
      renderData(mapId, layerObj, dispatch);
    });
  }
  if (fileType === 'geojson') {
    loadJSON(layerObj.source.data, (data) => {
      if (layerObj['data-parse']) {
        layerObj.source.data = {
          ...data,
          features: parseData(layerObj['data-parse'], data.features),
        };
      } else {
        layerObj.source.data = data;
      }
      renderData(mapId, layerObj, dispatch);
    });
  }
}

/**
 * Loads layer data from multiple CSV or GeoJSON files
 * @param {*} layer
 * @param {*} dispatch
 */
function fetchMultipleSources(mapId, layer, dispatch) {
  const layerObj = { ...layer };
  const currentState = dispatch(getCurrentState());
  let q = d3.queue();

  const filePaths = layerObj.source.data;
  filePaths.forEach((filePath) => {
    if (Number.isInteger(filePath)) {
      q = q.defer(getData, filePath, layerObj.properties, currentState.APP.apiAccessToken);
    } else q = q.defer(d3.csv, filePath);
  });

  q.awaitAll((error, Data) => {
    // parse all data if layer has data parsing spec
    const data = !layerObj['data-parse']
      ? [...Data]
      : Data.map((D) => {
        if (Array.isArray(D.features)) {
          return {
            ...D,
            features: parseData(layerObj['data-parse'], D.features),
          };
        }
        return parseData(layerObj['data-parse'], D);
      });
    const { join, relation, type } = layerObj.source;
    const isManyToOne = relation && relation.type === 'many-to-one';
    const isVectorLayer = type === 'vector';

    let mergedData = isManyToOne
      ? {}
      : (Array.isArray(data[0]) && [...data[0]]) || { ...data[0] };

    // Filter base data for missing join properties
    if (Array.isArray(mergedData)) {
      mergedData = mergedData.filter(d => d[join[(isVectorLayer ? 1 : 0)]]);
    } else if (Array.isArray(mergedData.features)) {
      mergedData.features = mergedData.features.filter(d => d[join[(isVectorLayer ? 1 : 0)]]);
    }

    // Helper func for combining arrays of data
    function basicMerge(i, prevData, nextData) {
      if (!nextData || typeof nextData === 'string') {
        return { ...prevData };
      } else if (Array.isArray(prevData) && Array.isArray(data[i])) {
        return [...prevData, ...data[i].filter(d => typeof d[join[i]] !== 'undefined')];
      } else if (Array.isArray(prevData) && Array.isArray(data[i].features)) {
        return [...prevData, ...data[i].features.filter(d => typeof d[join[i]] !== 'undefined')];
      } else if (prevData.features && Array.isArray(prevData.features)) {
        return {
          ...prevData,
          features: [...prevData.features, ...(data[i].features || data[i]).filter(d => typeof d[join[i]] !== 'undefined')],
        };
      }
      return { ...prevData };
    }

    // Helper func for joining "manys" to "ones"
    function manyToOneMerge(i, PrevData, NextData) {
      const prevData = PrevData;
      const nextData = NextData.features || NextData;
      let datum;
      for (let d = 0; d < nextData.length; d += 1) {
        datum = nextData[d].properties || nextData[d];
        if (relation.key[i] === 'one' && datum[join[i]] && prevData[datum[join[i]]]) {
          // Merge unique "one" properties from and datum onto prevData[oneId]
          prevData[datum[join[i]]] = {
            ...prevData[datum[join[i]]],
            ...datum,
          };
        } else if (relation.key[i] === 'one' && datum[join[i]]) {
          // Add unique "one"s to mergedData
          prevData[datum[join[i]]] = { ...datum };
          prevData[datum[join[i]]][(relation['many-prop'] || 'many')] = [];
        } else if (datum[join[i]] && prevData[datum[join[i]]]) {
          // Add non-unique "many" to corresponding "one"
          datum = { ...datum };
          prevData[datum[join[i]]][(relation['many-prop'] || 'many')].push(datum);
        }
      }
      return { ...prevData };
    }

    // loop through remaining data to basic join with merged data
    for (let i = (isManyToOne ? 0 : 1); i < data.length; i += 1) {
      if (!relation || !isManyToOne) {
        mergedData = basicMerge(i, mergedData, data[i]);
      } else if (isManyToOne) {
        mergedData = manyToOneMerge(i, mergedData, data[i]);
      }
    }

    if (isManyToOne) {
      layerObj.joinedData = { ...mergedData };
      mergedData = Object.keys(mergedData).map(jd => ({ ...layerObj.joinedData[jd] }));
      // .filter(jd => jd.reports.length);
    }

    // convert to geojson format if necessary
    if (layerObj.source.type === 'geojson' && !mergedData.features) {
      mergedData = csvToGEOjson(layerObj, mergedData);
    }

    layerObj.mergedData = Array.isArray(mergedData)
      ? [...mergedData]
      : { ...mergedData };
    if (layerObj.aggregate && layerObj.aggregate.filter) {
      layerObj.filterOptions = generateFilterOptions(layerObj);
    }
    layerObj.source.data = layerObj.aggregate.type ?
      aggregateFormData(layerObj, currentState.LOCATIONS) : mergedData;
    layerObj.loaded = true;
    renderData(mapId, layerObj, dispatch);
  });
}

/**
 * Proceses MapSpec layer and adds it to redux state.
 * @param {*} layer
 * @param {*} dispatch
 * @param {*} filterOptions
 */
export default function prepareLayer(mapId, layer, dispatch, filterOptions = false) {
  const layerObj = { ...layer };
  // Sets state to loading;
  dispatch(requestData(mapId, layerObj.id));

  // // add to active layers?
  // if (layerSpec.popup && layerSpec.type !== 'chart') {
  //   this.activeLayers.push(layerSpec.id);
  // }
  if (layerObj.source) {
    // if not processed, grab the csv or geojson data
    if (typeof layerObj.source.data === 'string') {
      readData(mapId, layerObj, dispatch);
    } else
    // grab from multiple sources
    if (layerObj.source.data instanceof Array &&
      !(layerObj.source.data[0] instanceof Object) &&
      layerObj.source.data.length >= 1 &&
      !layerObj.loaded) {
      fetchMultipleSources(mapId, layerObj, dispatch);
    } else
    // TODO: remove or refactor
    // only filter option
    if (filterOptions) {
      const currentState = dispatch(getCurrentState());
      layerObj.source.data =
        layerObj.aggregate.type ?
          aggregateFormData(layerObj, currentState.locations, filterOptions) :
          processFilters(layerObj, filterOptions);
      renderData(mapId, layerObj, dispatch);
    } else {
      renderData(mapId, layerObj, dispatch);
    }
  } else if (layerObj.layers) {
    const currentState = dispatch(getCurrentState());

    layerObj.layers.forEach((sublayer) => {
      const subLayer = currentState[mapId].layers[sublayer];

      if (layerObj.aggregate) {
        subLayer.aggregate = layerObj.aggregate;
      }

      subLayer.id = sublayer;
      subLayer.parent = layerObj.id;
      if (typeof subLayer.source.data === 'string') {
        readData(mapId, subLayer, dispatch);
      } else {
        renderData(mapId, subLayer, dispatch);
      }
    });
    renderData(mapId, layerObj, dispatch);
  }
}
