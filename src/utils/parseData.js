export default function parseData(spec, datum) {
  if (!datum || !spec) return null;
  let parsedDatum = {};

  // if datum is an array, recursively loop through it
  if (Array.isArray(datum)) {
    const parsedData = [];
    for (let d = 0; d < datum.length; d += 1) {
      parsedDatum = parseData(datum[d], spec);
      if (parsedDatum && Object.keys(parsedDatum).length) parsedData.push(parsedDatum);
    }
    return parsedData;
  }

  const datumProps = Object.keys(datum);
  let prop;

  // loop through all datum properties
  for (let p = 0; p < datumProps.length; p += 1) {
    prop = datumProps[p];
    // if property is doesn't requier parsing, add it to parsedDatum as is
    if (!spec[prop] || !spec[prop].key) {
      parsedDatum[prop] = datum[prop];

    // if property needs parsing but doesn't have a type, apply default parsing
    } else if (!spec[prop].type) {
      parsedDatum[prop] = spec[prop].key[datum[prop]]
        ? spec[prop].key[datum[prop]] // if datum value is in the key as a prop, use it's key value
        : datum[prop]; // if datum value is not on the key as a prop, don't parse it

    // if property needs parsing and has a type, parse it accordingly (used for ONA data selects)
    } else {
      // const { type } = spec[prop];
      // todo - handle type specific parsing
    }
  }

  parsedDatum['_originalDatum'] = { ...datum };
  return parsedDatum;
}
