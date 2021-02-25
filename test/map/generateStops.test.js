import generateStops from '../../src/map/generateStops'
import fillLayer from '../fixtures/fill-layer.json';
import generateStopsOutput from '../fixtures/outputs/generateStops-output.json';

describe('GenerateStops', () => {
    
    const dispatch = jest.fn();
    test('should return correct stops', () => {
        expect(generateStops(fillLayer, 'period', dispatch)).toEqual(generateStopsOutput)
    })
})