export const initApp = config => ({
  type: 'INIT_APP',
  config,
});

export const initStyles = (styles, mapConfig) => ({
  type: 'INIT_STYLES',
  styles,
  mapConfig,
});

export const initRegions = (regions, mapConfig) => ({
  type: 'INIT_REGIONS',
  regions,
  mapConfig,
});

export const addLayer = layer => ({
  type: 'ADD_LAYER',
  layer,
});

export const changeRegion = region => ({
  type: 'CHANGE_REGION',
  region,
});

export const changeStyle = style => ({
  type: 'CHANGE_STYLE',
  style,
});

export const toggleLayer = layerId => ({
  type: 'TOGGLE_LAYER',
  layerId,
});

export const toggleFilter = showFilterPanel => ({
  type: 'TOGGLE_FILTER',
  showFilterPanel,
});

export const requestData = layerId => ({
  type: 'REQUEST_DATA',
  layerId,
});

export const updatePrimaryLayer = primaryLayer => ({
  type: 'UPDATE_PRIMARY_LAYER',
  primaryLayer,
});

export const receiveData = (layer, timeseries) => ({
  type: 'RECEIVE_DATA',
  layer,
  timeseries,
});

export const mapRendered = isRendered => ({
  type: 'MAP_RENDERED',
  isRendered,
});

export const mapLoaded = isLoaded => ({
  type: 'MAP_LOADED',
  isLoaded,
});

export const reloadLayers = reload => ({
  type: 'RELOAD_LAYERS',
  reload,
});

export const reloadLayer = reload => ({
  type: 'RELOAD_LAYER',
  reload,
});


export const updateTimeseries = timeseries => ({
  type: 'UPDATE_TIMESERIES',
  timeseries,
});

export const getCurrentState = () => function (dispatch, getState) {
  return getState();
};

export default {
  initApp,
  initStyles,
  initRegions,
  mapRendered,
  mapLoaded,
  addLayer,
  reloadLayers,
  toggleLayer,
  toggleFilter,
  requestData,
  updatePrimaryLayer,
  receiveData,
  changeRegion,
  changeStyle,
  getCurrentState,
  updateTimeseries,
};
