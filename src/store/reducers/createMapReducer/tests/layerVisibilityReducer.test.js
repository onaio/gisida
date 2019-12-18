import layerVisibilityReducer from './../layerVisibilityReducer';
import defaultState from './../../../../../src/store/defaultState';
import { TOGGLE_LAYER, RECEIVE_DATA } from './../../../constants/actionTypes';
import { layerId, mapId, layer2, layerId2, layer, timeseries } from './common';

describe('layerVisiblityReducer', () => {
  it('should handle the initial state', () => {
    expect(layerVisibilityReducer(undefined, {})).toEqual(defaultState.MAP.visibleLayerId);
  });
  const state = {
    visibleLayerId: layerId,
    layers: {
      [layerId]: layer,
      [layerId2]: layer2,
    },
    activeLayerIds: [layerId, layerId2],
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
      layerVisibilityReducer({}, action);
    }).toThrow(TypeError);

    // Case 2: State is NOT empty
    // Case 2.1: state.layers[action.layerId] is undefined
    expect(() => {
      layerVisibilityReducer(
        {
          ...state,
          layers: {
            [layerId2]: layer2,
          },
        },
        action
      );
    }).toThrow(TypeError);
    // Case 2.2: state.layers[action.layerId] is defined
    // Case 2.2.1: action.isInit is true
    // Case 2.2.1.1: state.layers[action.layerId].credit is defined
    expect(layerVisibilityReducer(state, action)).toEqual(action.layerId);
    // Case 2.2.1.2: state.layers[action.layerId].credit is undefined
    const stateLayerCreditUndfined = {
      ...state,
      layers: {
        ...state.layers,
        [layerId]: {
          ...state.layers[layerId],
          credit: undefined,
        },
      },
    };
    expect(layerVisibilityReducer(stateLayerCreditUndfined, action)).toEqual(layerId2);
    // Case 2.2.2: action.isInit is false
    const actionIsInitFalse = {
      ...action,
      isInit: false,
    };
    // Case 2.2.2.1: state.layers[action.layerId].credit is defined
    expect(layerVisibilityReducer(state, actionIsInitFalse)).toEqual(layerId2);
    // Case 2.2.2.2: state.layers[action.layerId].credit is undefined
    expect(layerVisibilityReducer(stateLayerCreditUndfined, actionIsInitFalse)).toEqual(layerId2);
  });

  it('should handle RECEIVE_DATA', () => {
    const action = {
      type: RECEIVE_DATA,
      layer,
      timeseries,
      mapId,
    };

    // Case 1: State is empty
    expect(layerVisibilityReducer({}, action)).toEqual(action.layer.id);
    // Case 2: State is NOT empty
    expect(layerVisibilityReducer(state, action)).toEqual(action.layer.id);
  });
});
