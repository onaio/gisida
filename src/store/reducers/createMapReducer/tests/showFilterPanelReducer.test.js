import showFilterPanelReducer from './../showFilterPanelReducer';
import {
  TOGGLE_LAYER,
  UPDATE_PRIMARY_LAYER,
  TOGGLE_FILTER,
  DETAIL_VIEW,
} from './../../../constants/actionTypes';
import { mapId, layerId, layer, layerId2, layer2 } from './common';

describe('showFilterPanelReducer', () => {
  it('should handle the initial state', () => {
    expect(showFilterPanelReducer(undefined, {})).toEqual(false);
  });
  const state = {
    showFilterPanel: true,
    layers: {
      [layerId]: layer,
      [layerId2]: layer2,
    },
    activeLayerIds: [layerId, layerId2],
  };
  const stateAggregateFilterLayer = {
    ...state,
    layers: {
      ...state.layers,
      [layerId]: {
        ...state.layers[layerId],
        aggregate: {
          filter: {},
        },
      },
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
      showFilterPanelReducer({}, action);
    }).toThrow(TypeError);

    // Case 2: State is not empty
    // Case 2.1: state.layers[action.layerId] is undefined
    expect(() => {
      showFilterPanelReducer(
        {
          ...state,
          layers: {},
        },
        action
      );
    }).toThrow(TypeError);

    // Case 2.2 state.layers[action.layerId] is defined
    // Case 2.2.1: state.showFilterPanel is false
    expect(showFilterPanelReducer({ ...state, showFilterPanel: false }, action)).toEqual(false);
    // Case 2.2.2: state.showFilterPanel is true
    // Case 2.2.2.1 action.isInit is true
    // Case 2.2.2.1.1: state.layers[action.layerId].aggregate.filter is undefined
    // Case 2.2.2.1.1.1: state.layers[some-other-layerId].aggregate.filter does NOT exist
    expect(showFilterPanelReducer(state, action)).toEqual(false);

    // Case 2.2.2.1.1.2: state.layers[some-other-layerId].aggregate.filter does exist
    const stateAggregateFilterOther = {
      ...state,
      layers: {
        ...state.layers,
        [layerId2]: {
          ...state.layers[layerId2],
          aggregate: {
            filter: {},
          },
        },
      },
    };
    expect(showFilterPanelReducer(stateAggregateFilterOther, action)).toEqual(false);
    // Case 2.2.2.1.1.2: state.layers[action.layerId].aggregate.filter is defined
    // Case 2.2.2.1.1.2.1: state.layers[some-other-layerId].aggregate.filter does NOT exist
    expect(showFilterPanelReducer(stateAggregateFilterLayer, action)).toEqual(true);
    // Case 2.2.2.1.1.2.2: state.layers[some-other-layerId].aggregate.filter does exist
    const stateAggregateFilterAll = {
      ...state,
      layers: {
        ...state.layers,
        [layerId]: {
          ...state.layers[layerId],
          aggregate: {
            filter: {},
          },
        },
        [layerId2]: {
          ...state.layers[layerId2],
          aggregate: {
            filter: {},
          },
        },
      },
    };
    expect(showFilterPanelReducer(stateAggregateFilterAll, action)).toEqual(true);
    // Case 2.2.2.2: action.isInit is false
    const actionIsInitFalse = {
      ...action,
      isInit: false,
    };
    // Case 2.2.2.2.1: state.layers[action.layerId].aggregate.filter is undefined
    // Case 2.2.2.2.1.1: state.layers[some-other-layerId].aggregate.filter does NOT exist
    expect(showFilterPanelReducer(state, actionIsInitFalse)).toEqual(false);
    // Case 2.2.2.2.1.2: state.layers[some-other-layerId].aggregate.filter does exist
    expect(showFilterPanelReducer(stateAggregateFilterOther, actionIsInitFalse)).toEqual(false);
    // Case 2.2.2.2.2: state.layers[action.layerId].aggregate.filter is defined
    // Case 2.2.2.2.2.1: state.layers[some-other-layerId].aggregate.filter does NOT exist
    expect(showFilterPanelReducer(stateAggregateFilterLayer, actionIsInitFalse)).toEqual(false);
    // Case 2.2.2.2.2.2: state.layers[some-other-layerId].aggregate.filter does exist
    expect(showFilterPanelReducer(stateAggregateFilterAll, actionIsInitFalse)).toEqual(false);
  });

  it('should handle UPDATE_PRIMARY_LAYER', () => {
    const action = {
      type: UPDATE_PRIMARY_LAYER,
      primaryLayer: layerId,
      mapId,
    };
    // Case 1: State is empty
    expect(() => {
      showFilterPanelReducer({}, action);
    }).toThrow(TypeError);
    // Case 2: State is NOT empty
    // Case 2.1 state.layers[action.layerId] is undefined
    expect(() => {
      showFilterPanelReducer(
        {
          ...state,
          layers: {},
        },
        action
      );
    }).toThrow(TypeError);
    // Case 2.2: state.layers[action.layerId] is defined
    // Case 2.2.1: state.layers[action.layerId].aggregate.filter is undefined
    expect(showFilterPanelReducer(state, action)).toEqual(undefined);
    // Case 2.2.1: state.layers[action.layerId].aggregate.filter is defined
    expect(showFilterPanelReducer(stateAggregateFilterLayer, action)).toEqual(true);
  });

  it('should handle TOGGLE_FILTER', () => {
    const action = {
      type: TOGGLE_FILTER,
      mapId,
    };
    // Case 1: State is empty
    expect(showFilterPanelReducer({}, action)).toEqual(true);
    // Case 2: State is NOT empty
    // Case 2.1: state.showFilterPanel is true
    expect(showFilterPanelReducer(state, action)).toEqual(false);
    // Case 2.2 state.showFilterPanel is false
    expect(showFilterPanelReducer({ ...state, showFilterPanel: false }, action)).toEqual(true);
  });

  it('should hanlde DETAIL_VIEW', () => {
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
    expect(showFilterPanelReducer({}, { ...action, payload: undefined })).toEqual(undefined);
    // Case 1.2: action.payload is defined
    // Case 1.2.1: action.payload.layerId is undefined, action.payload.properties is null
    expect(
      showFilterPanelReducer(
        {},
        { ...action, payload: { ...action.payload, layerId: undefined, properties: null } }
      )
    ).toEqual(undefined);
    // Case 1.2.2: action.payload.layerId is defined, action.payload.propeties is NOT null
    expect(showFilterPanelReducer({}, action)).toEqual(false);

    // Case 2: State is NOT empty
    // Case 2.1: action.payload is undefined
    expect(showFilterPanelReducer(state, { ...action, payload: undefined })).toEqual(true);
    // Case 2.2: action.payload is defined
    // Case 2.2.1: action.payload.layerId is undefined, action.payload.properties is null
    expect(
      showFilterPanelReducer(state, {
        ...action,
        payload: { ...action.payload, layerId: undefined, properties: null },
      })
    ).toEqual(true);
    // Case 2.2.2: action.payload.layerId is defined, action.payload.propeties is NOT null
    expect(showFilterPanelReducer(state, action)).toEqual(false);
  });
});
