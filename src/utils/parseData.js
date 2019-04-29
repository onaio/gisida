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
          : parsedDatum);
      }
    }
    return parsedData;
  }

  const unparsedDatum = JSON.stringify(datum);
  const datumProps = Object.keys(datum);
  let datumVal; // the value of the actual datum property
  let propSpec; // references the data parse spec object for the specific property
  let propVal; // the value in the propSpec { [datumVal]: propVal }
  let parseVal; // the value that is actually added to the parsedDatum object
  let otherVal; // the datum value of the 'other' property specified in the spec
  let splitPropVal; // a variable for splitting select-multiple datumVals

  // helper function to handle select-multiple values
  const parseSelectMultipleString = (itemProp, i, splitStr) => {
    if (itemProp === propSpec['other-prop']) {
      // if the prop in the array matches the defined 'other-prop', return value of 'other'
      return otherVal;
    }
    // if the spec has a key, check the the itemProp against it
    if (propSpec.key && propSpec.key[itemProp]) {
      let parseValMatch;

      // check for propSpec.split occurences in parsed value,
      // even if there is one prop value, put it into an array to handle multiple prop values
      const splitVal = typeof propSpec.key[itemProp] === 'string'
        ? [propSpec.key[itemProp].split((propSpec.split || ' '))]
        : propSpec.key[itemProp].map(dv => dv.split((propSpec.split || ' ')));

      for (let v = 0; v < splitVal.length; v += 1) {
        // if the prop value contains the value of propSpec.join,
        // compare against next n items in splitStr for matches
        if (splitVal[v].length > 1) {
          for (let s = 0; s < splitVal[v].length - (splitStr.length - 1); s += 1) {
            // there's a mismatch, stop checking n items and reset parseValMatch
            if (splitStr[i + s + 1]
              && (splitStr[i + s + 1]).toLowerCase() !== (splitVal[v][s + 1]).toLowerCase()) {
              parseValMatch = null;
              break;
            }
            // stash matching prop value
            parseValMatch = splitVal[v];
          }

          // splice n items from splitStr and return parsed value
          if (parseValMatch) {
            // eslint-disable-next-line no-param-reassign
            splitStr = splitStr.splice((i + 1), (splitVal[v].length - 1));
            return parseValMatch.join((propSpec.split || ' '));
          }
        // if prop val does not contain join value, check the key for the prop
        } else if (propSpec.key[splitVal[v]]) {
          return propSpec.key[splitVal[v]];
        }
      }

      // if above loop doesn't find match, return prop value
      return propSpec.key[itemProp];
    }
    // if all else fails, simply return the itemProp
    return itemProp;
  };

  // loop through all datum properties
  for (let p = 0; p < datumProps.length; p += 1) {
    datumVal = datum[datumProps[p]];
    propSpec = spec[datumProps[p]];
    propVal = propSpec && propSpec.key && propSpec.key[datumVal];

    // if property is doesn't require parsing,
    // or isn't multiple type and doesn't have the prop in the key,
    // add it to parsedDatum as is
    if (!propSpec || (propSpec.type !== 'multiple' && !propVal)) {
      parseVal = datumVal;
    } else if (datumVal !== null) {
      // define the value of 'other'
      otherVal = propSpec['other-prop'] && propSpec['other-val']
        ? datum[propSpec['other-val']]
        : false;

      // if property needs parsing and has a type, parse it accordingly
      if (propSpec.type === 'multiple') {
        // if select-multiple value is a string then split it
        // split it and loop through as an array (eg "1 3 6 2"),
        // otherwise it must already an array (eg [1, 3, 6, 2])
        splitPropVal = typeof datumVal === 'string'
          ? datumVal.split((propSpec.split || ' '))
          : datumVal;

        // loop through each value, checking for matches in propSpec.key and propSpec['other-prop']
        parseVal = splitPropVal.map(parseSelectMultipleString).filter(sp => typeof sp !== 'undefined');

        if (propSpec.join) parseVal = parseVal.join(propSpec.join).replace(/,,/g, ',');

      // if select-one value matches the 'other-prop', use otherVal
      } else if (otherVal && datumVal === propSpec['other-prop']) {
        parseVal = otherVal;
      } else {
        parseVal = propVal || datumVal;
      }
    } else {
      parseVal = null;
    }

    // assign the parsed value into the parsedDatum object
    if (propSpec && !propSpec.type && propSpec['new-prop-name']) {
      parsedDatum[datumProps[p]] = datum[datumProps[p]];
      parsedDatum[propSpec['new-prop-name']] = parseVal;
    } else {
      parsedDatum[datumProps[p]] = parseVal;
    }
  }
  parsedDatum.unparsedDatum = unparsedDatum;
  return { ...parsedDatum };
}
