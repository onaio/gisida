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

function mapLoaded() {
  return true;
}

function reloadLayers(action) {
  return action.reload;
}

function addLayer(state, action) {
  return getReloadLayerId(state.layers, action) ? Math.random() : state.reloadLayers;
}

function toggleLayer() {
  return Math.random();
}

function receiveData() {
  return Math.random();
}

function updateTimeSeries() {
  return Math.random();
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
      return mapLoaded();
    }
    case RELOAD_LAYERS: {
      return reloadLayers(action);
    }
    case ADD_LAYER: {
      return addLayer(state, action);
    }
    case TOGGLE_LAYER: {
      return toggleLayer();
    }
    case RECEIVE_DATA: {
      return receiveData();
    }
    case UPDATE_TIMESERIES: {
      return updateTimeSeries();
    }
    default:
      return state.reloadLayers;
  }
}
