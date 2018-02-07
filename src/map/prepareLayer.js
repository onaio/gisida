/* eslint-disable import/first */
import aggregateData from '../utils/aggregateData';
import fetchFormData from './../utils/fetchFormData';
import { loadJSON, loadCSV } from '../utils/files';
import { generateFilterOptions, processFilters } from '../utils/filters';
import { requestData, receiveData } from '../store/actions/Actions';
import * as d3 from 'd3';


/**
 * Proceses MapSpec and adds it to state.
* */
export default function prepareLayer(layerSpec, dispatch, filterOptions = false) {
  // Sets state to loading;
  dispatch(requestData(layerSpec.id));

  const processedLayer = { ...layerSpec };

  // if (layerSpec.popup && layerSpec.type !== 'chart') {
  //   this.activeLayers.push(layerSpec.id);
  // }

  function renderData(spec) {
    if (!(spec.labels)) {
      dispatch(receiveData(spec));
    } else {
      loadCSV(spec.labels.data, (labels) => {
        const nextSpec = spec;
        nextSpec.labels.data = labels;
        dispatch(receiveData(spec));
      });
    }
  }

  function readData(spec, source) {
    const layer = { ...spec };
    const fileType = source.split('.').pop();
    if (fileType === 'csv') {
      loadCSV(spec.source.data, (data) => {
        layer.source.data = data;
        layer.mergedData = data;
        if (spec.aggregate && spec.aggregate.filter) {
          generateFilterOptions(spec);
        }
        renderData(layer);
      });
    }
    if (fileType === 'geojson') {
      loadJSON(spec.source.data, (data) => {
        layer.source.data = data;
        renderData(layer);
      });
    }
  }

  // if layer has source
  if (layerSpec.source) {
    // if not processed, grab the csv or geojson data
    if (typeof layerSpec.source.data === 'string') {
      readData(layerSpec, layerSpec.source.data);
    } else if (layerSpec.source.data instanceof Array &&
      !(layerSpec.source.data[0] instanceof Object) &&
      layerSpec.source.data.length >= 1 &&
      !layerSpec.loaded) {
      let q = d3.queue();
      const filePaths = layerSpec.source.data;
      filePaths.forEach((filePath) => {
        if (Number.isInteger(filePath)) {
          q = q.defer(fetchFormData, filePath, layerSpec.properties);
        } else q = q.defer(d3.csv, filePath);
      });
      q.awaitAll((error, data) => {
        const mergedData = [].concat(...data);
        processedLayer.mergedData = mergedData;
        if (layerSpec.aggregate && layerSpec.aggregate.filter) {
          generateFilterOptions(layerSpec);
        }
        processedLayer.source.data = layerSpec.aggregate.type ?
          aggregateData(layerSpec, this.props.locations) : mergedData;
        processedLayer.loaded = true;
        // renderData(layerSpec);
      });
    } else if (filterOptions) {
      processedLayer.source.data =
        layerSpec.aggregate.type ?
          aggregateData(layerSpec, this.props.locations, filterOptions) :
          processFilters(layerSpec, filterOptions);
      // self.addLayer(layerSpec);
    } else {
      // add the already processed layer
      dispatch(receiveData(layerSpec));
    }
  } else if (layerSpec.layers) {
    // if layer has sublayers, add all sublayers
    // self.addLegend(layerSpec);
    layerSpec.layers.forEach((sublayer) => {
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
