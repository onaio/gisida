import detailViewReducer from './../detailViewReducer';
import defaultState from './../../../../../src/store/defaultState';
import {
  TOGGLE_LAYER,
  UPDATE_PRIMARY_LAYER,
  TOGGLE_FILTER,
  DETAIL_VIEW,
} from './../../../constants/actionTypes';
import { layerId, mapId, layer, layer2, layerId2 } from './common';

describe('detailViewReducer', () => {
  const state = {
    detailView: null,
    layers: {
      [layerId]: layer,
      [layerId2]: layer2,
    },
  };
  it('should handle the initial state', () => {
    expect(detailViewReducer(undefined, {})).toEqual(defaultState.MAP.detailView);
  });

  it('should handle TOGGLE_LAYER', () => {
    const action = {
      type: TOGGLE_LAYER,
      layerId,
      isInit: true,
      mapId,
    };
    // Case 1: State is empty
    expect(() => {
      detailViewReducer({}, action);
    }).toThrow(TypeError);

    // Case 2: State is NOT empty
    // Case 2.1: state.layers[action.layerId] is undefined
    expect(() => {
      detailViewReducer(
        {
          ...state,
          layers: {},
        },
        action
      );
    }).toThrow(TypeError);
    // Case 2.2: state.layers[action.layerId] is defined
    // Case 2.2.1: state.detailView is null
    expect(detailViewReducer(state, action)).toEqual(null);

    // Case 2.2.2: state.detaileView is NOT null
    // Case 2.2.2.1: state.detailView.layerId !== action.layerId
    const stateDetailViewNoMatch = {
      ...state,
      detailView: {
        layerId: layerId2,
      },
    };
    expect(detailViewReducer(stateDetailViewNoMatch, action)).toEqual(false);

    // Case 2.2.2.2: state.detailView.layerId === action.layerId
    const stateDetailViewMatch = {
      ...state,
      detailView: {
        layerId,
      },
    };
    // Case 2.2.2.2.1: action.isInit is true
    // Case 2.2.2.2.1.1: state.layers[action.layerId].visible is true
    expect(detailViewReducer(stateDetailViewMatch, action)).toEqual(true);
    // Case 2.2.2.2.1.2: state.layers[action.layerId].visible is false
    const stateDetailViewMatchVisibleFalse = {
      ...stateDetailViewMatch,
      layers: {
        ...stateDetailViewMatch.layers,
        [layerId]: {
          ...stateDetailViewMatch.layers[layerId],
          visible: false,
        },
      },
    };
    expect(detailViewReducer(stateDetailViewMatchVisibleFalse, action)).toEqual(false);

    // Case 2.2.2.2.2: action.isInit is false
    const actionIsInitFalse = {
      ...action,
      isInit: false,
    };
    // Case 2.2.2.2.2.1: state.layers[action.layerId].visible is true
    expect(detailViewReducer(stateDetailViewMatch, actionIsInitFalse)).toEqual(false);
    // Case 2.2.2.2.2.2: state.layers[action.layerId].visible is false
    expect(detailViewReducer(stateDetailViewMatchVisibleFalse, actionIsInitFalse)).toEqual(true);
  });

  it('should handle UPDATE_PRIMARY_LAYER', () => {
    const action = {
      type: UPDATE_PRIMARY_LAYER,
      primaryLayer: layerId,
      mapId,
    };
    // Case 1: State is empty
    expect(detailViewReducer({}, action)).toEqual(null);
    // Case 2: State is NOT empty
    expect(detailViewReducer(state, action)).toEqual(null);
  });

  it('should handle TOGGLE_FILTER', () => {
    const action = {
      type: TOGGLE_FILTER,
      mapId,
    };
    // Case 1: State is empty
    expect(detailViewReducer({}, action)).toEqual(null);
    // Case 2: State is NOT empty
    expect(detailViewReducer(state, action)).toEqual(null);
  });

  it('should handle DETAIL_VIEW', () => {
    const payload = {
      model: {
        title: 'Title',
        subTitle: 'SubTitle',
      },
      layerId,
      properties: {},
      detailSpec: {
        title: 'title',
        'sub-title': 'sub-title',
        'basic-info': 'basic-info',
        'image-url': 'url',
      },
    };
    const action = {
      type: DETAIL_VIEW,
      mapId,
      payload,
    };
    // Case 1: State is empty
    // Case 1.1: action.payload is undefined
    expect(
      detailViewReducer(
        {},
        {
          ...action,
          payload: undefined,
        }
      )
    ).toEqual(null);
    // Case 1.2: action.payload is defined
    // Case 1.2.1: action.payload.layerId && action.payload.properties is true
    expect(detailViewReducer(state, action)).toEqual({
      model: { ...action.payload.model },
      spec: { ...action.payload.detailSpec },
      properties: { ...action.payload.properties },
      layerId: action.payload.layerId,
    });
    // Case 1.2.2: action.payload.layerId && action.payload.properties is false
    const actionFalse = {
      ...action,
      payload: {
        ...action.payload,
        layerId: undefined,
        properties: undefined,
      },
    };
    expect(detailViewReducer(state, actionFalse)).toEqual(null);
  });
});
