import * as d3 from 'd3';
import superset from '@onaio/superset-connector';
import csvToGEOjson from '../map/csvToGEOjson';
import aggregateFormData from '../connectors/ona-api/aggregateFormData';
import getData from '../connectors/ona-api/data';
import { generateFilterOptions } from '../utils/filters';
import {getCurrentState } from '../store/actions/actions';
import parseData from './../utils/parseData';
import { renderData } from '../map/prepareLayer';

/**
 * Loads layer data from multiple CSV or GeoJSON files
 * @param {*} layer
 * @param {*} dispatch
 */
export default function fetchMultipleSources(mapId, layer, dispatch) {
    const layerObj = { ...layer };
    const currentState = dispatch(getCurrentState());
    const { APP } = currentState;
    let q = d3.queue();
  
    const filePaths = layerObj.source.data;
    filePaths.forEach((filePath) => {
      if (Number.isInteger(filePath)) {
        q = q.defer(getData, filePath, layerObj.properties, APP);
      } else if (typeof filePath === 'object' && filePath !== null && filePath.type) {
        // add in SUPERSET.API promise to q.defer
        switch (filePath.type) {
          case 'superset': {
            const config = {
              endpoint: 'slice',
              extraPath: filePath['slice-id'],
              base: APP.supersetBase,
            };
            q.defer(superset.api.deferedFetch, config, superset.processData);
            break;
          }
          case 'csv': {
            q.defer(d3.csv, filePath.url);
            break;
          }
          case 'json':
          case 'geojson': {
            q.defer(d3.json, filePath.url);
            break;
          }
          default: {
            break;
          }
        }
      } else if (typeof filePath === 'string') q = q.defer(d3.csv, filePath);
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
      const isOneToMany = relation && relation.type === 'one-to-many';
      const isOneToOne = relation && relation.type === 'one-to-one';
      const isVectorLayer = type === 'vector';
  
      let mergedData = isManyToOne
        ? {}
        : [].concat(...data);
  
      // Filter base data for missing join properties
      const intialFilter = (d) => {
        if (!Array.isArray(join[(isVectorLayer ? 1 : 0)])) {
          return typeof d[join[(isVectorLayer ? 1 : 0)]] !== 'undefined';
        }
        for (let j = 0; j < join[(isVectorLayer ? 1 : 0)].length; j += 1) {
          if (typeof d[join[(isVectorLayer ? 1 : 0)][j]] !== 'undefined') return true;
        }
        return false;
      };
  
      if (Array.isArray(mergedData) && !layerObj['merge-locations']) {
        mergedData = mergedData.filter(d =>
          d[layerObj.property] !== null).filter(intialFilter);
      } else if (Array.isArray(mergedData.features)) {
        mergedData.features = mergedData.features.filter(d =>
          d[layerObj.property] !== undefined).filter(intialFilter);
      }
  
      // Helper func for combining arrays of data
      function basicMerge(i, prevData, nextData) {
        // Helper func to check nextData datum for single or multiple join props
        const basicMergeFilter = (d) => {
          if (!Array.isArray(join[i])) return typeof d[join[i]] !== 'undefined';
          for (let j = 0; j < join[i].length; j += 1) {
            if (typeof d[join[i][j]] !== 'undefined') return true;
          }
          return false;
        };
  
        if (!nextData || typeof nextData === 'string') {
          return { ...prevData };
        } else if (Array.isArray(prevData) && Array.isArray(data[i])) {
          return [...prevData, ...data[i].filter(basicMergeFilter)];
        } else if (Array.isArray(prevData) && Array.isArray(data[i].features)) {
          return [...prevData, ...data[i].features.filter(basicMergeFilter)];
        } else if (prevData.features && Array.isArray(prevData.features)) {
          return {
            ...prevData,
            features: [...prevData.features, ...(data[i].features || data[i]).filter(d => typeof d[join[i]] !== 'undefined')],
          };
        }
        return { ...prevData };
      }
  
      // Helper func for joining "manys" to "ones"
      function manyToOneMerge(i, PrevData, NextData, customFilter) {
        const prevData = PrevData;
        const nextData = NextData.features || NextData;
        let datum;
        let joinProp;
        for (let d = 0; d < nextData.length; d += 1) {
          datum = nextData[d].properties || nextData[d];
          if (Array.isArray(join[i])) {
            for (let j = 0; j < join[i].length; j += 1) {
              joinProp = typeof datum[join[i][j]] !== 'undefined' ? join[i][j] : null;
              if (joinProp) break;
            }
          } else {
            joinProp = join[i];
          }
  
          if (relation.key[i] === 'one' && datum[joinProp] && prevData[datum[joinProp]]) {
            // Merge unique "one" properties from and datum onto prevData[oneId]
            prevData[datum[joinProp]] = {
              ...prevData[datum[joinProp]],
              ...datum,
            };
          } else if (relation.key[i] === 'one' && datum[joinProp]) {
            // Add unique "one"s to mergedData
            prevData[datum[joinProp]] = { ...datum };
            prevData[datum[joinProp]][(relation['many-prop'] || 'many')] = [];
            if (customFilter) {
              prevData[datum[joinProp]].no_of_reports = '0';
            }
          } else if (datum[joinProp] && prevData[datum[joinProp]]) {
            // Add non-unique "many" to corresponding "one"
            datum = { ...datum };
            prevData[datum[joinProp]][(relation['many-prop'] || 'many')].push(datum);
            if (customFilter) {
              prevData[datum[joinProp]].no_of_reports = prevData[datum[joinProp]][(relation['many-prop'] || 'many')].length.toString();
            }
          }
        }
        return { ...prevData };
      }
  
      // Helper func for joining "ones" to "manys"
      function oneToManyMerge(i, PrevData, NextData) {
        let prevData = PrevData;
        const nextData = NextData.features || NextData;
        const j = relation.key.indexOf('many'); // first instance of 'many'
        let datum;
        let pJoinProp;
        let nJoinProp;
  
        // todo - refactor oneToManyMerge for efficiency and flexibility
        // 1) loop through nextData once and build {map}
        // 2) map() through prevData once and reference {map}
        // 3) reorder everything up front to make sure that all manys exist before mapping ones
  
        const prevDataMap = (pd) => {
          if (Array.isArray(join[j])) {
            for (let k = 0; k < join[j].length; k += 1) {
              pJoinProp = typeof pd[join[j][k]] !== 'undefined' ? join[j][k] : null;
              if (pJoinProp) break;
            }
          } else {
            pJoinProp = join[j];
          }
          return (pd[pJoinProp] === datum[nJoinProp] ? { ...pd, ...datum } : pd);
        };
        // loop through all next data
        for (let d = 0; d < nextData.length; d += 1) {
          datum = nextData[d].properties || nextData[d];
          if (Array.isArray(join[i])) {
            for (let k = 0; k < join[i].length; k += 1) {
              nJoinProp = typeof datum[join[i][k]] !== 'undefined' ? join[i][k] : null;
              if (nJoinProp) break;
            }
          } else {
            nJoinProp = join[i];
          }
  
  
          // if nextData is another many, add it to the prev data array
          if (relation.key[i] === 'many' && datum[nJoinProp] && Array.isArray(prevData)) {
            prevData = [...prevData, ...(nextData.features || nextData)];
          // if nextData is one, map it to existing manys in prevData
          } else if (relation.key[i] === 'one' && datum[nJoinProp] && Array.isArray(prevData)) {
            prevData = j !== -1 ? prevData.map(prevDataMap) : prevData;
          }
        }
        return Array.isArray(prevData) ? [...prevData] : { ...prevData };
      }
  
      // Helper function to flatten multiple data sources
      function oneToOneMerge(i, PrevData, NextData) {
        const prevData = PrevData;
        const nextData = NextData.features || NextData;
        const mergeData = [];
        let prevDatum;
        let matchDatum;
        const findMatch = datum => datum[join[i]] === prevDatum[join[0]];
        // Loop through all previous datum
        for (let d = 0; d < prevData.length; d += 1) {
          prevDatum = prevData[d];
          matchDatum = nextData.find(findMatch);
          // merge datum if a match is found, push datum to mergeData
          if (matchDatum) {
            mergeData.push({
              ...prevDatum,
              ...matchDatum,
            });
          } else {
            mergeData.push({ ...prevDatum });
          }
        }
        return mergeData;
      }
  
  
      // loop through remaining data to basic join with merged data
      for (let i = (isManyToOne ? 0 : 1); i < data.length; i += 1) {
        if (!relation) {
          mergedData = basicMerge(i, mergedData, data[i]);
        } else if (isManyToOne) {
          const hasCustomFilter = layerObj.aggregate && layerObj.aggregate.hasCustomFilter;
  
          mergedData = manyToOneMerge(
            (isVectorLayer ? i + 1 : i),
            mergedData,
            data[i],
            hasCustomFilter,
          );
        } else if (isOneToMany) {
          mergedData = oneToManyMerge((isVectorLayer ? i + 1 : i), mergedData, data[i]);
        } else if (isOneToOne) {
          mergedData = oneToOneMerge(i, mergedData, data[i]);
        }
      }
  
      if (isManyToOne) {
        layerObj.joinedData = { ...mergedData };
        mergedData = Object.keys(mergedData).map(jd => ({ ...layerObj.joinedData[jd] }));
        if (layerObj.property) {
          mergedData = mergedData.filter(d => d[layerObj.property]);
        }
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
      layerObj.source.data = layerObj.aggregate && layerObj.aggregate.type ?
        aggregateFormData(layerObj, currentState.LOCATIONS).filter(d =>
          d[layerObj.property]) : mergedData;
  
      layerObj.loaded = true;
      renderData(mapId, layerObj, dispatch);
    });
  }