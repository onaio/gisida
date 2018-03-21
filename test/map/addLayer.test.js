import addLayer from '../../src/map/addLayer';
import fillLayer from '../fixtures/fill-layer.json';
import circleLayer from '../fixtures/circle-layer.json';
import symbolLayer from '../fixtures/symbol-layer.json';
import lineLayer from '../fixtures/line-layer.json';
import mapConfig from '../fixtures/map-config.json';
import fillLayerOutput from '../fixtures/outputs/fill-layer-output.json';
import circleLayerOutput from '../fixtures/outputs/circle-layer-output.json';
import symbolLayerOutput from '../fixtures/outputs/symbol-layer-output.json';
import lineLayerOutput from '../fixtures/outputs/line-layer-output.json';

describe('addLayer', () => {
  test('should return correct layer object fill layer', () => {
    expect(addLayer(fillLayer, mapConfig)).toEqual(fillLayerOutput);
  });

  test('should return correct layer object circle layer', () => {
    expect(addLayer(circleLayer, mapConfig)).toEqual(circleLayerOutput);
  });

  test('should return correct layer object symbol layer', () => {
    expect(addLayer(symbolLayer, mapConfig)).toEqual(symbolLayerOutput);
  });

  test('should return correct layer object line layer', () => {
    expect(addLayer(lineLayer, mapConfig)).toEqual(lineLayerOutput);
  });
});
