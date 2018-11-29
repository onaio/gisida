export function processFilters(layerData, filterOptions) {
  const Data = (layerData.mergedData && (Array.isArray(layerData.mergedData)
    ? [...layerData.mergedData] : { ...layerData.mergedData }))
    || (layerData.source.data && (Array.isArray(layerData.source.data)
      ? [...layerData.source.data] : { ...layerData.source.data }));
  let data = (Data.features && [...Data.features]) || [...Data];

  const acceptedFilterValues = layerData.aggregate['accepted-filter-values'];
  const acceptedSubFilterValues = layerData.aggregate['accepted-sub-filter-values'];
  const filters = [];

  const combinedData = [];

  let datum;
  let f;
  function filterProcessor(d) {
    datum = (d.properties || d);
    if (typeof acceptedFilterValues[f] === 'string') {
      return datum[layerData.aggregate.filter[f]] === acceptedFilterValues[f];
    }
    return acceptedFilterValues[f].includes(datum[layerData.aggregate.filter[f]]);
  }

  if (layerData.aggregate.filter && filterOptions) {
    // Get array of disabled filters
    Object.keys(filterOptions).forEach((opt) => {
      if (filterOptions[opt] === false) {
        filters.push(opt);
      }
    });
    // apply filters
    data = (data.features || data).filter((d) => {
      datum = (d.properties || d);
      if (acceptedFilterValues && acceptedSubFilterValues
        && !acceptedSubFilterValues.includes(datum[layerData.aggregate['sub-filter']])) {
        // remove rows that should be filtered out, ignore rows with values from second filter field
        return !filters.includes(datum[layerData.aggregate.filter]);
      } else if (acceptedSubFilterValues
        && acceptedSubFilterValues.includes(datum[layerData.aggregate['sub-filter']])) {
        // remove rows that should be filtered out, ignore rows with values from first filter field
        return !filters.includes(datum[layerData.aggregate['sub-filter']]);
      } else if (!acceptedFilterValues && !acceptedSubFilterValues) {
        return !filters.includes(datum[layerData.aggregate.filter]);
      } return true;
    });
  } else if (layerData.aggregate.filter) {
    for (f = 0; f < layerData.aggregate.filter.length; f += 1) {
      if (acceptedFilterValues[f] !== 'all' && acceptedFilterValues[f] !== 'quant') {
        // if (acceptedFilterValues.filter(a => Array.isArray(a) && a.length).length > 1) {
        //   debugger;
        //   Data.filter(filterProcessor).map(d => combinedData.push(d));
        //   data = [...new Set([...combinedData])]; // achieve a distinct union
        // } else {
        //   data = data.filter(filterProcessor);
        // }
        data = data.filter(filterProcessor);
      } else if (acceptedFilterValues[f] === 'quant') {
        // TODO - ADD SUPPORT FOR QUANT FILTERS!
      }
    }
  }

  if (Array.isArray(Data)) {
    return data;
  }
  // handle geojson schema
  return {
    ...Data,
    features: data,
  };
}

// export function filterData(layerData) {

// }

export function generateFilterOptions(layerData) {
  let data = layerData.data || layerData.mergedData || layerData.source.data;
  // if it's geojson data, set use features array
  if (data.type) {
    data = data.features;
  }
  const filterOptions = {};
  let filter;
  let filterLabel;
  let acceptedFilterValues;
  let filterType;
  let d;
  let datum;

  const layerFilter = (layerData.layerObj
    && layerData.layerObj.aggregate
    && layerData.layerObj.aggregate.filter)
    || layerData.aggregate.filter;

  // loop through all filters
  for (let f = 0; f < layerFilter.length; f += 1) {
    // define filter, subFilter, and filter label
    filter = layerFilter[f];
    filterLabel = ((layerData.layerObj && layerData.layerObj.aggregate) || layerData.aggregate)['filter-label']
      && ((layerData.layerObj && layerData.layerObj.aggregate) || layerData.aggregate)['filter-label'][f]
      && ((layerData.layerObj && layerData.layerObj.aggregate) || layerData.aggregate)['filter-label'][f].length
      ? ((layerData.layerObj && layerData.layerObj.aggregate) || layerData.aggregate)['filter-label'][f] : filter;

    // define which type of filter it should be (vector or stops, default to vector)
    filterType = ((layerData.layerObj && layerData.layerObj.aggregate) || layerData.aggregate)['filter-type']
      && ((layerData.layerObj && layerData.layerObj.aggregate) || layerData.aggregate)['filter-type'][f]
      && ((layerData.layerObj && layerData.layerObj.aggregate) || layerData.aggregate)['filter-type'][f].length
      ? ((layerData.layerObj && layerData.layerObj.aggregate) || layerData.aggregate)['filter-type'][f] : 'vector';

    // define unique filter and sub-filter values on filterOptions object
    filterOptions[filter] = {
      label: filterLabel,
      type: filterType,
      filterValues: {},
    };
  }

  let doPushDatum;
  for (d = 0; d < data.length; d += 1) {
    datum = data[d].geometry ? data[d].properties : data[d];
    doPushDatum = true;

    // loop through the fiters and see if datum passes filter requirements
    for (let f = 0; f < layerFilter.length; f += 1) {
      filter = layerFilter[f];
      acceptedFilterValues = ((layerData.layerObj && layerData.layerObj.aggregate)
        || layerData.aggregate)['accepted-filter-values']
        && ((layerData.layerObj && layerData.layerObj.aggregate) || layerData.aggregate)['accepted-filter-values'][f];

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
      for (let f = 0; f < layerFilter.length; f += 1) {
        filter = layerFilter[f];
        acceptedFilterValues = ((layerData.layerObj && layerData.layerObj.aggregate)
          || layerData.aggregate)['accepted-filter-values']
          && ((layerData.layerObj && layerData.layerObj.aggregate) || layerData.aggregate)['accepted-filter-values'][f];

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
