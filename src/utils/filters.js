import {
  MULTIPLE,
  ACCEPTED_FILTER_VALUES,
  DATA_PARSE,
  ACCEPTED_SUB_FILTER_VALUES,
  MONTHS,
  ALL,
  QUANT,
  MULTI,
  SUB_FILTER,
  FILTER_LABEL,
  FILTER_TYPE,
  VECTOR,
} from '../constants';

export function processFilters(layerData, filterOptions, isOr) {
  const Data = layerData.data || 
    layerData.Data ||
    (layerData.mergedData &&
      (Array.isArray(layerData.mergedData)
        ? [...layerData.mergedData]
        : { ...layerData.mergedData })) ||
    (layerData.source.data &&
      (Array.isArray(layerData.source.data)
        ? [...layerData.source.data]
        : { ...layerData.source.data }));
  let data = (Data.features && [...Data.features]) || [...Data];

  function parseFilterVals(f) {
    if (f.length) {
      return f.trim().toLowerCase();
    }
    return f;
  }
  const acceptedFilterValues = layerData.aggregate.filterIsPrev
    ? layerData.aggregate[ACCEPTED_FILTER_VALUES].map(parseFilterVals)
    : layerData.aggregate[ACCEPTED_FILTER_VALUES];
  const acceptedSubFilterValues = layerData.aggregate.filterIsPrev
    ? layerData.aggregate[ACCEPTED_SUB_FILTER_VALUES].map(parseFilterVals)
    : layerData.aggregate[ACCEPTED_SUB_FILTER_VALUES];
  const filters = [];
  const combinedData = [];
  let datum;
  let f;
  function filterProcessor(d) {
    datum = d.properties || d;
    if (typeof acceptedFilterValues[f] === 'string') {
      return datum[layerData.aggregate.filter[f]] === acceptedFilterValues[f];
    } else if (
      layerData[DATA_PARSE] &&
      layerData[DATA_PARSE][layerData.aggregate.filter[f]] &&
      layerData[DATA_PARSE][layerData.aggregate.filter[f]].type &&
      layerData[DATA_PARSE][layerData.aggregate.filter[f]].type === MULTIPLE
    ) {
      const splitBy = layerData[DATA_PARSE][layerData.aggregate.filter[f]].split || ', ';
      const vals =
        typeof datum[layerData.aggregate.filter[f]] === 'string'
          ? datum[layerData.aggregate.filter[f]].toString().split(splitBy)
          : datum[layerData.aggregate.filter[f]] || [];
      let hasMatches = false;
      for (let x = 0; x < vals.length; x += 1) {
        if (acceptedFilterValues[f].includes(vals[x])) {
          hasMatches = true;
          break;
        }
      }
      return hasMatches;
    }
    return acceptedFilterValues[f].includes(datum[layerData.aggregate.filter[f]]);
  }

  if (layerData.aggregate.filter && filterOptions) {
    // Get array of disabled filters
    Object.keys(filterOptions).forEach(opt => {
      if (filterOptions[opt] === false) {
        filters.push(opt.trim().toLowerCase());
      }
    });

    let filterVal;
    let subFilterVal;

    // apply filters
    data = (data.features || data).filter(d => {
      datum = d.properties || d;
      filterVal =
        datum[layerData.aggregate.filter] && datum[layerData.aggregate.filter].trim().toLowerCase();
      subFilterVal =
        datum[layerData.aggregate[SUB_FILTER]] &&
        datum[layerData.aggregate[SUB_FILTER]].trim().toLowerCase();
      if (
        !acceptedFilterValues &&
        !acceptedSubFilterValues &&
        !filters.includes(filterVal) &&
        !filters.includes(subFilterVal)
      ) {
        // remove rows that should be filtered out, ignore rows with values from second filter field
        return true;
      } else if (
        acceptedSubFilterValues &&
        acceptedSubFilterValues &&
        !acceptedSubFilterValues.includes(subFilterVal) &&
        acceptedFilterValues.includes(filterVal) &&
        !filters.includes(subFilterVal)
      ) {
        // remove rows that should be filtered out, ignore rows with values from first filter field
        return true;
      } else if (
        acceptedFilterValues &&
        acceptedSubFilterValues.includes(subFilterVal) &&
        !filters.includes(filterVal)
      ) {
        return true;
      }
      return false;
    });
  } else if (layerData.aggregate.filter) {
    for (f = 0; f < layerData.aggregate.filter.length; f += 1) {
      if (
        acceptedFilterValues[f] !== ALL &&
        acceptedFilterValues[f] !== QUANT &&
        acceptedFilterValues[f] !== MULTI
      ) {
        if (acceptedFilterValues.filter(a => Array.isArray(a) && a.length).length > 1 && isOr) {
          (Data.features || Data).filter(filterProcessor).map(d => combinedData.push(d));
        } else {
          data = data.filter(filterProcessor);
        }
      } else if (acceptedFilterValues[f] === QUANT) {
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

export function generateFilterOptionsPrev(layerData) {
  const acceptedFilterValues = layerData.aggregate[ACCEPTED_FILTER_VALUES];
  const acceptedSubFilterValues = layerData.aggregate[ACCEPTED_SUB_FILTER_VALUES];
  const filters = [].concat(...[acceptedFilterValues, acceptedSubFilterValues]);
  return [...new Set(filters)];
}

export function generateFilterOptions(layerData) {
  let data = layerData.data || layerData.mergedData || (layerData.source && layerData.source.data);
  // override layerData for timeseries layers
  data = processFilters(layerData.layerObj ? layerData.layerObj : layerData);

  const filterOptions = {};
  let filter;
  let filterLabel;
  let acceptedFilterValues;
  let filterType;
  let d;
  let datum;

  const layerFilter =
    (layerData.layerObj && layerData.layerObj.aggregate && layerData.layerObj.aggregate.filter) ||
    (layerData.aggregate && layerData.aggregate.filter);

  if (!layerFilter) {
    return {};
  }

  // loop through all filter
  for (let f = 0; f < layerFilter.length; f += 1) {
    // define filter, subFilter, and filter label
    filter = layerFilter[f];
    filterLabel =
      ((layerData.layerObj && layerData.layerObj.aggregate) || layerData.aggregate)[FILTER_LABEL] &&
      ((layerData.layerObj && layerData.layerObj.aggregate) || layerData.aggregate)[FILTER_LABEL][
        f
      ] &&
      ((layerData.layerObj && layerData.layerObj.aggregate) || layerData.aggregate)[FILTER_LABEL][f]
        .length
        ? ((layerData.layerObj && layerData.layerObj.aggregate) || layerData.aggregate)[
            FILTER_LABEL
          ][f]
        : filter;

    // define which type of filter it should be (vector or stops, default to vector)
    filterType =
      ((layerData.layerObj && layerData.layerObj.aggregate) || layerData.aggregate)[FILTER_TYPE] &&
      ((layerData.layerObj && layerData.layerObj.aggregate) || layerData.aggregate)[FILTER_TYPE][
        f
      ] &&
      ((layerData.layerObj && layerData.layerObj.aggregate) || layerData.aggregate)[FILTER_TYPE][f]
        .length
        ? ((layerData.layerObj && layerData.layerObj.aggregate) || layerData.aggregate)[
            FILTER_TYPE
          ][f]
        : VECTOR;

    // define unique filter and sub-filter values on filterOptions object
    filterOptions[filter] = {
      label: filterLabel,
      type: filterType,
      filterValues: {},
    };
  }

  const multiFilterVaulesMap = k => layerData[DATA_PARSE][filter].key[k];
  const multiFilterVaulesGen = (lo, f) => {
    const uniqueVals = [];
    const splitBy =
      (lo[DATA_PARSE] && lo[DATA_PARSE][f] && lo[DATA_PARSE][f].split) ||
      (lo.layerObj &&
        lo.layerObj[DATA_PARSE] &&
        lo.layerObj[DATA_PARSE][f] &&
        lo.layerObj[DATA_PARSE][f].split) ||
      ', ';
    const sourceData = lo.data || lo.mergedData || lo.source.data.features || lo.source.data;
    if (!(sourceData.features || sourceData).length) return uniqueVals;
    const Data = [...(sourceData.features || sourceData)];
    let vals;
    let activeData;
    for (let i = 0; i < Data.length; i += 1) {
      activeData = Data[i].properties || Data[i];
      if (activeData && activeData[f]) {
        vals =
          typeof activeData[f] === 'string'
            ? activeData[f].toString().split(splitBy)
            : [...activeData[f]];
        for (let v = 0; v < vals.length; v += 1) {
          if (uniqueVals.indexOf(vals[v]) === -1) uniqueVals.push(vals[v]);
        }
      }
    }
    return uniqueVals;
  };

  let doPushDatum;
  let filterIsMultiSelect = false;
  const activeData = data.features || data;
  for (d = 0; d < activeData.length; d += 1) {
    datum = activeData[d].properties || activeData[d];
    doPushDatum = true;

    // loop through the fiters and see if datum passes filter requirements
    for (let f = 0; f < layerFilter.length; f += 1) {
      filter = layerFilter[f];
      acceptedFilterValues =
        ((layerData.layerObj && layerData.layerObj.aggregate) || layerData.aggregate)[
          ACCEPTED_FILTER_VALUES
        ] &&
        ((layerData.layerObj && layerData.layerObj.aggregate) || layerData.aggregate)[
          ACCEPTED_FILTER_VALUES
        ][f];
      if (
        !!acceptedFilterValues &&
        typeof acceptedFilterValues !== 'string' &&
        layerData[DATA_PARSE] &&
        layerData[DATA_PARSE][filter] &&
        layerData[DATA_PARSE][filter].type !== MULTIPLE
      ) {
        if (acceptedFilterValues.indexOf(datum[filter]) === -1) {
          doPushDatum = false;
          break;
        }
      } else if (acceptedFilterValues === QUANT && Number.isNaN(Number(datum[filter]))) {
        // check datum[filter] value against quantitative condition
        doPushDatum = false;
      }
    }

    // if datum passes all conditions
    if (doPushDatum) {
      // loop through the fiters to add to counts of passing data
      for (let f = 0; f < layerFilter.length; f += 1) {
        filter = layerFilter[f];
        acceptedFilterValues =
          ((layerData.layerObj && layerData.layerObj.aggregate) || layerData.aggregate)[
            ACCEPTED_FILTER_VALUES
          ] &&
          ((layerData.layerObj && layerData.layerObj.aggregate) || layerData.aggregate)[
            ACCEPTED_FILTER_VALUES
          ][f];

        // If filters aren't filterd and filterType is multi
        filterIsMultiSelect = acceptedFilterValues === MULTI;

        // If filters are filtered then acceptedFilterValues is an array
        // todo - decouple filters from data-parse config
        // (to be able to create select_multi filters from select_single questions and visa versa)
        if (!filterIsMultiSelect && Array.isArray(acceptedFilterValues)) {
          // Check data-parse config for filter ONA select type
          filterIsMultiSelect =
            (layerData[DATA_PARSE] &&
              layerData[DATA_PARSE][filter] &&
              layerData[DATA_PARSE][filter].type === MULTIPLE) ||
            (layerData.layerObj &&
              layerData.layerObj[DATA_PARSE] &&
              layerData.layerObj[DATA_PARSE][filter] &&
              layerData.layerObj[DATA_PARSE][filter].type === MULTIPLE);
        }

        // define if the filter is type MULTI
        if (filterOptions[filter] && filterIsMultiSelect) {
          filterOptions[filter].filterType = MULTI;
        }

        // if filter type is MULTI
        if (
          filterIsMultiSelect &&
          (!filterOptions[filter].filterValues ||
            !Object.keys(filterOptions[filter].filterValues).length)
        ) {
          // add categories for filter options based on layer config data parse
          const multiFilterVaules =
            (layerData[DATA_PARSE] &&
              layerData[DATA_PARSE][filter] &&
              layerData[DATA_PARSE][filter].key &&
              Object.keys(layerData[DATA_PARSE][filter].key).map(multiFilterVaulesMap)) ||
            multiFilterVaulesGen(layerData, filter);
          for (let m = 0; m < multiFilterVaules.length; m += 1) {
            filterOptions[filter].filterValues[multiFilterVaules[m]] = 0;
          }
        }

        // If filter ooption doesn't exist as a category, add it
        if (
          filterOptions[filter] &&
          !filterOptions[filter].filterValues[datum[filter]] &&
          !filterIsMultiSelect
        ) {
          filterOptions[filter].filterValues[datum[filter]] = 0;
          if (
            (acceptedFilterValues === QUANT ||
              (Array.isArray(acceptedFilterValues) &&
                !Number.isNaN(Number(acceptedFilterValues[0])))) &&
            !filterOptions[filter].quantitativeValues
          ) {
            filterOptions[filter].quantitativeValues = [];
          }
        }

        if (!filterIsMultiSelect) {
          filterOptions[filter].filterValues[datum[filter]] += 1;
        }

        if (
          acceptedFilterValues === QUANT ||
          (Array.isArray(acceptedFilterValues) &&
            !Number.isNaN(Number(acceptedFilterValues[0])) &&
            !filterIsMultiSelect)
        ) {
          filterOptions[filter].quantitativeValues.push(datum[filter]);
        } else if (filterIsMultiSelect && datum[filter]) {
          // handle tallying of select multiple categories
          const splitBy =
            (layerData[DATA_PARSE] &&
              layerData[DATA_PARSE][filter] &&
              layerData[DATA_PARSE][filter].split) ||
            (layerData.layerObj &&
              layerData.layerObj[DATA_PARSE] &&
              layerData.layerObj[DATA_PARSE][filter] &&
              layerData.layerObj[DATA_PARSE][filter].split) ||
            ', ';
          const selectMultipleValues =
            typeof datum[filter] === 'string'
              ? datum[filter].toString().split(splitBy)
              : [...datum[filter]];
          // loop through all datum[filter] values
          for (let v = 0; v < selectMultipleValues.length; v += 1) {
            // if the current value is not '' is specified in the data-pars key
            if (
              typeof filterOptions[filter].filterValues[selectMultipleValues[v]] !== 'undefined'
            ) {
              filterOptions[filter].filterValues[selectMultipleValues[v]] += 1;
            }
          }
        }
      }
    }
  }
  return filterOptions;
}
export function filterDataByPeriod(layerData, periodField, period) {
  let periods = period ? [period] : layerData.map(datum => datum[periodField]);
  if (!period) periods = Array.from(new Set(periods));

  if (MONTHS.indexOf(periods[0]) !== -1) {
    periods.sort((a, b) => MONTHS.indexOf(a) - MONTHS.indexOf(b));
  } else if (periods[0].indexOf('/') !== -1) {
    periods.sort((a, b) => Number(a.split('/')[1]) - Number(b.split('/')[1]));
  }

  const periodFilter = periods[periods.length - 1];

  return layerData.filter(datum => datum[periodField] === periodFilter);
}
