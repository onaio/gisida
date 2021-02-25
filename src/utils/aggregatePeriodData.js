/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-globals */
export default function aggregatePeriodData(periodData, periods, mapCodes, property, tsField) {
    const data = [];
    for (let p = 0; p < periods.length; p += 1) {
        for (let m = 0; m < mapCodes.length; m += 1) {
          let propertyAggregatedValue;
          // check if layer property exists on current/previous perioddata
          if (periodData[periods[p]] && periodData[periods[p]][mapCodes[m]] && periodData[periods[p]][mapCodes[m]] && periodData[periods[p]][mapCodes[m]][property] +  periodData[periods[p - 1]] && periodData[periods[p - 1]][mapCodes[m]] && periodData[periods[p - 1]][mapCodes[m]][property]) {
            propertyAggregatedValue = periodData[periods[p]][mapCodes[m]][property] + periodData[periods[p - 1]][mapCodes[m]][property];
          }
          /**
           * condition to check if current/previous perioddata exist then push
           * current period to data with respective property aggregation
           */
          if (periodData[periods[p]][mapCodes[m]]) {
            data.push({
              ...periodData[periods[p]][mapCodes[m]],
              [tsField]: periods[p],
              [property]: !isNaN(propertyAggregatedValue) ? propertyAggregatedValue : periodData[periods[p]][mapCodes[m]][property],
            })
            periodData[periods[p]][mapCodes[m]] = {
              ...periodData[periods[p]][mapCodes[m]],
              [tsField]: periods[p],
              [property]: !isNaN(propertyAggregatedValue) ? propertyAggregatedValue : periodData[periods[p]][mapCodes[m]][property],
            };
          } else if (p && periodData[periods[p - 1]][mapCodes[m]]) {
            data.push({
              ...periodData[periods[p - 1]][mapCodes[m]],
              [tsField]: periods[p],
            });
            periodData[periods[p]][mapCodes[m]] = {
              ...periodData[periods[p-1]][mapCodes[m]],
              [tsField]: periods[p],
              [property]: !isNaN(propertyAggregatedValue) ? propertyAggregatedValue : periodData[periods[p-1]][mapCodes[m]][property],
            };
          }
        }
      }
      return data;
}