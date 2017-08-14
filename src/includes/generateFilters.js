export default function (layerData, filterOptions) {
  let data = layerData.csvdata;

  // get filter options from filter field
  if (layerData.aggregate.filter) {
    const filterValues = data.map(datum => datum[layerData.aggregate.filter]);
    const subfilterValues = data.map(datum => datum[layerData.aggregate['sub-filter']]);
    const allFilters = [].concat(...[filterValues, subfilterValues]);
    // check filter values are in accepted values lists, remove those that are not
    const acceptedFilters = allFilters.filter(datum =>
      (datum !== undefined &&
        [].concat(...[
          layerData.aggregate['accepted-filter-values'],
          layerData.aggregate['accepted-sub-filter-values']]).includes(datum)));
    layerData.filterOptions = [...new Set(acceptedFilters)];
  }
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
      if (!layerData.aggregate['accepted-sub-filter-values'].includes(datum[layerData.aggregate['sub-filter']])) {
        // remove rows that should be filtered out, ignore rows with values from second filter field
        return !filters.includes(datum[layerData.aggregate.filter]);
      } else if (layerData.aggregate['accepted-sub-filter-values'].includes(datum[layerData.aggregate['sub-filter']])) {
        // remove rows that should be filtered out, ignore rows with values from first filter field
        return !filters.includes(datum[layerData.aggregate['sub-filter']]);
      } return true;
    });
  }
  return data;
}
