import { CHANGE_STYLE } from '../../constants/actionTypes';
import defaultState from '../../defaultState';

function changeStyle(action) {
  return action.style;
}

export default function currentStyleReducer(
  currentStyleState = defaultState.MAP.currentStyle,
  action
) {
  switch (action.type) {
    case CHANGE_STYLE: {
      return changeStyle(action);
    }
    default:
      return currentStyleState;
  }
}
