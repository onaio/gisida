import moment from 'moment';
import { processFilters } from '../../utils/filters';
import groupBy from '../../utils/groupBy';

function processFormData(formData, indicatorField, aggregateOptions) {
  let data = formData;
  const minTotal = aggregateOptions.min || 0;
  const groupByField = aggregateOptions['group-by'];
  const matchingValues = aggregateOptions['matching-values'];
  const includeRows = aggregateOptions['include-rows'];
  const submissionDateField = aggregateOptions['date-by'] || 'today';
  const possibleDateFormats = ['YYYY-MM-DD', 'MM/DD/YYYY'];
  const isCumulative = aggregateOptions.timeseries.type === 'cumulative';

  if (includeRows) {
    includeRows.forEach(([field, values]) => {
      data = data.filter(datum => values.includes(datum[field]));
    });
  }

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
    return {
      ...datum,
      period: [year, month, weekMonth],
      [submissionDateField]: datum[submissionDateField],
      [groupByField]: datum[groupByField],
    };
  });

  // Group data by period property
  data = groupBy(data, 'period');
  let currentPeriod;
  let aggregatedData = [];
  let currentPeriodaggregatedData = [];
  let previousPeriodaggregatedData = [];

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

  const replacePeriod = function (period, weekYear) {
    return (d) => {
      const newd = { ...d };
      newd.period = period;
      newd.weekYear = weekYear;
      return newd;
    };
  };

  // loop through available periods
  for (let i = 0; i < availablePeriods.length; i += 1) {
    // Get data for each period and group it using the group-by field
    const periodData = data[availablePeriods[i]];
    const groupedPeriodData = groupBy(periodData, groupByField);
    const [year, month, weekMonth] = availablePeriods[i].split(',');
    currentPeriod = `${moment().month(month).format('MMM')} w ${weekMonth} ${year}`;
    currentPeriodaggregatedData = [];

    // Get data for each group and aggreage the indicator field for each group
    const availableGroups = Object.keys(groupedPeriodData);
    let previousGroups = [];

    // loop through all groups within available period
    for (let j = 0; j < availableGroups.length; j += 1) {
      let prevRowsCount = 0;
      let prevTotal = 0;
      let prevSumTotal = 0;
      let sumTotal = 0;
      let matchingRows = 0;
      const groupData = groupedPeriodData[availableGroups[j]];

      // Get group data from previous period
      const previousPeriodGroupData =
        aggregatedData.filter(d => d[groupByField] === availableGroups[j]);
      if (isCumulative && previousPeriodGroupData.length) {
        prevRowsCount = previousPeriodGroupData[previousPeriodGroupData.length - 1]['value-count'] || 0;
        prevSumTotal = previousPeriodGroupData[previousPeriodGroupData.length - 1][indicatorField]
          || 0;
        prevTotal = previousPeriodGroupData[previousPeriodGroupData.length - 1].total || 0;
      }

      // Handle actual aggregation
      if (aggregateOptions.type === 'count') {
        // Count rows that match the values list for the indicator field
        matchingRows = groupData.filter(datum =>
          matchingValues.includes(datum[indicatorField]));
      } else if (aggregateOptions.type === 'sum') {
        // reduce sumTotal for current groupData
        for (let x = 0; x < groupData.length; x += 1) {
          sumTotal += parseInt(groupData[x][indicatorField] || 0, 10);
        }
        // add previous sum total value to current sum total (cumulative sum)
        sumTotal += prevSumTotal;
      }

      const matchingRowsCount = (matchingRows.length || matchingRows) + prevRowsCount;
      // Get the total number of rows for the group
      const groupTotal = groupData.length + prevTotal;
      // calculate the percentage of matching rows using group total
      const percentage = ((matchingRowsCount / groupTotal) * 100).toFixed(0);
      // Final aggregated indicator value for  group
      const indicatorValue = aggregateOptions.type === 'count' ? percentage : sumTotal;

      // Push new aggregated period datum while preserving disaggregated data
      currentPeriodaggregatedData.push({
        [groupByField]: availableGroups[j],
        [indicatorField]: indicatorValue,
        period: currentPeriod,
        'value-count': matchingRowsCount,
        total: groupTotal,
        weekYear: availablePeriods[i],
        disaggregatedDates: groupData.map(d => d[submissionDateField]),
        disaggregatedData: [...groupData],
      });
    }

    // Add aggregated data from previous group if cumulative
    if (isCumulative) {
      const currentGroupValues = currentPeriodaggregatedData.map(d => d[groupByField]);
      previousGroups =
        previousPeriodaggregatedData.filter(d => !currentGroupValues.includes(d[groupByField]));
      previousGroups = previousGroups.map(replacePeriod(currentPeriod, availablePeriods[i]));
    }

    // Updadate previous / aggregateted arrays
    previousPeriodaggregatedData = [...currentPeriodaggregatedData, ...previousGroups];
    aggregatedData = aggregatedData.concat(previousPeriodaggregatedData);
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
  dataWithLocationID = dataWithLocationID.filter(datum => datum.district_id);
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
