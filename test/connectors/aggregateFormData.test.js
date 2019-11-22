import aggregateFormData, {processFormData} from '../../src/connectors/ona-api/aggregateFormData'
import aggregateLayerInput from '../fixtures/aggregateLayer-input.json';
import { aggregateLayerOutput1, aggregateLayerOutput2 } from '../fixtures/outputs/aggregateLayer-output';
// import circleLayer from '../fixtures/circle-layer.json';

describe('aggregateFormData', () => {
    test('should return correct aggregated data', () => {
        expect(aggregateFormData(aggregateLayerInput, {}, undefined, undefined)).toEqual(aggregateLayerOutput1)
    })
})

describe('processFormData', () => {
    test('should return correct processed data', () => {
        expect(processFormData(aggregateLayerInput.mergedData, aggregateLayerInput)).toEqual(aggregateLayerOutput1)
    })

    test('should return correct processed data if aggragation has isUsingaday parameter', () => {
        delete aggregateLayerInput.aggregate['date-parse']
        aggregateLayerInput.aggregate.timeseries.type = 'sum'
        aggregateLayerInput.aggregate.isUsingToday = true
        const { features:data } = aggregateLayerInput.mergedData
        expect(processFormData(data, aggregateLayerInput)).toEqual(aggregateLayerOutput2)
    })
})

// describe('assignLocationIDs', () => {
//     const data = circleLayer.source.data.slice(39);
//     console.log(data)
//     test('should return correct location assigned data', () => {
//         expect(assignLocationIDs(aggregateLayerInput.mergedData, {})).toEqual(aggregateLayerOutput)
//     })
// })