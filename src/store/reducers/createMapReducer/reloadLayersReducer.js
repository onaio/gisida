import {
  MAP_LOADED,
  RELOAD_LAYERS,
  ADD_LAYER,
  TOGGLE_LAYER,
  RECEIVE_DATA,
  UPDATE_TIMESERIES,
} from '../../constants/actionTypes';
import defaultState from '../../defaultState';
import { getReloadLayerId } from './reloadLayerIdReducer';

function mapLoaded(state) {
  return {
    ...state,
    reloadLayers: true,
  };
}

function reloadLayers(state, action) {
  return {
    ...state,
    reloadLayers: action.reload,
  };
}

function addLayer(state, action) {
  return {
    ...state,
    reloadLayers: getReloadLayerId(state.layers, action) ? Math.random() : state.reloadLayers,
  };
}

function toggleLayer(state) {
  return {
    ...state,
    reloadLayers: Math.random(),
  };
}

function receiveData(state) {
  return {
    ...state,
    reloadLayers: Math.random(),
  };
}

function updateTimeSeries(state) {
  return {
    ...state,
    reloadLayers: Math.random(),
  };
}

export default function reloadLayersReducer(
  state = {
    reloadLayers: defaultState.MAP.reloadLayers,
    layers: defaultState.MAP.layers,
  },
  action
) {
  switch (action.type) {
    case MAP_LOADED: {
      return mapLoaded(state);
    }
    case RELOAD_LAYERS: {
      return reloadLayers(state, action);
    }
    case ADD_LAYER: {
      return addLayer(state, action);
    }
    case TOGGLE_LAYER: {
      return toggleLayer(state);
    }
    case RECEIVE_DATA: {
      return receiveData(state);
    }
    case UPDATE_TIMESERIES: {
      return updateTimeSeries(state);
    }
    default:
      return state;
  }
}
