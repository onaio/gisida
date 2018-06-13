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
      mapId
    };
    expect(actions.addLayer(mapId, layer)).toEqual(expectedAction);
  });

  //added by Philipp
  test('should create an action to add layer group', () => {
    //need to define groupId and group?
    const expectedAction = {
      type: types.ADD_LAYER_GROUP,
      mapId,
      groupId,
      group
    };
    expect(actions.addLayerGroup(mapId, layer)).toEqual(expectedAction);
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

  //added by Philipp
  test('should create an action to set layer filter', () => {
    //need to define layerFilters?
    const expectedAction = {
      type: types.SET_LAYER_FILTERS,
      layerId,
      layerFilters,
      mapId,
    };
    expect(actions.setLayerFilter(mapId)).toEqual(expectedAction);
  });

  //added by Philipp
  test('should create an action to update filters', () => {
    const expectedAction = {
      type: types.FILTERS_UPDATED,
      layerId,
      mapId,
    };
    expect(actions.filtersUpdated(mapId)).toEqual(expectedAction);
  });

  //added by Philipp
  test('should create an action to save filter state', () => {
    //need to define filterState?
    const expectedAction = {
      type: types.SAVE_FILTER_STATE,
      layerId,
      filterState,
      mapId,
    };
    expect(actions.saveFilterState(mapId)).toEqual(expectedAction);
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

  //added by Philipp
  test('should create an action to view in detail', () => {
    //need to define payload?
    const expectedAction = {
      type: types.DETAIL_VIEW,
      mapId,
      payload,
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
});

