import addLayer from '../../src/map/addLayer';
import fillLayer from '../fixtures/fill-layer.json';
import circleLayer from '../fixtures/circle-layer.json';
import mapConfig from '../fixtures/map-config.json';
import fillLayerOutput from '../fixtures/outputs/fill-layer-output.json';
import circleLayerOutput from '../fixtures/outputs/circle-layer-output.json';


describe('addLayer', () => {
  test('should return correct layer object fill layer', () => {
    expect(addLayer(fillLayer, mapConfig)).toEqual(fillLayerOutput);
  });

  test('should return correct layer object circle layer', () => {
    expect(addLayer(circleLayer, mapConfig)).toEqual(circleLayerOutput);
  });
});
