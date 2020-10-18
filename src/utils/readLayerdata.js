import superset from '@onaio/superset-connector';
import { hint } from '@mapbox/geojsonhint';
import csvToGEOjson from '../map/csvToGEOjson';
import aggregateFormData from '../connectors/ona-api/aggregateFormData';
import { loadJSON, loadCSV } from '../utils/files';
import { generateFilterOptions, generateFilterOptionsPrev } from '../utils/filters';
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
      loadCSV(layerObj.source.data, data => {
        if (!data) return;
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
          if (layerObj.layers) {
            const currentState = dispatch(getCurrentState());
            layerObj.layers.forEach(sublayer => {
              const subLayer = currentState.MAP.layers[sublayer];
              subLayer.filterOptions = generateFilterOptions(subLayer);
            });
          }
          layerObj.filterOptions = layerObj.aggregate.filterIsPrev
          ? generateFilterOptionsPrev(layerObj)
          : generateFilterOptions(layerObj);
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
      loadJSON(path, data => {
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
      const geojsonErrors = hint(sourceURL.data).filter(e => e.level !== 'message');

      if (!geojsonErrors || !geojsonErrors.length) {
        renderData(mapId, layerObj, dispatch, doUpdateTsLayer);
      } else {
        /** Todo:Add growl notifications */
        // eslint-disable-next-line no-console
        console.warn('geojson hint errors', geojsonErrors);
      }
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
          let processedData = superset.processData(data);
          let parsedData;
          if (layerObj['data-parse']) {
            processedData = parseData(layerObj['data-parse'], processedData);
          }
            /**
           * Build custom filter
           * The custom filter introduces an extra field 'no_of_reports'.
           * we depend on the field building the quant chart on the filter
           */
          if (layerObj && layerObj.aggregate && layerObj.aggregate.hasCustomFilter) {
            const uniqueFacilities = [
              ...new Set(processedData.map(facility => facility.facility_id)),
            ];
            const reportsPerFacility = {};
            uniqueFacilities.forEach(facility => {
              reportsPerFacility[facility] = processedData
                .filter(facilityData => facilityData.facility_id === facility)
                .map(d => d.reporting_period);
            });
            processedData.forEach(pdata => {
              if (
                reportsPerFacility[pdata.facility_id] &&
                reportsPerFacility[pdata.facility_id].length
              ) {
                pdata.no_of_reports = reportsPerFacility[pdata.facility_id].length;
              } else {
                pdata.no_of_reports = '0';
              }
            });
          }
          if (layerObj.source.type === 'geojson') {
            parsedData = csvToGEOjson(layerObj, processedData);
            if (layerObj.hideZeroVals) {
              parsedData = {
                type: 'FeatureCollection',
                features: parsedData.features.filter(d => d.properties[layerObj.property] !== 0),
              };
            }
          } else {
            parsedData = [...processedData];
          }
  
          layerObj.source.data = Array.isArray(parsedData)
            ? [...parsedData]
            : { ...parsedData };
          layerObj.mergedData = layerObj.source.data;
          if (layerObj.aggregate && layerObj.aggregate.type) {
            layerObj.source.data = aggregateFormData(layerObj, currentState.LOCATIONS);
          }
          if (layerObj.aggregate && layerObj.aggregate.filter) {
            layerObj.filterOptions = generateFilterOptions(layerObj);
          }
          return renderData(mapId, layerObj, dispatch, doUpdateTsLayer); // call renderData
        });
    }
  }