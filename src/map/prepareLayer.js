/* eslint-disable no-param-reassign */
import * as d3 from 'd3';
import Mustache from 'mustache';
import cloneDeep from 'lodash.clonedeep';
import superset from '@onaio/superset-connector';
import { hint } from '@mapbox/geojsonhint';
import csvToGEOjson from './csvToGEOjson';
import aggregateFormData from '../connectors/ona-api/aggregateFormData';
import getData from '../connectors/ona-api/data';
import { loadJSON, loadCSV } from '../utils/files';
import { generateFilterOptions, processFilters, generateFilterOptionsPrev } from '../utils/filters';
import { requestData, receiveData, getCurrentState } from '../store/actions/actions';
import parseData from './../utils/parseData';
import commaFormatting from './../utils/commaFormatting';
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
function renderData(mapId, layer, dispatch, doUpdateTsLayer) {
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
 * Loads layer data from CSV or GeoJSON source
 */
function readData(mapId, layer, dispatch, doUpdateTsLayer) {
  const layerObj = { ...layer };
  const sourceURL = layer.source.data;
  const fileType =
    typeof layer.source.data === 'string'
      ? sourceURL.split('.').pop()
      : typeof sourceURL === 'object' && sourceURL !== null && sourceURL.type;
  if (fileType === 'csv') {
    loadCSV(layerObj.source.data, data => {
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
    const path =
      typeof layerObj.source.data === 'string' ? layerObj.source.data : layerObj.source.data.url;
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
        ...JSON.parse(sourceURL.data),
        features: parseData(layerObj['data-parse'], JSON.parse(sourceURL.data).features),
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

    superset.api
      .doFetch(
        config, // fetch with config
        res => res
      ) // pass in callback func to process response
      .then(data => {
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

        layerObj.source.data = Array.isArray(parsedData) ? [...parsedData] : { ...parsedData };

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

/**
 * Loads layer data from multiple CSV or GeoJSON files
 * @param {*} layer
 * @param {*} dispatch
 */
function fetchMultipleSources(mapId, layer, dispatch) {
  const layerObj = { ...layer };
  const currentState = dispatch(getCurrentState());
  const { APP } = currentState;
  let q = d3.queue();

  const filePaths = layerObj.source.data;
  filePaths.forEach(filePath => {
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
      : Data.map(D => {
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

    let mergedData;

    if (isManyToOne) {
      mergedData = {};
    } else {
      mergedData = [].concat(...data);
    }

    // Filter base data for missing join properties
    const intialFilter = d => {
      if (!Array.isArray(join[isVectorLayer ? 1 : 0])) {
        return typeof d[join[isVectorLayer ? 1 : 0]] !== 'undefined';
      }
      for (let j = 0; j < join[isVectorLayer ? 1 : 0].length; j += 1) {
        if (typeof d[join[isVectorLayer ? 1 : 0][j]] !== 'undefined') {
          return true;
        }
      }
      return false;
    };

    if (Array.isArray(mergedData) && !layerObj['merge-locations']) {
      mergedData = mergedData.filter(d => d[layerObj.property] !== null).filter(intialFilter);
    } else if (Array.isArray(mergedData.features)) {
      mergedData.features = mergedData.features
        .filter(d => d[layerObj.property] !== undefined)
        .filter(intialFilter);
    }

    // Helper func for combining arrays of data
    function basicMerge(i, prevData, nextData) {
      // Helper func to check nextData datum for single or multiple join props
      const basicMergeFilter = d => {
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
          features: [
            ...prevData.features,
            ...(data[i].features || data[i]).filter(d => typeof d[join[i]] !== 'undefined'),
          ],
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
          prevData[datum[joinProp]][relation['many-prop'] || 'many'] = [];
          if (customFilter) {
            prevData[datum[joinProp]].no_of_reports = '0';
          }
        } else if (datum[joinProp] && prevData[datum[joinProp]]) {
          // Add non-unique "many" to corresponding "one"
          datum = { ...datum };
          prevData[datum[joinProp]][relation['many-prop'] || 'many'].push(datum);
          if (customFilter) {
            prevData[datum[joinProp]].no_of_reports = prevData[datum[joinProp]][
              relation['many-prop'] || 'many'
            ].length.toString();
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

      const prevDataMap = pd => {
        if (Array.isArray(join[j])) {
          for (let k = 0; k < join[j].length; k += 1) {
            pJoinProp = typeof pd[join[j][k]] !== 'undefined' ? join[j][k] : null;
            if (pJoinProp) break;
          }
        } else {
          pJoinProp = join[j];
        }
        return pd[pJoinProp] === datum[nJoinProp] ? { ...pd, ...datum } : pd;
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
    for (let i = isManyToOne ? 0 : 1; i < data.length; i += 1) {
      if (!relation) {
        mergedData = basicMerge(i, mergedData, data[i]);
      } else if (isManyToOne) {
        const hasCustomFilter = layerObj && layerObj.aggregate && layerObj.aggregate.hasCustomFilter;

        mergedData = manyToOneMerge(
          isVectorLayer ? i + 1 : i,
          mergedData,
          data[i],
          hasCustomFilter
        );
      } else if (isOneToMany) {
        mergedData = oneToManyMerge(isVectorLayer ? i + 1 : i, mergedData, data[i]);
      } else if (isOneToOne) {
        mergedData = oneToOneMerge(i, mergedData, data[i]);
      }
    }

    if (isManyToOne) {
      layerObj.joinedData = { ...mergedData };
      mergedData = Object.keys(mergedData).map(jd => ({
        ...layerObj.joinedData[jd],
      }));
      if (layerObj.property) {
        mergedData = mergedData.filter(d => d[layerObj.property]);
      }
      // .filter(jd => jd.reports.length);
    }

    // convert to geojson format if necessary
    if (layerObj.source.type === 'geojson' && !mergedData.features) {
      mergedData = csvToGEOjson(layerObj, mergedData);
    }
    layerObj.mergedData = Array.isArray(mergedData) ? [...mergedData] : { ...mergedData };

    if (layerObj.aggregate && layerObj.aggregate.filter) {
      layerObj.filterOptions = layerObj.aggregate.filterIsPrev
        ? generateFilterOptionsPrev(layerObj)
        : generateFilterOptions(layerObj);
    }
    layerObj.source.data =
      layerObj.aggregate && layerObj.aggregate.type
        ? aggregateFormData(layerObj, currentState.LOCATIONS, layerObj.filterOptions || false)
        : mergedData;
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
      layerObj.source.data !== null
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
    renderData(mapId, layerObj, dispatch, doUpdateTsLayer);
  }
}
