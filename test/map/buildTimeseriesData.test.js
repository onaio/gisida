import buildTimeseriesData from '../../src/map/buildTimeseriesData';
import { tsStops, testLayer, timeseriesList, timeseriesIds } from '../fixtures/timeseries-input';
import { timeseriesOutputData } from '../fixtures/outputs/timeseries-output';

describe('buildTimeseriesData', () => {
  test('Returns correct timeseries object', () => {
    const layers = {
      'test-layer': {
        ...testLayer
      },
    };
    const timeseriesData = buildTimeseriesData(
      testLayer,
      tsStops.Stops,
      timeseriesIds,
      timeseriesList,
      layers
    );
    expect(timeseriesData).toEqual(timeseriesOutputData);
  });
});

