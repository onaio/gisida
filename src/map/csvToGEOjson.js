import parseData from './../utils/parseData';

/**
 * Converts data parsed from D3.csv() into valid GEOjson shcema
* */

export default function csvToGEOjson(spec, data) {
  const { featureType } = spec.source;
  const features = [];
  let properties;
  let datum;
  let prop;
  const gpsProp = spec['geo-column'];
  const longProp = (spec['geo-columns'] && spec['geo-columns'][0]) || 'Longitude';
  const latProp = (spec['geo-columns'] && spec['geo-columns'][1]) || 'Latitude';
  const parseSpec = spec['data-parse'];

  for (let d = 0; d < data.length; d += 1) {
    datum = data[d];
    properties = spec.properties ? {} : Object.assign({}, datum);
    if (spec.properties) {
      for (let p = 0; p < spec.properties.length; p += 1) {
        prop = spec.properties[p];
        properties[prop] = Number.isNaN(Number(datum[prop])) ? datum[prop] : Number(datum[prop]);
      }
    }

    if (gpsProp && datum[gpsProp] && Array.isArray(datum[gpsProp])) {
      properties[longProp] = properties[longProp] || datum[gpsProp][1];
      properties[latProp] = properties[latProp] || datum[gpsProp][0];
    }

    if (parseSpec) {
      properties = parseData(parseSpec, properties);
    }

    features.push({
      type: 'Feature',
      properties,
      geometry: {
        type: featureType,
        coordinates: gpsProp && datum[gpsProp] && Array.isArray(datum[gpsProp])
          ? [datum[gpsProp][1], datum[gpsProp][0]]
          : [Number(datum[longProp]), Number(datum[latProp])],
      },
    });
  }

  return {
    type: 'FeatureCollection',
    features,
  };
}
