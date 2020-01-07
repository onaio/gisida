import { TOGGLE_CATEGORIES, TOGGLE_GROUPS } from '../../constants/actionTypes';

function toggleLevel(state, action) {
  const { category, group, index, isRefresh } = action;
  const level = category || group;

  if (isRefresh) {
    return [];
  }

  const openLevels = [...state];

  if (index > -1) {
    openLevels.splice(index, 1);
  } else {
    openLevels.push(level);
  }
  return openLevels;
}

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
