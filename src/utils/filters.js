export function processFilters(layerData, filterOptions) {
  let data = layerData.mergedData || layerData.source.data;
  const acceptedFilterValues = layerData.aggregate['accepted-filter-values'];
  const acceptedSubFilterValues = layerData.aggregate['accepted-sub-filter-values'];
  const filters = [];
  if (layerData.aggregate.filter && filterOptions) {
    // Get array of disabled filters
    Object.keys(filterOptions).forEach((opt) => {
      if (filterOptions[opt] === false) {
        filters.push(opt);
      }
    });
    // apply filters
    data = data.filter((datum) => {
      if (acceptedFilterValues && acceptedSubFilterValues && !acceptedSubFilterValues.includes(datum[layerData.aggregate['sub-filter']])) {
        // remove rows that should be filtered out, ignore rows with values from second filter field
        return !filters.includes(datum[layerData.aggregate.filter]);
      } else if (acceptedSubFilterValues && acceptedSubFilterValues.includes(datum[layerData.aggregate['sub-filter']])) {
        // remove rows that should be filtered out, ignore rows with values from first filter field
        return !filters.includes(datum[layerData.aggregate['sub-filter']]);
      } else if (!acceptedFilterValues && !acceptedSubFilterValues) {
        return !filters.includes(datum[layerData.aggregate.filter]);
      } return true;
    });
  }
  return data;
}

export function generateFilterOptionsPrev(layerData) {
  const data = layerData.mergedData || layerData.source.data;
  const acceptedFilterValues = layerData.aggregate['accepted-filter-values'];
  const acceptedSubFilterValues = layerData.aggregate['accepted-sub-filter-values'];
  const filters = [].concat(...[acceptedFilterValues, acceptedSubFilterValues]);
  debugger;
  return [...new Set(filters)];
}

export function generateFilterOptions(layerData) {
  let data = layerData.mergedData || layerData.source.data;
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
  for (let f = 0; f < layerData.aggregate.filter.length; f += 1) {
    // define filter, subFilter, and filter label
    filter = layerData.aggregate.filter[f];
    filterLabel = layerData.aggregate['filter-label'] && layerData.aggregate['filter-label'][f]
      && layerData.aggregate['filter-label'][f].length
      ? layerData.aggregate['filter-label'][f] : filter;

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
    for (let f = 0; f < layerData.aggregate.filter.length; f += 1) {
      filter = layerData.aggregate.filter[f];
      acceptedFilterValues = layerData.aggregate['accepted-filter-values']
        && layerData.aggregate['accepted-filter-values'][f];

      if (!!acceptedFilterValues && typeof acceptedFilterValues !== 'string') {
        if (acceptedFilterValues.indexOf(datum[filter]) === -1) {
          doPushDatum = false;
          break;
        }
      } else if (acceptedFilterValues === 'quant' && Number.isNaN(Number(datum[filter]))) {
        // check datum[filter] value against quantitative condition
        doPushDatum = false;
      }
    }

    // if datum passes all conditions
    if (doPushDatum) {
      for (let f = 0; f < layerData.aggregate.filter.length; f += 1) {
        filter = layerData.aggregate.filter[f];
        acceptedFilterValues = layerData.aggregate['accepted-filter-values']
          && layerData.aggregate['accepted-filter-values'][f];

        if (!filterOptions[filter].filterValues[datum[filter]]) {
          filterOptions[filter].filterValues[datum[filter]] = 0;
          if ((acceptedFilterValues === 'quant' ||
            (Array.isArray(acceptedFilterValues) && !Number.isNaN(Number(acceptedFilterValues[0]))))
            && !filterOptions[filter].quantitativeValues) {
            filterOptions[filter].quantitativeValues = [];
          }
        }
        filterOptions[filter].filterValues[datum[filter]] += 1;
        if ((acceptedFilterValues === 'quant'
            || (Array.isArray(acceptedFilterValues)
            && !Number.isNaN(Number(acceptedFilterValues[0]))))) {
          filterOptions[filter].quantitativeValues.push(datum[filter]);
        }
      }
    }
  }

  return filterOptions;
}

const months = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

export function filterDataByPeriod(layerData, periodField, period) {
  let periods = period ? [period] : layerData.map(datum => datum[periodField]);
  if (!period) periods = Array.from(new Set(periods));

  if (months.indexOf(periods[0]) !== false) {
    periods.sort((a, b) => months.indexOf(a) - months.indexOf(b));
  } else if (periods[0].indexOf('/') !== -1) {
    periods.sort((a, b) => Number(a.split('/')[1]) - Number(b.split('/')[1]));
  }

  const periodFilter = periods[periods.length - 1];

  return layerData.filter(datum => datum[periodField] === periodFilter);
}
