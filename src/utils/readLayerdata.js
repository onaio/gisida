import superset from '@onaio/superset-connector';
import csvToGEOjson from '../map/csvToGEOjson';
import aggregateFormData from '../connectors/ona-api/aggregateFormData';
import { loadJSON, loadCSV } from '../utils/files';
import { generateFilterOptions } from '../utils/filters';
import parseData from './../utils/parseData';
import {renderData} from '../map/prepareLayer'
import { getCurrentState } from '../store/actions/actions';

export default function readData(mapId, layer, dispatch, doUpdateTsLayer) {
    const layerObj = { ...layer };
    const sourceURL = layer.source.data;
    const fileType = typeof layer.source.data === 'string'
      ? sourceURL.split('.').pop()
      : (typeof sourceURL === 'object'
      && sourceURL !== null
      && sourceURL.type);
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
        const activeData = parsedData.features || parsedData;
        const filteredData = activeData.filter(d => (d.properties || d)[layer.property] !== 'n/a');
  
        if (Array.isArray(parsedData)) {
          layerObj.source.data = [...filteredData];
        } else {
          parsedData.features = [...filteredData];
          layerObj.source.data = { ...parsedData };
        }
  
        layerObj.mergedData = filteredData;
        if (layerObj.aggregate && layerObj.aggregate.filter) {
          layerObj.filterOptions = generateFilterOptions(layerObj);
        }
  
        if (layerObj.aggregate && layerObj.aggregate.type) {
          layerObj.source.data = aggregateFormData(layerObj);
        }
        renderData(mapId, layerObj, dispatch, doUpdateTsLayer);
      });
    }
    if (fileType === 'geojson') {
      const path = typeof layerObj.source.data === 'string'
        ? layerObj.source.data
        : layerObj.source.data.url;
      loadJSON(path, (data) => {
        if (layerObj['data-parse']) {
          layerObj.source.data = {
            ...data,
            features: parseData(layerObj['data-parse'], data.features),
          };
        } else {
          layerObj.source.data = data;
        }
        if (layerObj.aggregate && layerObj.aggregate.type) {
          layerObj.source.data = aggregateFormData(layerObj);
        }
        if (layerObj.aggregate && layerObj.aggregate.filter) {
          layerObj.filterOptions = generateFilterOptions(layerObj);
        }
        renderData(mapId, layerObj, dispatch, doUpdateTsLayer);
      });
    }
    if (fileType === 'stringified-geojson') {
      if (layerObj['data-parse']) {
        layerObj.source.data = {
          ...(JSON.parse(sourceURL.data)),
          features: parseData(layerObj['data-parse'], (JSON.parse(sourceURL.data)).features),
        };
      } else {
        layerObj.source.data = JSON.parse(sourceURL.data);
      }
      if (layerObj.aggregate && layerObj.aggregate.type) {
        layerObj.source.data = aggregateFormData(layerObj);
      }
      if (layerObj.aggregate && layerObj.aggregate.filter) {
        layerObj.filterOptions = generateFilterOptions(layerObj);
      }
      renderData(mapId, layerObj, dispatch, doUpdateTsLayer);
    }
    if (fileType === 'superset') {
      const currentState = dispatch(getCurrentState());
      const config = {
        endpoint: 'slice',
        extraPath: sourceURL['slice-id'],
        base: currentState.APP && currentState.APP.supersetBase,
      };
  
      superset.api.doFetch(
        config, // fetch with config
        res => res,
      ) // pass in callback func to process response
        .then((data) => {
          const processedData = superset.processData(data);
          let parsedData;
          if (layerObj.source.type === 'geojson') {
            parsedData = csvToGEOjson(layerObj, processedData);
          } else {
            parsedData = [...processedData];
          }
  
          layerObj.source.data = Array.isArray(parsedData)
            ? [...parsedData]
            : { ...parsedData };
  
          if (layerObj.aggregate && layerObj.aggregate.type) {
            layerObj.source.data = aggregateFormData(layerObj);
          }
          if (layerObj.aggregate && layerObj.aggregate.filter) {
            layerObj.filterOptions = generateFilterOptions(layerObj);
          }
          return renderData(mapId, layerObj, dispatch, doUpdateTsLayer); // call renderData
        });
    }
  }