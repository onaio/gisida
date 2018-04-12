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

export const addLayer = layer => ({
  type: types.ADD_LAYER,
  layer,
});

export const changeRegion = region => ({
  type: types.CHANGE_REGION,
  region,
});

export const changeStyle = style => ({
  type: types.CHANGE_STYLE,
  style,
});

export const toggleLayer = layerId => ({
  type: types.TOGGLE_LAYER,
  layerId,
});

export const toggleFilter = showFilterPanel => ({
  type: types.TOGGLE_FILTER,
  showFilterPanel,
});

export const setLayerFilter = (layerId, layerFilters) => ({
  type: types.SET_LAYER_FILTERS,
  layerId,
  layerFilters,
});

export const filtersUpdated = layerId => ({
  type: types.FILTERS_UPDATED,
  layerId,
});

export const saveFilterState = (layerId, filterState) => ({
  type: types.SAVE_FILTER_STATE,
  layerId,
  filterState,
});

export const updatePrimaryLayer = primaryLayer => ({
  type: types.UPDATE_PRIMARY_LAYER,
  primaryLayer,
});

export const requestData = layerId => ({
  type: types.REQUEST_DATA,
  layerId,
});

export const receiveData = (layer, timeseries) => ({
  type: types.RECEIVE_DATA,
  layer,
  timeseries,
});

export const mapRendered = isRendered => ({
  type: types.MAP_RENDERED,
  isRendered,
});

export const mapLoaded = isLoaded => ({
  type: types.MAP_LOADED,
  isLoaded,
});

export const reloadLayers = reload => ({
  type: types.RELOAD_LAYERS,
  reload,
});

export const updateTimeseries = timeseries => ({
  type: types.UPDATE_TIMESERIES,
  timeseries,
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
  setLayerFilter,
  filtersUpdated,
  saveFilterState,
};
