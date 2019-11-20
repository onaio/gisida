import cloneDeep from 'lodash.clonedeep';
import * as types from '../../constants/actionTypes';
import defaultState from '../../defaultState';
import layersReducer from './layersReducer';
import detailViewReducer from './detailViewReducer';
import reloadLayersReducer from './reloadLayersReducer';
import showSpinnerReducer from './showSpinnerReducer';

function mapRendered(state, action) {
  return {
    ...state,
    isRendered: action.isRendered,
  };
}

function mapLoaded(state, action) {
  return {
    ...state,
    isLoaded: action.isLoaded,
    reloadLayers: true,
    currentRegion: Math.random(),
  };
}

function reloadLayers(state, action) {
  return {
    ...state,
    reloadLayers: action.reload,
  };
}

function changeStyle(state, action) {
  return {
    ...state,
    currentStyle: action.style,
  };
}

function changeRegion(state, action) {
  return {
    ...state,
    currentRegion: action.region,
  };
}

function addLayer(state, action) {
  const layers = {};
  const reloadLayerId = state.layers[action.layer.id] ? action.layer.id : null;
  layers[action.layer.id] = { ...action.layer };
  const updatedLayers = { ...state.layers, ...layers };
  const defaultLayers = Object.keys(state.layers).filter(
    l =>
      state.layers[l].visible && state.layers[l].id !== reloadLayerId && !state.layers[l].nondefault
  );
  return {
    ...state,
    layers: updatedLayers,
    activeLayerId: action.layer.id,
    defaultLayers,
    reloadLayerId,
    reloadLayers: reloadLayerId ? Math.random() : state.reloadLayers,
  };
}

function toggleLayer(state, action) {
  const { layerId } = action;
  const layer = state.layers[layerId];
  const updatedTimeSeries = {
    ...state.timeseries,
  };
  const updatedLayers = {
    ...state.layers,
    [layerId]: {
      ...layer,
      visible: action.isInit ? layer.visible : !layer.visible,
    },
  };

  let primarySubLayer = null;
  if (layer.layers) {
    layer.layers.forEach(subLayerId => {
      updatedLayers[subLayerId].visible = !layer.visible;
      updatedLayers[subLayerId].parent = layer.id;
      primarySubLayer = updatedLayers[subLayerId].visible ? subLayerId : null;
    });
  }

  const activeLayerIds = [...state.activeLayerIds];

  const activeLayerObj = updatedLayers[layerId];

  const addLayerToList = !activeLayerIds.includes(layerId) && activeLayerObj.visible;
  const removeLayerFromList = activeLayerIds.includes(layerId) && !activeLayerObj.visible;
  if (!updatedLayers[layerId].parent) {
    if (addLayerToList) {
      activeLayerIds.push(layerId);
    } else if (removeLayerFromList) {
      const index = activeLayerIds.indexOf(layerId);
      if (index > -1) {
        activeLayerIds.splice(index, 1);
      }
    }
  }

  const activeSubLayerIds = Object.keys(updatedLayers).filter(
    l => updatedLayers[l].visible && updatedLayers[l].parent
  );
  const activeFilterLayerIds = activeLayerIds.filter(
    l => updatedLayers[l].aggregate && updatedLayers[l].aggregate.filter
  );

  let filterLayerId = '';
  if (updatedLayers[layerId].visible && layer.aggregate && layer.aggregate.filter) {
    filterLayerId = layerId;
  } else if (activeFilterLayerIds && activeFilterLayerIds.length) {
    filterLayerId = activeFilterLayerIds[activeFilterLayerIds.length - 1];
  }

  return {
    ...state,
    primarySubLayer: primarySubLayer || activeSubLayerIds[activeSubLayerIds.length - 1],
    // Update visible property
    activeLayerId:
      updatedLayers[layerId].visible && layer.type !== 'line'
        ? layerId
        : activeLayerIds[activeLayerIds.length - 1],
    lastLayerSelected: !updatedLayers[layerId].visible
      ? activeLayerIds[activeLayerIds.length - 1]
      : layerId,
    layers: updatedLayers,
    reloadLayers: Math.random(),
    showSpinner: updatedLayers[layerId].visible && !updatedLayers[layerId].loaded,
    visibleLayerId:
      updatedLayers[layerId].visible && layer.credit
        ? layer.id
        : activeLayerIds[activeLayerIds.length - 1],
    primaryLayer:
      updatedLayers[layerId].visible && layer.credit
        ? layer.id
        : activeLayerIds[activeLayerIds.length - 1],
    timeseries: updatedTimeSeries,
    activeLayerIds,
    filter: {
      ...state.filter,
      layerId: filterLayerId,
    },
    detailView:
      state.detailView &&
      (state.detailView && state.detailView.layerId === layerId) &&
      updatedLayers[layerId] &&
      updatedLayers[layerId].visible,
    showFilterPanel:
      state.showFilterPanel &&
      layerId === filterLayerId &&
      filterLayerId !== '' &&
      updatedLayers[filterLayerId] &&
      updatedLayers[filterLayerId].visible,
  };
}

function reloadLayer(state, action) {
  return {
    ...state,
    reloadLayerId: action.layerId,
  };
}

function layerReloaded(state) {
  return {
    ...state,
    reloadLayerId: null,
  };
}

function updatePrimaryLayer(state, action) {
  const primaryLayerHasFilter =
    state.layers[action.primaryLayer].aggregate &&
    state.layers[action.primaryLayer].aggregate.filter;
  const activeIds = [...state.activeLayerIds];
  if (action.primaryLayer !== state.activeLayerIds[state.activeLayerIds.length - 1]) {
    if (activeIds.includes(action.primaryLayer)) {
      activeIds.splice(activeIds.indexOf(action.primaryLayer), 1);
      activeIds.splice(activeIds.length, 1, action.primaryLayer);
    }
  }
  return {
    ...state,
    detailView: null,
    activeLayerId: action.primaryLayer,
    primaryLayer: action.primaryLayer,
    activeLayerIds: activeIds,
    filter: {
      ...state.filter,
      layerId: primaryLayerHasFilter ? action.primaryLayer : false,
    },
    showFilterPanel: primaryLayerHasFilter && state.showFilterPanel,
  };
}

function toggleFilter(state) {
  return {
    ...state,
    detailView: null,
    showFilterPanel: !state.showFilterPanel,
  };
}

function setLayerFilters(state, action) {
  const { layerId, layerFilters, name } = action;
  const layer = state.layers[layerId];
  const filters = layer.filters ? { ...layer.filters } : {};
  const updatedLayers = {
    ...state.layers,
    [layerId]: {
      ...layer,
      filters: {
        ...filters,
        [name || 'layerFilters']: layerFilters,
      },
    },
  };
  return {
    ...state,
    layers: updatedLayers,
    doApplyFilters: true,
  };
}

function filtersUpdated(state) {
  return {
    ...state,
    doApplyFilters: false,
  };
}

function toggleMenu(state) {
  return {
    ...state,
    menuIsOpen: !state.menuIsOpen,
  };
}

function resetFilteredLayer(state, action) {
  const { oldLayer } = action;
  const oldLayerObjs = {
    ...state.oldLayerObjs,
  };
  if (!oldLayerObjs[oldLayer.id]) {
    oldLayerObjs[oldLayer.id] = {};
  }
  oldLayerObjs[oldLayer.id] = {
    ...oldLayer,
  };
  return {
    ...state,
    oldLayerObjs: {
      ...oldLayerObjs,
    },
  };
}

function toggleCategories(state, action) {
  const { category, index, isRefresh } = action;
  const openCategories = [...state.openCategories];
  if (index > -1) {
    openCategories.splice(index, 1);
  } else {
    openCategories.push(category);
  }
  return {
    ...state,
    openCategories: isRefresh ? [] : [...openCategories],
  };
}

function detailView(state, action) {
  if (!action.payload) {
    return {
      ...state,
      detailView: null,
      showFilterPanel: state.showFilterPanel,
    };
  }

  const { properties, layerId, model, detailSpec } = action.payload;
  const showDetailView = !!properties && !!layerId;

  return {
    ...state,
    showFilterPanel: showDetailView ? false : state.showFilterPanel,
    detailView: showDetailView
      ? {
          model: { ...model },
          spec: { ...detailSpec },
          properties: { ...properties },
          layerId,
        }
      : null,
  };
}

function requestData(state, action) {
  const { layerId } = action;
  const layer = state.layers[layerId];
  const updatedLayers = {
    ...state.layers,
    [layerId]: {
      ...layer,
      isLoading: true,
      loaded: false,
    },
  };
  return {
    ...state,
    // Update isLoading property
    showSpinner: true,
    layers: cloneDeep(updatedLayers),
  };
}

function receiveData(state, action) {
  const { layer } = action;
  const oldLayer = state.layers[layer.id];
  const updatedLayers = {
    ...state.layers,
    [layer.id]: {
      ...oldLayer,
      ...layer,
      labels: layer.labels,
      isLoading: false,
      loaded: true,
    },
  };
  return {
    ...state,
    layers: cloneDeep(updatedLayers),
    reloadLayers: Math.random(),
    timeseries: action.timeseries,
    visibleLayerId: layer.id,
    showSpinner: !updatedLayers[layer.id].isLoading && !updatedLayers[layer.id].loaded,
    doApplyFilters: layer && layer.filters && !!layer.filters.admin,
  };
}

function updateTimeSeries(state, action) {
  const { timeseries, layerId } = action;
  const { layers } = state;
  let nextLayers;
  if (layers[layerId] && layers[layerId].filters && layers[layerId].filters.admin) {
    nextLayers = {
      ...layers,
      [layerId]: {
        ...layers[layerId],
        filters: {
          ...layers[layerId].filters,
          admin: timeseries[layerId].adminFilter && [...timeseries[layerId].adminFilter],
        },
      },
    };
  }

  return {
    ...state,
    layers: nextLayers || layers,
    timeseries,
    doApplyFilters: timeseries[layerId] && !!timeseries[layerId].adminFilter,
    reloadLayers: Math.random(),
  };
}

function triggerSpinner(state, action) {
  return {
    ...state,
    showSpinner: action.isLoaded,
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
          toggleLayer(state, action);
          return {
            layers: layersReducer(state.layers, action),
            detailView: detailViewReducer(
              { detailView: state.detailView, layers: state.layers },
              action
            ),
            reloadLayers: reloadLayersReducer(
              {
                reloadLayers: state.reloadLayers,
                layers: state.layers,
              },
              action
            ),
            showSpinner: showSpinnerReducer(
              {
                showSpinner: state.showSpinner,
                layers: state.layers,
              },
              action
            ),
          };
        }
        case types.RELOAD_LAYER: {
          return reloadLayer(state, action);
        }

        case types.LAYER_RELOADED: {
          return layerReloaded(state);
        }
        case types.UPDATE_PRIMARY_LAYER: {
          return updatePrimaryLayer(state, action);
        }
        case types.TOGGLE_FILTER: {
          return toggleFilter(state);
        }
        case types.SET_LAYER_FILTERS: {
          return setLayerFilters(state, action);
        }

        case types.FILTERS_UPDATED: {
          return filtersUpdated(state);
        }

        case types.TOGGLE_MENU: {
          return toggleMenu(state);
        }

        case types.RESET_FILTERED_LAYER: {
          return resetFilteredLayer(state, action);
        }

        case types.TOGGLE_CATEGORIES: {
          return toggleCategories(state, action);
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
