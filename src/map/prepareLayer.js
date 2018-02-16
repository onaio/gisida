import * as d3 from 'd3';
import aggregateData from '../utils/aggregateData';
import fetchFormData from './../utils/fetchFormData';
import { loadJSON, loadCSV } from '../utils/files';
import { generateFilterOptions, processFilters } from '../utils/filters';
import { requestData, receiveData } from '../store/actions/Actions';
import addLayer from './addLayers/'

/**
 * Dispaches actions indicatino layer is readyt to render
 * @param {*} layer
 * @param {*} dispatch
 */
function renderData(layer, dispatch) {
  const layerObj = { ...layer };
  if (!(layerObj.labels)) {
    dispatch(receiveData(layerObj));
  } else {
    loadCSV(layerObj.labels.data, (labels) => {
      layerObj.labels.data = labels;
      dispatch(receiveData(layerObj));
    });
  }
}

/**
 * Loads layer data from CSV or GeoJSON source
 * @param {*} layer
 * @param {*} source
 * @param {*} dispatch
 */
function readData(layer, source, dispatch) {
  const layerObj = { ...layer };
  const fileType = source.split('.').pop();
  if (fileType === 'csv') {
    loadCSV(layerObj.source.data, (data) => {
      layerObj.source.data = data;
      layerObj.mergedData = data;
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

  // TODO: figure out what this does
  // if (layerSpec.popup && layerSpec.type !== 'chart') {
  //   this.activeLayers.push(layerSpec.id);
  // }

  if (layerObj.source) {
    // if not processed, grab the csv or geojson data
    if (typeof layerObj.source.data === 'string') {
      readData(layerObj, layerObj.source.data, dispatch);
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
          renderData(layerObj);
        } else {
          // add the already processed layerObj
          dispatch(receiveData(layerObj));
        }
  } else if (layerObj.layers) {
    // TODO: fix for grouped layers
    // if layer has sublayers, add all sublayers
    // self.addLegend(layerSpec);
    layerObj.layers.forEach((sublayer) => {
      const subLayer = this.props.layerSpec[sublayer];
      subLayer.id = sublayer;
      if (typeof subLayer.source.data === 'string') {
        readData(subLayer, subLayer.source.data);
      } else {
        // self.addLayer(subLayer);
      }
    });
  }
}
