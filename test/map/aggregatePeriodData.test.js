import aggregatePeriodData from '../../src/utils/aggregatePeriodData';
import { periodData, periods, mapCodes, aggregatePeriodDataOutput } from '../fixtures/aggregatePeriodData';

describe('aggregatePeriodData', () => {
  test('Returns aggregated data', () => {
    const aggregatedTimeseriesData = aggregatePeriodData(
      periodData,
      periods,
      mapCodes,
      "total_caseload",
      "year_month"
    );
    expect(aggregatedTimeseriesData).toEqual(aggregatePeriodDataOutput);
  });
});

