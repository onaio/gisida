import * as milia from 'milia-wrapper';
import { processFilters } from './filters';

export default function aggregateData(layerData, locations, filterOptions) {
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

  layerData.mergedData = data.filter(datum => datum.district_id !== undefined);

  // Process filters with filterOptions
  data = processFilters(layerData, filterOptions);
  // aggregate raw data
  aggregatedData =
    milia.stats.aggregate_data(
      data,
      layerData.property,
      layerData.aggregate,
    );

  return aggregatedData;
}
