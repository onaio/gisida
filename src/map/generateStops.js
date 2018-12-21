import colorbrewer from 'colorbrewer';
import { ckmeans } from 'simple-statistics';
import { getCurrentState } from '../store/actions/actions';

const defaultRadiusRange = [
  '3',
  '6',
  '9',
  '12',
  '15',
  '18',
  '21',
  '24',
  '27',
  '30',
];

const getColorBrewerColor = function getColorBrewerColor(c, numColors) {
  if (colorbrewer[c]) {
    return colorbrewer[c][numColors];
  }
  return c;
};
const getColor = function getColor(c, i) {
  if (c instanceof Array) {
    return c[i];
  }
  return c;
};

function getStops(layer, FILTER, timeseries, id, clusterLayer, nextIndex) {
  const {
    colors, periods, limit, radiusRange,
  } = layer;
  const clusters = clusterLayer && clusterLayer.stops && nextIndex ?
    [...new Set(clusterLayer.stops[nextIndex]
      .map(d => d[1]))].length : layer.clusters;
  const colorsStops = [];
  const radiusStops = [];
  let breaks = [];
  const radius = radiusRange || defaultRadiusRange;

  // Sort data based on data value
  const list = layer.data.map((x, i) => ({
    data: x,
    osmIDs: layer.osmIDs[i],
    periods: periods[i],
  }), this);
  list.sort((a, b) => {
    if (a.data < b.data) {
      return -1;
    }
    if (a.data === b.data) {
      return 0;
    }
    return 1;
  });
  const sortedData = list.map(items => items.data);
  const osmID = list.map(items => items.osmIDs);
  const period = list.map(items => items.periods);

  // Sort for limit limit || data based on osmIDs
  const dataList = layer.osmIDs.map((x, i) => ({
    osmIDs: x,
    data: layer.data[i],
    periods: periods[i],
  }), this);
  dataList.sort((a, b) => {
    if (a.data < b.data) {
      return -1;
    }
    if (a.data === b.data) {
      return 0;
    }
    return 1;
  });
  const rangeData = dataList.map(l => l.data);
  const rangeID = dataList.map(l => l.osmIDs);
  const rangePeriod = dataList.map(l => l.periods);

  let ckmeansCluster = null;
  if (clusters && sortedData.length >= clusters) {
    ckmeansCluster = ckmeans(sortedData, clusters);
  } else if (clusters && sortedData.length < clusters) {
    ckmeansCluster = ckmeans(sortedData, sortedData.length);
  }
  const cluster = (Array.isArray(clusters) && clusters)
    || ckmeansCluster;

  breaks = (cluster && cluster.length && cluster.map(cl => cl[cl.length - 1])) || limit;
  const OSMIDsExist = (layer.osmIDs && layer.osmIDs.length !== 0);
  const data = limit ? rangeData : sortedData;
  const osmIDs = limit ? rangeID : osmID;
  const breakStops = [];

  // Assign colors and radius to osmId or data value
  for (let k = 0; k < data.length; k += 1) {
    for (let i = 0; i < breaks.length; i += 1) {
      if (data[k] <= breaks[i]) {
        // Check for repeating stop domains
        const stopValue = OSMIDsExist ? osmIDs[k] : data[k];
        colorsStops.push([stopValue, getColor(colors, i)]);
        radiusStops.push([stopValue, (Number(radius[i]))]);
        breakStops.push(breaks[i]);
        break;
      }
    }
  }

  if (periods) {
    const uniqPeriods = [...new Set(periods)];
    const periodStops = [];
    const periodRadius = [];
    const periodStroke = [];
    const periodBreaks = [];
    for (let j = 0; j < uniqPeriods.length; j += 1) {
      periodStops[j] = [];
      periodRadius[j] = [];
      periodStroke[j] = [];
      periodBreaks[j] = [];
    }
    const periodProp = limit ? rangePeriod : period;
    for (let m = 0; m < periodProp.length; m += 1) {
      for (let n = 0; n < uniqPeriods.length; n += 1) {
        if (periodProp[m] === uniqPeriods[n]) {
          periodStops[n].push(colorsStops[m]);
          periodRadius[n].push(radiusStops[m]);
          periodStroke[n].push([radiusStops[m][0], 1]);
          periodBreaks[n].push(breakStops[m]);
        }
      }
    }
    return [periodStops, periodRadius, uniqPeriods, breaks, colors, periodStroke,
      periodBreaks];
  }
  return [];
}

export default function (layer, timefield, dispatch, nextIndex) {
  const { FILTER } = dispatch(getCurrentState());
  const { id } = layer.id ? layer : layer.layerObj;
  // const { timeseries } = layer.aggregate ? layer.aggregate : layer.layerObj.aggregate;
  const timeseries = undefined;
  const data = [];
  const osmIDs = [];
  const periods = [];
  const stops = layer['unfiltered-stops'] || (layer.layerObj && layer.layerObj['unfiltered-stops']);
  const { categories } = layer.categories ? layer : layer.layerObj;
  const { clusters } = categories;
  const limit = (stops && stops[3]) || categories.limit;
  const color = layer.categories ? layer.categories.color : layer.layerObj.categories.color;
  const colors = (stops && stops[4])
    || getColorBrewerColor(color, clusters)
    || color;
  const rows = layer.data || layer.source.data.features || layer.source.data;
  const sortedData = [...rows];
  // if (layer.aggregate && layer.aggregate.timeseries) {
  //   sortedData = rows.sort((a, b) => {
  //     if (a.date) {
  //       return Date.parse(a.date) - Date.parse(b.date);
  //     }
  //     if (a[0] < b[0]) return -1;
  //     if (a[0] > b[0]) return 1;
  //     if (a[1] < b[1]) return -1;
  //     if (a[1] > b[1]) return 1;
  //     if (a[2] < b[2]) return -1;
  //     if (a[2] > b[2]) return 1;
  //     return 0;
  //   })
  // } else {
  //   sortedData = [...rows];
  // }
  const isGeoJSON = (layer.source && layer.source.data.features)
  || (layer.layerObj && layer.layerObj.source && layer.layerObj.source.data.features);

  // if (isGeoJSON && layer.type === 'circle') {
  //   sortedData.sort((a, b) => a.properties[layer.property] - b.properties[layer.property]);
  // } else if (layer.type !== 'fill') {
  //   sortedData.sort((a, b) => a[layer.property] - b[layer.property]);
  // }

  const geoJSONWithOSMKey = (isGeoJSON &&
    ((layer && layer.source && layer.source.join &&
       layer.source.join[1]) ||
       (layer.layerObj && layer.layerObj.source.join[1])));

  const radiusRange = layer['radius-range'] ||
  (layer.layerObj && layer.layerObj['unfiltered-stops']);

  const groupByProp = (layer.aggregate && layer.aggregate['group-by']) ||
    (layer.layerObj && layer.layerObj.aggregate && layer.layerObj.aggregate['group-by']);

  for (let i = 0; i < sortedData.length; i += 1) {
    if (isGeoJSON) {
      data.push(Number(sortedData[i].properties[(layer.property || layer.layerObj.property)]));
      periods.push(sortedData[i].properties[timefield] || null);
      if (geoJSONWithOSMKey) {
        osmIDs.push(sortedData[i].properties[(groupByProp || (layer.source.join[1] ||
          layer.layerObj.source.join[1]))]);
      }
    } else {
      periods.push(sortedData[i][timefield] || null);
      const propVal = sortedData[i][layer.property || layer.layerObj.property];
      if (Number.isNaN(Number(propVal))) {
        data.push(Number(propVal.split(',').join('')));
      } else {
        data.push(Number(propVal));
      }
      osmIDs.push(sortedData[i][(groupByProp || layer.source.join[1] ||
         layer.layerObj.source.join[1])]);
    }
  }
  return getStops({
    data, colors, osmIDs, periods, limit, clusters, radiusRange,
  }, FILTER, timeseries, id, layer, nextIndex);
}
