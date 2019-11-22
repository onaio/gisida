import { TOGGLE_CATEGORIES } from '../../constants/actionTypes';
import defaultState from '../../defaultState';

function toggleCategories(categoriesState, action) {
  const { category, index, isRefresh } = action;
  const openCategories = [...categoriesState];
  if (index > -1) {
    openCategories.splice(index, 1);
  } else {
    openCategories.push(category);
  }
  return isRefresh ? [] : [...openCategories];
}

export default function categoriesReducer(
  categoriesState = defaultState.MAP.openCategories,
  action
) {
  switch (action.type) {
    case TOGGLE_CATEGORIES: {
      return toggleCategories(categoriesState, action);
    }
    default:
      return categoriesState;
  }
}
