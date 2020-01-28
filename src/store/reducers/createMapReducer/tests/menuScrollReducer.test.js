import menuScrollReducer from './../menuScrollReducer';
import { SET_MENU_SCROLL } from './../../../constants/actionTypes';
import { mapId } from './common';

describe('menuScrollReducer', () => {
  it('should handle the initial state', () => {
    expect(menuScrollReducer(undefined, {})).toEqual({
      scrollTop: 0,
    });
  });

  it('should handle SET_MENU_SCROLL', () => {
    const action = {
      type: SET_MENU_SCROLL,
      mapId,
      scrollTop: 57,
    };
    // Case 1: State is empty
    expect(menuScrollReducer({}, action)).toEqual({
      scrollTop: action.scrollTop,
    });
    const state = {
      scrollTop: 3,
    };

    // Case 1: State is NOT empty
    expect(menuScrollReducer(state, action)).toEqual({
      ...state,
      scrollTop: 57,
    });
  });
});
