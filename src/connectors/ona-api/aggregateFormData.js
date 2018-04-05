import moment from 'moment';
import { processFilters } from '../../utils/filters';
import groupBy from '../../utils/groupBy';

function processFormData(formData, indicatorField, aggregateOptions) {
  let data = formData;
  const minTotal = aggregateOptions.min || 0;
  const groupByField = aggregateOptions['group-by'];
  const matchingValues = aggregateOptions['filter-values'];
  const submissionDateField = 'today';
  const possibleDateFormats = ['YYYY-MM-DD', 'MM/DD/YYYY'];
  const isCumulative = aggregateOptions.timeseries.type === 'cumulative';

  console.log('test', aggregateOptions.timeseries.type);

  // Filter data where survey_intro / consent = 1(Yes)
  data = data.filter(datum => datum['survey_intro/consent'] === '1');

  // Add week number to data
  data = data.map((datum) => {
    let week;
    let month;
    let year;
    let period;
    let weekMonth;
    let i = 0;
    do {
      period = moment(datum[submissionDateField], possibleDateFormats[i], true);
      week = period.week();
      year = period.year();
      month = period.month();
      if (!Number.isNaN(week)) {
        const m = moment().week(week);
        weekMonth = (m.week() - moment(m).startOf('month').week()) + 1;
      }
      i += 1;
    } while (!week || Number.isNaN(week));
    return { ...datum, period: [year, month, weekMonth] };
  });
  // Group data by period property
  data = groupBy(data, 'period');

  let aggregatedData = [];

  let availablePeriods = Object.keys(data);

  // Sort periods in chronological order
  function comparator(a, b) {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    if (a[2] < b[2]) return -1;
    if (a[2] > b[2]) return 1;
    return 0;
  }
  availablePeriods = availablePeriods.map((p) => {
    const [y, m, wkm] = p.split(',');
    return [Number.parseInt(y, 10), Number.parseInt(m, 10), Number.parseInt(wkm, 10)];
  }).sort(comparator);
  availablePeriods = availablePeriods.map(p => p.toString());

  // loop through available periods
  for (let i = 0; i < availablePeriods.length; i += 1) {
    // Get data for each period and group it using the group-by field
    const periodData = data[availablePeriods[i]];
    const groupedPeriodData = groupBy(periodData, groupByField);

    // Get data for each group and aggreage the indicator field for each group
    const availableGroups = Object.keys(groupedPeriodData);
    for (let j = 0; j < availableGroups.length; j += 1) {
      let prevRowsCount = 0;
      let prevTotal = 0;
      const groupData = groupedPeriodData[availableGroups[j]];
      const previousAggregatedDatum = aggregatedData[aggregatedData.length - 1];

      if (isCumulative &&
        previousAggregatedDatum &&
        previousAggregatedDatum[groupByField] === availableGroups[j]) {
        prevRowsCount = previousAggregatedDatum['value-count'] || 0;
        prevTotal = previousAggregatedDatum.total || 0;
      }

      // Count rows that match the values list for the indicator field
      const matchingRows = groupData.filter(datum =>
        matchingValues.includes(datum[indicatorField]));
      const matchingRowsCount = matchingRows.length + prevRowsCount;
      // Get the total number of rows for the group
      const groupTotal = groupData.length + prevTotal;
      // calculate the percentage of matching rows using group total
      const percentage = (matchingRowsCount / groupTotal) * 100;
      // Push aggregated group values to aggregatedData array

      const [year, month, weekMonth] = availablePeriods[i].split(',');
      const period = `${moment().month(month).format('MMM')} w ${weekMonth} ${year}`;
      aggregatedData.push({
        [groupByField]: availableGroups[j],
        [indicatorField]: percentage.toFixed(0),
        period,
        'value-count': matchingRowsCount,
        total: groupTotal,
        weekYear: availablePeriods[i],
      });
    }
  }
  // filter out groups whose total value are below the required minimum total value
  aggregatedData = aggregatedData.filter(datum => datum.total >= minTotal);

  return aggregatedData;
}

function assignLocationIDs(data, locations) {
  let dataWithLocationID = data.map((datum) => {
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
  dataWithLocationID = dataWithLocationID.filter(datum => datum.district_id !== undefined);
  return dataWithLocationID;
}

export default function aggregateFormData(layerData, locations, filterOptions) {
  const layer = layerData;
  let data = layerData.mergedData;
  let aggregatedData = [];

  // Assign location IDs
  if (layerData['merge-locations']) {
    data = assignLocationIDs(data, locations);
  }

  // Process filters with filterOptions
  data = processFilters(layer, filterOptions);

  // Process data
  aggregatedData = processFormData(data, layer.property, layer.aggregate);

  return aggregatedData;
}
