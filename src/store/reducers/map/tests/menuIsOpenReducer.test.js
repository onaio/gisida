import menuIsOpenReducer from './../menuIsOpenReducer';
import { TOGGLE_MENU } from './../../../constants/actionTypes';
import { mapId } from './common';

describe('menuIsOpenReducer', () => {
  it('should handle the initial state', () => {
    expect(menuIsOpenReducer(undefined, {})).toEqual(true);
  });

  it('should handle TOGGLE_MENU', () => {
    const action = {
      type: TOGGLE_MENU,
      mapId,
    };
    const stateFalse = false;
    const stateTrue = true;
    expect(menuIsOpenReducer(stateFalse, action)).toEqual(true);
    expect(menuIsOpenReducer(stateTrue, action)).toEqual(false);
  });
});
