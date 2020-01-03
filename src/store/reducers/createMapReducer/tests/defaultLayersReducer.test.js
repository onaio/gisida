import defaultLayersReducer from './../defaultLayersReducer';
import defaultState from './../../../../../src/store/defaultState';
import { ADD_LAYER } from './../../../constants/actionTypes';
import { layer, mapId, layerId, layerId2, layer2 } from './common';

describe('defaultLayersReducer', () => {
  it('should handle initial state', () => {
    expect(defaultLayersReducer(undefined, {})).toEqual(defaultState.MAP.defaultLayers);
  });

  it('it should handle ADD_LAYER', () => {
    const action = {
      type: ADD_LAYER,
      layer,
      mapId,
    };

    // Case 1: State is empty
    expect(() => {
      defaultLayersReducer({}, action);
    }).toThrow(TypeError);

    // Case 2: State empty is NOT empty
    // Case 2.1: state.layers[action.layer.id] is defined
    // Case 2.1.1: state.layers[some-other-layer-id].visible is true, nondefault is false
    const stateOld = {
      defaultLayers: [layerId, layerId2],
      layers: {
        [layerId]: layer,
        [layerId2]: layer2,
      },
    };
    expect(defaultLayersReducer(stateOld, action)).toEqual([layerId2]);
    // Case 2.1.2: state.layers[some-other-layerId].visible is false
    const stateVisibleFalse = {
      ...stateOld,
      layers: {
        ...stateOld.layers,
        [layerId2]: {
          ...stateOld.layers[layerId2],
          visible: false,
        },
      },
    };
    expect(defaultLayersReducer(stateVisibleFalse, action)).toEqual([]);
    // Case 2.1.3: state.layers[some-other-layerId].nondefault is true
    const stateNonDefault = {
      ...stateOld,
      layers: {
        ...stateOld.layers,
        [layerId2]: {
          ...stateOld.layers[layerId2],
          nondefault: true,
        },
      },
    };
    expect(defaultLayersReducer(stateNonDefault, action)).toEqual([]);
    // Case 2.2: state.layers[action.layer.id] is undefined
    // Case 2.2.1:: state.layers[some-other-layer-id].visible is true, nondefault is false
    const stateActionLayerUndefined = {
      ...stateOld,
      layers: {
        [layerId2]: layer2,
      },
    };
    expect(defaultLayersReducer(stateActionLayerUndefined, action)).toEqual([layerId2]);
    // Case 2.2.2: state.layers[some-other-layerId].visible is false
    const stateActionLayerUndefinedVisibleFalse = {
      ...stateActionLayerUndefined,
      layers: {
        ...stateActionLayerUndefined.layers,
        [layerId2]: {
          ...stateActionLayerUndefined.layers[layerId2],
          visible: false,
        },
      },
    };
    expect(defaultLayersReducer(stateActionLayerUndefinedVisibleFalse, action)).toEqual([]);
    // Case 2.2.3: state.layers[some-other-layerId].nondefault is true
    const stateActionLayerUndefinedNonDefault = {
      ...stateActionLayerUndefined,
      layers: {
        ...stateActionLayerUndefined.layers,
        [layerId2]: {
          ...stateActionLayerUndefined.layers[layerId2],
          nondefault: true,
        },
      },
    };
    expect(defaultLayersReducer(stateActionLayerUndefinedNonDefault, action)).toEqual([]);
  });
});
