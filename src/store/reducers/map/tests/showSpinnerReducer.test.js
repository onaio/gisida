import showSpinnerReducer from './../showSpinnerReducer';
import {
  TOGGLE_LAYER,
  REQUEST_DATA,
  RECEIVE_DATA,
  TRIGGER_SPINNER,
} from './../../../constants/actionTypes';
import { mapId, layerId, layer, layerId2, layer2, timeseries } from './common';

describe('showSpinnerReducer', () => {
  it('should handle the initial state', () => {
    expect(showSpinnerReducer(undefined, {})).toEqual(false);
  });
  const state = {
    showSpinner: true,
    layers: {
      [layerId]: layer,
      [layerId2]: layer2,
    },
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
      showSpinnerReducer({}, action);
    }).toThrow(TypeError);
    // Case 2: State is NOT empty
    // Case 2.1: state.layers[action.layerId] is undefined
    expect(() => {
      showSpinnerReducer(
        {
          ...state,
          layers: {},
        },
        action
      );
    }).toThrow(TypeError);
    // Case 2.2 state.layers[action.layerId] is defined
    // Case 2.1: action.isInit is true
    // Case 2.1.1: state.layers[action.layerId].loaded is false
    expect(showSpinnerReducer(state, action)).toEqual(true);
    // Case 2.1.2: state.layers[action.layerId].loaded is true
    const stateIsLoaded = {
      ...state,
      layers: {
        ...state.layers,
        [layerId]: {
          ...state.layers[layerId],
          loaded: true,
        },
      },
    };
    expect(showSpinnerReducer(stateIsLoaded, action)).toEqual(false);
    // Case 2.2: action.isInit is false
    // Case 2.2.1: state.layers[action.layerId].loaded is false
    const actionIsInitFalse = {
      ...action,
      isInit: false,
    };
    expect(showSpinnerReducer(state, actionIsInitFalse)).toEqual(false);
    // Case 2.2.2: state.layers[action.layerId].loaded is true
    expect(showSpinnerReducer(stateIsLoaded, actionIsInitFalse)).toEqual(false);
  });
  it('should handle REQUEST_DATA', () => {
    const action = {
      type: REQUEST_DATA,
      layerId,
      mapId,
    };
    // Case 1: State is empty
    expect(showSpinnerReducer({}, action)).toEqual(true);
    // Case 2: State is NOT empty
    expect(showSpinnerReducer(state, action)).toEqual(true);
  });

  it('should handle RECEIVE_DATA', () => {
    const action = {
      type: RECEIVE_DATA,
      layer,
      timeseries,
      mapId,
    };
    // Case 1: State is empty
    expect(() => {
      showSpinnerReducer({}, action);
    }).toThrow(TypeError);
    // Case 2: State is NOT empty
    expect(showSpinnerReducer(state, action)).toEqual(false);
  });

  it('should handle TRIGGER_SPINNER', () => {
    const action = {
      type: TRIGGER_SPINNER,
      isLoaded: false,
      mapId,
    };
    // Case 1: State is empty
    expect(showSpinnerReducer({}, action)).toEqual(false);
    // Case 2: State is NOT empty
    expect(showSpinnerReducer(state, action)).toEqual(false);
  });
});
