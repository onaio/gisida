import cloneDeep from 'lodash.clonedeep';
import {
  ADD_LAYER,
  TOGGLE_LAYER,
  SET_LAYER_FILTERS,
  REQUEST_DATA,
  RECEIVE_DATA,
  UPDATE_TIMESERIES,
} from '../../constants/actionTypes';
import defaultState from '../../defaultState';

export default function layersReducer(layersState = defaultState.MAP.layers, action) {
  switch (action.type) {
    case ADD_LAYER: {
      const layers = {};
      layers[action.layer.id] = { ...action.layer };
      const updatedLayers = { ...layersState, ...layers };
      return updatedLayers;
    }
    case TOGGLE_LAYER: {
      const { layerId } = action;
      const layer = layersState[layerId];
      const updatedLayers = {
        ...layersState,
        [layerId]: {
          ...layer,
          visible: action.isInit ? layer.visible : !layer.visible,
        },
      };

      return updatedLayers;
    }
    case SET_LAYER_FILTERS: {
      const { layerId, layerFilters, name } = action;
      const layer = layersState[layerId];
      const filters = layer.filters ? { ...layer.filters } : {};
      const updatedLayers = {
        ...layersState,
        [layerId]: {
          ...layer,
          filters: {
            ...filters,
            [name || 'layerFilters']: layerFilters,
          },
        },
      };
      return updatedLayers;
    }
    case REQUEST_DATA: {
      const { layerId } = action;
      const layer = layersState[layerId];
      const updatedLayers = {
        ...layersState,
        [layerId]: {
          ...layer,
          isLoading: true,
          loaded: false,
        },
      };
      return {
        ...layersState,
        ...cloneDeep(updatedLayers),
      };
    }
    case RECEIVE_DATA: {
      const { layer } = action;
      const oldLayer = layersState[layer.id];
      const updatedLayers = {
        ...layersState,
        [layer.id]: {
          ...oldLayer,
          ...layer,
          labels: layer.labels,
          isLoading: false,
          loaded: true,
        },
      };
      return {
        ...layersState,
        ...cloneDeep(updatedLayers),
      };
    }
    case UPDATE_TIMESERIES: {
      const { timeseries, layerId } = action;
      let nextLayers;
      if (
        layersState[layerId] &&
        layersState[layerId].filters &&
        layersState[layerId].filters.admin
      ) {
        nextLayers = {
          ...layersState,
          [layerId]: {
            ...layersState[layerId],
            filters: {
              ...layersState[layerId].filters,
              admin: timeseries[layerId].adminFilter && [...timeseries[layerId].adminFilter],
            },
          },
        };
      }

      return {
        ...layersState,
        ...(nextLayers || layersState),
      };
    }
    default:
      return layersState;
  }
}
