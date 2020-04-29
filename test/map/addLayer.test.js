import addLayer from '../../src/map/addLayer';
import fillLayer from '../fixtures/fill-layer.json';
import circleLayer from '../fixtures/circle-layer.json';
import symbolLayer from '../fixtures/symbol-layer.json';
import lineLayer from '../fixtures/line-layer.json';
import mapConfig from '../fixtures/map-config.json';

describe('addLayer', () => {
  test('should return correct layer object fill layer', () => {
    // todo - break these layerObj tests into smaller chuncks (source.data, stops, etc)
    expect(addLayer(fillLayer, mapConfig)).toMatchSnapshot('fillLayerOutput');
  });

  test('should return correct layer object circle layer', () => {
    expect(addLayer(circleLayer, mapConfig)).toMatchSnapshot('circleLayerOutput');
  });

  test('should return correct layer object symbol layer', () => {
    expect(addLayer(symbolLayer, mapConfig)).toMatchSnapshot('symbolLayerOutput');
  });

  test('should return correct layer object line layer', () => {
    expect(addLayer(lineLayer, mapConfig)).toMatchSnapshot('lineLayerOutput');
  });
});
