import moment from 'moment';
import { processFilters } from '../../utils/filters';
import groupBy from '../../utils/groupBy';
import csvToGEOjson from '../../map/csvToGEOjson';
import { comparator } from '../../utils/files';

export function processFormData(formData, layerObj) {
  let data = Array.isArray(formData) ? [...formData] : { ...formData };
  const indicatorField = layerObj.property;
  const aggregateOptions = layerObj.aggregate;
  const minTotal = aggregateOptions.min || 0;
  const groupByField = aggregateOptions['group-by'];
  const matchingValues = aggregateOptions['matching-values'];
  const includeRows = aggregateOptions['include-rows'];
  const submissionDateField = aggregateOptions['date-by'] || 'today';
  const longProp = (layerObj['geo-columns'] && layerObj['geo-columns'][0]) || 'Longitude';
  const latProp = (layerObj['geo-columns'] && layerObj['geo-columns'][1]) || 'Latitude';
  const isGeoJson = layerObj.source.type === 'geojson';
  const possibleDateFormats = [
    'YYYY-MM-DD',
    'MM/DD/YYYY',
    'MM-DD-YYYY',
    'YYYY/MM/DD',
    'YYYY/DD/MM',
    moment.ISO_8601,
    moment.CUSTOM_FORMAT,
  ];

  const isCumulative = aggregateOptions.timeseries && aggregateOptions.timeseries.type === 'cumulative';
  const isUsingToday = aggregateOptions.isUsingToday || submissionDateField === 'today';

  if (includeRows) {
    includeRows.forEach(([field, values]) => {
      data = data.filter(datum => values.includes(datum[field]));
    });
  }

  // Add week number to data
  if (isUsingToday) {
    data = data.map((datum) => {
      let week;
      let month;
      let year;
      let period;
      let weekMonth;

      for (let i = 0; i < possibleDateFormats.length; i += 1) {
        period = moment(datum[submissionDateField], possibleDateFormats[i], true);
        week = period.week();
        year = period.year();
        month = period.month();
        if (!Number.isNaN(week)) {
          const m = moment().week(week);
          weekMonth = (m.week() - moment(m).startOf('month').week()) + 1;
        }
        if (week && !Number.isNaN(week)) {
          break;
        }
      }

      return {
        ...datum,
        period: [year, month, weekMonth],
        [submissionDateField]: datum[submissionDateField],
        [groupByField]: datum[groupByField],
      };
    });
  } else if (aggregateOptions['date-parse']) {
    data = (data.features || data).map((datum) => {
      const { split, chunk } = aggregateOptions['date-parse'];
      const datumDate = split
        ? (datum.properties || datum)[submissionDateField].split(split)[chunk]
        : (datum.properties || datum)[submissionDateField];

      return {
        ...(datum.properties || datum),
        'period-date': new Date(datumDate),
      };
    });
  }


  // Group data by period property
  data = groupBy(data, isUsingToday ? 'period' : aggregateOptions['date-by']);

  let currentPeriod;
  let aggregatedData = [];
  let currentPeriodaggregatedData = [];
  let previousPeriodaggregatedData = [];
  let availablePeriods = Object.keys(data);

  // Map to store coordinates of each groupBy item if applicable
  const groupProps = {};

  if (isUsingToday) {
    availablePeriods = availablePeriods
      .map((p) => {
        const [y, m, wkm] = p.split(',');
        return [Number.parseInt(y, 10), Number.parseInt(m, 10), Number.parseInt(wkm, 10)];
      })
      .sort(comparator)
      .map(p => p.toString());
  } else if (aggregateOptions['date-parse']) {
    availablePeriods = availablePeriods
      .map(p => ({ p, date: data[p][0]['period-date'] }))
      .sort(comparator)
      .map(p => p.p);
  }

  function replacePeriod(period, weekYear) {
    return (d) => {
      const newd = { ...d };
      newd.period = period;
      newd.weekYear = weekYear;
      return newd;
    };
  }

  // loop through available periods
  for (let i = 0; i < availablePeriods.length; i += 1) {
    // Get data for each period and group it using the group-by field
    const periodData = data[availablePeriods[i]];
    const groupedPeriodData = groupBy(periodData, groupByField);
    const [year, month, weekMonth] = availablePeriods[i].split(',');
    currentPeriod = isUsingToday
      ? `${moment().month(month).format('MMM')} w ${weekMonth} ${year}`
      : availablePeriods[i];
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
      let parsedLocName = '';
      let extraPropsSumTotal = [];
      let prevExtraPropsSumTotal = [];
      const { extraProps } = aggregateOptions;

      if (!groupProps[availableGroups[j]]) {
        groupProps[availableGroups[j]] = {};
      }

      if (isGeoJson) {
        groupProps[availableGroups[j]].coordinates = [
          groupData[0][latProp], groupData[0][longProp]];
      }

      let numberProps;

      if (extraProps && extraProps.length) {
        numberProps = groupData.map((g) => {
          numberProps = extraProps.filter(p => !Number.isNaN(Number(g[p])));
          return numberProps;
        });
        numberProps = [...new Set([].concat(...numberProps))];
        prevExtraPropsSumTotal = {};

        extraPropsSumTotal = {};
        numberProps.forEach((prop) => {
          prevExtraPropsSumTotal[prop] = 0;
          extraPropsSumTotal[prop] = 0;
        });
      }

      // Get group data from previous period
      const previousPeriodGroupData =
        aggregatedData.filter(d => d[groupByField] === availableGroups[j]);
      if (isCumulative && previousPeriodGroupData.length) {
        prevRowsCount = Number(previousPeriodGroupData[previousPeriodGroupData.length - 1]['value-count']) ||
          0;
        prevSumTotal = Number(previousPeriodGroupData[previousPeriodGroupData.length - 1][indicatorField]) ||
          0;
        prevTotal = previousPeriodGroupData[previousPeriodGroupData.length - 1].total || 0;
        if (extraProps && extraProps.length) {
          numberProps.forEach((p) => {
            prevExtraPropsSumTotal[p] = previousPeriodGroupData[
              previousPeriodGroupData.length - 1][p]
              || 0;
          });
        }
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
          const { parsedUID } = groupData[x];
          parsedLocName = parsedUID;

          if (extraProps && extraProps.length) {
            for (let y = 0; y < extraProps.length; y += 1) {
              const e = extraProps[y];
              if (numberProps.indexOf(e) !== -1) {
                extraPropsSumTotal[e] += parseInt(groupData[x][e] || 0, 10);
              } else {
                groupProps[availableGroups[j]][e] = groupData[x][e];
              }
            }
          }
        }

        if (extraProps && extraProps.length) {
          numberProps.map((p) => {
            extraPropsSumTotal[p] += prevExtraPropsSumTotal[p];
            return extraPropsSumTotal;
          });
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
      const indicatorValue = aggregateOptions.type === 'count'
        ? percentage
        : (Number.isNaN(sumTotal) && (sumTotal.length && sumTotal.replace(/,/g, '')))
        || sumTotal;

      const currentPeriodaggregatedDataObj = {
        [groupByField]: availableGroups[j],
        [indicatorField]: indicatorValue,
        parsedUID: parsedLocName,
        period: currentPeriod,
        'value-count': matchingRowsCount,
        total: groupTotal,
        weekYear: availablePeriods[i],
        disaggregatedDates: groupData.map(d => d[submissionDateField]),
        disaggregatedData: [...groupData],
      };

      if (isGeoJson) {
        const { coordinates } = groupProps[availableGroups[j]];
        [currentPeriodaggregatedDataObj[latProp],
          currentPeriodaggregatedDataObj[longProp]] = coordinates;
      }

      // Push new aggregated period datum while preserving disaggregated data
      if (extraProps && extraProps.length) {
        const extraPropsObj = {};

        for (let y = 0; y < extraProps.length; y += 1) {
          const e = extraProps[y];
          if (numberProps.indexOf(e) !== -1) {
            extraPropsObj[e] = extraPropsSumTotal[e];
          } else {
            extraPropsObj[e] = groupProps[availableGroups[j]][e];
          }
        }

        const mergedObject = {
          ...extraPropsObj,
          ...currentPeriodaggregatedDataObj,
        };
        currentPeriodaggregatedData.push(mergedObject);
      } else {
        currentPeriodaggregatedData.push(currentPeriodaggregatedDataObj);
      }
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
  if (isGeoJson) aggregatedData = csvToGEOjson(layerObj, aggregatedData);
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

export default function aggregateFormData(layerData, locations, filterOptions, isOr) {
  const layer = layerData;
  let data = layerData.mergedData;
  let aggregatedData = [];

  // Assign location IDs
  if (layerData['merge-locations']) {
    data = assignLocationIDs(data, locations);
  }

  // Process filters with filterOptions
  data = processFilters(layer, filterOptions, isOr);

  // Process data
  aggregatedData = processFormData(data, layer);
  if (layerData.aggregate && layerData.aggregate.customAggregation) {
    aggregatedData = aggregatedData.map((d) => {
      const Data = d;
      Data.disaggregatedData[0].period = Data.disaggregatedData[0][layerData.aggregate['date-by']];
      return Data.disaggregatedData[0];
    });
  }
  
  return aggregatedData;
}
