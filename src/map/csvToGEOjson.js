/**
 * Converts data parsed from D3.csv() into valid GEOjson shcema
* */

export default function csvToGEOjson(spec, data) {
  let { featureType } = spec.source;
  const features = [];
  let propertiesMap;
  let datum;
  let prop;
  const longProp = (spec['geo-columns'] && spec['geo-columns'][0]) || 'Longitude';
  const latProp = (spec['geo-columns'] && spec['geo-columns'][1]) || 'Latitude';

  for (let d = 0; d < data.length; d += 1) {
    datum = data[d];
    propertiesMap = spec.properties ? {} : Object.assign({}, datum);
    if (spec.properties) {
      for (let p = 0; p < spec.properties.length; p += 1) {
        prop = spec.properties[p];
        propertiesMap[prop] = Number.isNaN(datum[prop]) ? datum[prop] : Number(datum[prop]);
      }
    }

    features.push({
      type: 'Feature',
      properties: propertiesMap,
      geometry: {
        type: featureType,
        coordinates: [Number(datum[longProp]), Number(datum[latProp])],
      },
    });
  }

  return {
    type: 'FeatureCollection',
    features,
  };
}
