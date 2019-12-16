import filterReducer from './../filterReducer';
import defaultState from './../../../../../src/store/defaultState';
import { TOGGLE_LAYER } from './../../../constants/actionTypes';
import { layerId, mapId, layer2, layerId2, layer } from './common';

describe('filterReducer', () => {
  it('should handle the initial state', () => {
    expect(filterReducer(undefined, {})).toEqual(defaultState.MAP.filter);
  });
  const state = {
    filter: {
      layerId,
    },
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
      filterReducer({}, action);
    }).toThrow(TypeError);

    // Case 2: State is NOT empty
    // Case 2.1: state.layers[action.layerId] is undefined
    expect(() => {
      filterReducer(
        {
          ...state,
          layers: {},
        },
        action
      );
    }).toThrow(TypeError);
    // Case 2.2: state.layers[action.layerId] is defined
    // Case 2.2.1: state.layers[action.layerId].parent is defined
    const stateParent = {
      ...state,
      layers: {
        [layerId]: {
          ...layer,
          parent: 'parent-layer-id',
        },
      },
    };
    expect(filterReducer(stateParent, action)).toEqual();
  });
});
