export const initApp = config => ({
  type: 'INIT_APP',
  config,
});

export const initStyles = (styles, mapConfig) => ({
  type: 'INIT_STYLES',
  styles,
  mapConfig
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


export const requestData = layerId => ({
  type: 'REQUEST_DATA',
  layerId,
});

export const receiveData = layer => ({
  type: 'RECEIVE_DATA',
  layer,
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

export default {
  initApp,
  initStyles,
  initRegions,
  mapRendered,
  mapLoaded,
  addLayer,
  reloadLayers,
  toggleLayer,
  requestData,
  receiveData,
  changeRegion,
  changeStyle,
};
