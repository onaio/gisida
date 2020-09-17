import { TOGGLE_CATEGORIES, TOGGLE_GROUPS } from '../../constants/actionTypes';

/**
 * Toggle open and close status of menu categories and groups levels
 * @param {array} state - An array of categories or groups
 * @param {*} action - Action to update the state
 * @returns {array} - Updated state
 */
function toggleLevel(state, action) {
  const { category, group, index, isRefresh, parent } = action;

  if (isRefresh) {
    return [];
  }

  const openLevels = [...state];

  if (index > -1) {
    openLevels.splice(index, 1);
  } else if (group) {
    openLevels.push({
      parent,
      group,
    });
  } else if (category) {
    openLevels.push(category);
  }
  return openLevels;
}

/**
 * Slice reducer to handle the state of open menu categories and groups
 * @param {array} state The current state of the reducer
 * @param {*} action The dispatched action used to set the state of the reducer
 * @returns {array} The updated state of the reducer
 */
export default function openMenuLevelsReducer(state = [], action) {
  switch (action.type) {
    case TOGGLE_CATEGORIES: {
      return toggleLevel(state, action);
    }
    case TOGGLE_GROUPS: {
      return toggleLevel(state, action);
    }

    default:
      return state;
  }
}
