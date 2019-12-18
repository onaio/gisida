import layersReducer from './../layersReducer';
import defaultState from './../../../../../src/store/defaultState';
import {
  TOGGLE_LAYER,
  RECEIVE_DATA,
  REQUEST_DATA,
  SET_LAYER_FILTERS,
  ADD_LAYER,
  UPDATE_TIMESERIES,
} from './../../../constants/actionTypes';
import { layerId, mapId, layer2, layerId2, layer, timeseries } from './common';

describe('layersReducer', () => {
  it('should handle the initial state', () => {
    expect(layersReducer(undefined, {})).toEqual(defaultState.MAP.layers);
  });

  const state = {
    [layerId]: layer,
    [layerId2]: layer2,
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
      layersReducer({}, action);
    }).toThrow(TypeError);

    // Case 2: State is NOT empty
    // Case 2.1: action.isInit is true
    // Case 2.1.1: state[action.layerId].layers is undefined
    expect(layersReducer(state, action)).toEqual({
      ...state,
      [layerId]: {
        ...state[layerId],
        visible: state[layerId].visible,
      },
    });
    // Case 2.1.2: state[action.layerId].layers is defined
    const stateLayers = {
      ...state,
      [layerId]: {
        ...state[layerId],
        layers: [layerId2],
      },
    };
    expect(layersReducer(stateLayers, action)).toEqual({
      ...stateLayers,
      [layerId]: {
        ...stateLayers[layerId],
        visible: stateLayers[layerId].visible,
      },
      [layerId2]: {
        ...stateLayers[layerId2],
        visible: !stateLayers[layerId].visible,
        parent: stateLayers[layerId].id,
      },
    });

    // Case 2.2: action.isInit is false
    const actionIsInitFalse = {
      ...action,
      isInit: false,
    };
    // Case 2.2.1: state[action.layerId].layers is undefined
    expect(layersReducer(state, actionIsInitFalse)).toEqual({
      ...state,
      [layerId]: {
        ...state[layerId],
        visible: !state[layerId].visible,
      },
    });
    // Case 2.2.2: state[action.layerId].layers is defined
    expect(layersReducer(stateLayers, actionIsInitFalse)).toEqual({
      ...stateLayers,
      [layerId]: {
        ...stateLayers[layerId],
        visible: !stateLayers[layerId].visible,
      },
      [layerId2]: {
        ...stateLayers[layerId2],
        visible: !stateLayers[layerId].visible,
        parent: stateLayers[layerId].id,
      },
    });
  });

  it('should handle RECEIVE_DATA', () => {
    const action = {
      type: RECEIVE_DATA,
      layer,
      timeseries,
      mapId,
    };
    // Case 1: State is empty
    expect(layersReducer({}, action)).toEqual({
      [action.layer.id]: {
        ...action.layer,
        isLoading: false,
        loaded: true,
      },
    });

    // Case 2: State is NOT empty
    expect(layersReducer(state, action)).toEqual({
      ...state,
      [action.layer.id]: {
        ...state[action.layer.id],
        ...action.layer,
        isLoading: false,
        loaded: true,
      },
    });
  });

  it('should handle REQUEST_DATA', () => {
    const action = {
      type: REQUEST_DATA,
      layerId,
      mapId,
    };
    // Case 1: State is empty
    expect(layersReducer({}, action)).toEqual({
      [action.layerId]: {
        isLoading: true,
        loaded: false,
      },
    });

    // Case 2: State is NOT empty
    expect(layersReducer(state, action)).toEqual({
      ...state,
      [action.layerId]: {
        ...state[action.layerId],
        isLoading: true,
        loaded: false,
      },
    });
  });

  it('should handle SET_LAYERS_FILTERS', () => {
    const action = {
      type: SET_LAYER_FILTERS,
      layerId,
      layerFilters: ['all'],
      mapId,
    };
    // Case 1: State is empty
    expect(() => {
      layersReducer({}, action);
    }).toThrow(TypeError);

    // Case 2: State is NOT empty
    // Case 2.1: action.name is undefined
    expect(layersReducer(state, action)).toEqual({
      ...state,
      [action.layerId]: {
        ...state[action.layerId],
        filters: {
          ...state[action.layerId].filters,
          layerFilters: action.layerFilters,
        },
      },
    });
    // Case 2.2 action.name is defined
    const actionName = {
      ...action,
      name: 'awesome-name',
    };
    expect(layersReducer(state, actionName)).toEqual({
      ...state,
      [action.layerId]: {
        ...state[action.layerId],
        filters: {
          ...state[action.layerId].filters,
          [actionName.name]: action.layerFilters,
        },
      },
    });
  });

  it('should handle ADD_LAYER', () => {
    const action = {
      type: ADD_LAYER,
      layer,
      mapId,
    };
    // Case 1: State is empty
    expect(layersReducer({}, action)).toEqual({
      [action.layer.id]: {
        ...action.layer,
      },
    });

    // Case 2: State is not empty
    expect(layersReducer(state, action)).toEqual({
      ...state,
      [action.layer.id]: {
        ...action.layer,
      },
    });
  });

  it('should handle UPDATE_TIMESERIES', () => {
    const action = {
      type: UPDATE_TIMESERIES,
      timeseries,
      mapId,
      layerId,
    };
    // Case 1: State is empty
    expect(layersReducer({}, action)).toEqual({});

    // Case 2: State is NOT empty
    // Case 2.1: state.layers[action.layerId].filters.admin is undefined
    expect(layersReducer(state, action)).toEqual(state);
    // Case 2.2: state.layers[action.layerId].filters.admin is defined
    // Case 2.2.1: action.timeseries[action.layerId].adminFilter is defined
    const stateLayerFilterAdmin = {
      ...state,
      [layerId]: {
        ...state[layerId],
        filters: {
          ...state[layerId].filters,
          admin: ['item', 'item2'],
        },
      },
    };
    expect(layersReducer(stateLayerFilterAdmin, action)).toEqual({
      ...state,
      [action.layerId]: {
        ...state[action.layerId],
        filters: {
          ...state[action.layerId].filters,
          admin: [...action.timeseries[action.layerId].adminFilter],
        },
      },
    });
    // Case 2.2.2: action.timeseries[action.layerId].adminFilter is undefined
    const actionTimeSeriesAminFilterUndefined = {
      ...action,
      timeseries: {
        [layerId]: {},
      },
    };
    expect(layersReducer(stateLayerFilterAdmin, actionTimeSeriesAminFilterUndefined)).toEqual({
      ...state,
      [action.layerId]: {
        ...state[action.layerId],
        filters: {
          ...state[action.layerId].filters,
          admin: undefined,
        },
      },
    });
  });
});
