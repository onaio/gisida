import * as types from '../constants/actionTypes';

export const initApp = config => ({
  type: types.INIT_APP,
  config,
});

export const initStyles = (styles, mapConfig) => ({
  type: types.INIT_STYLES,
  styles,
  mapConfig,
});

export const initRegions = (regions, mapConfig) => ({
  type: types.INIT_REGIONS,
  regions,
  mapConfig,
});

export const initLocations = locations => ({
  type: types.INIT_LOCATIONS,
  locations,
});

export const addLayer = (mapId, layer) => ({
  type: types.ADD_LAYER,
  layer,
  mapId,
});

export const changeRegion = (mapId, region) => ({
  type: types.CHANGE_REGION,
  region,
  mapId,
});

export const changeStyle = (mapId, style) => ({
  type: types.CHANGE_STYLE,
  style,
  mapId,
});

export const toggleLayer = (mapId, layerId) => ({
  type: types.TOGGLE_LAYER,
  layerId,
  mapId,
});

export const toggleFilter = showFilterPanel => ({
  type: types.TOGGLE_FILTER,
  showFilterPanel,
});

export const updatePrimaryLayer = (mapId, primaryLayer) => ({
  type: types.UPDATE_PRIMARY_LAYER,
  primaryLayer,
  mapId,
});

export const requestData = (mapId, layerId) => ({
  type: types.REQUEST_DATA,
  layerId,
  mapId,
});

export const receiveData = (mapId, layer, timeseries) => ({
  type: types.RECEIVE_DATA,
  layer,
  timeseries,
  mapId,
});

export const mapRendered = (mapId, isRendered) => ({
  type: types.MAP_RENDERED,
  isRendered,
  mapId,
});

export const mapLoaded = (mapId, isLoaded) => ({
  type: types.MAP_LOADED,
  isLoaded,
  mapId,
});

export const reloadLayers = (mapId, reload) => ({
  type: types.RELOAD_LAYERS,
  reload,
  mapId,
});

export const updateTimeseries = (mapId, timeseries) => ({
  type: types.UPDATE_TIMESERIES,
  timeseries,
  mapId,
});

export const detailView = payload => ({
  type: types.DETAIL_VIEW,
  payload,
});

export function returnState(dispatch, getState) {
  return getState();
}

export const getCurrentState = () => returnState;

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
  detailView,
};
