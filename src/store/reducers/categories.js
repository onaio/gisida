import { BUILD_CATEGORIES } from '../constants/actionTypes';
import defaultState from '../defaultState';
import buildCategories from '../../utils/buildCategories';

export default function CATEGORIES(state = defaultState.CATEGORIES, action) {
  switch (action.type) {
    case BUILD_CATEGORIES: {
      const { groups, mapLayers } = action;
      return buildCategories(groups, mapLayers);
    }

    default:
      return state;
  }
}
