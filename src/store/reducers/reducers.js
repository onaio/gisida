import cloneDeep from 'lodash.clonedeep';
import defaultState from '../defaultState';
import * as types from '../constants/actionTypes';
import actions from '../actions/actions';


export function APP(state = defaultState.APP, action) {
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

function LOC(state = defaultState.LOC, action) {
  switch (action.type) {
    case types.INIT_LOC:
      return {
        ...state,
        locations: { ...action.config },
        location: {
          ...Object.keys(action.config).map(d => action.config[d]).find(d => d.default === true),
          doUpdateLOC: false,
        },
        doUpdateMap: state.doUpdateMap,
        default: Object.keys(action.config).find(d => action.config[d].default === true),
        active: Object.keys(action.config).find(d => action.config[d].default === true),
      };
    case types.SET_LOCATION: {
      const { loc, mapId } = action;
      const { active, locations } = state;
      return {
        ...state,
        doUpdateMap: mapId,
        active: typeof locations[loc] !== 'undefined' ? loc : active,
        location: typeof locations[loc] !== 'undefined'
          ? { ...locations[loc], doUpdateLOC: !state.location.doUpdateLOC }
          : { ...state.location, doUpdateLOC: false },
      };
    }
    case types.TOGGLE_MAP_LOCATION: {
      const { loc } = actions;
      const { locations } = state;
      return {
        ...state,
        location: typeof locations[loc] !== 'undefined' ?
          { ...locations[loc], doUpdateLOC: !state.location.doUpdateLOC } :
          { ...state.location, doUpdateLOC: false },
      };
    }
    default:
      return state;
  }
}

export function STYLES(state = defaultState.STYLES, action) {
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
          isClear: action.isClear || false,
        },
      };
    }
    case types.FILTERS_UPDATED: {
      if (!action.layerId) {
        return {
          ...state,
        };
      }
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

function SUPERSET_CONFIGS(state = {}, action) {
  switch (action.type) {
    case types.INIT_SUPERSET: {
      return {
        ...state,
        ...action.config,
      };
    }
    default:
      return state;
  }
}

function LAYERS(state = defaultState.LAYERS, action) {
  switch (action.type) {
    case types.ADD_LAYERS_LIST: {
      return {
        ...state,
        layers: [...state.layers, ...action.layers],
      };
    }
    case types.ADD_LAYER_GROUP: {
      // parse action.group for urls
      const groupMapper = (layer) => {
        if (typeof layer === 'string') {
          if (layer.indexOf('http') === -1) {
            return layer;
          }
          const pathSplit = layer.split('/');
          return pathSplit[pathSplit.length - 1];
        }
        const subGroup = {};
        Object.keys(layer).forEach((key) => {
          subGroup[key] = layer[key].map(groupMapper);
        });
        return subGroup;
      };
      const group = action.group.map(groupMapper);
      return {
        ...state,
        groups: {
          ...state.groups,
          [action.groupId]: group,
        },
      };
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
            isRendered: action.isRendered,
          };
        case types.MAP_LOADED:
          return {
            ...state,
            isLoaded: action.isLoaded,
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
          const reloadLayerId = state.layers[action.layer.id] ? action.layer.id : null;
          layers[action.layer.id] = { ...action.layer };
          const updatedLayers = { ...state.layers, ...layers };
          const defaultLayers = Object.keys(state.layers).filter(l => state.layers[l].visible
            && state.layers[l].id !== reloadLayerId && !state.layers[l].nondefault);
          return {
            ...state,
            layers: updatedLayers,
            activeLayerId: action.layer.id,
            defaultLayers,
            reloadLayerId,
            reloadLayers: reloadLayerId ? Math.random() : state.reloadLayers,
          };
        }
        case types.TOGGLE_LAYER: {
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
            layer.layers.forEach((subLayerId) => {
              updatedLayers[subLayerId].visible = !layer.visible;
              updatedLayers[subLayerId].parent = layer.id;
              primarySubLayer = updatedLayers[subLayerId].visible ? subLayerId : null;
            });
          }

          const activeLayerIds = [
            ...state.activeLayerIds,
          ];

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

          const activeSubLayerIds = Object.keys(updatedLayers).filter(l => updatedLayers[l].visible
            && updatedLayers[l].parent);
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
            primarySubLayer: primarySubLayer || activeSubLayerIds[activeSubLayerIds.length - 1],
            // Update visible property
            activeLayerId: updatedLayers[layerId].visible && layer.type !== 'line'
              ? layerId
              : activeLayerIds[activeLayerIds.length - 1],
            lastLayerSelected: !updatedLayers[layerId].visible
              ? activeLayerIds[activeLayerIds.length - 1]
              : layerId,
            layers: updatedLayers,
            reloadLayers: Math.random(),
            showSpinner: updatedLayers[layerId].visible && !updatedLayers[layerId].loaded,
            visibleLayerId: updatedLayers[layerId].visible && layer.credit
              ? layer.id : activeLayerIds[activeLayerIds.length - 1],
            primaryLayer: updatedLayers[layerId].visible && layer.credit
              ? layer.id : activeLayerIds[activeLayerIds.length - 1],
            timeseries: updatedTimeSeries,
            activeLayerIds,
            filter: {
              ...state.filter,
              layerId: filterLayerId,
            },
            detailView: state.detailView
              && (state.detailView && state.detailView.layerId === layerId)
              && updatedLayers[layerId]
              && updatedLayers[layerId].visible,
            showFilterPanel: state.showFilterPanel
              && layerId === filterLayerId
              && filterLayerId !== ''
              && updatedLayers[filterLayerId]
              && updatedLayers[filterLayerId].visible,
          };
        }
        case types.RELOAD_LAYER: {
          return {
            ...state,
            reloadLayerId: action.layerId,
          };
        }

        case types.LAYER_RELOADED: {
          return {
            ...state,
            reloadLayerId: null,
          };
        }
        case types.UPDATE_PRIMARY_LAYER: {
          const primaryLayerHasFilter = state.layers[action.primaryLayer].aggregate
            && state.layers[action.primaryLayer].aggregate.filter;
          const activeIds = [
            ...state.activeLayerIds,
          ];
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
        case types.TOGGLE_FILTER: {
          return {
            ...state,
            detailView: null,
            showFilterPanel: !state.showFilterPanel,
          };
        }
        case types.SET_LAYER_FILTERS: {
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

        case types.FILTERS_UPDATED: {
          return {
            ...state,
            doApplyFilters: false,
          };
        }

        case types.TOGGLE_MENU: {
          return {
            ...state,
            menuIsOpen: !state.menuIsOpen,
          };
        }

        case types.RESET_FILTERED_LAYER: {
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

        case types.TOGGLE_CATEGORIES: {
          const { category, index, isRefresh } = action;
          const openCategories = [
            ...state.openCategories,
          ];
          if (index > -1) {
            openCategories.splice(index, 1);
          } else {
            openCategories.push(category);
          }
          return {
            ...state,
            openCategories: isRefresh ? [] : [
              ...openCategories,
            ],
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
            showSpinner: true,
            layers: cloneDeep(updatedLayers),
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
            layers: cloneDeep(updatedLayers),
            reloadLayers: Math.random(),
            timeseries: action.timeseries,
            visibleLayerId: layer.id,
            showSpinner: !updatedLayers[layer.id].isLoading && !updatedLayers[layer.id].loaded,
            doApplyFilters: layer && layer.filters && !!layer.filters.admin,
          };
        }
        case types.UPDATE_TIMESERIES: {
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
        case types.TRIGGER_SPINNER: {
          return {
            ...state,
            showSpinner: action.isLoaded,
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
  APP, LOC, SUPERSET_CONFIGS, STYLES, REGIONS, LOCATIONS, LAYERS, FILTER, 'map-1': createMapReducer('map-1'),
};
