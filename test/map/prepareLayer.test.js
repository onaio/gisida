import prepareLayer, { buildLabels } from '../../src/map/prepareLayer'
import layer from '../fixtures/default-layer.json'
import initStore from '../../src/store/initStore';
import buildLabelsInput from '../fixtures/buildLabels-input.json';
import buildLabelsOutput from '../fixtures/outputs/buildLabels-output.json';
import csvToGeojsonOutput from '../fixtures/outputs/csvToGeojson-output.json';
import fillLayer from '../fixtures/fill-layer.json';
import aggregateLayerInput from '../fixtures/aggregateLayer-input.json';

const readData = require('../../src/utils/readLayerdata')
const multipeSourceData = require('../../src/utils/fetchMultipleSourceData')
const aggregateFormData = require('../../src/connectors/ona-api/aggregateFormData')

const mapId = 'map-1';

// initialize store
const store = initStore({})

describe('prepareLayer', () => {
    test('dispatch function should always be called', () => {
        const dispatch = jest.spyOn(store, 'dispatch');
        prepareLayer(mapId, layer.testLayer1, store.dispatch, false, false);
        expect(dispatch).toHaveBeenCalled; // eslint-disable-line
        dispatch.mockClear()
    })

    test('data with string source should call readData', () => {
        const mockreaddata = jest.spyOn(readData, 'default');
        prepareLayer(mapId, layer.testLayer1, store.dispatch, false, false);
        expect(mockreaddata).toHaveBeenCalledTimes(1);
        mockreaddata.mockClear();
    })
    
    test('Input data with multiple sources should call fetchMultipleSources function', () => {
        layer.testLayer2.source.data = [
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vR88Xwu8JO98x-ULWxFh7WBEFeyNCenZdXP2dXa3821llusAR5N-HmHzEc9zbiU97Y_tXOY26RJEWhZ/pub?gid=0&single=true&output=csv",
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vR88Xwu8JO98x-ULWxFh7WBEFeyNCenZdXP2dXa3821llusAR5N-HmHzEc9zbiU97Y_tXOY26RJEWhZ/pub?gid=0&single=true&output=csv",
        ]
        const mockFetchMultipleSources = jest.spyOn(multipeSourceData, 'default');
        prepareLayer(mapId, layer.testLayer2, store.dispatch, false, false);
        expect(mockFetchMultipleSources).toHaveBeenCalledTimes(1);
    })

    test('layer with source data as object should call readData function', () => {
        const mockreaddata = jest.spyOn(readData, 'default');
        const geojseon = csvToGeojsonOutput.features.map(feature => {
            feature.percent_target = '80';  // eslint-disable-line
            feature.properties.period = '12-03-2019'; // eslint-disable-line
            return feature;
        })
        fillLayer.source.data = { "type": "stringified-geojson", "data": JSON.stringify(geojseon) };
        prepareLayer(mapId, fillLayer, store.dispatch, false, false);
        expect(mockreaddata).toHaveBeenCalledTimes(1);
        mockreaddata.mockClear();  
    })

    test('should call both aggregateFormData and processFormData functions', () => {
        const mockAggregateFormData = jest.spyOn(aggregateFormData, 'default')
        delete aggregateLayerInput.source.data
        prepareLayer(mapId, aggregateLayerInput, store.dispatch, true, false);
        expect(mockAggregateFormData).toHaveBeenCalledTimes(1);
    })
})

describe('buildLabels', () => {
    test('should return correct label', () => {
        expect(buildLabels(buildLabelsInput)).toEqual(buildLabelsOutput)
    })
})


// describe('renderData', () => {
//     const dispatch = jest.spyOn(store, 'dispatch');
//     renderData(mapId, fillLayer, store.dispatch, false, false);
    
//     test('should call dispatch two times', () => {
//         expect(dispatch).toHaveBeenCalledTimes(11);
//     }) 
//     dispatch.mockClear()
// })