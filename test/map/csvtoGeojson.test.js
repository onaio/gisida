import layer from '../fixtures/default-layer.json'
import inputData from '../fixtures/csvToGeojson-input.json'
import outputData from '../fixtures/outputs/csvToGeojson-output.json'
import csvToGEOjson from '../../src/map/csvToGEOjson'


describe('csvToGEOjson', () => {
    test('function returns correct jeojson data', () => {
        expect(csvToGEOjson(layer.testLayer1, inputData)).toEqual(outputData)
    })
})