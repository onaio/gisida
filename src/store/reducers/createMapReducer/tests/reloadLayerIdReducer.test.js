import reloadLayerIdReducer from './../reloadLayerIdReducer';
import { ADD_LAYER, RELOAD_LAYER, LAYER_RELOADED } from './../../../constants/actionTypes';
import { layer, mapId, layerId, layerId2, layer2 } from './common';

describe('reloadIdReducer', () => {
  it('should handle the initial state', () => {
    expect(reloadLayerIdReducer(undefined, {})).toEqual(null);
  });
  const state = {
    reloadLayerId: null,
    layers: {
      [layerId]: layer,
      [layerId2]: layer2,
    },
  };
  it('should handle ADD_LAYER', () => {
    const action = {
      type: ADD_LAYER,
      layer,
      mapId,
    };
    // Case 1: State is empty
    expect(() => {
      reloadLayerIdReducer({}, action);
    }).toThrow(TypeError);
    // Case 2: State is NOT empty
    // Case 2.1: state.layers[action.layer.id] is defined
    expect(reloadLayerIdReducer(state, action)).toEqual(action.layer.id);
    // Case 2.2: state.layers[action.layer.id] is undefined
    const stateLayerUndefined = {
      ...state,
      layers: {
        [layerId2]: layer2,
      },
    };
    expect(reloadLayerIdReducer(stateLayerUndefined, action)).toEqual(null);
  });

  it('should handle RELOAD_LAYER', () => {
    const action = {
      type: RELOAD_LAYER,
      layerId,
      mapId,
    };
    // Case 1: State is empty
    expect(reloadLayerIdReducer({}, action)).toEqual(action.layerId);
    // Case 2: State is NOT empty
    expect(reloadLayerIdReducer(state, action)).toEqual(action.layerId);
  });

  it('should handle LAYER_RELOADED', () => {
    const action = {
      type: LAYER_RELOADED,
      mapId,
    };
    // Case 1: State is empty
    expect(reloadLayerIdReducer({}, action)).toEqual(null);
    // Case 2: State is NOT empty
    expect(reloadLayerIdReducer(state, action)).toEqual(null);
  });
});
