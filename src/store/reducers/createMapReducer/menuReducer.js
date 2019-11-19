import { TOGGLE_MENU } from '../../constants/actionTypes';
import defaultState from '../../defaultState';

export default function menuReducer(menuState = defaultState.MAP.menuIsOpen, action) {
  switch (action.type) {
    case TOGGLE_MENU: {
      return !menuState;
    }
    default:
      return menuState;
  }
}
