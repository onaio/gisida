import { BUILD_CATEGORIES } from '../constants/actionTypes';
import defaultState from '../defaultState';
import buildCategories, { parseCategories } from '../../utils/buildCategories';

export default function CATEGORIES(state = defaultState.CATEGORIES, action) {
  switch (action.type) {
    case BUILD_CATEGORIES: {
      const { groups, mapLayers } = action;
      const categories = buildCategories(groups, mapLayers);
      return parseCategories(categories);
    }

    default:
      return state;
  }
}
