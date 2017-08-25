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
      if (acceptedFilterValues && !acceptedFilterValues.includes(datum[layerData.aggregate['sub-filter']])) {
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


export function generateFilterOptions(layerData) {
  const data = layerData.mergedData || layerData.source.data;
  const acceptedFilterValues = layerData.aggregate['accepted-filter-values'];
  const acceptedSubFilterValues = layerData.aggregate['accepted-sub-filter-values'];
  // get filter options from filter field
  if (layerData.aggregate.filter) {
    const filterValues = data.map(datum => datum[layerData.aggregate.filter]);
    const subfilterValues = data.map(datum => datum[layerData.aggregate['sub-filter']]);
    let allFilters = [].concat(...[filterValues, subfilterValues]);

    allFilters = allFilters.filter(datum => datum !== undefined);
    // check filter values are in accepted values lists, remove those that are not
    let acceptedFilters = [];
    if (acceptedFilterValues || acceptedSubFilterValues) {
      acceptedFilters = allFilters.filter(datum =>
        (datum !== undefined &&
          [].concat(...[acceptedFilterValues, acceptedSubFilterValues]).includes(datum)));
    } else acceptedFilters = allFilters;
    layerData.filterOptions = [...new Set(acceptedFilters)];
  }
}
