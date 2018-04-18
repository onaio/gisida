import defaultState from '../defaultState';
import * as types from '../constants/actionTypes';

function APP(state = defaultState.APP, action) {
  switch (action.type) {
    case types.INIT_APP:
      return {
        ...state,
        ...action.config,
        loaded: true,
      };
    default:
      return state;
  }
}

function STYLES(state = defaultState.STYLES, action) {
  switch (action.type) {
    case types.INIT_STYLES: {
      const styles = action.styles.map((s) => {
        const style = s;
        if (style.url === action.mapConfig.style) style.current = true;
        return style;
      });
      return styles;
    }
    case types.CHANGE_STYLE: {
      const updatedStyles = state.map((s) => {
        const style = s;
        if (action.style === style.url) {
          if (action.mapId) {
            style[action.mapId] = { current: true };
          } else style.current = true;
        } else if (action.mapId) {
          style[action.mapId] = { current: false };
        } else style.current = false;
        return style;
      });
      return updatedStyles;
    }
    default:
      return state;
  }
}

function REGIONS(state = defaultState.REGIONS, action) {
  switch (action.type) {
    case types.INIT_REGIONS: {
      const regions = action.regions ? action.regions.map((r) => {
        const region = r;
        // check if mapconfig center matches region center to set current region
        if (
          region.center[0] === action.mapConfig.center[0] &&
          region.center[1] === action.mapConfig.center[1]) {
          region.current = true;
        }
        return region;
      }) : [];
      return regions;
    }
    case types.CHANGE_REGION: {
      const updatedRegions = state.map((r) => {
        const region = r;
        if (action.region === region.name) {
          region.current = true;
        } else region.current = false;
        return region;
      });
      return updatedRegions;
    }
    default:
      return state;
  }
}

function FILTER(state = defaultState.FILTER, action) {
  switch (action.type) {
    case types.SAVE_FILTER_STATE: {
      return {
        ...state,
        [action.layerId]: {
          ...action.filterState,
          doUpdate: true,
        },
      };
    }
    case types.FILTERS_UPDATED: {
      return {
        ...state,
        [action.layerId]: {
          ...state[action.layerId],
          doUpdate: false,
        },
      };
    }
    default:
      return state;
  }
}

function LOCATIONS(state = {}, action) {
  switch (action.type) {
    case types.INIT_LOCATIONS: {
      return { ...state, ...action.locations };
    }
    default:
      return state;
  }
}

function LAYERS(state = [], action) {
  switch (action.type) {
    case types.ADD_LAYERS_LIST: {
      return [...state, ...action.layers];
    }
    default:
      return state;
  }
}

export function createMapReducer(mapId) {
  const initialState = defaultState.MAP;
  initialState.mapId = mapId;
  return (state = initialState, action) => {
    if (action.mapId === state.mapId) {
      switch (action.type) {
        case types.MAP_RENDERED:
          return {
            ...state,
            isRendered: true,
          };
        case types.MAP_LOADED:
          return {
            ...state,
            isLoaded: true,
            reloadLayers: true,
            currentRegion: Math.random(),
          };
        case types.RELOAD_LAYERS:
          return {
            ...state,
            reloadLayers: action.reload,
          };
        case types.CHANGE_STYLE:
          return {
            ...state,
            currentStyle: action.style,
          };
        case types.CHANGE_REGION:
          return {
            ...state,
            currentRegion: action.region,
          };
        case types.ADD_LAYER: {
          const layers = {};
          layers[action.layer.id] = action.layer;
          const updatedLayers = { ...state.layers, ...layers };
          return {
            ...state,
            layers: updatedLayers,
          };
        }
        case types.TOGGLE_LAYER: {
          const { layerId } = action;
          const layer = state.layers[layerId];

          const updatedTimeSeries = {
            ...state.timeseries,
            visibility: layer
              && layer.aggregate
              && layer.aggregate.timeseries ? !layer.visible : false,
          };
          const updatedLayers = {
            ...state.layers,
            [layerId]: {
              ...layer,
              visible: action.isInit ? layer.visible : !layer.visible,
            },
          };
          if (layer.layers) {
            layer.layers.forEach((subLayerId) => {
              updatedLayers[subLayerId].visible = !layer.visible;
            });
          }

          const activeLayerIds = Object.keys(updatedLayers).filter(l => updatedLayers[l].visible);
          const activeFilterLayerIds = activeLayerIds.filter(l =>
            updatedLayers[l].aggregate && updatedLayers[l].aggregate.filter);

          let filterLayerId = '';
          if (updatedLayers[layerId].visible && layer.aggregate && layer.aggregate.filter) {
            filterLayerId = layerId;
          } else if (activeFilterLayerIds && activeFilterLayerIds.length) {
            filterLayerId = activeFilterLayerIds[activeFilterLayerIds.length - 1];
          }

          return {
            ...state,
            // Update visible property
            activeLayerId: updatedLayers[layerId].visible
              ? layerId
              : activeLayerIds[activeLayerIds.length - 1],
            layers: updatedLayers,
            reloadLayers: Math.random(),
            primaryLayer: updatedLayers[layerId].visible && layer.credit
              ? layer.id : activeLayerIds[activeLayerIds.length - 1],
            timeseries: updatedTimeSeries,
            filter: {
              ...state.filter,
              layerId: filterLayerId,
            },
            showFilterPanel: state.showFilterPanel
              && filterLayerId !== ''
              && updatedLayers[filterLayerId]
              && updatedLayers[filterLayerId].visible,
          };
        }

        case types.UPDATE_PRIMARY_LAYER: {
          const primaryLayerHasFilter = state.layers[action.primaryLayer].aggregate
            && state.layers[action.primaryLayer].aggregate.filter;
          return {
            ...state,
            primaryLayer: action.primaryLayer,
            filter: {
              ...state.filter,
              layerId: primaryLayerHasFilter ? action.primaryLayer : false,
            },
            showFilterPanel: primaryLayerHasFilter && state.showFilterPanel,
          };
        }
        case types.TOGGLE_FILTER: {
          return {
            ...state,
            showFilterPanel: !state.showFilterPanel,
          };
        }
        case types.SET_LAYER_FILTERS: {
          const { layerId, layerFilters } = action;
          const layer = state.layers[layerId];
          const filters = layer.filters ? { ...layer.filters } : {};
          const updatedLayers = {
            ...state.layers,
            [layerId]: {
              ...layer,
              filters: {
                ...filters,
                layerFilters,
              },
            },
          };
          return {
            ...state,
            layers: updatedLayers,
            doApplyFilters: true,
          };
        }

        case types.FILTERS_UPDATED: {
          return {
            ...state,
            doApplyFilters: false,
          };
        }

        case types.DETAIL_VIEW: {
          if (!action.payload) {
            return {
              ...state,
              detailView: null,
              showFilterPanel: state.showFilterPanel,
            };
          }

          const {
            properties, layerId, model, detailSpec,
          } = action.payload;
          const showDetailView = !!properties && !!layerId;

          return {
            ...state,
            showFilterPanel: showDetailView ? false : state.showFilterPanel,
            detailView: showDetailView ? {
              model: { ...model },
              spec: { ...detailSpec },
              properties: { ...properties },
              layerId,
            } : null,
          };
        }
        case types.REQUEST_DATA: {
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
            layers: updatedLayers,
          };
        }
        case types.RECEIVE_DATA: {
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
            layers: updatedLayers,
            reloadLayers: Math.random(),
            timeseries: action.timeseries,
            visibleLayerId: layer.id,
          };
        }
        case types.UPDATE_TIMESERIES: {
          return {
            ...state,
            timeseries: action.timeseries,
          };
        }
        default:
          return state;
      }
    }
    return state;
  };
}
export default {
  APP, STYLES, REGIONS, LOCATIONS, LAYERS, FILTER, 'map-1': createMapReducer('map-1'),
};
