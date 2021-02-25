import getSliderLayers from '../../src/map/getSliderLayers'
import data from '../fixtures/getSliderLayers'

describe('getSliderLayers', () => {
    
  test('should return correct slider layers', () => {
    expect(getSliderLayers(data.input)).toEqual(data.output);
  });
});