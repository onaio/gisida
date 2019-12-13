import { SET_MENU_SCROLL } from '../../constants/actionTypes';
import defaultState from '../../defaultState';

function setMenuScroll(state, action) {
  const { scrollTop } = action;

  return {
    ...state,
    scrollTop,
  };
}

export default function menuReducer(state = defaultState.MAP.menuScroll, action) {
  switch (action.type) {
    case SET_MENU_SCROLL: {
      return setMenuScroll(state, action);
    }
    default:
      return state;
  }
}
