import aggregateFormData, {processFormData} from '../../src/connectors/ona-api/aggregateFormData'
import aggregateLayerInput from '../fixtures/aggregateLayer-input.json';
import { aggregateLayerOutput } from '../fixtures/outputs/aggregateLayer-output';

describe('aggregateFormData', () => {
    test('should return correct aggregated data', () => {
        expect(aggregateFormData(aggregateLayerInput, {}, undefined, undefined)).toEqual(aggregateLayerOutput)
    })
})


describe('processFormData', () => {
    test('should return correct processed data', () => {
        expect(processFormData(aggregateLayerInput.mergedData, aggregateLayerInput)).toEqual(aggregateLayerOutput)
    })
})

// describe('assignLocationIDs', () => {
//     test('should return correct location assigned data', () => {
//         expect(assignLocationIDs(aggregateLayerInput.mergedData, {})).toEqual(aggregateLayerOutput)
//     })
// })