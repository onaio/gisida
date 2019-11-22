import buildFiltersMap from '../../src/map/buildFiltersMap';
import buildFilterStateData from '../fixtures/buildFilterState-data.json';
import buildFiltersMapOutput from '../fixtures/outputs/buildFiltersMap-output.json';

const { buildFiltersMapData }= buildFilterStateData

describe('buildFiltersMap', () => {
    test('Should return proper filters', () => {
        expect(buildFiltersMap(buildFiltersMapData, undefined, null)).toEqual(buildFiltersMapOutput)
    })
})