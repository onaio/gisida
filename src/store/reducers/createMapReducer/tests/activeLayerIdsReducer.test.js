import activeLayerIdsReducer from './../activeLayerIdsReducer';
import defaultState from './../../../../../src/store/defaultState';
import { TOGGLE_LAYER, UPDATE_PRIMARY_LAYER } from './../../../constants/actionTypes';
import { layerId, layerId2, layer, layer2, mapId } from './common';

describe('activeLayerIdsReducer', () => {
  const stateOld = {
    activeLayerIds: [layerId, layerId2],
    layers: {
      [layerId]: layer,
      [layerId2]: layer2,
    },
  };
  const stateNotInActiveLayerIds = {
    ...stateOld,
    activeLayerIds: [layerId2],
  };

  it('should return the initial state', () => {
    expect(activeLayerIdsReducer(undefined, {})).toEqual(defaultState.MAP.activeLayerIds);
  });

  it('should handle TOGGLE_LAYER', () => {
    const action = {
      type: TOGGLE_LAYER,
      layerId,
      isInit: true,
      mapId,
    };
    // Case 1: The state obj is empty
    expect(() => {
      activeLayerIdsReducer({}, action);
    }).toThrow(TypeError);

    // Case 2: The state is NOT empty
    // Case 2.1: state.layers[action.layerId] is undefined
    expect(() => {
      activeLayerIdsReducer(
        {
          ...stateOld,
          layers: {},
        },
        action
      );
    }).toThrow(TypeError);
    // Case 2.2: state.layers[action.layerId] is defined
    // Case 2.2.1: state.layers[action.layerId].parent is defined
    const stateParent = {
      ...stateOld,
      layers: {
        [layerId]: {
          ...layer,
          parent: 'parent-layer-id',
        },
      },
    };
    expect(activeLayerIdsReducer(stateParent, action)).toEqual(stateOld.activeLayerIds);
    // Case 2.2.2: state.layers[action.layerId].parent is undefined

    // Case 2.2.2.1: action.isInit is true
    // Case 2.2.2.1.1: state.layers[action.layerId].visible is true
    // Case 2.2.2.1.1.1: state.activeLayerIds includes action.layerId
    expect(activeLayerIdsReducer(stateOld, action)).toEqual(stateOld.activeLayerIds);
    // Case 2.2.1.1.1.2: state.activeLayerIds DOES NOT includes action.layerId
    expect(activeLayerIdsReducer(stateNotInActiveLayerIds, action)).toEqual([
      ...stateNotInActiveLayerIds.activeLayerIds,
      action.layerId,
    ]);

    // Case 2.2.2.1.2: state.layers[action.layerId].visible is false
    // Case 2.2.1.1.2.1: state.activeLayerIds includes action.layerId
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
    expect(activeLayerIdsReducer(stateVisibleFalse, action)).toEqual([layerId2]);
    // Case 2.2.1.1.2.2: state.activeLayerIds DOES NOT include action.layerId
    const stateVisibleFalseNotInActiveLayerIds = {
      ...stateVisibleFalse,
      activeLayerIds: [layerId2],
    };
    expect(activeLayerIdsReducer(stateVisibleFalseNotInActiveLayerIds, action)).toEqual(
      stateVisibleFalseNotInActiveLayerIds.activeLayerIds
    );

    // Case 2.2.2.2: action.isInit is false
    // Case 2.2.2.2.1: state.layers[action.layerId].visible is true
    // Case 2.2.2.2.1.1: state.activeLayerIds includes action.layerId
    const actionIsInitFalse = {
      ...action,
      isInit: false,
    };
    expect(activeLayerIdsReducer(stateOld, actionIsInitFalse)).toEqual([layerId2]);
    // Case 2.2.2.2.1.2: state.activeLayerIds does NOT include action.layerId
    expect(activeLayerIdsReducer(stateNotInActiveLayerIds, actionIsInitFalse)).toEqual(
      stateNotInActiveLayerIds.activeLayerIds
    );
    // Case 2.2.2.2.2: state.layers[action.layerId].visible false
    // Case 2.2.2.2.2.1: state.activeLayerIds includes action.layerId
    expect(activeLayerIdsReducer(stateVisibleFalse, actionIsInitFalse)).toEqual(
      stateVisibleFalse.activeLayerIds
    );
    // Case 2.2.2.2.2.2: state.activeLayerIds does NOT include action.layerId
    expect(activeLayerIdsReducer(stateVisibleFalseNotInActiveLayerIds, actionIsInitFalse)).toEqual([
      ...stateVisibleFalseNotInActiveLayerIds.activeLayerIds,
      action.layerId,
    ]);
  });

  it('should handle UPDATE_PRIMARY_LAYER', () => {
    const action = {
      type: UPDATE_PRIMARY_LAYER,
      primaryLayer: layerId,
      mapId,
    };

    // Case 1: The state object is empty
    expect(() => {
      activeLayerIdsReducer({}, action);
    }).toThrow(TypeError);

    // Case 2: The state obj is not empty
    // Case 2.1: action.primaryLayer !== state.activeLayerIds[state.activeLayerIds.length - 1]
    // Case 2.1.1: state.activeLayerIds includes action.primaryLayer
    expect(activeLayerIdsReducer(stateOld, action)).toEqual([layerId2, layerId]);
    // Case 2.1.2: state.activeLayerIds DOES not include action.primaryLayer
    expect(activeLayerIdsReducer(stateNotInActiveLayerIds, action)).toEqual(
      stateNotInActiveLayerIds.activeLayerIds
    );
    // Case 2.2: action.primaryLayer === state.activeLayerIds[state.activeLayerIds.length - 1]
    const stateLastActiveLayerIds = {
      ...stateOld,
      activeLayerIds: [layerId2, layerId],
    };
    expect(activeLayerIdsReducer(stateLastActiveLayerIds, action)).toEqual(
      stateLastActiveLayerIds.activeLayerIds
    );
  });
});
