import buildFilterState from '../../src/filter/buildFilterState';
import aggregateLayerInput from '../fixtures/aggregateLayer-input.json';
import buildFilterStateData from '../fixtures/buildFilterState-data.json';
import {buildStateOutput} from '../fixtures/outputs/buildFilterState-output';

const {filterOptions, filters} = buildFilterStateData

describe('buildFilterState', () => {

    test('should return correct filter options', () => {
        const dispatch = jest.fn();
        expect(buildFilterState('mapId', filterOptions, filters, aggregateLayerInput, dispatch, true, false))
            .toEqual(buildStateOutput)
    })
})