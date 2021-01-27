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

export function toggleLayer(layersState, action) {
  const { layerId } = action;
  const layer = layersState[layerId];
  const updatedLayers = {
    ...layersState,
    [layerId]: {
      ...layer,
      visible: action.isInit ? layer.visible : !layer.visible,
    },
  };
  if (layer.layers) {
    layer.layers.forEach(layer => {
      let subLayerId = layer;
      if (subLayerId.includes('http')) {
        subLayerId = subLayerId.split('/').slice(-1).pop();
      }
      updatedLayers[subLayerId].visible = !layer.visible;
      updatedLayers[subLayerId].parent = layer.id;
    });
  }

  return updatedLayers;
}

export function receiveData(layersState, action) {
  const { layer } = action;
  const oldLayer = layersState[layer.id];
  const updatedLayers = {
    ...layersState,
    [layer.id]: {
      ...oldLayer,
      ...layer,
      isLoading: false,
      loaded: true,
    },
  };

  return updatedLayers;
}

export function requestData(layersState, action) {
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

  return updatedLayers;
}

function setLayerFilters(layersState, action) {
  const { layerId, layerFilters, name } = action;
  const layer = layersState[layerId];
  const updatedLayers = {
    ...layersState,
    [layerId]: {
      ...layer,
      filters: {
        ...layer.filters,
        [name || 'layerFilters']: layerFilters,
      },
    },
  };
  return updatedLayers;
}

function addLayer(layersState, action) {
  const updatedLayers = {
    ...layersState,
    [action.layer.id]: {
      ...action.layer,
    },
  };
  return updatedLayers;
}

function updateTimeSeries(layersState, action) {
  const { timeseries, layerId } = action;
  let nextLayers;

  if (layersState[layerId] && layersState[layerId].filters && layersState[layerId].filters.admin) {
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

  return nextLayers || layersState;
}

export default function layersReducer(layersState = defaultState.MAP.layers, action) {
  switch (action.type) {
    case ADD_LAYER: {
      return addLayer(layersState, action);
    }
    case TOGGLE_LAYER: {
      return toggleLayer(layersState, action);
    }
    case SET_LAYER_FILTERS: {
      return setLayerFilters(layersState, action);
    }
    case REQUEST_DATA: {
      const updatedLayers = requestData(layersState, action);
      return cloneDeep(updatedLayers);
    }
    case RECEIVE_DATA: {
      const updatedLayers = receiveData(layersState, action);
      return cloneDeep(updatedLayers);
    }
    case UPDATE_TIMESERIES: {
      return updateTimeSeries(layersState, action);
    }
    default:
      return layersState;
  }
}
