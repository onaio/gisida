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
    layers: {},
    activeLayerIds: [],
  };
  const stateOldLayersNotEmpty = {
    ...stateOld,
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
      activeLayerIdReducer({}, action);
    }).toThrow(TypeError);

    // Case 2.2: state.layers[action.layerId] is defined
    // Case 2.1.1: state.layers[action.layerId].visible is false
    expect(
      activeLayerIdReducer(
        {
          ...stateOldLayersNotEmpty,
          layers: {
            ...stateOldLayersNotEmpty.layers,
            [layerId]: {
              ...stateOldLayersNotEmpty.layers.layerId,
              visible: false,
            },
          },
        },
        action
      )
    ).toEqual(undefined);

    // Case 2.1.1: action.isInit is false
    const actionIsInitFalse = {
      ...action,
      isInit: false,
    };
    expect(activeLayerIdReducer(stateOldLayersNotEmpty, actionIsInitFalse)).toEqual(undefined);
  });
});
