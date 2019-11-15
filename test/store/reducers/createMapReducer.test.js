import { MAP } from '../../../src/store/reducers';
import defaultState from '../../../src/store/defaultState';
import {
  MAP_RENDERED,
  MAP_LOADED,
  RELOAD_LAYERS,
  CHANGE_REGION,
  CHANGE_STYLE,
  ADD_LAYER,
  TOGGLE_LAYER,
  RELOAD_LAYER,
  LAYER_RELOADED,
  UPDATE_PRIMARY_LAYER,
  TOGGLE_FILTER,
  SET_LAYER_FILTERS,
  FILTERS_UPDATED,
  TOGGLE_MENU,
  RESET_FILTERED_LAYER,
  TOGGLE_CATEGORIES,
  DETAIL_VIEW,
  RECEIVE_DATA,
  REQUEST_DATA,
  UPDATE_TIMESERIES,
  TRIGGER_SPINNER,
} from '../../../src/store/constants/actionTypes';
import { mapId, layerId, layer, timeseries, layer2, layerId2 } from './common';

describe('MAP', () => {
  const stateEmpty = {};
  const stateOld = {
    isRendered: true,
    mapId,
    layers: {},
    reloadLayers: false,
    timeseries: {},
    activeLayerIds: [],
    filter: {},
    detailView: null,
    showFilterPanel: false,
    menuIsOpen: false,
    oldLayerObjs: {},
    openCategories: ['category1', 'category2'],
  };
  const stateOldMapIdNoMatch = {
    ...stateOld,
    mapId: 'no-match-id',
  };
  const stateOldLayersNotEmpty = {
    ...stateOld,
    layers: {
      [layerId]: layer,
    },
    activeLayerIds: [layerId],
  };

  it('should return the initial state', () => {
    expect(MAP(undefined, {})).toEqual(defaultState.MAP);
  });

  it('should return existing state if action type is not handled', () => {
    const actionNoType = {
      mapId,
    };
    expect(MAP(stateOld, actionNoType)).toEqual(stateOld);
  });

  it('should handle MAP_RENDERED', () => {
    const action = {
      type: MAP_RENDERED,
      isRendered: false,
      mapId,
    };

    // Case 1: The state object is empty
    expect(MAP(stateEmpty, action)).toEqual({});
    // Case 2: The state obj is not empty
    // Case 2.1: action.mapId matches state.mapId
    expect(MAP(stateOld, action)).toEqual({ ...stateOld, isRendered: action.isRendered });
    // Case 2.1: action.mapId does NOT match state.mapId
    expect(MAP(stateOldMapIdNoMatch, action)).toEqual(stateOldMapIdNoMatch);
  });

  it('should handle MAP_LOADED', () => {
    const action = {
      type: MAP_LOADED,
      isLoaded: false,
      mapId,
    };

    // Case 1: The state object is empty
    expect(MAP(stateEmpty, action)).toEqual({});
    // Case 2: The state obj is not empty
    // Case 2.1: action.mapId matches state.mapId
    const expectedObj = MAP(stateOld, action);
    const { currentRegion } = expectedObj;
    delete expectedObj.currentRegion;

    expect(typeof currentRegion).toBe('number');
    expect(expectedObj).toEqual({
      ...stateOld,
      isLoaded: action.isLoaded,
      reloadLayers: true,
    });
    // Case 2.1: action.mapId does NOT match state.mapId
    expect(MAP(stateOldMapIdNoMatch, action)).toEqual(stateOldMapIdNoMatch);
  });

  it('should handle RELOAD_LAYERS', () => {
    const action = {
      type: RELOAD_LAYERS,
      reload: true,
      mapId,
    };

    // Case 1: The state object is empty
    expect(MAP(stateEmpty, action)).toEqual({});
    // Case 2: The state obj is not empty
    // Case 2.1: action.mapId matches state.mapId
    expect(MAP(stateOld, action)).toEqual({ ...stateOld, reloadLayers: action.reload });
    // Case 2.1: action.mapId does NOT match state.mapId
    expect(MAP(stateOldMapIdNoMatch, action)).toEqual(stateOldMapIdNoMatch);
  });

  it('should handle CHANGE_STYLE', () => {
    const action = {
      type: CHANGE_STYLE,
      style: 'mapbox://styles/mapbox/satellite-v9',
      mapId,
    };

    // Case 1: The state object is empty
    expect(MAP(stateEmpty, action)).toEqual({});
    // Case 2: The state obj is not empty
    // Case 2.1: action.mapId matches state.mapId
    expect(MAP(stateOld, action)).toEqual({ ...stateOld, currentStyle: action.style });
    // Case 2.1: action.mapId does NOT match state.mapId
    expect(MAP(stateOldMapIdNoMatch, action)).toEqual(stateOldMapIdNoMatch);
  });

  it('should handle CHANGE_REGION', () => {
    const action = {
      type: CHANGE_REGION,
      region: Math.random(),
      mapId,
    };

    // Case 1: The state object is empty
    expect(MAP(stateEmpty, action)).toEqual({});
    // Case 2: The state obj is not empty
    // Case 2.1: action.mapId matches state.mapId
    expect(MAP(stateOld, action)).toEqual({ ...stateOld, currentRegion: action.region });
    // Case 2.1: action.mapId does NOT match state.mapId
    expect(MAP(stateOldMapIdNoMatch, action)).toEqual(stateOldMapIdNoMatch);
  });

  it('should handle ADD_LAYER', () => {
    const action = {
      type: ADD_LAYER,
      layer,
      mapId,
    };

    // Case 1: The state obj is empty
    expect(MAP(stateEmpty, action)).toEqual({});
    // Case 2: The state obj is NOT empty
    // Case 2.1: action.mapId does NOT match state.mapId
    expect(MAP(stateOldMapIdNoMatch, action)).toEqual(stateOldMapIdNoMatch);

    // Case 2.2: action.mapId matches state.mapId
    // Case 2.2.1: action.layer.id does NOT match state.layers[action.layer.id]
    // Case 2.2.1.1: Layers that satisy default layer conditions DO NOT exist in state
    expect(MAP(stateOld, action)).toEqual({
      ...stateOld,
      reloadLayerId: null,
      layers: { ...stateOld.layers, [action.layer.id]: { ...action.layer } },
      defaultLayers: [],
      activeLayerId: action.layer.id,
      reloadLayers: stateOld.reloadLayers,
    });

    // Case 2.2.1.2: Layers that satisfy default layer conditions exist in state
    const stateOldLayerDefault = {
      ...stateOld,
      layers: {
        ...stateOld.layers,
        [layerId2]: layer2,
      },
    };

    expect(MAP(stateOldLayerDefault, action)).toEqual({
      ...stateOldLayerDefault,
      reloadLayerId: null,
      layers: { ...stateOldLayerDefault.layers, [action.layer.id]: { ...action.layer } },
      defaultLayers: [layerId2],
      activeLayerId: action.layer.id,
      reloadLayers: stateOldLayerDefault.reloadLayers,
    });

    // Case 2.2.2: action.layer.id matches state.layers[action.layer.id]
    // Case 2.2.2.1: Layers that satisfy default layer conditions DO NOT exist in state
    const expectedObj = MAP(stateOldLayersNotEmpty, action);
    const { reloadLayers } = expectedObj;
    delete stateOldLayersNotEmpty.reloadLayers;
    delete expectedObj.reloadLayers;

    expect(typeof reloadLayers).toBe('number');
    expect(expectedObj).toEqual({
      ...stateOldLayersNotEmpty,
      reloadLayerId: action.layer.id,
      layers: { ...stateOldLayersNotEmpty.layers, [action.layer.id]: { ...action.layer } },
      defaultLayers: [],
      activeLayerId: action.layer.id,
    });

    // Case 2.2.2.2: Layers that satisfy default layer conditions exist in state
    const stateOldLayersNotEmptyDefault = {
      ...stateOldLayersNotEmpty,
      layers: {
        ...stateOldLayersNotEmpty.layers,
        [layerId2]: layer2,
      },
    };

    const expectedObjDefault = MAP(stateOldLayersNotEmptyDefault, action);
    expect(typeof expectedObjDefault.reloadLayers).toBe('number');
    delete stateOldLayersNotEmptyDefault.reloadLayers;
    delete expectedObjDefault.reloadLayers;

    expect(expectedObjDefault).toEqual({
      ...stateOldLayersNotEmptyDefault,
      reloadLayerId: action.layer.id,
      layers: { ...stateOldLayersNotEmptyDefault.layers, [action.layer.id]: { ...action.layer } },
      defaultLayers: [layerId2],
      activeLayerId: action.layer.id,
    });
  });

  it('should handle TOGGLE_LAYER', () => {
    const action = {
      type: TOGGLE_LAYER,
      layerId,
      isInit: true,
      mapId,
    };
    const actionInitFalse = {
      ...action,
      isInit: false,
    };

    // Case 1: The state obj is empty
    expect(MAP(stateEmpty, action)).toEqual({});

    // Case 2: The state obj is NOT empty
    // Case 2.1: action.mapId does NOT match state.mapId
    expect(MAP(stateOldMapIdNoMatch, action)).toEqual(stateOldMapIdNoMatch);

    // Case 2.2: action.mapId matches state.mapId
    // Case 2.2.1: action.layerId is NOT defined in state.layers
    // Case 2.2.1.1: action.isInit is true
    expect(() => {
      MAP(stateOld, action);
    }).toThrow(TypeError);

    // Case 2.2.1.2: action.isInit is false
    expect(() => {
      MAP(stateOld, actionInitFalse);
    }).toThrow(TypeError);

    // Case 2.2.2: action.layerId is defined in state.layers
    // Case 2.2.2.1: action.isInit is true
    // Case 2.2.2.1.1.1: state.layers[action.layerId].layers is NOT defined
    // Case 2.2.2.1.2.1: state.layers[action.layerId].type is NOT 'line'
    // Case 2.2.2.1.3.1: state.layers[action.layerId].credit is NOT empty
    // Case 2.2.2.1.4.1: state.layers[action.layerId] does NOT have parent
    // Case 2.2.2.1.5.1: state.layers[action.layerId].aggregate does NOT exist
    // Case 2.2.2.1.6.1: state.detailView is NULL
    // Case 2.2.2.1.7.1: state.showFilterPanel is false
    const expectedObj = MAP(stateOldLayersNotEmpty, action);
    const { reloadLayers } = expectedObj;
    delete stateOldLayersNotEmpty.reloadLayers;
    delete expectedObj.reloadLayers;

    expect(typeof reloadLayers).toBe('number');
    expect(expectedObj).toEqual({
      ...stateOldLayersNotEmpty,
      primarySubLayer: undefined,
      activeLayerId:
        stateOldLayersNotEmpty.activeLayerIds[stateOldLayersNotEmpty.activeLayerIds.length - 1],
      lastLayerSelected: action.layerId,
      layers: {
        ...stateOldLayersNotEmpty.layers,
        [action.layerId]: {
          ...stateOldLayersNotEmpty.layers[action.layerId],
          visible: stateOldLayersNotEmpty.layers[action.layerId].visible,
        },
      },
      showSpinner: true,
      visibleLayerId: action.layerId,
      primaryLayer: action.layerId,
      timeseries: stateOldLayersNotEmpty.timeseries,
      activeLayerIds: stateOldLayersNotEmpty.activeLayerIds,
      filter: {
        ...stateOldLayersNotEmpty.filter,
        layerId: '',
      },
      detailView: null,
      showFilterPanel: false,
    });

    // Case 2.2.2.1.1.2: state.layers[action.layerId].layers is defined
    // Case 2.2.2.1.2.2: state.layers[action.layerId].type is 'line'
    // Case 2.2.2.1.3.2: state.layers[action.layerId].credit is empty
    // Case 2.2.2.1.5.2.1: state.layers[action.layerId].aggregate exists, state.layers[action.layerId].aggregate.filter is defined
    // Case 2.2.2.1.6.2.1: state.detailView is NOT null, state.detailView.layerId === action.layerId
    // Case 2.2.2.1.7.2: state.showFilterPanel is true
    const stateOldLayerObjLayersExists = {
      ...stateOldLayersNotEmpty,
      layers: {
        ...stateOldLayersNotEmpty.layers,
        [layerId]: {
          ...stateOldLayersNotEmpty.layers[layerId],
          layers: [layerId2],
          type: 'line',
          credit: '',
          aggregate: {
            timeseries: {
              field: 'period',
            },
            filter: [],
          },
        },
        [layerId2]: layer2,
      },
      detailView: { layerId },
      showFilterPanel: true,
    };
    const expectedObjLayerObjLayersExist = MAP(stateOldLayerObjLayersExists, action);

    expect(typeof expectedObjLayerObjLayersExist.reloadLayers).toBe('number');

    delete expectedObjLayerObjLayersExist.reloadLayers;
    delete stateOldLayerObjLayersExists.reloadLayers;

    expect(expectedObjLayerObjLayersExist).toEqual({
      ...stateOldLayerObjLayersExists,
      primarySubLayer: undefined,
      activeLayerId: action.layerId,
      lastLayerSelected: action.layerId,
      layers: {
        ...stateOldLayerObjLayersExists.layers,
        [action.layerId]: {
          ...stateOldLayerObjLayersExists.layers[action.layerId],
          visible: stateOldLayersNotEmpty.layers[action.layerId].visible,
        },
        [layerId2]: {
          ...layer2,
          visible: !stateOldLayerObjLayersExists.layers[action.layerId].visible,
        },
      },
      showSpinner: true,
      visibleLayerId:
        stateOldLayerObjLayersExists.activeLayerIds[
          stateOldLayerObjLayersExists.activeLayerIds.length - 1
        ],
      primaryLayer:
        stateOldLayerObjLayersExists.activeLayerIds[
          stateOldLayerObjLayersExists.activeLayerIds.length - 1
        ],
      timeseries: stateOldLayerObjLayersExists.timeseries,
      activeLayerIds: stateOldLayerObjLayersExists.activeLayerIds,
      filter: {
        ...stateOldLayerObjLayersExists.filter,
        layerId,
      },
      detailView: true,
      showFilterPanel: true,
    });

    // Case 2.2.2.1.6.2.2: state.detailView is NOT null, state.detailView.layerId !== action.layerId
    const stateOldDetailViewNoMatch = {
      ...stateOldLayerObjLayersExists,
      detailView: { layerId2 },
    };
    const expectedObjDetailViewNoMatch = MAP(stateOldDetailViewNoMatch, action);

    expect(typeof expectedObjDetailViewNoMatch.reloadLayers).toBe('number');

    delete expectedObjDetailViewNoMatch.reloadLayers;
    delete stateOldDetailViewNoMatch.reloadLayers;

    expect(expectedObjDetailViewNoMatch).toEqual({
      ...stateOldDetailViewNoMatch,
      primarySubLayer: undefined,
      activeLayerId:
        stateOldDetailViewNoMatch.activeLayerIds[
          stateOldDetailViewNoMatch.activeLayerIds.length - 1
        ],
      lastLayerSelected: action.layerId,
      layers: {
        ...stateOldDetailViewNoMatch.layers,
        [layerId]: {
          ...stateOldDetailViewNoMatch.layers[layerId],
          visible: action.isInit,
        },
        [layerId2]: {
          ...layer2,
          visible: !stateOldLayerObjLayersExists.layers[layerId].visible,
        },
      },
      showSpinner: true,
      visibleLayerId:
        stateOldDetailViewNoMatch.activeLayerIds[
          stateOldDetailViewNoMatch.activeLayerIds.length - 1
        ],
      primaryLayer:
        stateOldDetailViewNoMatch.activeLayerIds[
          stateOldDetailViewNoMatch.activeLayerIds.length - 1
        ],
      timeseries: stateOldDetailViewNoMatch.timeseries,
      activeLayerIds: stateOldDetailViewNoMatch.activeLayerIds,
      filter: {
        ...stateOldDetailViewNoMatch.filter,
        layerId,
      },
      detailView: false,
      showFilterPanel: true,
    });

    // Case 2.2.2.2: action.isInit is false
    // Case 2.2.2.2.1.1: state.layers[action.layerId].layers is NOT defined
    // Case 2.2.2.2.2.1: state.layers[action.layerId].type is NOT 'line'
    // Case 2.2.2.2.3.1: state.layers[action.layerId].credit is NOT empty
    // Case 2.2.2.2.4.1: state.layers[action.layerId] does NOT have parent
    // Case 2.2.2.2.5.1: state.layers[action.layerId].aggregate does NOT exist
    // Case 2.2.2.2.6.1: state.detailView is NULL
    // Case 2.2.2.2.7.1: state.showFilterPanel is false
    const expectedObjInitFalse = MAP(stateOldLayersNotEmpty, actionInitFalse);

    expect(typeof expectedObjInitFalse.reloadLayers).toBe('number');

    delete stateOldLayersNotEmpty.reloadLayers;
    delete expectedObjInitFalse.reloadLayers;

    expect(expectedObjInitFalse).toEqual({
      ...stateOldLayersNotEmpty,
      primarySubLayer: undefined,
      activeLayerId: undefined,
      lastLayerSelected: undefined,
      layers: {
        ...stateOldLayersNotEmpty.layers,
        [layerId]: {
          ...stateOldLayersNotEmpty.layers[layerId],
          visible: false,
        },
      },
      showSpinner: false,
      visibleLayerId: undefined,
      primaryLayer: undefined,
      timeseries: stateOldLayersNotEmpty.timeseries,
      activeLayerIds: [],
      filter: {
        ...stateOldLayersNotEmpty.filter,
        layerId: '',
      },
      detailView: null,
      showFilterPanel: false,
    });

    // Case 2.2.2.2.1.2: state.layers[action.layerId].layers is defined
    // Case 2.2.2.2.2.2: state.layers[action.layerId].type is 'line'
    // Case 2.2.2.2.3.2: state.layers[action.layerId].credit is empty
    // Case 2.2.2.2.5.2: state.layers[action.layerId].aggregate exists
    // Case 2.2.2.2.6.2.1: state.detailView is NOT null, state.detailView.layerId === action.layerId
    // Case 2.2.2.2.7.2: state.showFilterPanel is true
    const expectedObjInitFalseLayerObjLayersExists = MAP(
      stateOldLayerObjLayersExists,
      actionInitFalse
    );

    expect(typeof expectedObjInitFalseLayerObjLayersExists.reloadLayers).toBe('number');

    delete expectedObjInitFalseLayerObjLayersExists.reloadLayers;
    delete stateOldLayerObjLayersExists.reloadLayers;

    expect(expectedObjInitFalseLayerObjLayersExists).toEqual({
      ...stateOldLayerObjLayersExists,
      primarySubLayer: undefined,
      activeLayerId: undefined,
      lastLayerSelected: undefined,
      layers: {
        ...stateOldLayerObjLayersExists.layers,
        [layerId]: {
          ...stateOldLayerObjLayersExists.layers[layerId],
          visible: !stateOldLayerObjLayersExists.layers[layerId].visible,
        },
        [layerId2]: {
          ...layer2,
          visible: !stateOldLayerObjLayersExists.layers[layerId].visible,
        },
      },
      showSpinner: false,
      visibleLayerId: undefined,
      primaryLayer: undefined,
      timeseries: stateOldLayerObjLayersExists.timeseries,
      activeLayerIds: [],
      filter: {
        ...stateOldLayerObjLayersExists.filter,
        layerId: '',
      },
      detailView: false,
      showFilterPanel: false,
    });

    // Case 2.2.2.1.6.2.2: state.detailView is NOT null, state.detailView.layerId !== action.layerId
    const expectedObjInitFalseDetailViewNoMatch = MAP(stateOldDetailViewNoMatch, actionInitFalse);

    expect(typeof expectedObjInitFalseDetailViewNoMatch.reloadLayers).toBe('number');

    delete expectedObjInitFalseDetailViewNoMatch.reloadLayers;
    delete stateOldDetailViewNoMatch.reloadLayers;

    expect(expectedObjInitFalseDetailViewNoMatch).toEqual({
      ...stateOldDetailViewNoMatch,
      primarySubLayer: undefined,
      activeLayerId: undefined,
      lastLayerSelected: undefined,
      layers: {
        ...stateOldLayerObjLayersExists.layers,
        [layerId]: {
          ...stateOldLayerObjLayersExists.layers[layerId],
          visible: !stateOldLayerObjLayersExists.layers[layerId].visible,
        },
        [layerId2]: {
          ...layer2,
          visible: !stateOldLayerObjLayersExists.layers[layerId].visible,
        },
      },
      showSpinner: false,
      visibleLayerId: undefined,
      primaryLayer: undefined,
      timeseries: stateOldLayerObjLayersExists.timeseries,
      activeLayerIds: [],
      filter: {
        ...stateOldLayerObjLayersExists.filter,
        layerId: '',
      },
      detailView: false,
      showFilterPanel: false,
    });
  });

  it('should handle RELOAD_LAYER', () => {
    const action = {
      type: RELOAD_LAYER,
      mapId,
      layerId,
    };

    // Case 1: The state obj is empty
    expect(MAP(stateEmpty, action)).toEqual({});

    // Case 2: The state obj is NOT empty
    // Case 2.1: action.mapId does NOT match state.mapId
    expect(MAP(stateOldMapIdNoMatch, action)).toEqual(stateOldMapIdNoMatch);

    // Case 2.2: action.mapId matches state.mapId
    expect(MAP(stateOld, action)).toEqual({
      ...stateOld,
      reloadLayerId: action.layerId,
    });
  });

  it('should handle LAYER_RELOADED', () => {
    const action = {
      type: LAYER_RELOADED,
      mapId,
    };
    // Case 1: The state obj is empty
    expect(MAP(stateEmpty, action)).toEqual({});

    // Case 2: The state obj is NOT empty
    // Case 2.1: action.mapId does NOT match state.mapId
    expect(MAP(stateOldMapIdNoMatch, action)).toEqual(stateOldMapIdNoMatch);

    // Case 2.2: action.mapId matches state.mapId
    expect(MAP(stateOld, action)).toEqual({
      ...stateOld,
      reloadLayerId: null,
    });
  });

  it('should handle UPDATE_PRIMARY_LAYER', () => {
    const action = {
      type: UPDATE_PRIMARY_LAYER,
      primaryLayer: layerId,
      mapId,
    };

    // Case 1: The state obj is empty
    expect(MAP(stateEmpty, action)).toEqual({});

    // Case 2: The state obj is NOT empty
    // Case 2.1: action.mapId does NOT match state.mapId
    expect(MAP(stateOldMapIdNoMatch, action)).toEqual(stateOldMapIdNoMatch);

    // Case 2.2: action.mapId matches state.mapId
    // Case 2.2.1: state.layers[action.primaryLayer] is undefined
    expect(() => {
      MAP(stateOld, action);
    }).toThrow(TypeError);

    // Case 2.2.2: state.layers[action.primaryLayer] is defined
    // case 2.2.2.1: action.primaryLayer matches last item in state.activeLayerIds
    // Case 2.2.2.1.1: state.layers[action.primaryLayer].aggregate is undefined
    // Case 2.2.2.1.1.1: state.showFilterPanel is false
    expect(MAP(stateOldLayersNotEmpty, action)).toEqual({
      ...stateOldLayersNotEmpty,
      detailView: null,
      activeLayerId: action.primaryLayer,
      primaryLayer: action.primaryLayer,
      activeLayerIds: stateOldLayersNotEmpty.activeLayerIds,
      filter: {
        ...stateOldLayersNotEmpty.filter,
        layerId: false,
      },
      showFilterPanel: undefined,
    });

    // Case 2.2.2.1.1.2: state.showFilterPanel is true
    const stateOldShowFilterPanelTrue = {
      ...stateOldLayersNotEmpty,
      showFilterPanel: true,
    };
    expect(MAP(stateOldShowFilterPanelTrue, action)).toEqual({
      ...stateOldShowFilterPanelTrue,
      detailView: null,
      activeLayerId: action.primaryLayer,
      primaryLayer: action.primaryLayer,
      activeLayerIds: stateOldShowFilterPanelTrue.activeLayerIds,
      filter: {
        ...stateOldShowFilterPanelTrue.filter,
        layerId: false,
      },
      showFilterPanel: undefined,
    });

    // Case 2.2.2.1.2: state.layers[action.primaryLayer].aggregate is defined
    const stateOldAggregate = {
      ...stateOldLayersNotEmpty,
      layers: {
        ...stateOldLayersNotEmpty.layers,
        [layerId]: {
          ...stateOldLayersNotEmpty.layers[layerId],
          layers: [layerId2],
          type: 'line',
          credit: '',
          aggregate: {
            timeseries: {
              field: 'period',
            },
          },
        },
      },
    };
    // Case 2.2.2.1.2.1: state.layers[action.primaryLayer].aggregate.filter is undefined
    // Case 2.2.2.1.2.1.1: state.showFilterPanel is false
    expect(MAP(stateOldAggregate, action)).toEqual({
      ...stateOldAggregate,
      detailView: null,
      activeLayerId: action.primaryLayer,
      primaryLayer: action.primaryLayer,
      activeLayerIds: stateOldAggregate.activeLayerIds,
      filter: {
        ...stateOldAggregate.filter,
        layerId: false,
      },
      showFilterPanel: undefined,
    });

    // Case 2.2.2.1.2.1.2: state.showFilterPanel is true
    const stateOldAggregateShowFilterPanelTrue = {
      ...stateOldAggregate,
      showFilterPanel: true,
    };
    expect(MAP(stateOldAggregateShowFilterPanelTrue, action)).toEqual({
      ...stateOldAggregateShowFilterPanelTrue,
      detailView: null,
      activeLayerId: action.primaryLayer,
      primaryLayer: action.primaryLayer,
      activeLayerIds: stateOldAggregateShowFilterPanelTrue.activeLayerIds,
      filter: {
        ...stateOldAggregateShowFilterPanelTrue.filter,
        layerId: false,
      },
      showFilterPanel: undefined,
    });

    // Case 2.2.2.1.2.2: state.layers[action.primaryLayer].aggregate.filter is defined
    // Case 2.2.2.1.2.2.1: state.showFilterPanel is false
    const stateOldAggregateFilter = {
      ...stateOldAggregate,
      layers: {
        ...stateOldAggregate.layers,
        [layerId]: {
          ...stateOldAggregate.layers[layerId],
          aggregate: {
            ...stateOldAggregate.layers[layerId].aggregate,
            filter: ['filter1', 'filter2'],
          },
        },
      },
    };
    expect(MAP(stateOldAggregateFilter, action)).toEqual({
      ...stateOldAggregateFilter,
      detailView: null,
      activeLayerId: action.primaryLayer,
      primaryLayer: action.primaryLayer,
      activeLayerIds: stateOldAggregateFilter.activeLayerIds,
      filter: {
        ...stateOldAggregateFilter.filter,
        layerId: action.primaryLayer,
      },
      showFilterPanel: false,
    });

    // Case 2.2.2.1.2.2.2: state.showFilterPanel is true
    const stateOldAggregateFilterShowFilterPanel = {
      ...stateOldAggregateFilter,
      showFilterPanel: true,
    };
    expect(MAP(stateOldAggregateFilterShowFilterPanel, action)).toEqual({
      ...stateOldAggregateFilterShowFilterPanel,
      detailView: null,
      activeLayerId: action.primaryLayer,
      primaryLayer: action.primaryLayer,
      activeLayerIds: stateOldAggregateFilterShowFilterPanel.activeLayerIds,
      filter: {
        ...stateOldAggregateFilterShowFilterPanel.filter,
        layerId: action.primaryLayer,
      },
      showFilterPanel: true,
    });

    // Case 2.2.2.2: action.primaryLayer does NOT match last item in state.activeLayerIds
    const stateOldActiveLayerNoMatch = {
      ...stateOldLayersNotEmpty,
      activeLayerIds: [layerId, layerId2],
    };
    // Case 2.2.2.2.1: state.layers[action.primaryLayer].aggregate is undefined
    // Case 2.2.2.2.1.1: state.showFilterPanel is false
    expect(MAP(stateOldActiveLayerNoMatch, action)).toEqual({
      ...stateOldActiveLayerNoMatch,
      detailView: null,
      activeLayerId: action.primaryLayer,
      primaryLayer: action.primaryLayer,
      activeLayerIds: [layerId2, layerId],
      filter: {
        ...stateOldActiveLayerNoMatch.filter,
        layerId: false,
      },
      showFilterPanel: undefined,
    });

    // Case 2.2.2.2.1.2: state.showFilterPanel is true
    const stateOldActiveLayerNoMatchShowFilterPanel = {
      ...stateOldActiveLayerNoMatch,
      showFilterPanel: true,
    };
    expect(MAP(stateOldActiveLayerNoMatchShowFilterPanel, action)).toEqual({
      ...stateOldActiveLayerNoMatchShowFilterPanel,
      detailView: null,
      activeLayerId: action.primaryLayer,
      primaryLayer: action.primaryLayer,
      activeLayerIds: [layerId2, layerId],
      filter: {
        ...stateOldActiveLayerNoMatchShowFilterPanel.filter,
        layerId: false,
      },
      showFilterPanel: undefined,
    });

    // Case 2.2.2.2.2: state.layers[action.primaryLayer].aggregate is defined
    const stateOldActiveLayerNoMatchAggregate = {
      ...stateOldActiveLayerNoMatch,
      layers: {
        ...stateOldActiveLayerNoMatch.layers,
        [layerId]: {
          ...stateOldActiveLayerNoMatch.layers[layerId],
          layers: [layerId2],
          type: 'line',
          credit: '',
          aggregate: {
            timeseries: {
              field: 'period',
            },
          },
        },
      },
    };
    // Case 2.2.2.2.2.1: state.layers[action.primaryLayer].aggregate.filter is undefined
    // Case 2.2.2.2.2.1.1: state.showFilterPanel is false
    expect(MAP(stateOldActiveLayerNoMatchAggregate, action)).toEqual({
      ...stateOldActiveLayerNoMatchAggregate,
      detailView: null,
      activeLayerId: action.primaryLayer,
      primaryLayer: action.primaryLayer,
      activeLayerIds: [layerId2, layerId],
      filter: {
        ...stateOldActiveLayerNoMatchAggregate.filter,
        layerId: false,
      },
      showFilterPanel: undefined,
    });

    // Case 2.2.2.2.2.1.2: state.showFilterPanel is true
    const stateOldActiveLayerNoMatchAggregateShowFilterPanel = {
      ...stateOldActiveLayerNoMatchAggregate,
      showFilterPanel: true,
    };
    expect(MAP(stateOldActiveLayerNoMatchAggregateShowFilterPanel, action)).toEqual({
      ...stateOldActiveLayerNoMatchAggregateShowFilterPanel,
      detailView: null,
      activeLayerId: action.primaryLayer,
      primaryLayer: action.primaryLayer,
      activeLayerIds: [layerId2, layerId],
      filter: {
        ...stateOldActiveLayerNoMatchAggregateShowFilterPanel.filter,
        layerId: false,
      },
      showFilterPanel: undefined,
    });

    // Case 2.2.2.2.2.2: state.layers[action.primaryLayer].aggregate.filter is defined
    // Case 2.2.2.2.2.2.1: state.showFilterPanel is false
    const stateOldActiveLayerNoMatchAggregateFilter = {
      ...stateOldActiveLayerNoMatchAggregate,
      layers: {
        ...stateOldActiveLayerNoMatchAggregate.layers,
        [layerId]: {
          ...stateOldActiveLayerNoMatchAggregate.layers[layerId],
          aggregate: {
            ...stateOldActiveLayerNoMatchAggregate.layers[layerId].aggregate,
            filter: ['filter1', 'filter2'],
          },
        },
      },
    };
    expect(MAP(stateOldActiveLayerNoMatchAggregateFilter, action)).toEqual({
      ...stateOldActiveLayerNoMatchAggregateFilter,
      detailView: null,
      activeLayerId: action.primaryLayer,
      primaryLayer: action.primaryLayer,
      activeLayerIds: [layerId2, layerId],
      filter: {
        ...stateOldActiveLayerNoMatchAggregateFilter.filter,
        layerId: action.primaryLayer,
      },
      showFilterPanel: false,
    });

    // Case 2.2.2.2.2.2.2: state.showFilterPanel is true
    const stateOldActiveLayerNoMatchAggregateFilterShowFilterPanel = {
      ...stateOldActiveLayerNoMatchAggregateFilter,
      showFilterPanel: true,
    };
    expect(MAP(stateOldActiveLayerNoMatchAggregateFilterShowFilterPanel, action)).toEqual({
      ...stateOldActiveLayerNoMatchAggregateFilterShowFilterPanel,
      detailView: null,
      activeLayerId: action.primaryLayer,
      primaryLayer: action.primaryLayer,
      activeLayerIds: [layerId2, layerId],
      filter: {
        ...stateOldActiveLayerNoMatchAggregateFilterShowFilterPanel.filter,
        layerId: action.primaryLayer,
      },
      showFilterPanel: true,
    });
  });

  it('should handle TOGGLE_FILTER', () => {
    const action = {
      type: TOGGLE_FILTER,
      mapId,
    };

    // Case 1: The state obj is empty
    expect(MAP(stateEmpty, action)).toEqual({});

    // Case 2: The state obj is NOT empty
    // Case 2.1: action.mapId does NOT match state.mapId
    expect(MAP(stateOldMapIdNoMatch, action)).toEqual(stateOldMapIdNoMatch);

    // Case 2.2: action.mapId matches state.mapId
    expect(MAP(stateOld, action)).toEqual({
      ...stateOld,
      detailView: null,
      showFilterPanel: !stateOld.showFilterPanel,
    });
  });

  it('should handle SET_LAYER_FILTERS', () => {
    const action = {
      type: SET_LAYER_FILTERS,
      layerId,
      layerFilters: ['all'],
      mapId,
    };
    // Case 1: The state obj is empty
    expect(MAP(stateEmpty, action)).toEqual({});

    // Case 2: The state obj is NOT empty
    // Case 2.1: action.mapId does NOT match state.mapId
    expect(MAP(stateOldMapIdNoMatch, action)).toEqual(stateOldMapIdNoMatch);

    // Case 2.2: action.mapId matches state.mapId
    // Case 2.2.1:  state.layers[action.layerId] is undefined
    expect(() => {
      MAP(stateOld, action);
    }).toThrow(TypeError);

    // Case 2.2.2: state.layers[action.layerId] is defined
    // Case 2.2.2.1: state.layers[action.layerId].filters is undefined
    // Case 2.2.2.1.1: action.name is undefined
    expect(MAP(stateOldLayersNotEmpty, action)).toEqual({
      ...stateOldLayersNotEmpty,
      layers: {
        ...stateOldLayersNotEmpty.layers,
        [layerId]: {
          ...stateOldLayersNotEmpty.layers[layerId],
          filters: {
            layerFilters: action.layerFilters,
          },
        },
      },
      doApplyFilters: true,
    });

    // Case 2.2.2.1.2: action.name is defined
    const actionNameDefined = {
      ...action,
      name: 'name',
    };
    expect(MAP(stateOldLayersNotEmpty, actionNameDefined)).toEqual({
      ...stateOldLayersNotEmpty,
      layers: {
        ...stateOldLayersNotEmpty.layers,
        [layerId]: {
          ...stateOldLayersNotEmpty.layers[layerId],
          filters: {
            [actionNameDefined.name]: actionNameDefined.layerFilters,
          },
        },
      },
      doApplyFilters: true,
    });

    // Case 2.2.2.2: state.layers[action.layerId].filters is defined
    const stateOldLayerObjFiltersDefined = {
      ...stateOldLayersNotEmpty,
      layers: {
        ...stateOldLayersNotEmpty.layers,
        [layerId]: {
          ...stateOldLayersNotEmpty.layers[layerId],
          filters: {
            oldFilter: ['all'],
          },
        },
      },
    };

    // Case 2.2.2.2.1: action.name is undefined
    expect(MAP(stateOldLayerObjFiltersDefined, action)).toEqual({
      ...stateOldLayerObjFiltersDefined,
      layers: {
        ...stateOldLayerObjFiltersDefined.layers,
        [layerId]: {
          ...stateOldLayerObjFiltersDefined.layers[layerId],
          filters: {
            ...stateOldLayerObjFiltersDefined.layers[layerId].filters,
            layerFilters: action.layerFilters,
          },
        },
      },
      doApplyFilters: true,
    });

    // Case 2.2.2.2.2: action.name is defined
    expect(MAP(stateOldLayerObjFiltersDefined, actionNameDefined)).toEqual({
      ...stateOldLayerObjFiltersDefined,
      layers: {
        ...stateOldLayerObjFiltersDefined.layers,
        [layerId]: {
          ...stateOldLayerObjFiltersDefined.layers[layerId],
          filters: {
            ...stateOldLayerObjFiltersDefined.layers[layerId].filters,
            [actionNameDefined.name]: actionNameDefined.layerFilters,
          },
        },
      },
      doApplyFilters: true,
    });
  });

  it('should handle FILTERS_UPDATED', () => {
    const action = {
      type: FILTERS_UPDATED,
      mapId,
      layerId,
    };

    // Case 1: The state obj is empty
    expect(MAP(stateEmpty, action)).toEqual({});

    // Case 2: The state obj is NOT empty
    // Case 2.1: action.mapId does NOT match state.mapId
    expect(MAP(stateOldMapIdNoMatch, action)).toEqual(stateOldMapIdNoMatch);

    // Case 2.2: action.mapId matches state.mapId
    expect(MAP(stateOld, action)).toEqual({
      ...stateOld,
      doApplyFilters: false,
    });
  });

  it('should handle TOGGLE_MENU', () => {
    const action = {
      type: TOGGLE_MENU,
      mapId,
    };

    // Case 1: The state obj is empty
    expect(MAP(stateEmpty, action)).toEqual({});

    // Case 2: The state obj is NOT empty
    // Case 2.1: action.mapId does NOT match state.mapId
    expect(MAP(stateOldMapIdNoMatch, action)).toEqual(stateOldMapIdNoMatch);

    // Case 2.2: action.mapId matches state.mapId
    expect(MAP(stateOld, action)).toEqual({
      ...stateOld,
      menuIsOpen: !stateOld.menuIsOpen,
    });
  });

  it('should handle RESET_FILTERED_LAYER', () => {
    const action = {
      type: RESET_FILTERED_LAYER,
      mapId,
      oldLayer: layer,
    };

    // Case 1: The state obj is empty
    expect(MAP(stateEmpty, action)).toEqual({});

    // Case 2: The state obj is NOT empty
    // Case 2.1: action.mapId does NOT match state.mapId
    expect(MAP(stateOldMapIdNoMatch, action)).toEqual(stateOldMapIdNoMatch);

    // Case 2.2: action.mapId matches state.mapId
    // Case 2.2.1: state.oldLayerObjs[action.oldLayer.id] is undefined
    expect(MAP(stateOld, action)).toEqual({
      ...stateOld,
      oldLayerObjs: {
        [action.oldLayer.id]: action.oldLayer,
      },
    });

    // Case 2.2.2: state.oldLayerObjs[action.oldLayer.id] is defined
    const stateOldOldLayerDefined = {
      ...stateOld,
      oldLayerObjs: {
        [layerId]: {
          ...layer,
          layers: [layerId2],
          type: 'line',
          credit: '',
          aggregate: {
            timeseries: {
              field: 'period',
            },
          },
        },
      },
    };
    expect(MAP(stateOldOldLayerDefined, action)).toEqual({
      ...stateOldOldLayerDefined,
      oldLayerObjs: {
        [action.oldLayer.id]: action.oldLayer,
      },
    });
  });

  it('should handle TOGGLE_CATEGORIES', () => {
    const category = 'category3';
    const index = 0;
    const isRefresh = false;
    const action = {
      type: TOGGLE_CATEGORIES,
      category,
      index,
      isRefresh,
      mapId,
    };

    // Case 1: The state obj is empty
    expect(MAP(stateEmpty, action)).toEqual({});

    // Case 2: The state obj is NOT empty
    // Case 2.1: action.mapId does NOT match state.mapId
    expect(MAP(stateOldMapIdNoMatch, action)).toEqual(stateOldMapIdNoMatch);

    // Case 2.2: action.mapId matches state.mapId
    // Case 2.2.1: action.index > -1
    // Case 2.2.1.1: action.isRefresh is false
    expect(MAP(stateOld, action)).toEqual({
      ...stateOld,
      openCategories: ['category2'],
    });

    // Case 2.2.1.2: action.isRefresh is true
    const actionWithRefresh = {
      ...action,
      isRefresh: true,
    };
    expect(MAP(stateOld, actionWithRefresh)).toEqual({
      ...stateOld,
      openCategories: [],
    });

    // Case 2.2.2: action.index is < 0
    // Case 2.2.2.1: action.isRefresh is false
    const actionIndexLessThanZero = {
      ...action,
      index: -1,
    };

    expect(MAP(stateOld, actionIndexLessThanZero)).toEqual({
      ...stateOld,
      openCategories: [...stateOld.openCategories, action.category],
    });

    // Case 2.2.2.2: action.isRefresh is true
    const actionIndexLessZeroWithRefresh = {
      ...actionIndexLessThanZero,
      isRefresh: true,
    };
    expect(MAP(stateOld, actionIndexLessZeroWithRefresh)).toEqual({
      ...stateOld,
      openCategories: [],
    });
  });

  it('should handle DETAIL_VIEW', () => {
    const payload = {
      model: {
        title: 'Title',
        subTitle: 'SubTitle',
      },
      layerId,
      properties: {
        title: 'title',
        'sub-title': 'sub-title',
        'basic-info': 'basic-info',
        'image-url': 'url',
      },
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
    // Case 1: The state obj is empty
    expect(MAP(stateEmpty, action)).toEqual({});

    // Case 2: The state obj is NOT empty
    // Case 2.1: action.mapId does NOT match state.mapId
    expect(MAP(stateOldMapIdNoMatch, action)).toEqual(stateOldMapIdNoMatch);

    // Case 2.2: action.mapId matches state.mapId
    // Case 2.1: action.payload is null
    const actionUndefinedPayload = {
      ...action,
      payload: null,
    };
    expect(MAP(stateOld, actionUndefinedPayload)).toEqual({
      ...stateOld,
      detailView: null,
    });

    // Case 2.2: action.payload is NOT null
    // Case 2.2.1: action.payload.properties is NOT null
    // Case 2.2.1.1: action.payload.layerId is NOT null
    expect(MAP(stateOld, action)).toEqual({
      ...stateOld,
      showFilterPanel: false,
      detailView: {
        model: action.payload.model,
        spec: action.payload.detailSpec,
        properties: action.payload.properties,
        layerId: action.payload.layerId,
      },
    });

    // Case 2.2.1.2: action.payload.layerId is null
    const actionPayloadLayerIdNull = {
      ...action,
      payload: {
        ...action.payload,
        layerId: null,
      },
    };
    expect(MAP(stateOld, actionPayloadLayerIdNull)).toEqual({
      ...stateOld,
      showFilterPanel: stateOld.showFilterPanel,
      detailView: null,
    });

    // Case 2.2.2: action.payload.properties is null
    const actionPayloadPropertiesNull = {
      ...action,
      payload: {
        ...action.payload,
        properties: null,
      },
    };
    // Case 2.2.2.1: action.payload.layerId is NOT null
    expect(MAP(stateOld, actionPayloadPropertiesNull)).toEqual({
      ...stateOld,
      showFilterPanel: stateOld.showFilterPanel,
      detailView: null,
    });

    // Case 2.2.2.2: action.payload.layerId is null
    const actionPayloadPropertiesNullLayerIdNull = {
      ...actionPayloadPropertiesNull,
      payload: {
        ...actionPayloadPropertiesNull.payload,
        layerId: null,
      },
    };
    expect(MAP(stateOld, actionPayloadPropertiesNullLayerIdNull)).toEqual({
      ...stateOld,
      showFilterPanel: stateOld.showFilterPanel,
      detailView: null,
    });
  });

  it('should handle REQUEST_DATA', () => {
    const action = {
      type: REQUEST_DATA,
      layerId,
      mapId,
    };
    // Case 1: The state obj is empty
    expect(MAP(stateEmpty, action)).toEqual({});

    // Case 2: The state obj is NOT empty
    // Case 2.1: action.mapId does NOT match state.mapId
    expect(MAP(stateOldMapIdNoMatch, action)).toEqual(stateOldMapIdNoMatch);

    // Case 2.2: action.mapId matches state.mapId
    // Case 2.2.1: state.layers[action.layerdId] is undefined
    expect(MAP(stateOld, action)).toEqual({
      ...stateOld,
      showSpinner: true,
      layers: {
        ...stateOld.layers,
        [action.layerId]: {
          ...stateOld.layers[action.layerId],
          isLoading: true,
          loaded: false,
        },
      },
    });

    // Case 2.2.2: state.layers[action.layerId] is defined
    expect(MAP(stateOldLayersNotEmpty, action)).toEqual({
      ...stateOldLayersNotEmpty,
      showSpinner: true,
      layers: {
        ...stateOldLayersNotEmpty.layers,
        [action.layerId]: {
          ...stateOldLayersNotEmpty.layers[action.layerId],
          isLoading: true,
          loaded: false,
        },
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
    // Case 1: The state obj is empty
    expect(MAP(stateEmpty, action)).toEqual({});

    // Case 2: The state obj is NOT empty
    // Case 2.1: action.mapId does NOT match state.mapId
    expect(MAP(stateOldMapIdNoMatch, action)).toEqual(stateOldMapIdNoMatch);

    // Case 2.2: action.mapId matches state.mapId
    // Case 2.2.1: state.layers[action.layer.id] is undefined
    // Case 2.2.1.1: action.layer.filters is undefined
    const expectedObj = MAP(stateOld, action);
    expect(typeof expectedObj.reloadLayers).toBe('number');

    delete stateOld.reloadLayers;
    delete expectedObj.reloadLayers;

    expect(expectedObj).toEqual({
      ...stateOld,
      layers: {
        ...stateOld.layers,
        [action.layer.id]: {
          ...stateOld.layers[action.layer.id],
          ...action.layer,
          labels: action.layer.labels,
          isLoading: false,
          loaded: true,
        },
      },
      timeseries: action.timeseries,
      visibleLayerId: action.layer.id,
      showSpinner: false,
      doApplyFilters: undefined,
    });

    // Case 2.2.1.2: action.layer.filters is defined
    // Case 2.2.1.2.1: action.layer.filters.admin is false
    const actionLayerFilters = {
      ...action,
      layer: {
        ...action.layer,
        filters: {
          layerFilters: ['all'],
          admin: false,
        },
      },
    };
    const expctedObjLayerFilters = MAP(stateOld, actionLayerFilters);
    expect(typeof expctedObjLayerFilters.reloadLayers).toBe('number');

    delete stateOld.reloadLayers;
    delete expctedObjLayerFilters.reloadLayers;

    expect(expctedObjLayerFilters).toEqual({
      ...stateOld,
      layers: {
        ...stateOld.layers,
        [actionLayerFilters.layer.id]: {
          ...stateOld.layers[actionLayerFilters.layer.id],
          ...actionLayerFilters.layer,
          labels: actionLayerFilters.layer.labels,
          isLoading: false,
          loaded: true,
        },
      },
      timeseries: actionLayerFilters.timeseries,
      visibleLayerId: actionLayerFilters.layer.id,
      showSpinner: false,
      doApplyFilters: false,
    });

    // Case 2.2.1.2.2: action.layer.filters.admin is true
    const actionLayerFiltersAdmin = {
      ...actionLayerFilters,
      layer: {
        ...actionLayerFilters.layer,
        filters: {
          ...actionLayerFilters.layer.filters,
          admin: true,
        },
      },
    };
    const expctedObjLayerFiltersAdmin = MAP(stateOld, actionLayerFiltersAdmin);
    expect(typeof expctedObjLayerFiltersAdmin.reloadLayers).toBe('number');

    delete stateOld.reloadLayers;
    delete expctedObjLayerFiltersAdmin.reloadLayers;

    expect(expctedObjLayerFiltersAdmin).toEqual({
      ...stateOld,
      layers: {
        ...stateOld.layers,
        [actionLayerFiltersAdmin.layer.id]: {
          ...stateOld.layers[actionLayerFiltersAdmin.layer.id],
          ...actionLayerFiltersAdmin.layer,
          labels: actionLayerFiltersAdmin.layer.labels,
          isLoading: false,
          loaded: true,
        },
      },
      timeseries: actionLayerFiltersAdmin.timeseries,
      visibleLayerId: actionLayerFiltersAdmin.layer.id,
      showSpinner: false,
      doApplyFilters: true,
    });

    // Case 2.2.2: state.layers[action.layer.id] is defined
    // Case 2.2.2.1: action.layer.filters is undefined
    const expectedObjLayerExists = MAP(stateOldLayersNotEmpty, action);
    expect(typeof expectedObjLayerExists.reloadLayers).toBe('number');

    delete stateOldLayersNotEmpty.reloadLayers;
    delete expectedObjLayerExists.reloadLayers;

    expect(expectedObjLayerExists).toEqual({
      ...stateOldLayersNotEmpty,
      layers: {
        ...stateOldLayersNotEmpty.layers,
        [action.layer.id]: {
          ...stateOldLayersNotEmpty.layers[action.layer.id],
          ...action.layer,
          labels: action.layer.labels,
          isLoading: false,
          loaded: true,
        },
      },
      timeseries: action.timeseries,
      visibleLayerId: action.layer.id,
      showSpinner: false,
      doApplyFilters: undefined,
    });
    // Case 2.2.2.2: action.layer.filters is defined
    // Case 2.2.2.2.1: action.layer.filters.admin is false
    const expctedObjLayerExistsFilters = MAP(stateOldLayersNotEmpty, actionLayerFilters);
    expect(typeof expctedObjLayerExistsFilters.reloadLayers).toBe('number');

    delete stateOldLayersNotEmpty.reloadLayers;
    delete expctedObjLayerExistsFilters.reloadLayers;

    expect(expctedObjLayerExistsFilters).toEqual({
      ...stateOldLayersNotEmpty,
      layers: {
        ...stateOldLayersNotEmpty.layers,
        [actionLayerFilters.layer.id]: {
          ...stateOldLayersNotEmpty.layers[actionLayerFilters.layer.id],
          ...actionLayerFilters.layer,
          labels: actionLayerFilters.layer.labels,
          isLoading: false,
          loaded: true,
        },
      },
      timeseries: actionLayerFilters.timeseries,
      visibleLayerId: actionLayerFilters.layer.id,
      showSpinner: false,
      doApplyFilters: false,
    });
    // Case 2.2.2.2.2: action.layer.filters.admin is true
    const expctedObjLayerExistsFiltersAdmin = MAP(stateOldLayersNotEmpty, actionLayerFiltersAdmin);
    expect(typeof expctedObjLayerExistsFiltersAdmin.reloadLayers).toBe('number');

    delete stateOldLayersNotEmpty.reloadLayers;
    delete expctedObjLayerExistsFiltersAdmin.reloadLayers;

    expect(expctedObjLayerExistsFiltersAdmin).toEqual({
      ...stateOldLayersNotEmpty,
      layers: {
        ...stateOldLayersNotEmpty.layers,
        [actionLayerFiltersAdmin.layer.id]: {
          ...stateOldLayersNotEmpty.layers[actionLayerFiltersAdmin.layer.id],
          ...actionLayerFiltersAdmin.layer,
          labels: actionLayerFiltersAdmin.layer.labels,
          isLoading: false,
          loaded: true,
        },
      },
      timeseries: actionLayerFiltersAdmin.timeseries,
      visibleLayerId: actionLayerFiltersAdmin.layer.id,
      showSpinner: false,
      doApplyFilters: true,
    });
  });

  it('should handle UPDATE_TIMESERIES', () => {
    const action = {
      type: UPDATE_TIMESERIES,
      timeseries,
      mapId,
      layerId,
    };
    // Case 1: The state obj is empty
    expect(MAP(stateEmpty, action)).toEqual({});

    // Case 2: The state obj is NOT empty
    // Case 2.1: action.mapId does NOT match state.mapId
    expect(MAP(stateOldMapIdNoMatch, action)).toEqual(stateOldMapIdNoMatch);

    // Case 2.2: action.mapId matches state.mapId
    // Case 2.2.1: state.layers[action.layerId] is undefined
    // Case 2.2.1.1: action.timeseries[action.layerId] is undefined
    const actionTimeSeriesEmpty = {
      ...action,
      timeseries: {},
    };

    const expctedObjTimeSeriesEmpty = MAP(stateOld, actionTimeSeriesEmpty);
    expect(typeof expctedObjTimeSeriesEmpty.reloadLayers).toBe('number');

    delete stateOld.reloadLayers;
    delete expctedObjTimeSeriesEmpty.reloadLayers;

    expect(expctedObjTimeSeriesEmpty).toEqual({
      ...stateOld,
      layers: stateOld.layers,
      timeseries: actionTimeSeriesEmpty.timeseries,
      doApplyFilters: undefined,
    });

    // Case 2.2.1.2: action.timeseries[action.layerId] is defined
    // Case 2.2.1.2.1: action.timeseries[action.layerId].adminFilter is false
    const expectedObj = MAP(stateOld, action);
    expect(typeof expectedObj.reloadLayers).toBe('number');

    delete stateOld.reloadLayers;
    delete expectedObj.reloadLayers;

    expect(expectedObj).toEqual({
      ...stateOld,
      layers: stateOld.layers,
      timeseries: action.timeseries,
      doApplyFilters: false,
    });

    // Case 2.2.1.2.2: action.timeseries[action.layerId].adminFilter is true
    const actionTimeSeriesLayerAdminFilter = {
      ...action,
      timeseries: {
        ...action.timeseries,
        [layerId]: {
          ...action.timeseries.layerId,
          adminFilter: true,
        },
      },
    };
    const expectedObjTimeSeriesLayerAdmin = MAP(stateOld, actionTimeSeriesLayerAdminFilter);
    expect(typeof expectedObjTimeSeriesLayerAdmin.reloadLayers).toBe('number');

    delete stateOld.reloadLayers;
    delete expectedObjTimeSeriesLayerAdmin.reloadLayers;

    expect(expectedObjTimeSeriesLayerAdmin).toEqual({
      ...stateOld,
      layers: stateOld.layers,
      timeseries: actionTimeSeriesLayerAdminFilter.timeseries,
      doApplyFilters: true,
    });

    // Case 2.2.2: state.layers[action.layerId] is defined
    // Case 2.2.2.1: state.layers[action.layerId].filters is undefined
    // Case 2.2.2.1.1: action.timeseries[action.layerId] is undefined
    const expctedObjTimeSeriesEmptyStateLayers = MAP(stateOldLayersNotEmpty, actionTimeSeriesEmpty);
    expect(typeof expctedObjTimeSeriesEmptyStateLayers.reloadLayers).toBe('number');

    delete stateOldLayersNotEmpty.reloadLayers;
    delete expctedObjTimeSeriesEmptyStateLayers.reloadLayers;

    expect(expctedObjTimeSeriesEmptyStateLayers).toEqual({
      ...stateOldLayersNotEmpty,
      layers: stateOldLayersNotEmpty.layers,
      timeseries: actionTimeSeriesEmpty.timeseries,
      doApplyFilters: undefined,
    });

    // Case 2.2.2.1.2: action.timeseries[action.layerId] is defined
    // Case 2.2.2.1.2.1: action.timeseries[action.layerId].adminFilter is false
    const expectedObjStateLayersNotEmpty = MAP(stateOldLayersNotEmpty, action);
    expect(typeof expectedObjStateLayersNotEmpty.reloadLayers).toBe('number');

    delete stateOldLayersNotEmpty.reloadLayers;
    delete expectedObjStateLayersNotEmpty.reloadLayers;

    expect(expectedObjStateLayersNotEmpty).toEqual({
      ...stateOldLayersNotEmpty,
      layers: stateOldLayersNotEmpty.layers,
      timeseries: action.timeseries,
      doApplyFilters: false,
    });

    // Case 2.2.2.1.2.2: action.timeseries[action.layerId].adminFilter is true
    const expectedObjStateLayersNotEmptyTimeSeriesAdminFilter = MAP(
      stateOldLayersNotEmpty,
      actionTimeSeriesLayerAdminFilter
    );
    expect(typeof expectedObjStateLayersNotEmptyTimeSeriesAdminFilter.reloadLayers).toBe('number');

    delete stateOldLayersNotEmpty.reloadLayers;
    delete expectedObjStateLayersNotEmptyTimeSeriesAdminFilter.reloadLayers;

    expect(expectedObjStateLayersNotEmptyTimeSeriesAdminFilter).toEqual({
      ...stateOldLayersNotEmpty,
      layers: stateOldLayersNotEmpty.layers,
      timeseries: actionTimeSeriesLayerAdminFilter.timeseries,
      doApplyFilters: true,
    });

    // Case 2.2.2.2: state.layers[action.layerId].filters is defined
    // Case 2.2.2.2.1: state.layers[action.layerId].filters.admin is false
    // Case 2.2.2.2.1.1: action.timeseries[action.layerId].adminFilter is false
    const stateOldLayersObjFilters = {
      ...stateOldLayersNotEmpty,
      layers: {
        ...stateOldLayersNotEmpty.layers,
        [layerId]: {
          ...stateOldLayersNotEmpty.layers.layerId,
          filters: {
            layerFilters: ['all'],
            admin: false,
          },
        },
      },
    };
    const expectedObjStateOldLayersObjFilters = MAP(stateOldLayersObjFilters, action);
    expect(typeof expectedObjStateOldLayersObjFilters.reloadLayers).toBe('number');

    delete stateOldLayersObjFilters.reloadLayers;
    delete expectedObjStateOldLayersObjFilters.reloadLayers;

    expect(expectedObjStateOldLayersObjFilters).toEqual({
      ...stateOldLayersObjFilters,
      layers: stateOldLayersObjFilters.layers,
      timeseries: action.timeseries,
      doApplyFilters: false,
    });

    // Case 2.2.2.2.1.2: action.timeseries[action.layerId].adminFilter is true
    const expectedObjStateOldLayersObjFiltersTimeSeriesAdminFilter = MAP(
      stateOldLayersObjFilters,
      actionTimeSeriesLayerAdminFilter
    );
    expect(typeof expectedObjStateOldLayersObjFiltersTimeSeriesAdminFilter.reloadLayers).toBe(
      'number'
    );

    delete stateOldLayersObjFilters.reloadLayers;
    delete expectedObjStateOldLayersObjFiltersTimeSeriesAdminFilter.reloadLayers;

    expect(expectedObjStateOldLayersObjFiltersTimeSeriesAdminFilter).toEqual({
      ...stateOldLayersObjFilters,
      layers: stateOldLayersObjFilters.layers,
      timeseries: actionTimeSeriesLayerAdminFilter.timeseries,
      doApplyFilters: true,
    });

    // Case 2.2.2.2.2: state.layers[action.layerId].filters.admin is true
    // Case 2.2.2.2.2.1: action.timeseries[action.layerId].adminFilter is false
    const stateOldLayersObjFiltersAdmin = {
      ...stateOldLayersObjFilters,
      layers: {
        ...stateOldLayersObjFilters.layers,
        [layerId]: {
          ...stateOldLayersObjFilters.layers[layerId],
          filters: {
            ...stateOldLayersObjFilters.layers[layerId].filters,
            admin: true,
          },
        },
      },
    };
    const expectedObjStateOldLayersObjFiltersAdmin = MAP(stateOldLayersObjFiltersAdmin, action);
    expect(typeof expectedObjStateOldLayersObjFiltersAdmin.reloadLayers).toBe('number');

    delete stateOldLayersObjFiltersAdmin.reloadLayers;
    delete expectedObjStateOldLayersObjFiltersAdmin.reloadLayers;

    expect(expectedObjStateOldLayersObjFiltersAdmin).toEqual({
      ...stateOldLayersObjFiltersAdmin,
      layers: {
        ...stateOldLayersObjFiltersAdmin.layers,
        [action.layerId]: {
          ...stateOldLayersObjFiltersAdmin.layers[action.layerId],
          filters: {
            ...stateOldLayersObjFiltersAdmin.layers[action.layerId].filters,
            admin: false,
          },
        },
      },
      timeseries: action.timeseries,
      doApplyFilters: false,
    });

    // Case 2.2.2.2.2.2: action.timeseries[action.layerId].adminFilter is true
    const expectedObjStateOldLayersObjFiltersAdminTimeSeriesLayerAdminFilter = MAP(
      stateOldLayersObjFiltersAdmin,
      actionTimeSeriesLayerAdminFilter
    );
    expect(
      typeof expectedObjStateOldLayersObjFiltersAdminTimeSeriesLayerAdminFilter.reloadLayers
    ).toBe('number');

    delete stateOldLayersObjFiltersAdmin.reloadLayers;
    delete expectedObjStateOldLayersObjFiltersAdminTimeSeriesLayerAdminFilter.reloadLayers;

    expect(expectedObjStateOldLayersObjFiltersAdminTimeSeriesLayerAdminFilter).toEqual({
      ...stateOldLayersObjFiltersAdmin,
      layers: {
        ...stateOldLayersObjFiltersAdmin.layers,
        [actionTimeSeriesLayerAdminFilter.layerId]: {
          ...stateOldLayersObjFiltersAdmin.layers[actionTimeSeriesLayerAdminFilter.layerId],
          filters: {
            ...stateOldLayersObjFiltersAdmin.layers[actionTimeSeriesLayerAdminFilter.layerId]
              .filters,
            admin: [],
          },
        },
      },
      timeseries: actionTimeSeriesLayerAdminFilter.timeseries,
      doApplyFilters: true,
    });
  });

  it('should handle TRIGGER_SPINNER', () => {
    const action = {
      type: TRIGGER_SPINNER,
      isLoaded: false,
      mapId,
    };
    // Case 1: The state obj is empty
    expect(MAP(stateEmpty, action)).toEqual({});

    // Case 2: The state obj is NOT empty
    // Case 2.1: action.mapId does NOT match state.mapId
    expect(MAP(stateOldMapIdNoMatch, action)).toEqual(stateOldMapIdNoMatch);

    // Case 2.2: action.mapId matches state.mapId
    expect(MAP(stateOld, action)).toEqual({
      ...stateOld,
      showSpinner: action.isLoaded,
    });
  });
});
