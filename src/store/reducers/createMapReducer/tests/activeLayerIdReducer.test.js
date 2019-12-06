import activeLayerIdReducer from './../activeLayerIdReducer';
import defaultState from './../../../../../src/store/defaultState';
import { TOGGLE_LAYER, UPDATE_PRIMARY_LAYER, ADD_LAYER } from './../../../constants/actionTypes';

const mapId = 'map-1';
const layerId = 'test-layer';
const layer = {
  id: layerId,
  visible: true,
  nondefault: true,
};

describe('activeLayerIdReducer', () => {
  const stateOld = {
    activeLayerId: 'layer-id',
    layers: {
      [layerId]: layer,
    },
    activeLayerIds: [layerId],
  };

  it('should return the initial state', () => {
    expect(activeLayerIdReducer(undefined, {})).toEqual(defaultState.MAP.activeLayerId);
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
    // Case 2.2.1.1: state.layers[action.layerId].visible is true
    // Case 2.2.1.1.1: state.activeLayerIds includes action.layerId
    // Case 2.2.1.1.1.1: state.layers[action.layerId].type is NOT line
    expect(activeLayerIdReducer(stateOld, action)).toEqual(layerId);

    // Case 2.2.1.1.1.2: state.layers[action.layerId].type is line
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
    expect(activeLayerIdReducer(stateLine, action)).toEqual(layerId);

    // Case 2.2.1.1.2: state.activeLayerIds DOES NOT includes action.layerId
    // Case 2.2.1.1.2.1 state.layers[action.layerId] type is NOT line
    const stateNotInActiveLayerIds = {
      ...stateOld,
      activeLayerIds: ['layer2'],
    };
    expect(activeLayerIdReducer(stateNotInActiveLayerIds, action)).toEqual(layerId);

    const stateLineNotInActiveLayerIds = {
      ...stateLine,
      activeLayerIds: ['layer2'],
    };
    // Case 2.2.1.1.2.2: state.layers[action.layerId] type is line
    expect(activeLayerIdReducer(stateLineNotInActiveLayerIds, action)).toEqual(layerId);

    // Case 2.2.1.2: state.layers[action.layerId].visible is false
    // Case 2.2.1.2.1: state.activeLayerIds includes action.layerId
    // Case 2.2.1.2.1.1: state.layers[action.layerId].type is NOT line
    const stateVisibleFalse = {
      ...stateOld,
      layers: {
        ...stateOld.layers,
        [layerId]: {
          ...stateOld.layers[layerId],
          visible: false,
        },
      },
    };
    expect(activeLayerIdReducer(stateVisibleFalse, action)).toEqual(undefined);
    // Case 2.2.1.2.1.2: state.layers[action.layerId].type is line
    const stateVisibleFalseLine = {
      ...stateVisibleFalse,
      layers: {
        ...stateVisibleFalse.layers,
        [layerId]: {
          ...stateVisibleFalse.layers[layerId],
          type: 'line',
        },
      },
    };
    expect(activeLayerIdReducer(stateVisibleFalseLine, action)).toEqual(undefined);
    // Case 2.2.1.2.2: state.activeLayerIds DOES NOT includes action.layerId
    // Case 2.2.1.2.2.1: state.layers[action.layerId].type is NOT line
    const stateVisibleFalseNotInActiveLayerIds = {
      ...stateVisibleFalse,
      activeLayerIds: ['layer2', 'layer3'],
    };

    expect(activeLayerIdReducer(stateVisibleFalseNotInActiveLayerIds, action)).toEqual('layer3');
    // Case 2.2.1.2.2.2: state.layers[action.layerId].type is line
    const stateVisibleFalseNotInActiveLayerIdsLine = {
      ...stateVisibleFalseNotInActiveLayerIds,
      layers: {
        ...stateVisibleFalseNotInActiveLayerIds.layers,
        [layerId]: {
          ...stateVisibleFalseNotInActiveLayerIds.layers[layerId],
          type: 'line',
        },
      },
    };
    expect(activeLayerIdReducer(stateVisibleFalseNotInActiveLayerIdsLine, action)).toEqual(
      'layer3'
    );

    // Case 2.2.2: action.isInit is false
    // Case 2.2.2.1: state.layers[action.layerId].visible is true
    // Case 2.2.2.1.1: state.activeLayerIds includes action.layerId
    // Case 2.2.2.1.1.1: state.layers[action.layerId].type is NOT line
    const actionIsInitFalse = {
      ...action,
      isInit: false,
    };
    expect(activeLayerIdReducer(stateOld, actionIsInitFalse)).toEqual(undefined);

    // Case 2.2.2.1.1.2: state.layers[action.layerId] type is line
    expect(activeLayerIdReducer(stateLine, actionIsInitFalse)).toEqual(undefined);

    // Case 2.2.2.1.2: state.activeLayerIds does NOT include action.layerId
    // Case 2.2.2.1.2.1: state.layers[action.layerId].type is NOT line
    expect(activeLayerIdReducer(stateNotInActiveLayerIds, actionIsInitFalse)).toEqual('layer2');

    // Case 2.2.2.1.2.2: state.layers[action.layerId].type is line
    expect(activeLayerIdReducer(stateLineNotInActiveLayerIds, actionIsInitFalse)).toEqual('layer2');

    // Case 2.2.2.2: state.layers[action.layerId].visible false
    // Case 2.2.2.2.1: state.activeLayerIds includes action.layerId
    // Case 2.2.2.2.1.1: state.layers[action.layerId].type is NOT line
    expect(activeLayerIdReducer(stateVisibleFalse, actionIsInitFalse)).toEqual(layerId);

    // Case 2.2.2.2.1.2: state.layers[action.layerId] type is line
    expect(activeLayerIdReducer(stateVisibleFalseLine, actionIsInitFalse)).toEqual(layerId);

    // Case 2.2.2.2.2: state.activeLayerIds does NOT include action.layerId
    // Case 2.2.2.2.2.1: state.layers[action.layerId].type is NOT line
    expect(activeLayerIdReducer(stateVisibleFalseNotInActiveLayerIds, actionIsInitFalse)).toEqual(
      layerId
    );
    // Case 2.2.2.2.2.2: state.layers[action.layerId] type is line
    expect(
      activeLayerIdReducer(stateVisibleFalseNotInActiveLayerIdsLine, actionIsInitFalse)
    ).toEqual(layerId);
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
