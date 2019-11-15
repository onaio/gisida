import prepareLayer, {buildLabels, renderData, fetchMultipleSources} from '../../src/map/prepareLayer'
import layer from '../fixtures/default-layer.json'

var readData = require('../../src/utils/readLayerdata')
var dataLoader = require('../../src/utils/files');

const mapId = 'map-1';

jest.mock(readData, () => jest.fn())

describe('prepareLayer with string(link) data source', () => {
    const dispatch = jest.fn();

    test('dispatch function was called', () => {
    prepareLayer(mapId, layer, dispatch, false, false);
        expect(dispatch).toHaveBeenCalledTimes(1);
    })

    test('readData function was called', () => {
        const mockreaddata = jest.spyOn(readData, 'readData');
        prepareLayer(mapId, layer, dispatch, false, false);
        expect(mockreaddata).toHaveBeenCalledTimes(1);
    })
})

// describe('prepareLayer with array as data source', () => {
//     const dispatch = jest.fn().;
//     layer.source.data = [
//         "https://docs.google.com/spreadsheets/d/e/2PACX-1vR88Xwu8JO98x-ULWxFh7WBEFeyNCenZdXP2dXa3821llusAR5N-HmHzEc9zbiU97Y_tXOY26RJEWhZ/pub?gid=0&single=true&output=csv",
//         "https://docs.google.com/spreadsheets/d/e/2PACX-1vR88Xwu8JO98x-ULWxFh7WBEFeyNCenZdXP2dXa3821llusAR5N-HmHzEc9zbiU97Y_tXOY26RJEWhZ/pub?gid=0&single=true&output=csv",
//         "https://docs.google.com/spreadsheets/d/e/2PACX-1vR88Xwu8JO98x-ULWxFh7WBEFeyNCenZdXP2dXa3821llusAR5N-HmHzEc9zbiU97Y_tXOY26RJEWhZ/pub?gid=0&single=true&output=csv",
//     ]
//     prepareLayer(mapId, layer, dispatch, false, false);
    
//     test('readData function was called', () => {
//         expect(mockreaddata).toHaveBeenCalledTimes(1);
//     })
// })

