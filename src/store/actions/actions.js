/* eslint-disable arrow-parens */
import * as types from '../constants/actionTypes';
import { ONAoauth } from '../../connectors/ona-api/auth';

export const initApp = config => ({
  type: types.INIT_APP,
  config,
});

export const initLoc = config => ({
  type: types.INIT_LOC,
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

export const initSuperset = config => ({
  type: types.INIT_SUPERSET,
  config,
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

export const saveFilterState = (mapId, layerId, filterState, isClear) => ({
  type: types.SAVE_FILTER_STATE,
  layerId,
  filterState,
  mapId,
  isClear,
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

export const toggleCategories = (mapId, category, index, isRefresh) => ({
  type: types.TOGGLE_CATEGORIES,
  category,
  index,
  isRefresh,
  mapId,
});

export const toggleGroups = (mapId, group, index, isRefresh) => ({
  type: types.TOGGLE_GROUPS,
  group,
  index,
  isRefresh,
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

export const layerReloaded = mapId => ({
  mapId,
  type: types.LAYER_RELOADED,
});

export const saveFilterOptions = (mapId, filterOptions) => ({
  type: types.SAVE_FILTER_OPTIONS,
  mapId,
  filterOptions,
});

export const updateTimeseries = (mapId, timeseries, layerId) => ({
  type: types.UPDATE_TIMESERIES,
  timeseries,
  mapId,
  layerId,
});

export const detailView = (mapId, payload) => ({
  type: types.DETAIL_VIEW,
  mapId,
  payload,
});

export const resetFilteredLayer = (mapId, oldLayer) => ({
  type: types.RESET_FILTERED_LAYER,
  mapId,
  oldLayer,
});

export const triggerSpinner = (mapId, isLoaded = false) => ({
  type: types.TRIGGER_SPINNER,
  isLoaded,
  mapId,
});

export function returnState(dispatch, getState) {
  return getState();
}

// when login request is dispatched ie to fetch user token or client id etc
// if reponse is 200/OK we dispatch loginSuccess
// else we dispatch loginError

export const loginRequest = credentials => ({
  type: types.LOGIN_REQUEST,
  isAuthenticated: false,
  credentials,
});

// eslint-disable-next-line
export const loginSuccess = user => ({
  type: types.LOGIN_SUCCESS,
  isAuthenticated: true,
});

export const loginFailure = errorMessage => ({
  types: types.LOGIN_FAILURE,
  isAuthenticated: false,
  errorMessage,
});

export const getCurrentState = () => returnState;

// Auth actions

// when login request is dispatched ie to fetch user token or client id etc
// if reponse is 200/OK we dispatch loginSuccess
// else we dispatch loginError

export const initAuth = config => ({
  type: types.INIT_AUTH,
  config,
});

export const requestLogin = creds => ({
  type: types.LOGIN_REQUEST,
  isFetching: true,
  isAuthenticated: false,
  creds,
});

export const receiveLogin = user => ({
  type: types.LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  user,
});

export const loginError = message => ({
  type: types.LOGIN_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  message,
});

export const receiveLogout = () => ({
  type: types.LOGOUT_SUCCESS,
  isFetching: false,
  isAuthenticated: false,
});

export const receiveToken = token => ({
  type: types.RECEIVE_TOKEN,
  token,
});

export const getAuthConfigs = config => ({
  type: types.GET_AUTH_CONFIGS,
  config,
});

export const fetchFormsError = message => ({
  type: types.FETCH_FORMS_ERROR,
  message,
});

// todo - Migrate to ONA Connector?
export const loginUser = token => {
  const reqConfig = {
    token,
    endpoint: 'user',
  };

  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(token));
    return ONAoauth(reqConfig, token, dispatch);
  };
};

export const getUserForms = (token) => {
  const reqConfig = {
    token,
    endpoint: 'forms',
  };
  // eslint-disable-next-line
  return dispatch => fetchAPIForms(reqConfig, dispatch);
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('state');
  dispatch(receiveLogout());
  window.location.reload();
};

export const locationUpdated = mapId => ({
  type: types.LOCATION_UPDATED,
  mapId,
});

export const setLocation = (mapId, loc) => ({
  type: types.SET_LOCATION,
  loc,
  mapId,
});

export const toggleMapLocation = loc => ({
  type: types.SET_LOCATION,
  loc,
});

export const setMenuScroll = (mapId, scrollTop) => ({
  type: types.SET_MENU_SCROLL,
  mapId,
  scrollTop,
});

export default {
  initApp,
  initStyles,
  initRegions,
  initSuperset,
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
  resetFilteredLayer,
  setLayerFilter,
  filtersUpdated,
  saveFilterState,
  triggerSpinner,
  loginUser,
  receiveToken,
  receiveLogin,
  toggleCategories,
  initAuth,
  saveFilterOptions,
  locationUpdated,
  setLocation,
  initLoc,
  toggleMapLocation,
  getAuthConfigs,
  toggleGroups,
  setMenuScroll,
  addLayersList,
  loginRequest,
  loginSuccess,
  loginFailure,
  loginError,
  fetchFormsError,
  logoutUser,
};
