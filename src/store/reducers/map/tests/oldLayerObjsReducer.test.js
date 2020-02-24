import oldLayerObjsReducer from './../oldLayerObjsReducer';
import { RESET_FILTERED_LAYER } from './../../../constants/actionTypes';
import { mapId, layer, layer2, layerId2, layerId } from './common';

describe('oldLayerObjsReducer', () => {
  it('should handle the initial state', () => {
    expect(oldLayerObjsReducer(undefined, {})).toEqual({});
  });

  it('should handle RESET_FILTERED_LAYER', () => {
    const action = {
      type: RESET_FILTERED_LAYER,
      mapId,
      oldLayer: layer,
    };
    // Case 1: State is empty
    expect(oldLayerObjsReducer({}, action)).toEqual({
      [action.oldLayer.id]: {
        ...action.oldLayer,
      },
    });
    // Case 2: State is NOT empty
    const state = {
      [layerId2]: layer2,
    };
    // Case 2.1: state[action.oldLayer.id] is undefined
    expect(oldLayerObjsReducer(state, action)).toEqual({
      ...state,
      [action.oldLayer.id]: {
        ...action.oldLayer,
      },
    });
    // Case 2.2: state[action.oldLayer.id] is defined
    const stateLayerDefined = {
      ...state,
      [layerId]: layer,
    };
    expect(oldLayerObjsReducer(stateLayerDefined, action)).toEqual({
      ...stateLayerDefined,
      [action.oldLayer.id]: {
        ...action.oldLayer,
      },
    });
  });
});
