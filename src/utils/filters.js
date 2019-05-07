export function processFilters(layerData, filterOptions, isOr) {
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
    return acceptedFilterValues[f].toString().includes(datum[layerData.aggregate.filter[f]]);
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
      if (acceptedFilterValues[f] !== 'all' && acceptedFilterValues[f] !== 'quant' && acceptedFilterValues[f] !== 'multi') {
        if (acceptedFilterValues.filter(a => Array.isArray(a) && a.length).length > 1 && isOr) {
          (Data.features || Data).filter(filterProcessor).map(d => combinedData.push(d));
        } else {
          data = data.filter(filterProcessor);
        }
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

  const multiFilterVaulesMap = k => layerData['data-parse'][filter].key[k];

  let doPushDatum;
  let filterIsMultiSelect = false;
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
      // loop through the fiters to add to counts of passing data
      for (let f = 0; f < layerFilter.length; f += 1) {
        filter = layerFilter[f];
        acceptedFilterValues = ((layerData.layerObj && layerData.layerObj.aggregate)
          || layerData.aggregate)['accepted-filter-values']
          && ((layerData.layerObj && layerData.layerObj.aggregate) || layerData.aggregate)['accepted-filter-values'][f];

        // If filters aren't filterd and filterType is multi
        filterIsMultiSelect = acceptedFilterValues === 'multi';

        // If filters are filtered then acceptedFilterValues is an array
        // todo - decouple filters from data-parse config
        // (to be able to create select_multi filters from select_single questions and visa versa)
        if (!filterIsMultiSelect && Array.isArray(acceptedFilterValues)) {
          // Check data-parse config for filter ONA select type
          filterIsMultiSelect = layerData['data-parse']
            && layerData['data-parse'][filter]
            && layerData['data-parse'][filter].type === 'multiple';
        }

        // define if the filter is type 'multi'
        if (filterOptions[filter] && filterIsMultiSelect) filterOptions[filter].filterType = 'multi';

        // if filter type is 'multi'
        if (filterIsMultiSelect && (!filterOptions[filter].filterValues ||
          !(Object.keys(filterOptions[filter].filterValues).length))) {
          // add categories for filter options based on layer config data parse
          const multiFilterVaules = layerData['data-parse'] &&
            layerData['data-parse'][filter] &&
            layerData['data-parse'][filter].key &&
            Object.keys(layerData['data-parse'][filter].key).map(multiFilterVaulesMap);

          for (let m = 0; m < multiFilterVaules.length; m += 1) {
            filterOptions[filter].filterValues[multiFilterVaules[m]] = 0;
          }
        }

        // If filter option doesn't exist as a category, add it
        if (!filterOptions[filter].filterValues[datum[filter]] && !filterIsMultiSelect) {
          filterOptions[filter].filterValues[datum[filter]] = 0;
          if ((acceptedFilterValues === 'quant' ||
            (Array.isArray(acceptedFilterValues) && !Number.isNaN(Number(acceptedFilterValues[0]))))
            && !filterOptions[filter].quantitativeValues) {
            filterOptions[filter].quantitativeValues = [];
          }
        }

        if (!filterIsMultiSelect) filterOptions[filter].filterValues[datum[filter]] += 1;

        if ((acceptedFilterValues === 'quant'
          || (Array.isArray(acceptedFilterValues)
            && !Number.isNaN(Number(acceptedFilterValues[0]))))) {
          filterOptions[filter].quantitativeValues.push(datum[filter]);
        } else if (filterIsMultiSelect && datum[filter]) {
          // handle tallying of select multiple categories
          const splitBy = (layerData['data-parse'] && layerData['data-parse'][filter] &&
            layerData['data-parse'][filter].split) || ', ';
          const selectMultipleValues = datum[filter].split(splitBy);
          // loop through all datum[filter] values
          for (let v = 0; v < selectMultipleValues.length; v += 1) {
            // if the current value is not '' is specified in the data-pars key
            if (typeof filterOptions[filter].filterValues[selectMultipleValues[v]] !== 'undefined') {
              filterOptions[filter].filterValues[selectMultipleValues[v]] += 1;
            }
          }
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
