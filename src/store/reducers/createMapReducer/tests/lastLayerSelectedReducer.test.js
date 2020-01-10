import lastLayerSelected from './../lastLayerSelectedReducer';
import { TOGGLE_LAYER } from './../../../constants/actionTypes';
import { layerId, mapId, layer2, layerId2, layer } from './common';

describe('lastLayerSelectedReducer', () => {
  it('should handle the initial state', () => {
    expect(lastLayerSelected(undefined, {})).toEqual('');
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
      lastLayerSelected({}, action);
    }).toThrow(TypeError);

    // Case 2: State is NOT empty
    // Case 2.1: state.layers[action.layerId] is undefined
    expect(() => {
      lastLayerSelected(
        {
          ...state,
          layers: {},
        },
        action
      );
    }).toThrow(TypeError);

    // Case 2.2: state.layers[action.layerId] is defined
    // Case 2.2.1: action.isInit is true
    expect(lastLayerSelected(state, action)).toEqual(action.layerId);

    // Case 2.2:2 action.isInit is false
    const actionIsInitFalse = {
      ...action,
      isInit: false,
    };
    expect(lastLayerSelected(state, actionIsInitFalse)).toEqual(layerId2);
  });
});
