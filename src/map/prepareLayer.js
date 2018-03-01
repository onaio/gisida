import * as d3 from 'd3';
import csvToGEOjson from './csvToGEOjson';
import aggregateData from '../utils/aggregateData';
import fetchFormData from './../utils/fetchFormData';
import { loadJSON, loadCSV } from '../utils/files';
import { generateFilterOptions, processFilters } from '../utils/filters';
import { requestData, receiveData, getCurrentState } from '../store/actions/Actions';
import addLayer from './addLayer';
import addLegend from './addLegend';
import getSliderLayers from './getSliderLayers';
import buildTimeseriesData from './buildTimeseriesData';

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
  } else {
    loadCSV(layerObj.labels.data, (labels) => {
      layerObj.labels.data = labels;
      dispatch(receiveData(layerObj, newTimeSeries));
    });
  }

  addLegend(layerObj, layerObj.stopsData, layerObj.Data, layerObj.breaks, layerObj.colors);
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
      const parsedData = layerObj.source.type === 'geojson' ? csvToGEOjson(layerObj, data) : data;
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
      layerObj.source.data = data;
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
