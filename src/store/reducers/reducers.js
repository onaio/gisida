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
          const updatedLayers = {
            ...state.layers,
            [layerId]: {
              ...layer,
              visible: !layer.visible,
            },
          };
          const updatedTimeSeries = {
            ...state.timeseries,
            visibility: layer
              && layer.aggregate
              && layer.aggregate.timeseries ? !layer.visible : false,
          };
          if (layer.layers) {
            layer.layers.forEach((subLayerId) => {
              updatedLayers[subLayerId].visible = !layer.visible;
            });
          }
          return {
            ...state,
            // Update visible property
            activeLayerId: layerId,
            layers: updatedLayers,
            reloadLayers: Math.random(),
            primaryLayer: !layer.visible ? layer.id : state.primaryLayer,
            timeseries: updatedTimeSeries,
            filter: {
              ...state.filter,
              layerId:
                !layer.visible && (layer.aggregate && layer.aggregate.filter) ?
                  layerId : false,
            },
          };
        }
        case types.UPDATE_PRIMARY_LAYER:
          return {
            ...state,
            primaryLayer: action.primaryLayer,
          };
        case types.TOGGLE_FILTER: {
          return {
            ...state,
            showFilterPanel: !state.showFilterPanel,
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
  APP, STYLES, REGIONS, LOCATIONS, LAYERS, 'map-1': createMapReducer('map-1'),
};
