export function processFilters(layerObj, filterOptions) {
  let data = layerObj.mergedData || layerObj.source.data;
  const acceptedFilterValues = layerObj.aggregate['accepted-filter-values'];
  const acceptedSubFilterValues = layerObj.aggregate['accepted-sub-filter-values'];
  const filters = [];
  if (layerObj.aggregate.filter && filterOptions) {
    // Get array of disabled filters
    Object.keys(filterOptions).forEach((opt) => {
      if (filterOptions[opt] === false) {
        filters.push(opt);
      }
    });
    // apply filters
    data = data.filter((datum) => {
      if (acceptedFilterValues && acceptedSubFilterValues && !acceptedSubFilterValues.includes(datum[layerObj.aggregate['sub-filter']])) {
        // remove rows that should be filtered out, ignore rows with values from second filter field
        return !filters.includes(datum[layerObj.aggregate.filter]);
      } else if (acceptedSubFilterValues && acceptedSubFilterValues.includes(datum[layerObj.aggregate['sub-filter']])) {
        // remove rows that should be filtered out, ignore rows with values from first filter field
        return !filters.includes(datum[layerObj.aggregate['sub-filter']]);
      } else if (!acceptedFilterValues && !acceptedSubFilterValues) {
        return !filters.includes(datum[layerObj.aggregate.filter]);
      } return true;
    });
  }
  return data;
}

export function generateFilterOptions(layer) {
  const layerObj = { ...layer };
  let data = layerObj.mergedData || layerObj.source.data;
  // if it's geojson data, set use features array
  if (data.type) {
    data = data.features;
  }
  const filterOptions = {};
  let filter;
  let filterLabel;
  let acceptedFilterValues;
  let d;
  let datum;

  // loop through all filters
  for (let f = 0; f < layerObj.aggregate.filter.length; f += 1) {
    // define filter, subFilter, and filter label
    filter = layerObj.aggregate.filter[f];
    filterLabel = layerObj.aggregate['filter-label'][f]
      && layerObj.aggregate['filter-label'][f].length
      ? layerObj.aggregate['filter-label'][f] : filter;

    // define unique filter and sub-filter values on filterOptions object
    filterOptions[filter] = {
      label: filterLabel,
      filterValues: {},
    };
  }

  let doPushDatum;
  for (d = 0; d < data.length; d += 1) {
    datum = data[d].geometry ? data[d].properties : data[d];
    doPushDatum = true;

    // loop through the fiters and see if datum passes filter requirements
    for (let f = 0; f < layerObj.aggregate.filter.length; f += 1) {
      filter = layerObj.aggregate.filter[f];
      acceptedFilterValues = layerObj.aggregate['accepted-filter-values']
        && layerObj.aggregate['accepted-filter-values'][f];

      if (!!acceptedFilterValues && typeof acceptedFilterValues !== 'string') {
        if (acceptedFilterValues.indexOf(datum[filter]) === -1) {
          doPushDatum = false;
          break;
        }
      } else if (acceptedFilterValues === 'quant' && isNaN(datum[filter]) ) {
        // check datum[filter] value against quantitative condition
        doPushDatum = false;
      }
    }

    // if datum passes all conditions
    if (doPushDatum) {
      // loop through all filters to add datum to filter/quant values
      for (let f = 0; f < layerObj.aggregate.filter.length; f += 1) {
        filter = layerObj.aggregate.filter[f];
        acceptedFilterValues = layerObj.aggregate['accepted-filter-values']
          && layerObj.aggregate['accepted-filter-values'][f];

        if (!filterOptions[filter].filterValues[datum[filter]]) {
          filterOptions[filter].filterValues[datum[filter]] = 0;
          if ((acceptedFilterValues === 'quant'
            || Array.isArray(acceptedFilterValues) && !isNaN(acceptedFilterValues[0]))
            && !filterOptions[filter].quantitativeValues) {
            filterOptions[filter].quantitativeValues = [];
          }
        }
        filterOptions[filter].filterValues[datum[filter]] += 1;
        if ((acceptedFilterValues === 'quant'
            || Array.isArray(acceptedFilterValues) && !isNaN(acceptedFilterValues[0]))) {
          filterOptions[filter].quantitativeValues.push(datum[filter]);
        }
      }
    }
  }

  return filterOptions;
}
const months = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

export function filterDataByPeriod(layerObj, periodField, period) {
  let periods = period ? [period] : layerObj.map(datum => datum[periodField]);
  if (!period) periods = Array.from(new Set(periods));

  if (months.indexOf(periods[0]) !== false) {
    periods.sort((a, b) => months.indexOf(a) - months.indexOf(b));
  } else if (periods[0].indexOf('/') !== -1) {
    periods.sort((a, b) => Number(a.split('/')[1]) - Number(b.split('/')[1]));
  }

  const periodFilter = periods[periods.length - 1];

  return layerObj.filter(datum => datum[periodField] === periodFilter);
}
