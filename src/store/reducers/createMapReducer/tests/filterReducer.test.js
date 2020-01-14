import filterReducer from './../filterReducer';
import { TOGGLE_LAYER } from './../../../constants/actionTypes';
import { layerId, mapId, layer2, layerId2, layer } from './common';

describe('filterReducer', () => {
  it('should handle the initial state', () => {
    expect(filterReducer(undefined, {})).toEqual({
      isFiltered: false,
      prevFilters: null,
      layerId: '',
      filters: {},
      filterOptions: {},
      filterOptionsPrev: {},
      isOpen: false,
      isMac: window.navigator.platform.indexOf('Mac') !== -1,
      isLinux: window.navigator.platform.indexOf('Linux') !== -1,
      globalSearchField: false,
    });
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
    // Case 2.2.1: action.isInit is true
    // Case 2.2.1.1: state.layers[action.layerId].aggregate.filter is undefined
    // Case 2.2.1.1.1: state.layers[some-other-layerId].aggregate.filter does NOT exist
    expect(filterReducer(state, action)).toEqual({
      ...state.filter,
      layerId: '',
    });
    // Case 2.2.1.1.2: state.layers[some-other-layerId].aggregate.filter does exist
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
    expect(filterReducer(stateAggregateFilterOther, action)).toEqual({
      ...stateAggregateFilterOther.filter,
      layerId: layerId2,
    });
    // Case 2.2.1.2: state.layers[action.layerId].aggregate.filter is defined
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
    // Case 2.2.1.2.1: state.layers[some-other-layerId].aggregate.filter does NOT exist
    expect(filterReducer(stateAggregateFilterLayer, action)).toEqual({
      ...stateAggregateFilterLayer.filter,
      layerId: action.layerId,
    });

    // Case 2.2.1.2.2: state.layers[some-other-layerId].aggregate.filter does exist
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
    expect(filterReducer(stateAggregateFilterAll, action)).toEqual({
      ...stateAggregateFilterAll.filter,
      layerId: action.layerId,
    });

    // Case 2.2.2: action.isInit is false
    const actionIsInitFalse = {
      ...action,
      isInit: false,
    };
    // Case 2.2.2.1: state.layers[action.layerId].aggregate.filter is undefined
    // Case 2.2.2.1.1: state.layers[some-other-layerId].aggregate.filter does NOT exist
    expect(filterReducer(state, actionIsInitFalse)).toEqual({
      ...state.filter,
      layerId: '',
    });
    // Case 2.2.1.1.2: state.layers[some-other-layerId].aggregate.filter does exist
    expect(filterReducer(stateAggregateFilterOther, actionIsInitFalse)).toEqual({
      ...stateAggregateFilterOther.filter,
      layerId: layerId2,
    });
    // Case 2.2.2.2: state.layers[action.layerId].aggregate.filter is defined
    // Case 2.2.2.2.1: state.layers[some-other-layerId].aggregate.filter does NOT exist
    expect(filterReducer(stateAggregateFilterLayer, actionIsInitFalse)).toEqual({
      ...stateAggregateFilterLayer.filter,
      layerId: '',
    });

    // Case 2.2.2.2.2: state.layers[some-other-layerId].aggregate.filter does exist
    expect(filterReducer(stateAggregateFilterAll, actionIsInitFalse)).toEqual({
      ...stateAggregateFilterAll.filter,
      layerId: layerId2,
    });
  });
});
