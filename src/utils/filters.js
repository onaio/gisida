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

export function generateFilterOptions(layerData) {
  const getLayerData = layerData;
  const data = getLayerData.mergedData || getLayerData.source.data;
  const acceptedFilterValues = getLayerData.aggregate['accepted-filter-values'];
  const acceptedSubFilterValues = getLayerData.aggregate['accepted-sub-filter-values'];
  // get filter options from filter field
  if (getLayerData.aggregate.filter) {
    const filterValues = data.map(datum => datum[getLayerData.aggregate.filter]);
    const subfilterValues = data.map(datum => datum[getLayerData.aggregate['sub-filter']]);
    let allFilters = [].concat(...[filterValues, subfilterValues]);

    allFilters = allFilters.filter(datum => datum !== undefined);
    // check filter values are in accepted values lists, remove those that are not
    let acceptedFilters = [];
    if (acceptedFilterValues || acceptedSubFilterValues) {
      acceptedFilters = allFilters.filter(datum =>
        (datum !== undefined &&
          [].concat(...[acceptedFilterValues, acceptedSubFilterValues]).includes(datum)));
    } else acceptedFilters = allFilters;
    getLayerData.filterOptions = [...new Set(acceptedFilters)];
  }
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
