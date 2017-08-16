/* global wrappers */
import { processFilters } from './filterUtils';

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
  layerData.source.data = data;
  // Process filters with filterOptions
  data = processFilters(layerData, filterOptions);

  // aggregate raw data
  aggregatedData =
    wrappers.stats.aggregate_data(
      data,
      layerData.property,
      layerData.aggregate);

  return aggregatedData;
}
