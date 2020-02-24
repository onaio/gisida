import reloadLayersReducer from './../reloadLayersReducer';
import {
  MAP_LOADED,
  RELOAD_LAYERS,
  ADD_LAYER,
  TOGGLE_LAYER,
  RECEIVE_DATA,
  UPDATE_TIMESERIES,
} from './../../../constants/actionTypes';
import { layer, mapId, layerId, layerId2, layer2, timeseries } from './common';

describe('reloadLayersReducer', () => {
  it('should return the initial state', () => {
    expect(reloadLayersReducer(undefined, {})).toEqual(false);
  });
  const state = {
    reloadLayers: false,
    layers: {
      [layerId]: layer,
      [layerId2]: layer2,
    },
  };
  it('should handle MAP_LOADED', () => {
    const action = {
      type: MAP_LOADED,
      isLoaded: true,
      mapId,
    };
    // Case 1: State is empty
    expect(reloadLayersReducer({}, action)).toEqual(true);
    // Case 2: State is NOT empty
    expect(reloadLayersReducer(state, action)).toEqual(true);
  });

  it('should handle RELOAD_LAYERS', () => {
    const action = {
      type: RELOAD_LAYERS,
      reload: Math.random(),
      mapId,
    };
    // Case 1: State is empty
    expect(reloadLayersReducer({}, action)).toEqual(action.reload);
    // Case 2: State is NOT empty
    expect(reloadLayersReducer(state, action)).toEqual(action.reload);
  });

  it('should handle ADD_LAYER', () => {
    const action = {
      type: ADD_LAYER,
      layer,
      mapId,
    };
    // Case 1: State is empty
    expect(() => {
      reloadLayersReducer({}, action);
    }).toThrow(TypeError);
    // Case 2: State is NOT empty
    // Case 2.1: state.layers[action.layer.id] is undefined
    const stateLayerUndefined = {
      ...state,
      layers: {
        [layerId2]: layer2,
      },
    };
    expect(reloadLayersReducer(stateLayerUndefined, action)).toEqual(
      stateLayerUndefined.reloadLayers
    );
    // Case 2.2: state.layers[action.layer.id] is defined
    expect(typeof reloadLayersReducer(state, action)).toBe('number');
  });

  it('should handle TOGGLE_LAYER', () => {
    const action = {
      type: TOGGLE_LAYER,
      layerId,
      isInit: true,
      mapId,
    };
    // Case 1: State is empty
    expect(typeof reloadLayersReducer({}, action)).toBe('number');
    // Case 2: State is NOT empty
    expect(typeof reloadLayersReducer(state, action)).toBe('number');
  });

  it('should handle RECEIVE_DATA', () => {
    const action = {
      type: RECEIVE_DATA,
      layer,
      timeseries,
      mapId,
    };
    // Case 1: State is empty
    expect(typeof reloadLayersReducer({}, action)).toBe('number');
    // Case 2: State is NOT empty
    expect(typeof reloadLayersReducer(state, action)).toBe('number');
  });

  it('should handle UPDATE_TIMESERIES', () => {
    const action = {
      type: UPDATE_TIMESERIES,
      timeseries,
      mapId,
      layerId,
    };
    // Case 1: State is empty
    expect(typeof reloadLayersReducer({}, action)).toBe('number');
    // Case 2: State is NOT empty
    expect(typeof reloadLayersReducer(state, action)).toBe('number');
  });
});
