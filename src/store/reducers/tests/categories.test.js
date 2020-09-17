import CATEGORIES from '../categories';
import { BUILD_CATEGORIES } from '../../constants/actionTypes';
import { LAYERS, layerCategories, layerCategories2 } from '../../../../test/fixtures/layers';
import { MAP } from '../../../../test/fixtures/mapObject';

it('should return the initial state', () => {
  expect(CATEGORIES(undefined, {})).toEqual([]);
});

it('should handle BUILD_CATEGORIES', () => {
  const action = {
    type: BUILD_CATEGORIES,
    groups: LAYERS.groups,
    mapLayers: MAP.layers,
  };
  // Casse 1: State is empty
  expect(CATEGORIES([], action)).toEqual(layerCategories);

  // Case 2: State is not empty
  expect(CATEGORIES(layerCategories2, action)).toEqual(layerCategories);
});
