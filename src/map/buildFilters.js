export default function buildFilters(filters, layerFilters, prevFilters) {
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

  // loop over all filters
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
      options: {}, // actual filter options map
      isOpen: prevFilters ? prevFilters[filterKey].isOpen : false,
    };

    options = filters[filterKey].filterValues;
    optionKeys = Object.keys(options);
    // loop over all options
    for (o = 0; o < optionKeys.length; o += 1) {
      optionKey = optionKeys[o];
      // set filter option to true
      filter.options[optionKey] = {
        enabled: false,
        count: options[optionKey],
      };
    }

    // add filter to the filterMap
    filterMap[filterKey] = filter;
  }

  if (layerFilters) {
    for (f = 0; f < layerFilters.length; f += 1) {
      if (layerFilters[f] instanceof Array) {
        for (o = 0; o < layerFilters[f].length; o += 1) {
          if (layerFilters[f][o] instanceof Array) {
            const [first, second] = layerFilters[f][o];
            filterKey = first;
            optionKey = second;
            filterMap[filterKey].options[optionKey].enabled = true;
            filterMap[filterKey].options[optionKey].hidden = false;
            if (!filterMap[filterKey]) filterMap[filterKey].isFiltered = true;
          }
        }
      }
    }
  }

  return filterMap;
}
