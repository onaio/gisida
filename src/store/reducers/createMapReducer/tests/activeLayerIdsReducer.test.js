import activeLayerIdsReducer from './../activeLayerIdsReducer';
import defaultState from './../../../../../src/store/defaultState';
import { TOGGLE_LAYER } from './../../../constants/actionTypes';
import { layerId, layerId2, layer, layer2, mapId } from './common';

describe('activeLayerIdsReducer', () => {
  const stateOld = {
    activeLayerIds: [layerId, layerId2],
    layers: {
      [layerId]: layer,
      [layerId2]: layer2,
    },
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
  });
});
