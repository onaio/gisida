import mapRenderedReducer from './../mapRenderedReducer';
import defaultState from './../../../../../src/store/defaultState';
import { MAP_RENDERED } from './../../../constants/actionTypes';
import { mapId } from './common';

describe('mapLoadedReducer', () => {
  it('should handle the initial state', () => {
    expect(mapRenderedReducer(undefined, {})).toEqual(defaultState.MAP.isRendered);
  });

  it('should handle MAP_LOADED', () => {
    const action = {
      type: MAP_RENDERED,
      isRendered: true,
      mapId,
    };
    const state = false;
    expect(mapRenderedReducer(state, action)).toEqual(action.isRendered);
  });
});
