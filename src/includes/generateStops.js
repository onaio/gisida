import colorbrewer from 'colorbrewer';
import ss from 'simple-statistics';

const radius = [
  '3',
  '6',
  '9',
  '12',
  '15',
  '18',
  '21',
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

function getStops(layer) {
  const colorsStops = [];
  const radiusStops = [];
  let breaks = [];

  // Sort data based on data value
  const list = layer.data.map((x, i) => ({
    data: x,
    osmIDs: layer.osmIDs[i],
    periods: layer.periods[i],
  }), this);
  list.sort((a, b) => ((a.data < b.data)
    ? -1
    : ((a.data === b.data)
      ? 0
      : 1)));
  const sortedData = list.map(items => items.data);
  const osmID = list.map(items => items.osmIDs);
  const period = list.map(items => items.periods);

  // Sort for limit data based on osmIDs
  const dataList = layer.osmIDs.map((x, i) => ({
    osmIDs: x,
    data: layer.data[i],
    periods: layer.periods[i],
  }), this);
  dataList.sort((a, b) => ((a.osmIDs < b.osmIDs)
    ? -1
    : ((a.osmIDs === b.osmIDs)
      ? 0
      : 1)));
  const rangeData = dataList.map(l => l.data);
  const rangeID = dataList.map(l => l.osmIDs);
  const rangePeriod = dataList.map(l => l.periods);

  // Split the data into nClusters
  const cluster = layer.clusters ? ss.ckmeans(sortedData, layer.clusters) : null;
  breaks = layer.limit ? layer.limit : cluster.map(cl => cl[cl.length - 1]);
  const OSMIDsExist = (layer.osmIDs && layer.osmIDs.length !== 0);
  const data = layer.limit ? rangeData : sortedData;
  const osmIDs = layer.limit ? rangeID : osmID;

  // Assign colors and radius to osmId or data value
  for (let k = 0; k < data.length; k += 1) {
    for (let i = 0; i < breaks.length; i += 1) {
      if (data[k] <= breaks[i]) {
        colorsStops.push([OSMIDsExist ? osmIDs[k] : data[k], getColor(layer.colors, i)]);
        if (!OSMIDsExist) {
          radiusStops.push([data[k], (Number(radius[i]))]);
        } else {
          radiusStops.push([osmIDs[k], (Number(radius[i]))]);
        }
        break;
      }
    }
  }

  if (layer.periods) {
    const uniqPeriods = [...new Set(layer.periods)];
    const periodStops = [];
    const periodRadius = [];
    for (let j = 0; j < uniqPeriods.length; j += 1) {
      periodStops[j] = [];
      periodRadius[j] = [];
    }
    const periodProp = layer.limit ? rangePeriod : period;
    for (let m = 0; m < periodProp.length; m += 1) {
      for (let n = 0; n < uniqPeriods.length; n += 1) {
        if (periodProp[m] === uniqPeriods[n]) {
          periodStops[n].push(colorsStops[m]);
          periodRadius[n].push(radiusStops[m]);
        }
      }
    }
    return [periodStops, periodRadius, uniqPeriods, breaks, layer.colors];
  }
  return [];
}

export default function (layer, timefield) {
  const data = [];
  const osmIDs = [];
  const periods = [];
  const clusters = layer.categories.clusters;
  const colors = getColorBrewerColor(layer.categories.color, clusters) || layer.categories.color;
  const rows = layer.source.data.features || layer.source.data;
  const isGeoJSON = layer.source.data.features;
  const geoJSONWithOSMKey = (isGeoJSON && layer.source.join[1]);
  const limit = layer.categories.limit;

  for (let i = 0; i < rows.length; i += 1) {
    if (isGeoJSON) {
      data.push(Number(rows[i].properties[layer.property]));
      if (geoJSONWithOSMKey) {
        osmIDs.push(rows[i].properties[layer.source.join[1]]);
      }
    } else {
      periods.push(rows[i][timefield]);
      data.push(Number(rows[i][layer.property]));
      osmIDs.push(rows[i][layer.source.join[1]]);
    }
  }

  return getStops({ data, colors, osmIDs, periods, limit, clusters });
}
