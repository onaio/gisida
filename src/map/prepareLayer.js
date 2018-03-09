import * as d3 from 'd3';
import Mustache from 'mustache';
import csvToGEOjson from './csvToGEOjson';
import aggregateData from './../utils/aggregateData';
import fetchFormData from './../utils/fetchFormData';
import { loadJSON, loadCSV } from './../utils/files';
import { generateFilterOptions, processFilters } from './../utils/filters';
import parseData from './../utils/parseData';
import { requestData, receiveData, getCurrentState } from './../store/actions/Actions';
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
    ? tsLayerObj.periodData[period].data
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
function renderData(layer, dispatch) {
  let layerObj = { ...layer };
  const currentState = dispatch(getCurrentState());
  const { mapConfig } = currentState.APP;
  const { timeseries } = currentState.MAP;
  let { layers } = currentState.MAP;

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
    dispatch(receiveData(layerObj, newTimeSeries));
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

      dispatch(receiveData(layerObj, newTimeSeries));
    });
  } else {
    layerObj.labels.labels = buildLabels(layerObj);
    dispatch(receiveData(layerObj, newTimeSeries));
  }
}


/**
 * Loads layer data from CSV or GeoJSON source
 * @param {*} layer
 * @param {*} source
 * @param {*} dispatch
 */
function readData(layer, dispatch) {
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
      renderData(layerObj, dispatch);
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
      renderData(layerObj, dispatch);
    });
  }
}
/**
 * Loads layer data from multiple CSV or GeoJSON files
 * @param {*} layer
 * @param {*} dispatch
 */
function fetchMultipleSources(layer, dispatch) {
  const layerObj = { ...layer };
  let q = d3.queue();

  const filePaths = layerObj.source.data;
  filePaths.forEach((filePath) => {
    if (Number.isInteger(filePath)) {
      q = q.defer(fetchFormData, filePath, layerObj.properties);
    } else q = q.defer(d3.csv, filePath);
  });
  q.awaitAll((error, data) => {
    const mergedData = [].concat(...data);
    layerObj.mergedData = mergedData;
    if (layerObj.aggregate && layerObj.aggregate.filter) {
      generateFilterOptions(layerObj);
    }
    layerObj.source.data = layerObj.aggregate.type ?
      aggregateData(layerObj, this.props.locations) : mergedData;
    layerObj.loaded = true;
    renderData(layerObj, dispatch);
  });
}

/**
 * Proceses MapSpec layer and adds it to redux state.
 * @param {*} layer
 * @param {*} dispatch
 * @param {*} filterOptions
 */
export default function prepareLayer(layer, dispatch, filterOptions = false) {
  const layerObj = { ...layer };
  // Sets state to loading;
  dispatch(requestData(layerObj.id));

  // // add to active layers?
  // if (layerSpec.popup && layerSpec.type !== 'chart') {
  //   this.activeLayers.push(layerSpec.id);
  // }
  if (layerObj.source) {
    // if not processed, grab the csv or geojson data
    if (typeof layerObj.source.data === 'string') {
      readData(layerObj, dispatch);
    } else
    // grab from multiple sources
    if (layerObj.source.data instanceof Array &&
      !(layerObj.source.data[0] instanceof Object) &&
      layerObj.source.data.length >= 1 &&
      !layerObj.loaded) {
      fetchMultipleSources(layerObj, dispatch);
    } else
    // TODO: remove or refactor
    // only filter option
    if (filterOptions) {
      layerObj.source.data =
        layerObj.aggregate.type ?
          aggregateData(layerObj, this.props.locations, filterOptions) :
          processFilters(layerObj, filterOptions);
      renderData(layerObj, dispatch);
    } else {
      renderData(layerObj, dispatch);
    }
  } else if (layerObj.layers) {
    // TODO: fix for grouped layers
    // if layer has sublayers, add all sublayers
    // self.addLegend(layerSpec);

    const currentState = dispatch(getCurrentState());

    layerObj.layers.forEach((sublayer) => {
      const subLayer = currentState.MAP.layers[sublayer];
      subLayer.id = sublayer;
      if (typeof subLayer.source.data === 'string') {
        readData(subLayer, dispatch);
      } else {
        renderData(subLayer, dispatch);
      }
    });
    renderData(layerObj, dispatch);
  }
}
