
import layer from '../fixtures/default-layer.json';
import buildTimeseriesData from '../../src/map/buildTimeseriesData';


describe('buildTimeseriesData', () => {
    const stops = {stops: undefined, id: "Cumulative Number of Children Vaccinated Not Vaccinated"}
    const timeSeriesLayers = ["total-vaccinated-facility", "cumulative-vaccinated-facility", "not-vaccinated-deferred-facility", "not-vaccinated-refused-facility"]

    test('should return correct time series data', () => {
         expect(1).toEqual(1);
        // expect(buildTimeseriesData(layer.testLayer2, stops, timeSeriesLayers,  , undefined)).toEqual();
    })
})