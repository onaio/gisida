import { CHANGE_STYLE } from '../../constants/actionTypes';
import defaultState from '../../defaultState';

export default function currentStyleReducer(
  currentStyleState = defaultState.MAP.currentStyle,
  action
) {
  switch (action.type) {
    case CHANGE_STYLE: {
      return action.style;
    }
    default:
      return currentStyleState;
  }
}
