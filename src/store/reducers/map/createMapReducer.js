import * as types from '../../constants/actionTypes';
import defaultState from '../../defaultState';
import mapRenderedReducer from './mapRenderedReducer';
import mapLoadedReducer from './mapLoadedReducer';
import reloadLayersReducer from './reloadLayersReducer';
import currentStyleReducer from './currentStyleReducer';
import currentRegionReducer from './currentRegionReducer';
import layersReducer from './layersReducer';
import defaultLayersReducer from './defaultLayersReducer';
import oldLayerObjsReducer from './oldLayerObjsReducer';
import showSpinnerReducer from './showSpinnerReducer';
import menuIsOpenReducer from './menuIsOpenReducer';
import openMenuLevelsReducer from './openMenuLevelsReducer';
import timeseriesReducer from './timeSeriesReducer';
import layerVisibilityReducer from './layerVisibilityReducer';
import filterReducer from './filterReducer';
import detailViewReducer from './detailViewReducer';
import showFilterPanelReducer from './showFilterPanelReducer';
import activeLayerIdReducer from './activeLayerIdReducer';
import activeLayerIdsReducer from './activeLayerIdsReducer';
import lastLayerSelectedReducer from './lastLayerSelectedReducer';
import primaryLayerReducer from './primaryLayerReducer';
import primarySubLayerReducer from './primarySubLayerReducer';
import reloadLayerIdReducer from './reloadLayerIdReducer';
import menuScrollReducer from './menuScrollReducer';

function mapRendered(state, action) {
  return {
    ...state,
    isRendered: mapRenderedReducer(state.isRendered, action),
  };
}

function mapLoaded(state, action) {
  return {
    ...state,
    isLoaded: mapLoadedReducer(state.isLoaded, action),
    reloadLayers: reloadLayersReducer(
      { reloadLayers: state.reloadLayers, layers: state.layers },
      action
    ),
    currentRegion: currentRegionReducer(state.changeRegion, action),
  };
}

function reloadLayers(state, action) {
  return {
    ...state,
    reloadLayers: reloadLayersReducer(
      { reloadLayers: state.reloadLayers, layers: state.layers },
      action
    ),
  };
}

function changeStyle(state, action) {
  return {
    ...state,
    currentStyle: currentStyleReducer(state.currentStyle, action),
  };
}

function changeRegion(state, action) {
  return {
    ...state,
    currentRegion: currentRegionReducer(state.changeRegion, action),
  };
}

function addLayer(state, action) {
  return {
    ...state,
    layers: layersReducer(state.layers, action),
    activeLayerId: activeLayerIdReducer(
      {
        activeLayerId: state.activeLayerId,
        layers: state.layers,
        activeLayerIds: state.activeLayerIds,
      },
      action
    ),
    defaultLayers: defaultLayersReducer(
      { defaultLayers: state.defaultLayers, layers: state.layers },
      action
    ),
    reloadLayerId: reloadLayerIdReducer(
      {
        reloadLayerId: state.reloadLayerId,
        layers: state.layers,
      },
      action
    ),
    reloadLayers: reloadLayersReducer(
      { reloadLayers: state.reloadLayers, layers: state.layers },
      action
    ),
  };
}

function toggleLayer(state, action) {
  return {
    ...state,
    reloadLayers: reloadLayersReducer(
      { reloadLayers: state.reloadLayers, layers: state.layers },
      action
    ),
    layers: layersReducer(state.layers, action),
    showSpinner: showSpinnerReducer(
      { showSpinner: state.showSpinner, layers: state.layers },
      action
    ),
    timeseries: timeseriesReducer(state.timeseries, action),
    visibleLayerId: layerVisibilityReducer(
      {
        activeLayerIds: state.activeLayerIds,
        layers: state.layers,
        visibleLayerId: state.visibleLayerId,
      },
      action
    ),
    filter: filterReducer(
      {
        filter: state.filter,
        layers: state.layers,
        activeLayerIds: state.activeLayerIds,
      },
      action
    ),
    detailView: detailViewReducer({ detailView: state.detailView, layers: state.layers }, action),
    showFilterPanel: showFilterPanelReducer(
      {
        showFilterPanel: state.showFilterPanel,
        layers: state.layers,
        activeLayerIds: state.activeLayerIds,
      },
      action
    ),
    activeLayerIds: activeLayerIdsReducer(
      {
        activeLayerIds: state.activeLayerIds,
        layers: state.layers,
      },
      action
    ),
    activeLayerId: activeLayerIdReducer(
      {
        activeLayerId: state.activeLayerId,
        layers: state.layers,
        activeLayerIds: state.activeLayerIds,
      },
      action
    ),
    lastLayerSelected: lastLayerSelectedReducer(
      {
        lastLayerSelected: state.lastLayerSelected,
        layers: state.layers,
        activeLayerIds: state.activeLayerIds,
      },
      action
    ),
    primaryLayer: primaryLayerReducer(
      {
        primaryLayer: state.primaryLayer,
        layers: state.layers,
        activeLayerIds: state.activeLayerIds,
      },
      action
    ),
    primarySubLayer: primarySubLayerReducer(
      {
        primarySubLayer: state.primarySubLayer,
        layers: state.layers,
      },
      action
    ),
  };
}

function reloadLayer(state, action) {
  return {
    ...state,
    reloadLayerId: reloadLayerIdReducer(
      { reloadLayerId: state.reloadLayerId, layers: state.layers },
      action
    ),
  };
}

function layerReloaded(state, action) {
  return {
    ...state,
    reloadLayerId: reloadLayerIdReducer(
      { reloadLayerId: state.reloadLayerId, layers: state.layers },
      action
    ),
  };
}

function updatePrimaryLayer(state, action) {
  return {
    ...state,
    detailView: detailViewReducer({ detailView: state.detailView, layers: state.layers }, action),
    activeLayerId: activeLayerIdReducer(
      {
        activeLayerId: state.activeLayerId,
        layers: state.layers,
        activeLayerIds: state.activeLayerIds,
      },
      action
    ),
    primaryLayer: primaryLayerReducer(
      {
        primaryLayer: state.primaryLayer,
        layers: state.layers,
        activeLayerIds: state.activeLayerIds,
      },
      action
    ),
    activeLayerIds: activeLayerIdsReducer(
      {
        activeLayerIds: state.activeLayerIds,
        layers: state.layers,
      },
      action
    ),
    filter: filterReducer(
      {
        filter: state.filter,
        layers: state.layers,
        activeLayerIds: state.activeLayerIds,
      },
      action
    ),
    showFilterPanel: showFilterPanelReducer(
      {
        showFilterPanel: state.showFilterPanel,
        layers: state.layers,
        activeLayerIds: state.activeLayerIds,
      },
      action
    ),
  };
}

function toggleFilter(state, action) {
  return {
    ...state,
    detailView: detailViewReducer({ detailView: state.detailView, layers: state.layers }, action),
    showFilterPanel: showFilterPanelReducer(
      {
        showFilterPanel: state.showFilterPanel,
        layers: state.layers,
        activeLayerIds: state.activeLayerIds,
      },
      action
    ),
  };
}

function setLayerFilters(state, action) {
  return {
    ...state,
    layers: layersReducer(state.layers, action),
    doApplyFilters: true,
  };
}

function filtersUpdated(state) {
  return {
    ...state,
    doApplyFilters: false,
  };
}

function toggleMenu(state, action) {
  return {
    ...state,
    menuIsOpen: menuIsOpenReducer(state.menuIsOpen, action),
  };
}

function resetFilteredLayer(state, action) {
  return {
    ...state,
    oldLayerObjs: oldLayerObjsReducer(state.oldLayerObjs, action),
  };
}

function toggleCategories(state, action) {
  return {
    ...state,
    openCategories: openMenuLevelsReducer(state.openCategories, action),
  };
}

function toggleGroups(state, action) {
  return {
    ...state,
    openGroups: openMenuLevelsReducer(state.openGroups, action),
  };
}

function setMenuScroll(state, action) {
  return {
    ...state,
    menuScroll: menuScrollReducer(state.menuScroll, action),
  };
}

function detailView(state, action) {
  return {
    ...state,
    showFilterPanel: showFilterPanelReducer(
      {
        showFilterPanel: state.showFilterPanel,
        layers: state.layers,
        activeLayerIds: state.activeLayerIds,
      },
      action
    ),
    detailView: detailViewReducer({ detailView: state.detailView, layers: state.layers }, action),
  };
}

function requestData(state, action) {
  return {
    ...state,
    // Update isLoading property
    showSpinner: showSpinnerReducer(
      { showSpinner: state.showSpinner, layers: state.layers },
      action
    ),
    layers: layersReducer(state.layers, action),
  };
}

function receiveData(state, action) {
  const { layer } = action;

  return {
    ...state,
    layers: layersReducer(state.layers, action),
    reloadLayers: reloadLayersReducer(
      { reloadLayers: state.reloadLayers, layers: state.layers },
      action
    ),
    timeseries: timeseriesReducer(state.timeseries, action),
    visibleLayerId: layerVisibilityReducer(
      {
        activeLayerIds: state.activeLayerIds,
        layers: state.layers,
        visibleLayerId: state.visibleLayerId,
      },
      action
    ),
    showSpinner: showSpinnerReducer(
      { showSpinner: state.showSpinner, layers: state.layers },
      action
    ),
    doApplyFilters: layer && layer.filters && (!!layer.filters.admin || !!layer.filters.tsFilter),
  };
}

function updateTimeSeries(state, action) {
  const { timeseries, layerId } = action;

  return {
    ...state,
    layers: layersReducer(state.layers, action),
    timeseries: timeseriesReducer(state.timeseries, action),
    doApplyFilters:
      timeseries[layerId] && (!!timeseries[layerId].adminFilter || !!timeseries[layerId].tsFilter),
    reloadLayers: reloadLayersReducer(
      { reloadLayers: state.reloadLayers, layers: state.layers },
      action
    ),
  };
}

function triggerSpinner(state, action) {
  return {
    ...state,
    showSpinner: showSpinnerReducer(
      { showSpinner: state.showSpinner, layers: state.layers },
      action
    ),
  };
}

export function createMapReducer(mapId) {
  const initialState = defaultState.MAP;
  initialState.mapId = mapId;
  return (state = initialState, action) => {
    if (action.mapId === state.mapId) {
      switch (action.type) {
        case types.MAP_RENDERED:
          return mapRendered(state, action);
        case types.MAP_LOADED:
          return mapLoaded(state, action);
        case types.RELOAD_LAYERS:
          return reloadLayers(state, action);
        case types.CHANGE_STYLE:
          return changeStyle(state, action);
        case types.CHANGE_REGION:
          return changeRegion(state, action);
        case types.ADD_LAYER: {
          return addLayer(state, action);
        }
        case types.TOGGLE_LAYER: {
          return toggleLayer(state, action);
        }
        case types.RELOAD_LAYER: {
          return reloadLayer(state, action);
        }

        case types.LAYER_RELOADED: {
          return layerReloaded(state, action);
        }
        case types.UPDATE_PRIMARY_LAYER: {
          return updatePrimaryLayer(state, action);
        }
        case types.TOGGLE_FILTER: {
          return toggleFilter(state, action);
        }
        case types.SET_LAYER_FILTERS: {
          return setLayerFilters(state, action);
        }

        case types.FILTERS_UPDATED: {
          return filtersUpdated(state, action);
        }

        case types.TOGGLE_MENU: {
          return toggleMenu(state, action);
        }

        case types.RESET_FILTERED_LAYER: {
          return resetFilteredLayer(state, action);
        }

        case types.TOGGLE_CATEGORIES: {
          return toggleCategories(state, action);
        }

        case types.TOGGLE_GROUPS: {
          return toggleGroups(state, action);
        }

        case types.SET_MENU_SCROLL: {
          return setMenuScroll(state, action);
        }

        case types.DETAIL_VIEW: {
          return detailView(state, action);
        }
        case types.REQUEST_DATA: {
          return requestData(state, action);
        }
        case types.RECEIVE_DATA: {
          return receiveData(state, action);
        }
        case types.UPDATE_TIMESERIES: {
          return updateTimeSeries(state, action);
        }
        case types.TRIGGER_SPINNER: {
          return triggerSpinner(state, action);
        }
        default:
          return state;
      }
    }
    return state;
  };
}

const MAP = createMapReducer('map-1');

export default MAP;
