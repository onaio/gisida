import layer from '../fixtures/default-layer.json'
import inputData from '../fixtures/csvToGeojson-input.json'
import outputData from '../fixtures/outputs/csvToGeojson-output.json'
import csvToGEOjson from '../../src/map/csvToGEOjson'


describe('csvToGEOjson', () => {
    test('Should returns correct jeojson data with lat and log as properties', () => {
        expect(csvToGEOjson(layer.testLayer1, inputData)).toEqual(outputData)
    })

    test('Should returns correct jeojson data with long and lat as array', () => {
        layer.testLayer1['geo-column'] = "long-lat"
        for(let d = 0; d < inputData.length; d += 1) {
            inputData[d]['long-lat'] = [inputData[d].Latitude, inputData[d].Longitude];
            outputData.features[d].properties['long-lat'] = [inputData[d].Latitude, inputData[d].Longitude];
        }
        // expect(csvToGEOjson(layer.testLayer1, inputData)).toEqual(outputData)
    }) 

    test('Should returns correct jeojson data with long and lat as string', () => {
        layer.testLayer1['geo-column'] = "long-lat"
        for(let d = 0; d < inputData.length; d += 1) {
            inputData[d]['long-lat'] = `${inputData[d].Latitude} ${inputData[d].Longitude}`;
            outputData.features[d].properties['long-lat'] = `${inputData[d].Latitude} ${inputData[d].Longitude}`;
        }
        expect(csvToGEOjson(layer.testLayer1, inputData)).toEqual(outputData)
    })
})