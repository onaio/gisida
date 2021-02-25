export default function buildFiltersMap(filters, layerFilters, prevFilters) {
  const filterMap = {};
  const filterKeys = Object.keys(filters);
  let filterKey;
  let options;
  let optionKeys;
  let optionKey;
  let filter;
  let f;
  let o;

  // todo - use this again to sort options
  // const optionSort = (a, b) => {
  //   if (typeof a === 'string' && typeof b === 'string') {
  //     if (a.toUpperCase() < b.toUpperCase()) {
  //       return -1;
  //     }
  //     if (a.toUpperCase() > b.toUpperCase()) {
  //       return 1;
  //     }
  //   } else {
  //     if (a < b) {
  //       return -1;
  //     }
  //     if (a > b) {
  //       return -1;
  //     }
  //   }
  //   return 0;
  // };

  // loop over all filters and build filter state from prevFilters or clean
  for (f = 0; f < filterKeys.length; f += 1) {
    filterKey = filterKeys[f];
    filter = {
      label: filters[filterKey].label,
      toggleAllOn: prevFilters
        ? prevFilters[filterKey].toggleAllOn
        : true, // controls toggle all functionality and text
      isFiltered: prevFilters
        ? prevFilters[filterKey].isFiltered
        : false, // whether any options have been modified
      isOriginal: true, // whether the filter has been filtered
      // eslint-disable-next-line no-nested-ternary
      dataType: prevFilters ? prevFilters[filterKey].dataType   
        : !filters[filterKey].quantitativeValues ? 'ordinal' : 'quantitative',
      filterType: prevFilters ? prevFilters[filterKey].filterType
        : filters[filterKey].filterType,
      options: {}, // actual filter options map
      isOpen: prevFilters ? prevFilters[filterKey].isOpen : false,
      doAdvFiltering: prevFilters ? prevFilters[filterKey].doAdvFiltering : false,
      queries: prevFilters ? prevFilters[filterKey].queries : [],
    };

    if (filter.dataType === 'quantitative') {
      filter.options = [...filters[filterKey].quantitativeValues];
    } else {
      options = filters[filterKey].filterValues;
      optionKeys = Object.keys(options)
        .filter(opt => opt.length > 0 && opt !== 'undefined');
      // loop over all options
      for (o = 0; o < optionKeys.length; o += 1) {
        optionKey = optionKeys[o];
        // set filter option to true
        filter.options[optionKey] = {
          enabled: false,
          count: options[optionKey],
        };
      }
    }

    // add filter to the filterMap
    filterMap[filterKey] = filter;
  }

  // this might be deprecated?? :-/
  if (layerFilters) {
    for (f = 0; f < layerFilters.length; f += 1) {
      if (layerFilters[f] instanceof Array) {
        for (o = 0; o < layerFilters[f].length; o += 1) {
          if (layerFilters[f][o] instanceof Array) {
            if (layerFilters[f][o][0] === '==') {
              filterKey = layerFilters[f][o][1];   // eslint-disable-line prefer-destructuring
              optionKey = layerFilters[f][o][2];   // eslint-disable-line prefer-destructuring
              filterMap[filterKey].options[optionKey].enabled = true;
              filterMap[filterKey].options[optionKey].hidden = false;
              if (!filterMap[filterKey]) filterMap[filterKey].isFiltered = true;
            } else {
              // To DO: handle quant filter expressions
            }
          }
        }
      }
    }
  }

  return filterMap;
}