import primaryLayerReducer from './../primaryLayerReducer';
import defaultState from './../../../../../src/store/defaultState';
import { TOGGLE_LAYER, UPDATE_PRIMARY_LAYER } from './../../../constants/actionTypes';
import { layerId, mapId, layer2, layerId2, layer } from './common';

describe('primaryLayerReducer', () => {
  it('should handle the initial state', () => {
    expect(primaryLayerReducer(undefined, {})).toEqual(defaultState.MAP.primaryLayer);
  });
  const state = {
    primaryLayer: layerId,
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
      primaryLayerReducer({}, action);
    }).toThrow(TypeError);

    // Case 2: State is NOT empty
    // Case 2.1: state.layers[action.layerId] is undefined
    expect(() => {
      primaryLayerReducer(
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
    expect(primaryLayerReducer(state, action)).toEqual(action.layerId);
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
    expect(primaryLayerReducer(stateLayerCreditUndfined, action)).toEqual(layerId2);
    // Case 2.2.2: action.isInit is false
    const actionIsInitFalse = {
      ...action,
      isInit: false,
    };
    // Case 2.2.2.1: state.layers[action.layerId].credit is defined
    expect(primaryLayerReducer(state, actionIsInitFalse)).toEqual(layerId2);
    // Case 2.2.2.2: state.layers[action.layerId].credit is undefined
    expect(primaryLayerReducer(stateLayerCreditUndfined, actionIsInitFalse)).toEqual(layerId2);
  });

  it('should handle UPDATE_PRIMARY_LAYER', () => {
    const action = {
      type: UPDATE_PRIMARY_LAYER,
      primaryLayer: layerId,
      mapId,
    };
    // Case 1: State is empty
    expect(primaryLayerReducer({}, action)).toEqual(action.primaryLayer);
    // Case 2: State is NOT empty
    expect(primaryLayerReducer(state, action)).toEqual(action.primaryLayer);
  });
});
