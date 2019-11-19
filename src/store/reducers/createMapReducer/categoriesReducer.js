import { TOGGLE_CATEGORIES } from '../../constants/actionTypes';
import defaultState from '../../defaultState';

export default function categoriesReducer(
  categoriesState = defaultState.MAP.openCategories,
  action
) {
  switch (action.type) {
    case TOGGLE_CATEGORIES: {
      const { category, index, isRefresh } = action;
      const openCategories = [...categoriesState];
      if (index > -1) {
        openCategories.splice(index, 1);
      } else {
        openCategories.push(category);
      }
      return isRefresh ? [] : [...openCategories];
    }
    default:
      return categoriesState;
  }
}
