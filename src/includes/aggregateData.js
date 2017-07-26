/* global wrappers */

export default function (layerData, locations, filterOptions) {
  let data = layerData.mergedData;
  let aggregatedData = [];
  // merge OSM Ids
  if (layerData['merge-locations']) {
    data.map((datum) => {
      const row = datum;
      if (!datum.district_id) {
        // add district_id if not defined
        row.district_id = locations[datum.District];
        if (!(datum.district_id)) {
          // Use alternative district field
          row.district_id = locations[datum['survey_intro/District_miss']];
        }
        if (!(datum.district_id)) {
          // Use alternative region miss field
          row.district_id = locations[datum['survey_intro/Region_miss']];
        }
      }
      return row;
    });
  }
  data = data.filter(datum => datum.district_id !== undefined);
  // get filter options from filter field
  if (layerData.aggregate.filter) {
    const filterValues = data.map(datum => datum[layerData.aggregate.filter]);
    const subfilterValues = data.map(datum => datum[layerData.aggregate['sub-filter']]);
    let allFilters = [].concat(...[filterValues, subfilterValues]);
    allFilters = allFilters.filter(datum =>
      (datum !== undefined &&
        [].concat(...[
          layerData.aggregate['accepted-filter-values'],
          layerData.aggregate['accepted-sub-filter-values']]).includes(datum)));
    layerData.filterOptions = [...new Set(allFilters)];
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

  // aggregate raw data
  aggregatedData =
    wrappers.stats.aggregate_data(
      data,
      layerData.property,
      layerData.aggregate);

  return aggregatedData;
}
