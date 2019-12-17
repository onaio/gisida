import layersReducer from './../layersReducer';
import defaultState from './../../../../../src/store/defaultState';
import { TOGGLE_LAYER } from './../../../constants/actionTypes';
import { layerId, mapId, layer2, layerId2, layer } from './common';

describe('layersReducer', () => {
  it('should handle the initial state', () => {
    expect(layersReducer(undefined, {})).toEqual(defaultState.MAP.layers);
  });

  const state = {
    [layerId]: layer,
    [layerId2]: layer2,
  };

  it('should handle TOGGLE_LAYER', () => {
    const action = {
      type: TOGGLE_LAYER,
      layerId,
      isInit: true,
      mapId,
    };
    // Case 1: State is empty
    expect(() => {
      layersReducer({}, action);
    }).toThrow(TypeError);

    // Case 2: State is NOT empty
    // Case 2.1: action.isInit is true
    // Case 2.1.1: state[action.layerId].layers is undefined
    expect(layersReducer(state, action)).toEqual({
      ...state,
      [layerId]: {
        ...state[layerId],
        visible: state[layerId].visible,
      },
    });
    // Case 2.1.2: state[action.layerId].layers is defined
    const stateLayers = {
      ...state,
      [layerId]: {
        ...state[layerId],
        layers: [layerId2],
      },
    };
    expect(layersReducer(stateLayers, action)).toEqual({
      ...stateLayers,
      [layerId]: {
        ...stateLayers[layerId],
        visible: stateLayers[layerId].visible,
      },
      [layerId2]: {
        ...stateLayers[layerId2],
        visible: !stateLayers[layerId].visible,
        parent: stateLayers[layerId].id,
      },
    });

    // Case 2.2: action.isInit is false
    const actionIsInitFalse = {
      ...action,
      isInit: false,
    };
    // Case 2.2.1: state[action.layerId].layers is undefined
    expect(layersReducer(state, actionIsInitFalse)).toEqual({
      ...state,
      [layerId]: {
        ...state[layerId],
        visible: !state[layerId].visible,
      },
    });
    // Case 2.2.2: state[action.layerId].layers is defined
    expect(layersReducer(stateLayers, action)).toEqual({
      ...stateLayers,
      [layerId]: {
        ...stateLayers[layerId],
        visible: stateLayers[layerId].visible,
      },
      [layerId2]: {
        ...stateLayers[layerId2],
        visible: !stateLayers[layerId].visible,
        parent: stateLayers[layerId].id,
      },
    });
  });
});
