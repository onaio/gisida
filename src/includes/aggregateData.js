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
    let filterValues = data.map(datum => datum[layerData.aggregate.filter]);
    filterValues = filterValues.filter(datum => datum !== undefined);
    layerData.filterOptions = [...new Set(filterValues)];
  }
  const filters = [];
  if (layerData.aggregate.filter && filterOptions) {
    Object.keys(filterOptions).forEach((opt) => {
      if (filterOptions[opt] === false) {
        filters.push(opt);
      }
    });
    data = data.filter(datum => !filters.includes(datum[layerData.aggregate.filter]));
  }
  // aggregate raw data
  aggregatedData =
  // eslint-disable-next-line no-undef
    wrappers.stats.aggregate_data(
      data,
      layerData.property,
      layerData.aggregate);

  return aggregatedData;
}
