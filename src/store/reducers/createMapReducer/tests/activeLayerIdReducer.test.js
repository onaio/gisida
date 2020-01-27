import activeLayerIdReducer from './../activeLayerIdReducer';
import { TOGGLE_LAYER, UPDATE_PRIMARY_LAYER, ADD_LAYER } from './../../../constants/actionTypes';
import { mapId, layerId, layer, layerId2, layer2 } from './common';

describe('activeLayerIdReducer', () => {
  const stateOld = {
    activeLayerId: 'layer-id',
    layers: {
      [layerId]: layer,
      [layerId2]: layer2,
    },
    activeLayerIds: [layerId, layerId2],
  };

  it('should return the initial state', () => {
    expect(activeLayerIdReducer(undefined, {})).toEqual('');
  });

  it('should handle TOGGLE_LAYER', () => {
    const isInit = true;
    const action = {
      type: TOGGLE_LAYER,
      layerId,
      isInit,
      mapId,
    };

    // Case 1: The state object is empty
    expect(() => {
      activeLayerIdReducer({}, action);
    }).toThrow(TypeError);

    // Case 2: The state obj is not empty
    // Case 2.1: state.layers[action.layerId] is undefined
    expect(() => {
      activeLayerIdReducer(
        {
          ...stateOld,
          layers: {},
        },
        action
      );
    }).toThrow(TypeError);

    // Case 2.2: state.layers[action.layerId] is defined
    // Case 2.2.1: action.isInit is true
    // Case 2.2.1.1: state.layers[action.layerId].type is NOT line
    expect(activeLayerIdReducer(stateOld, action)).toEqual(layerId);
    // Case 2.2.1.2: state.layers[action.layerId].type is line
    const stateLine = {
      ...stateOld,
      layers: {
        ...stateOld.layers,
        [layerId]: {
          ...stateOld.layers[layerId],
          type: 'line',
        },
      },
    };
    expect(activeLayerIdReducer(stateLine, action)).toEqual(layerId2);

    // Case 2.2.2: action.isInit is false
    const actionIsinitFalse = {
      ...action,
      isInit: false,
    };
    // Case 2.2.2.1: state.layers[action.layerId].type is NOT line
    expect(activeLayerIdReducer(stateOld, actionIsinitFalse)).toEqual(layerId2);
    // Case 2.2.2.2: state.layers[action.layerId].type is line
    expect(activeLayerIdReducer(stateLine, actionIsinitFalse)).toEqual(layerId2);
  });

  it('should handle UPDATE_PRIMARY_LAYER', () => {
    const action = {
      type: UPDATE_PRIMARY_LAYER,
      primaryLayer: layerId,
      mapId,
    };
    // Case 1: The state obj is empty
    expect(activeLayerIdReducer({}, action)).toEqual(action.primaryLayer);

    // Case 2: The state obj is NOT empty
    expect(activeLayerIdReducer(stateOld, action)).toEqual(action.primaryLayer);
  });

  it('should handle ADD_LAYER', () => {
    const action = {
      type: ADD_LAYER,
      layer,
      mapId,
    };

    // Case 1: The state obj is empty
    expect(activeLayerIdReducer({}, action)).toEqual(action.layer.id);

    // Case 2: The state obj is NOT empty
    expect(activeLayerIdReducer(stateOld, action)).toEqual(action.layer.id);
  });
});
