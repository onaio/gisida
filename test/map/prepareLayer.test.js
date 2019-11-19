import prepareLayer, { buildLabels } from '../../src/map/prepareLayer'
import layer from '../fixtures/default-layer.json'
import initStore from '../../src/store/initStore';
import buildLabelsInput from '../fixtures/buildLabels-input.json';
import buildLabelsOutput from '../fixtures/outputs/buildLabels-output.json';

const readData = require('../../src/utils/readLayerdata')
const multipeSourceData = require('../../src/utils/fetchMultipleSourceData')

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
})

describe('buildLabels', () => {
    test('should return correct label', () => {
        expect(buildLabels(buildLabelsInput)).toEqual(buildLabelsOutput)
    })
})
