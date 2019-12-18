import mapLoadedReducer from './../mapLoadedReducer';
import defaultState from './../../../../../src/store/defaultState';
import { MAP_LOADED } from './../../../constants/actionTypes';
import { mapId } from './common';

describe('mapLoadedReducer', () => {
  it('should handle the initial state', () => {
    expect(mapLoadedReducer(undefined, {})).toEqual(defaultState.MAP.isLoaded);
  });

  it('should handle MAP_LOADED', () => {
    const action = {
      type: MAP_LOADED,
      isLoaded: true,
      mapId,
    };
    const state = false;
    expect(mapLoadedReducer(state, action)).toEqual(action.isLoaded);
  });
});
