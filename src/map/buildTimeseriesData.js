import getLastIndex from '../utils/getLastIndex';

export default function buildTimeseriesData(
  layer,
  Stops,
  timeSeriesLayers,
  timeseries,
  loadedlayers,
  doUpdateTsLayer,
) {
  const layerObj = { ...layer };
  const activeLayers = [];
  const layers = [];
  Object.keys(loadedlayers).forEach((key) => {
    if (loadedlayers[key].visible) {
      activeLayers.push(loadedlayers[key].id);
      layers.push(loadedlayers[key]);
    }
  });
  const timeseriesMap = {};
  let layerId;
  let index;
  let temporalIndex;
  let data;
  let layerProperty;
  let periodData;
  let charts;
  let datum;

  let period;
  let colorStops;
  let radiusStops;
  let breaks;
  let colors;
  let { stops } = Stops;
  let strokeWidthStops;
  let adminFilter;
  let tsFilter;
  const periodHasDataReducer = (sum, d) => sum + Number((d.properties || d)[layerProperty]);
  const periodDataFilter = (p) => {
    // define actual period data
    periodData[p] = {
      data: (layerObj.source.data.features || layerObj.source.data)
        .filter(d => (d.properties || d)[layerObj.aggregate.timeseries.field] === p),
    };
    // determine if period data has any non-zero values
    periodData[p].hasData =
     layerObj.aggregate.timeseries.showAllZeroPeriods ||
      !!periodData[p].data.reduce(periodHasDataReducer, 0);
    // define admin timeseries filter
    if (layerObj.aggregate.timeseries.admin) {
      periodData[p].adminFilter = ['all', ['<=', 'startYear', Number(p)], ['>', 'endYear', Number(p)]];
    } else if (layerObj.aggregate.timeseries.periodFilter) {
      periodData[p].tsFilter = [
        'all',
        ['==', layerObj.aggregate.timeseries.field, p],
      ];
    }
  };

  for (let i = 0; i < timeSeriesLayers.length; i += 1) {
    layerId = timeSeriesLayers[i];
    if (layerObj.id === layerId && !layerObj.layers && activeLayers.includes(layerId)
      && (!timeseries[layerId] || doUpdateTsLayer)) {
      index = getLastIndex(activeLayers, layerId);
      charts = layerObj && !!layerObj.charts ? layerObj.charts : null;
      if (layers[index] && layers[index].visible === true &&
        layerObj.source.data instanceof Object) {
        // Determine layer stops
        if (stops && layerObj.id === Stops.id) {
          if (layerObj.type === 'chart') {
            ({ 2: period } = stops);
            colorStops = layerObj.source.data;
          } else {
            const paintStops = stops;
            const [first, second, third, fourth, fifth, sixth] = paintStops;
            // referenced from http://www.deadcoderising.com/2017-03-28-es6-destructuring-an-elegant-way-of-extracting-data-from-arrays-and-objects-in-javascript/
            colorStops = first;
            radiusStops = second;
            period = third;
            breaks = fourth;
            colors = fifth;
            strokeWidthStops = sixth;
            stops = layerObj.type === 'circle' ? radiusStops : colorStops;
          }
        } else if (layerObj.aggregate && layerObj.aggregate.timeseries) {
          // if no stops, get periods from data
          period = [];
          data = layerObj.source.data.features || layerObj.source.data;
          for (let d = 0; d < data.length; d += 1) {
            datum = (data[d].properties
              && data[d].properties[layerObj.aggregate.timeseries.field])
              || data[d][layerObj.aggregate.timeseries.field];

            if (period.indexOf(datum) === -1) {
              period.push(datum);
            }
          }
        }

        if (!period.length) {
          continue;
        }

        temporalIndex = period.length - 1;

        if (layerObj.aggregate && layerObj.aggregate.timeseries) {
          // define period data for each period
          layerProperty = layerObj.property || (layerObj.source.join && layerObj.source.join[0]);
          periodData = {};
          period.forEach(periodDataFilter);

          ({ data, adminFilter, tsFilter } = periodData[period[temporalIndex]]);
        } else {
          ({ data } = layerObj.source);
        }
      }

      timeseriesMap[layerId] = {
        layerId,
        index,
        layerObj,
        categories: { ...(layerObj && layerObj.categories) },
        temporalIndex,
        data,
        charts,
        periodData,
        colors,
        colorStops,
        radiusStops,
        period,
        breaks,
        strokeWidthStops,
        stops,
        layerProperty,
        adminFilter,
        tsFilter,
      };
    }
  }

  return timeseriesMap;
}
