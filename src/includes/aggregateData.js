export default function (layerData, locations, filterOptions) {
  let data = layerData.mergedData;
  let aggregated_data = [];
  // merge OSM Ids
  if (layerData['merge-locations']) {
    data.map((datum) => {
      if (!datum.district_id) {
        // add district_id if not defined
        datum.district_id = locations[datum.District];
        if (!(datum.district_id)) {
          // Use alternative district field
          datum.district_id = locations[datum['survey_intro/District_miss']];
        }
        if (!(datum.district_id)) {
          // Use alternative region miss field
          datum.district_id = locations[datum['survey_intro/Region_miss']];
        }
      }
      return datum;
    });
  }
  data = data.filter(datum => datum.district_id !== undefined);
  // get filter options from filter field
  if (layerData.aggregate.filter) {
    let filterValues = data.map(datum => datum[layerData.aggregate.filter]);
    filterValues = filterValues.filter(datum => datum !== undefined);
    layerData.filterOptions = [...new Set(filterValues)];
  }
  if (layerData.aggregate.filter && filterOptions) {
    const filters = [];
    for (const key in filterOptions) {
      if (filterOptions[key] === false) {
        filters.push(key);
      }
    }
    data = data.filter(
      datum => !filters.includes(datum[layerData.aggregate.filter]));
  }
  // aggregate raw data
  aggregated_data =
    wrappers.stats.aggregate_data(
      data,
      layerData.property,
      layerData.aggregate);

  return aggregated_data;
}
