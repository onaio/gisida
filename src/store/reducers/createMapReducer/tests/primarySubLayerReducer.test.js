import primarySubLayerReducer from './../primarySubLayerReducer';
import defaultState from './../../../../../src/store/defaultState';
import { TOGGLE_LAYER } from './../../../constants/actionTypes';
import { layerId, mapId, layer2, layerId2, layer } from './common';

describe('primarySubLayerReducer', () => {
  it('should handle the initial state', () => {
    expect(primarySubLayerReducer(undefined, {})).toEqual(defaultState.MAP.primarySubLayer);
  });

  it('should handle TOGGLE_LAYER', () => {
    const action = {
      type: TOGGLE_LAYER,
      layerId,
      isInit: true,
      mapId,
    };
    const state = {
      primarySubLayer: layerId,
      layers: {
        [layerId]: layer,
        [layerId2]: layer2,
      },
    };
    // Case 1: State is empty
    expect(() => {
      primarySubLayerReducer({}, action);
    }).toThrow(TypeError);

    // Case 2: State is NOT empty
    // Case 2.1: state.layers[action.layerId] is undefined
    expect(() => {
      primarySubLayerReducer(
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
    // Case 2.2.1: state.layers[action.layerId].visible is true
    // Case 2.2.1.1: state.layers[action.layerId].layers is undefined
    expect(primarySubLayerReducer(state, action)).toEqual(undefined);
    // Case 2.2.1.2: state.layers[action.layerId].layers is defined
    const stateLayerHasLayers = {
      ...state,
      layers: {
        ...state.layers,
        [layerId]: {
          ...state.layers[layerId],
          layers: [layerId2],
        },
      },
    };
    expect(primarySubLayerReducer(stateLayerHasLayers, action)).toEqual(undefined);
    // Case 2.2.2: state.layers[action.layerId].visible is false
    const stateVisibleFalse = {
      ...state,
      layers: {
        ...state.layers,
        [layerId]: {
          ...state.layers[layerId],
          visible: false,
        },
      },
    };
    // Case 2.2.2.1: state.layeres[action.layerId].layers is undefined
    expect(primarySubLayerReducer(stateVisibleFalse, action)).toEqual(undefined);
    // Case 2.2.2.2: state.layers[action.layerId].layers is defined
    const stateVisibleFalseLayerHasLayers = {
      ...stateVisibleFalse,
      layers: {
        ...stateVisibleFalse.layers,
        [layerId]: {
          ...stateVisibleFalse.layers[layerId],
          layers: [layerId2],
        },
      },
    };
    expect(primarySubLayerReducer(stateVisibleFalseLayerHasLayers, action)).toEqual(layerId2);
  });
});
