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

export const addLayersList = layers => ({
  type: types.ADD_LAYERS_LIST,
  layers,
});

export const addLayer = (mapId, layer) => ({
  type: types.ADD_LAYER,
  layer,
  mapId,
});

export const addLayerGroup = (mapId, groupId, group) => ({
  type: types.ADD_LAYER_GROUP,
  mapId,
  groupId,
  group,
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

export const toggleLayer = (mapId, layerId, isInit = false) => ({
  type: types.TOGGLE_LAYER,
  layerId,
  mapId,
  isInit,
});

export const toggleFilter = (mapId, layerId, showFilterPanel) => ({
  type: types.TOGGLE_FILTER,
  showFilterPanel,
  mapId,
  layerId,
});

export const setLayerFilter = (mapId, layerId, layerFilters) => ({
  type: types.SET_LAYER_FILTERS,
  layerId,
  layerFilters,
  mapId,
});

export const filtersUpdated = (mapId, layerId) => ({
  type: types.FILTERS_UPDATED,
  layerId,
  mapId,
});

export const saveFilterState = (mapId, layerId, filterState) => ({
  type: types.SAVE_FILTER_STATE,
  layerId,
  filterState,
  mapId,
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

export const toggleMenu = (mapId, menuIsOpen) => ({
  type: types.TOGGLE_MENU,
  menuIsOpen,
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

export const reloadLayer = (mapId, layerId) => ({
  type: types.RELOAD_LAYER,
  layerId,
  mapId,
});

export const reloadLayers = (mapId, reload) => ({
  type: types.RELOAD_LAYERS,
  reload,
  mapId,
});

export const layerReloaded = (mapId) => ({
  type: types.LAYER_RELOADED,
});

export const updateTimeseries = (mapId, timeseries) => ({
  type: types.UPDATE_TIMESERIES,
  timeseries,
  mapId,
});

export const detailView = (mapId, payload) => ({
  type: types.DETAIL_VIEW,
  mapId,
  payload,
});

export const triggerSpinner = (mapId, isLoaded = false) => ({
  type: types.TRIGGER_SPINNER,
  isLoaded,
  mapId,
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
  addLayerGroup,
  reloadLayer,
  layerReloaded,
  reloadLayers,
  toggleLayer,
  toggleFilter,
  toggleMenu,
  requestData,
  updatePrimaryLayer,
  receiveData,
  changeRegion,
  changeStyle,
  getCurrentState,
  updateTimeseries,
  detailView,
  setLayerFilter,
  filtersUpdated,
  saveFilterState,
  triggerSpinner,
};
