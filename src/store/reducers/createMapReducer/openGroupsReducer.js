import { TOGGLE_GROUPS } from '../../constants/actionTypes';
import defaultState from '../../defaultState';

function toggleGroups(groupState, action) {
  const { group, index, isRefresh } = action;
  const openGroups = [...groupState];
  if (index > -1) {
    openGroups.splice(index, 1);
  } else {
    openGroups.push(group);
  }
  return isRefresh ? [] : [...openGroups];
}

export default function openGroupsReducer(groupState = defaultState.MAP.openGroups, action) {
  switch (action.type) {
    case TOGGLE_GROUPS: {
      return toggleGroups(groupState, action);
    }
    default:
      return groupState;
  }
}
