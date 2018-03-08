/**
 * Uses the mapspec to clean up and parse data values
 * @param ({}) spec - this is the layerObj['data-parse'] object
 * @param ([]) datum - arrays are looped through one level of recursion
 * @param ({}) datum - objects are treated as actual datum to be parsed
* */

export default function parseData(spec, datum) {
  if (!datum || !spec) return null;
  let parsedDatum = {};

  // if datum is an array, recursively loop through it
  if (Array.isArray(datum)) {
    const parsedData = [];
    for (let d = 0; d < datum.length; d += 1) {
      parsedDatum = parseData(spec, datum[d].properties || datum[d]);
      if (parsedDatum && Object.keys(parsedDatum).length) {
        parsedData.push(datum[d].properties
          ? { ...datum[d], properties: parsedDatum }
          : parsedDatum
        );
      }
    }
    return parsedData;
  }

  const datumProps = Object.keys(datum);
  let prop;
  let propVal;
  let otherVal;
  let multipleVals;

  // helper function to handle select-multiple values
  const parseSelectMultipleString = (itemProp, i, splitStr) => {
    if (itemProp === spec[prop]['other-prop']) {
      // if the prop in the array matches the defined 'other-prop', return value of 'other'
      return otherVal;
    }
    // if the spec has a key, check the the itemProp against it
    if (spec[prop].key && spec[prop].key[itemProp]) {
      // check for spec[prop].split occurences in parsed value
      let splitVal = spec[prop].key[itemProp].split((spec[prop].split || ' '));
      if (splitVal.length > 1) {
        // compare against next n items in splitStr for matches
        for (let s = 0; s < splitVal.length - (splitStr.length - 1); s += 1) {
          if ((splitStr[i + s + 1]).toLowerCase() !== (splitVal[s + 1]).toLowerCase()) return itemProp;
        }
        // splice n items from splitStr and return parsed value
        splitStr = splitStr.splice((i + 1), (splitVal.length - 1));
      }
      return spec[prop].key[itemProp];
    }
    // if all else fails, simply return the itemProp
    return itemProp;
  };

  // loop through all datum properties
  for (let p = 0; p < datumProps.length; p += 1) {
    prop = datumProps[p];
    // if property is doesn't require parsing,
    // or isn't multiple type and doesn't have the prop in the key,
    // add it to parsedDatum as is
    if (!spec[prop] || (spec[prop].type !== 'multiple' && !spexc[prop].key[datum[prop]])) {
      propVal = datum[prop];
    } else {
      propVal = spec[prop].key[datum[prop]];

      // define the value of 'other'
      otherVal = spec[prop]['other-prop'] && spec[prop]['other-val']
        ? datum[spec[prop]['other-val']]
        : false;

      // if property needs parsing and has a type, parse it accordingly
      if (spec[prop].type === 'multiple') {
        // if select-multiple value is a string then split it
        // split it and loop through as an array (eg "1 3 6 2")
        multipleVals = typeof datum[prop] === 'string'
          ? datum[prop].split((spec[prop].split || ' '))
          : spec[prop].key[datum[prop]];
        
        
        if (Array.isArray(spec[prop].key[datum[prop]])) {
          // handle multiple values per prop (eg - "unicef": ["unicef somalia", "unicef kenya"])
        } else if (Array.isArray(multipleVals)) {
          propVal = multipleVals.map(parseSelectMultipleString).filter(p => typeof p !== 'undefined');
        }

        if (Array.isArray(propVal) && spec[prop].join) propVal = propVal.join(spec[prop].join);

      // if select-one value matches the 'other-prop', use otherVal
      } else if (otherVal && datum[prop] === spec[prop]['other-prop']) {
        propVal = otherVal;
      }
    }

    parsedDatum[prop] = propVal;
  }

  parsedDatum['_originalDatum'] = { ...datum };
  return parsedDatum;
}
