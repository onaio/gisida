
import Mustache from 'mustache';
import cloneDeep from 'lodash.clonedeep';
import aggregateFormData from '../connectors/ona-api/aggregateFormData';
import { loadCSV } from '../utils/files';
import { processFilters } from '../utils/filters';
import { requestData, receiveData, getCurrentState } from '../store/actions/actions';
import commaFormatting from './../utils/commaFormatting';
import addLayer from './addLayer';
import getSliderLayers from './getSliderLayers';
import buildTimeseriesData from './buildTimeseriesData';
import readData from '../utils/readLayerdata';
import fetchMultipleSources from '../utils/fetchMultipleSourceData'

/**
 * Builds labels based on label spec and layer data
 * @param {*} layerObj
 * @param {*} labels
 */
export function buildLabels(layerObj, tsLayerObj, period) {
  const labels = [];
  const layerData =
    typeof tsLayerObj !== 'undefined'
      ? [...tsLayerObj.periodData[period].data]
      : [...layerObj.source.data];
  const { coordinates, join, label, labelData } = layerObj.labels;
  let activeLayerData;

  // loop through all labels
  for (let l = 0; l < labelData.length; l += 1) {
    // loop through all data
    for (let d = 0; d < layerData.length; d += 1) {
      // check for join match between label and datum
      activeLayerData = layerData[d].properties || layerData[d];
      if (labelData[l][join[0]] === activeLayerData[join[1]]) {
        const dataItem = commaFormatting(layerObj, activeLayerData, false);

        if (dataItem) {
          // stash datum and coordi ates in label, push to labels array
          labels.push({
            ...labelData[l],
            data: { ...dataItem },
            label: Mustache.render(label, dataItem),
            coordinates: [labelData[l][coordinates[0]], labelData[l][coordinates[1]]],
          });
          // remove datum from layerData for faster looping
          layerData.splice(d, 1);
        }

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
export function renderData(mapId, layer, dispatch, doUpdateTsLayer) {
  let layerObj = { ...layer };
  const currentState = dispatch(getCurrentState());
  const { mapConfig } = currentState.APP;
  const { timeseries } = currentState[mapId];
  let { layers } = currentState[mapId];

  // Generate Mapbox StyleSpec
  if (layerObj.fillGaps) {
    const data = [];
    const mapCodes = [
      ...new Set(
        (layerObj.source.data.features || layerObj.source.data).map(d => d[layerObj.source.join[1]])
      ),
    ];
    const periods = [
      ...new Set(layerObj.source.data.map(p => p[layerObj.aggregate.timeseries.field])),
    ];
    const layerData = layerObj.source.data;
    let datum;
    const tsField = layerObj.aggregate.timeseries.field;
    const periodData = {};
    for (let d = 0; d < layerData.length; d += 1) {
      datum = layerObj.source.data[d];
      if (!periodData[datum[tsField]]) {
        periodData[datum[tsField]] = {};
      }
      periodData[datum[tsField]][datum[layerObj.source.join[1]]] = { ...datum };
    }

    for (let p = 0; p < periods.length; p += 1) {
      for (let m = 0; m < mapCodes.length; m += 1) {
        if (periodData[periods[p]][mapCodes[m]]) {
          data.push(periodData[periods[p]][mapCodes[m]]);
        } else if (p && periodData[periods[p - 1]][mapCodes[m]]) {
          data.push({
            ...periodData[periods[p - 1]][mapCodes[m]],
            [tsField]: periods[p],
          });
          periodData[periods[p]][mapCodes[m]] = {
            ...periodData[periods[p - 1]][mapCodes[m]],
            [tsField]: periods[p],
          };
        }
      }
    }
    layerObj.source.data = cloneDeep(data);
    layerObj.mergedData = cloneDeep(data);
  }
  layerObj = addLayer(layerObj, mapConfig, dispatch);
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
    doUpdateTsLayer,
    dispatch,
    mapId
  );

  // if (timeseriesMap && timeseriesMap[layerObj.id] &&
  //    timeseriesMap[layerObj.id].data &&
  //     Array.isArray(timeseriesMap[layerObj.id].data) &&
  //     timeseriesMap[layerObj.id].data.find(d => d.Phase)) {
  //   timeseriesMap[layerObj.id] = timeseriesMap[layerObj.id].data.filter(d => d.Phase !== '');
  // }

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
    if (timeseriesMap[layer.id].adminFilter) {
      layerObj.filters.admin = timeseriesMap[layer.id].adminFilter;
    } else if (timeseriesMap[layer.id].tsFilter) {
      layerObj.filters.tsFilter = timeseriesMap[layer.id].tsFilter;
    }
  }
  const newTimeSeries = Object.assign({}, timeseries, timeseriesMap);

  // Check if layer has labels and add before dispatch
  if (!layerObj.labels) {
    dispatch(receiveData(mapId, layerObj, newTimeSeries));
  } else if (!layerObj.labels.labelData) {
    // Load labels from CSV
    loadCSV(layerObj.labels.data, labelData => {
      if (!labelData) return;

      layerObj.labels.labelData = labelData;

      // if no timeseries, build one set of labels
      if (!newTimeSeries[layerObj.id]) {
        layerObj.labels.labels = buildLabels(layerObj);
        // if timeseries, build labels for every timeperiod
      } else {
        layerObj.labels.labels = {};
        newTimeSeries[layerObj.id].period.forEach(period => {
          layerObj.labels.labels[period] = buildLabels(
            layerObj,
            newTimeSeries[layerObj.id],
            period
          );
        });
      }
      dispatch(receiveData(mapId, layerObj, newTimeSeries));
    });
  } else {
    const newLabels = {};
    if (doUpdateTsLayer) {
      newTimeSeries[layerObj.id].period.forEach(p => {
        newLabels[p] = buildLabels(layerObj, newTimeSeries[layerObj.id], p);
      });
      layerObj.labels.labels = {
        ...newLabels,
      };
    } else {
      layerObj.labels.labels = buildLabels(layerObj);
    }
    dispatch(receiveData(mapId, layerObj, newTimeSeries));
  }
}

/**
 * Proceses MapSpec layer and adds it to redux state.
 * @param {*} layer
 * @param {*} dispatch
 * @param {*} filterOptions
 */
export default function prepareLayer(
  mapId,
  layer,
  dispatch,
  filterOptions = false,
  doUpdateTsLayer
) {
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
      readData(mapId, layerObj, dispatch, doUpdateTsLayer);
    } else if (
      layerObj.source.data instanceof Array &&
      !(layerObj.source.data[0] instanceof Object) &&
      layerObj.source.data.length >= 1 &&
      !layerObj.loaded
    ) {
      // grab from multiple sources
      fetchMultipleSources(mapId, layerObj, dispatch);
    } else if (
      !Array.isArray(layerObj.source.data) &&
      typeof layerObj.source.data === 'object' &&
      layerObj.source.data !== null &&
      layerObj.source.data.type !== 'FeatureCollection'
    ) {
      // if unprocessed source config object, handle it
      // add in SUPERSET.API promise to q.defer
      switch (layerObj.source.data.type) {
        case 'superset':
        case 'csv':
        case 'json':
        case 'geojson':
        case 'stringified-geojson':
          readData(mapId, layerObj, dispatch, doUpdateTsLayer);
          break;
        case 'onadata':
          // request data from ONA.API, call renderData()
          break;
        default:
          // throw an error?
          break;
      }
    } else if (filterOptions) {
      // TODO: remove or refactor; only filter option
      const currentState = dispatch(getCurrentState());
      layerObj.source.data = layerObj.aggregate.type
        ? aggregateFormData(layerObj, currentState.LOCATIONS, filterOptions)
        : processFilters(layerObj, filterOptions);
      renderData(mapId, layerObj, dispatch, doUpdateTsLayer);
    } else {
      renderData(mapId, layerObj, dispatch, doUpdateTsLayer);
    }
  } else if (layerObj.layers) {
    const currentState = dispatch(getCurrentState());

    layerObj.layers.forEach(sublayer => {
      // check if the grouped layers are coming from a remote source
      if (sublayer.includes('http')) {
        sublayer = sublayer.split('/').slice(-1).pop();
      }
      const subLayer = currentState[mapId].layers[sublayer];

      if (layerObj.aggregate) {
        subLayer.aggregate = layerObj.aggregate;
      }

      subLayer.id = sublayer;
      subLayer.parent = layerObj.id;
      if (typeof subLayer.source.data === 'string') {
        readData(mapId, subLayer, dispatch, doUpdateTsLayer);
      } else if (Array.isArray(subLayer.source.data)) {
        fetchMultipleSources(mapId, subLayer, dispatch);
      } else {
        if (
          !Array.isArray(subLayer.source.data) &&
          typeof subLayer.source.data === 'object' &&
          subLayer.source.data !== null
        ) {
          switch (subLayer.source.data.type) {
            case 'superset':
              readData(mapId, subLayer, dispatch, doUpdateTsLayer);
              break;
            default:
              break;
          }
        }
        renderData(mapId, subLayer, dispatch, doUpdateTsLayer);
      }
    });
    // renderData(mapId, layerObj, dispatch, doUpdateTsLayer);
  }
}