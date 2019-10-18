import * as actions from '../../../src/store/actions/actions';
import * as types from '../../../src/store/constants/actionTypes';
import defaultState from '../../../src/store/defaultState';

const layerId = 'test-layer';
const layer = { id: layerId };
const timeseries = { [layerId]: {} };
const mapId = 'map-1';

describe('actions', () => {
  test('should create an action to init app', () => {
    const config = defaultState.APP;
    const expectedAction = {
      type: types.INIT_APP,
      config,
    };
    expect(actions.initApp(config)).toEqual(expectedAction);
  });

  test('should create an action to init styles', () => {
    const styles = defaultState.STYLES;
    const { mapConfig } = defaultState.MAP;
    const expectedAction = {
      type: types.INIT_STYLES,
      styles,
      mapConfig,
    };
    expect(actions.initStyles(styles, mapConfig)).toEqual(expectedAction);
  });

  test('should create an action to init regions', () => {
    const regions = defaultState.REGIONS;
    const { mapConfig } = defaultState.MAP;
    const expectedAction = {
      type: types.INIT_REGIONS,
      regions,
      mapConfig,
    };
    expect(actions.initRegions(regions, mapConfig)).toEqual(expectedAction);
  });

  test('should create an action to add layer', () => {
    const expectedAction = {
      type: types.ADD_LAYER,
      layer,
      mapId,
    };
    expect(actions.addLayer(mapId, layer)).toEqual(expectedAction);
  });

  test('should creADD_LAYER_GRate an action to add layer group', () => {
    const group = ['E1', 'E2'];
    const groupId = 'group-id';
    const expectedAction = {
      type: types.ADD_LAYER_GROUP,
      mapId,
      groupId,
      group,
    };
    expect(actions.addLayerGroup(mapId, groupId, group)).toEqual(expectedAction);
  });

  test('should create an action to change region', () => {
    const region = 'Nairobi';
    const expectedAction = {
      type: types.CHANGE_REGION,
      region,
      mapId,
    };
    expect(actions.changeRegion(mapId, region)).toEqual(expectedAction);
  });

  test('should create an action to change style', () => {
    const style = 'mapbox://styles/mapbox/satellite-v9';
    const expectedAction = {
      type: types.CHANGE_STYLE,
      style,
      mapId,
    };
    expect(actions.changeStyle(mapId, style)).toEqual(expectedAction);
  });

  test('should create an action to toggle layer', () => {
    const isInit = true;
    const expectedAction = {
      type: types.TOGGLE_LAYER,
      layerId,
      isInit,
      mapId,
    };
    expect(actions.toggleLayer(mapId, layerId, isInit)).toEqual(expectedAction);
  });

  test('should create an action to toggle filter', () => {
    const expectedAction = {
      type: types.TOGGLE_FILTER,
      mapId,
    };
    expect(actions.toggleFilter(mapId)).toEqual(expectedAction);
  });

  // added by Philipp
  test('should create an action to set layer filter', () => {
    const expectedAction = {
      type: types.SET_LAYER_FILTERS,
      // layerId,
      // layerFilters,
      mapId,
    };
    expect(actions.setLayerFilter(mapId)).toEqual(expectedAction);
  });

  // added by Philipp
  test('should create an action to update filters', () => {
    const expectedAction = {
      type: types.FILTERS_UPDATED,
      mapId,
      layerId,
    };
    expect(actions.filtersUpdated(mapId, layerId)).toEqual(expectedAction);
  });

  // added by Philipp
  test('should create an action to save filter state', () => {
    const filterState = {
      filterOptions: {},
    };
    const isClear = true;
    const expectedAction = {
      type: types.SAVE_FILTER_STATE,
      layerId,
      filterState,
      mapId,
      isClear,
    };
    expect(actions.saveFilterState(mapId, layerId, filterState, isClear)).toEqual(expectedAction);
  });

  test('should create an action to update primary layer', () => {
    const expectedAction = {
      type: types.UPDATE_PRIMARY_LAYER,
      primaryLayer: layerId,
      mapId,
    };
    expect(actions.updatePrimaryLayer(mapId, layerId)).toEqual(expectedAction);
  });

  test('should create an action to request data', () => {
    const expectedAction = {
      type: types.REQUEST_DATA,
      layerId,
      mapId,
    };
    expect(actions.requestData(mapId, layerId)).toEqual(expectedAction);
  });

  test('should create an action to recieve data', () => {
    const expectedAction = {
      type: types.RECEIVE_DATA,
      layer,
      timeseries,
      mapId,
    };
    expect(actions.receiveData(mapId, layer, timeseries)).toEqual(expectedAction);
  });

  test('should create an action to indicate map rendered', () => {
    const isRendered = Math.random() >= 0.5;
    const expectedAction = {
      type: types.MAP_RENDERED,
      isRendered,
      mapId,
    };
    expect(actions.mapRendered(mapId, isRendered)).toEqual(expectedAction);
  });

  test('should create an action to indicate map loaded', () => {
    const isLoaded = Math.random() >= 0.5;
    const expectedAction = {
      type: types.MAP_LOADED,
      isLoaded,
      mapId,
    };
    expect(actions.mapLoaded(mapId, isLoaded)).toEqual(expectedAction);
  });

  test('should create an action to reload layers', () => {
    const reload = Math.random();
    const expectedAction = {
      type: types.RELOAD_LAYERS,
      reload,
      mapId,
    };
    expect(actions.reloadLayers(mapId, reload)).toEqual(expectedAction);
  });

  test('should create an action to update timeseries', () => {
    const expectedAction = {
      type: types.UPDATE_TIMESERIES,
      timeseries,
      mapId,
    };
    expect(actions.updateTimeseries(mapId, timeseries)).toEqual(expectedAction);
  });

  // added by Philipp
  test('should create an action to view in detail', () => {
    const expectedAction = {
      type: types.DETAIL_VIEW,
      mapId,
      // payload,
    };
    expect(actions.detailView(mapId)).toEqual(expectedAction);
  });

  test('should create an action to turn off spinner', () => {
    const isLoaded = false;
    const expectedAction = {
      type: types.TRIGGER_SPINNER,
      isLoaded,
      mapId,
    };
    expect(actions.triggerSpinner(mapId, isLoaded)).toEqual(expectedAction);
  });

  test('should create an action to toggle menu', () => {
    const expectedAction = {
      type: types.TOGGLE_MENU,
      mapId,
    };
    expect(actions.toggleMenu(mapId)).toEqual(expectedAction);
  });

  test('should return function to get current state', () => {
    const expectedAction = actions.returnState;
    expect(actions.getCurrentState()).toEqual(expectedAction);
  });

  test('should create an action to update location', () => {
    const expectedAction = {
      type: types.LOCATION_UPDATED,
      mapId,
    };
    expect(actions.locationUpdated(mapId)).toEqual(expectedAction);
  });

  test('should create an action to set location', () => {
    const loc = [-74.5, 40];
    const expectedAction = {
      type: types.SET_LOCATION,
      loc,
      mapId,
    };
    expect(actions.setLocation(mapId, loc)).toEqual(expectedAction);
  });

  test('should create an action to toggle map location', () => {
    const loc = [-74.5, 40];
    const expectedAction = {
      type: types.SET_LOCATION,
      loc,
    };
    expect(actions.toggleMapLocation(loc)).toEqual(expectedAction);
  });

  test('should create an action to init superset', () => {
    const config = defaultState.APP;
    const expectedAction = {
      type: types.INIT_SUPERSET,
      config,
    };
    expect(actions.initSuperset(config)).toEqual(expectedAction);
  });

  test('should create an action to update a layer', () => {
    const expectedAction = {
      type: types.LAYER_RELOADED,
      mapId,
    };
    expect(actions.layerReloaded(mapId)).toEqual(expectedAction);
  });

  test('should create an action to reload layer', () => {
    const expectedAction = {
      type: types.RELOAD_LAYER,
      layerId,
      mapId,
    };
    expect(actions.reloadLayer(mapId, layerId)).toEqual(expectedAction);
  });

  test('should create an action to reset filtered layer', () => {
    const oldLayer = 'oldLayer';
    const expectedAction = {
      type: types.RESET_FILTERED_LAYER,
      mapId,
      oldLayer,
    };
    expect(actions.resetFilteredLayer(mapId, oldLayer)).toEqual(expectedAction);
  });

  test('should create an action to toggle categories', () => {
    const category = 'category';
    const index = 0;
    const isRefresh = false;
    const expectedAction = {
      type: types.TOGGLE_CATEGORIES,
      category,
      index,
      isRefresh,
      mapId,
    };
    expect(actions.toggleCategories(mapId, category, index, isRefresh)).toEqual(expectedAction);
  });

  test('should create an action to init loc', () => {
    const config = defaultState.APP;
    const expectedAction = {
      type: types.INIT_LOC,
      config,
    };
    expect(actions.initLoc(config)).toEqual(expectedAction);
  });

  test('should create an action to init locations', () => {
    const locations = {
      loc1: {
        default: true, // Default is true
        label: 'loc1',
        zoom: 10.978331870416822,
        center: {
          lng: 55.13155473084771,
          lat: 34.50960383103761,
        },
      },
      loc2: {
        default: true, // Default is true
        label: 'loc2',
        zoom: 10.978331870416822,
        center: {
          lng: 55.13155473084771,
          lat: 37.50960383103761,
        },
      },
    };

    const expectedAction = {
      type: types.INIT_LOCATIONS,
      locations,
    };
    expect(actions.initLocations(locations)).toEqual(expectedAction);
  });

  test('should create an action to add layers list', () => {
    const layers = {
      layers: [
        {
          id: 'rivers',
          source: 'my-source',
          'source-layer': 'waterway',
          type: 'line',
          paint: {
            'line-color': '#FFC0CB',
          },
        },
        {
          id: 'museums',
          type: 'circle',
          source: 'museums',
          layout: {
            visibility: 'visible',
          },
          paint: {
            'circle-radius': 8,
            'circle-color': 'rgba(55,148,179,1)',
          },
          'source-layer': 'museum-cusco',
        },
      ],
      groups: {
        group2: ['E3', 'E4', 'E5'],
      },
    };
    const expectedAction = {
      type: types.ADD_LAYERS_LIST,
      layers,
    };
    expect(actions.addLayersList(layers)).toEqual(expectedAction);
  });
});
