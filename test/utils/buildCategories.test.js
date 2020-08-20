import buildCategories from '../../src/utils/buildCategories';
import { LAYERS, layerCategories } from '../fixtures/layers';
import { MAP } from '../fixtures/mapObject';

describe('buildCategories', () => {
  test('Should return categories', () => {
    expect(buildCategories(LAYERS, MAP)).toEqual(layerCategories);
  });
});
