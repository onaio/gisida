import { TOGGLE_MENU } from '../../constants/actionTypes';
import defaultState from '../../defaultState';

function toggleMenu(menuState) {
  return !menuState;
}

export default function menuReducer(menuState = defaultState.MAP.menuIsOpen, action) {
  switch (action.type) {
    case TOGGLE_MENU: {
      return toggleMenu(menuState);
    }
    default:
      return menuState;
  }
}
