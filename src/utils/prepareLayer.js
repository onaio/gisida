import { loadJSON }from './files';

/**
 * Proceses data and adds it to state.
**/
function prepareLayer(rawLayer, filterOptions = false) {
  const LayerID = rawLayer.title 

  if (rawLayer.popup && rawLayer.type !== 'chart') {
    activeLayers.push(layerData.id);
  }

  function addToState(rawLayer) {
    if (!(rawLayer.labels)) {
      self.addLayer(rawLayer);
    } else {
      d3.csv(rawLayer.labels.data, (labels) => {
        rawLayer.labels.data = labels;
        self.addLayer(rawLayer);
      });
    }
  }

  function readData(rawLayer, source) {
    const fileType = source.split('.').pop();
    if (fileType === 'csv') {
      d3.csv(rawLayer.source.data, (data) => {
        layerData.source.data = data;
        layerData.mergedData = data;
        if (layerData.aggregate && layerData.aggregate.filter) {
          generateFilterOptions(layerData);
        }
        addToState(rawLayer);
      });
    }
    if (fileType === 'geojson') {
      d3.json(rawLayer.source.data, (data) => {
        rawLayer.source.data = data;
        addToState(rawLayer);
      });
    }
  }

  // if layer has source
  if (layerData.source) {
    // if not processed, grab the csv or geojson data
    if (typeof layerData.source.data === 'string') {
      readData(layerData, layerData.source.data);
    } else if (layerData.source.data instanceof Array &&
      !(layerData.source.data[0] instanceof Object) &&
      layerData.source.data.length >= 1 &&
      !layerData.loaded) {
      let q = d3.queue();
      const filePaths = layerData.source.data;
      filePaths.forEach((filePath) => {
        if (Number.isInteger(filePath)) {
          q = q.defer(fetchData, self, filePath, layerData.property);
        } else q = q.defer(d3.csv, filePath);
      });
      q.awaitAll((error, data) => {
        const mergedData = [].concat(...data);
        layerData.mergedData = mergedData;
        if (layerData.aggregate && layerData.aggregate.filter) {
          generateFilterOptions(layerData);
        }
        layerData.source.data = layerData.aggregate.type ?
          aggregateData(layerData, this.props.locations) : mergedData;
        layerData.loaded = true;
        addToState(layerData);
      });
    } else if (filterOptions) {
      layerData.source.data =
        layerData.aggregate.type ?
          aggregateData(layerData, this.props.locations, filterOptions) :
          processFilters(layerData, filterOptions);
      self.addLayer(layerData);
    } else {
      // add the already processed layer
      self.addLayer(layerData);
    }
  } else if (layerData.layers) {
    // if layer has sublayers, add all sublayers
    self.addLegend(layerData);
    layerData.layers.forEach((sublayer) => {
      const subLayer = this.props.layerData[sublayer];
      subLayer.id = sublayer;
      if (typeof subLayer.source.data === 'string') {
        readData(subLayer, subLayer.source.data);
      } else {
        self.addLayer(subLayer);
      }
    });
  }
}

export default function processLayers(LayerName) { 
  function addToState(spec) {
    JSON.parse(spec);
 } 

}
