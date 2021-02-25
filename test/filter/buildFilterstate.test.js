import buildFilterState from '../../src/filter/buildFilterState';
import aggregateLayerInput from '../fixtures/aggregateLayer-input.json';
import buildFilterStateData from '../fixtures/buildFilterState-data.json';
import {buildStateOutput} from '../fixtures/outputs/buildFilterState-output';
import initStore from '../../src/store/initStore';

const {filterOptions, filters} = buildFilterStateData

const store = initStore({})
describe('buildFilterState', () => {

    test('should return correct filter options', () => {
        expect(buildFilterState('map-1', filterOptions, filters, aggregateLayerInput, store.dispatch, true, false))
            .toEqual(buildStateOutput)
    })

    test('should return correct filter options if input has no aggregate type', () => {
        delete aggregateLayerInput.aggregate.type
        delete buildStateOutput.fauxLayerObj.aggregate.type
        delete buildStateOutput.originalLayerObj.aggregate.type
        expect(buildFilterState('map-1', filterOptions, filters, aggregateLayerInput, store.dispatch, true, false))
            .toEqual(buildStateOutput)
    })
})