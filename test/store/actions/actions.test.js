import * as actions from '../../../src/store/actions/actions';
import * as types from '../../../src/store/constants/actionTypes';
import defaultState from '../../../src/store/defaultState';


const layerId = 'test-layer';
const layer = { id: layerId };
const timeseries = { [layerId]: {} };

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
    };
    expect(actions.addLayer(layer)).toEqual(expectedAction);
  });


  test('should create an action to change region', () => {
    const region = 'Nairobi';
    const expectedAction = {
      type: types.CHANGE_REGION,
      region,
    };
    expect(actions.changeRegion(region)).toEqual(expectedAction);
  });

  test('should create an action to change style', () => {
    const style = 'mapbox://styles/mapbox/satellite-v9';
    const expectedAction = {
      type: types.CHANGE_STYLE,
      style,
    };
    expect(actions.changeStyle(style)).toEqual(expectedAction);
  });


  test('should create an action to toggle layer', () => {
    const expectedAction = {
      type: types.TOGGLE_LAYER,
      layerId,
    };
    expect(actions.toggleLayer(layerId)).toEqual(expectedAction);
  });

  test('should create an action to toggle filter', () => {
    const showFilterPanel = Math.random() >= 0.5;
    const expectedAction = {
      type: types.TOGGLE_FILTER,
      showFilterPanel,
    };
    expect(actions.toggleFilter(showFilterPanel)).toEqual(expectedAction);
  });

  test('should create an action to update primary layer', () => {
    const expectedAction = {
      type: types.UPDATE_PRIMARY_LAYER,
      primaryLayer: layerId,
    };
    expect(actions.updatePrimaryLayer(layerId)).toEqual(expectedAction);
  });

  test('should create an action to request data', () => {
    const expectedAction = {
      type: types.REQUEST_DATA,
      layerId,
    };
    expect(actions.requestData(layerId)).toEqual(expectedAction);
  });

  test('should create an action to recieve data', () => {
    const expectedAction = {
      type: types.RECEIVE_DATA,
      layer,
      timeseries,
    };
    expect(actions.receiveData(layer, timeseries)).toEqual(expectedAction);
  });

  test('should create an action to indicate map rendered', () => {
    const isRendered = Math.random() >= 0.5;
    const expectedAction = {
      type: types.MAP_RENDERED,
      isRendered,
    };
    expect(actions.mapRendered(isRendered)).toEqual(expectedAction);
  });

  test('should create an action to indicate map loaded', () => {
    const isLoaded = Math.random() >= 0.5;
    const expectedAction = {
      type: types.MAP_LOADED,
      isLoaded,
    };
    expect(actions.mapLoaded(isLoaded)).toEqual(expectedAction);
  });

  test('should create an action to reload layers', () => {
    const reload = Math.random();
    const expectedAction = {
      type: types.RELOAD_LAYERS,
      reload,
    };
    expect(actions.reloadLayers(reload)).toEqual(expectedAction);
  });


  test('should create an action to update timeseries', () => {
    const expectedAction = {
      type: types.UPDATE_TIMESERIES,
      timeseries,
    };
    expect(actions.updateTimeseries(timeseries)).toEqual(expectedAction);
  });


  test('should return function to get current state', () => {
    const expectedAction = actions.returnState;
    expect(actions.getCurrentState()).toEqual(expectedAction);
  });


  test('should return function to get current state', () => {
    const expectedAction = {
      initApp: actions.initApp,
      initStyles: actions.initStyles,
      initRegions: actions.initRegions,
      mapRendered: actions.mapRendered,
      mapLoaded: actions.mapLoaded,
      addLayer: actions.addLayer,
      reloadLayers: actions.reloadLayers,
      toggleLayer: actions.toggleLayer,
      toggleFilter: actions.toggleFilter,
      requestData: actions.requestData,
      updatePrimaryLayer: actions.updatePrimaryLayer,
      receiveData: actions.receiveData,
      changeRegion: actions.changeRegion,
      changeStyle: actions.changeStyle,
      getCurrentState: actions.getCurrentState,
      updateTimeseries: actions.updateTimeseries,
    };
    expect(actions.default).toEqual(expectedAction);
  });

});

