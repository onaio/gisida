import { getCurrentState } from '../store/actions/Actions';
import getLastIndex from '../utils/getLastIndex';

function getSliderLayers(layers) {
  const sliderIds = [];
  Object.keys(layers).forEach((key) => {
    sliderIds.push(key);
  });

  const sliderLayers = [];
  for (let i = 0; i < sliderIds.length; i += 1) {
    if ('aggregate' in layers[sliderIds[i]] &&
      'timeseries' in layers[sliderIds[i]].aggregate) {
      sliderLayers.push(sliderIds[i]);
    }
  }
  return sliderLayers;
}


export default function buildTimeseriesData(layer, Stops) {
  const layerObj = { ...layer };
  const timeSeriesLayers = this.getSliderLayers();
  const activeLayers = this.state.layers.map(layer => layer.title);
  const timeseriesMap = {};

  let layerId;
  let index;
  let temporalIndex;
  let data;
  let layerProperty;
  let periodData;
  let charts;

  let period;
  let colorStops;
  let radiusStops;
  let breaks;
  let colors;
  let stops = Stops;
  let strokeWidthStops;

  const chartDataFilter = d => d[stops.timefield] === period[temporalIndex];
  const periodHasDataReducer = (sum, d) => sum + Number(d[layerProperty]);
  const periodDataFilter = (p) => {
    // define actual period data
    periodData[p] = {
      data: layerObj.source.data.filter(d => d[layerObj.aggregate.timeseries.field] === p),
    };
    // determine if period data has any non-zero values
    periodData[p].hasData = !!(periodData[p].data.reduce(periodHasDataReducer, 0));
  };

  for (let i = 0; i < timeSeriesLayers.length; i += 1) {
    layerId = timeSeriesLayers[i];

    if (activeLayers.includes(layerId) && !this.state.timeseries[layerId]) {
      index = getLastIndex(activeLayers, layerId);
      charts = layerObj && !!layerObj.charts ? layerObj.charts : null;

      if (this.state && this.state.layers[index] && this.state.layers[index].visible === true &&
        layerObj.source.data instanceof Object && stops && layerObj.id === stops.id) {
        // Determine later stops
        if (layerObj.type === 'chart') {
          ({ period } = this.state.stops.period);
          colorStops = layerObj.source.data;
        } else {
          const paintStops = stops.stops;
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

        temporalIndex = period.length - 1;

        if (layerObj.type === 'chart') {
          data = stops.filter(chartDataFilter);
        } else if (layerObj.aggregate && layerObj.aggregate.timeseries) {
          // define period data for each period
          layerProperty = layerObj.property;
          periodData = {};
          period.forEach(periodDataFilter);

          ({ data } = periodData[period[temporalIndex]]);
        } else {
          ({ data } = layerObj.source);
        }
      }

      timeseriesMap[layerId] = {
        layerId,
        index,
        layerObj,
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
      };
    }
  }

  return timeseriesMap;
}
