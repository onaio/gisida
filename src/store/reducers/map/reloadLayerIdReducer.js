import { ADD_LAYER, RELOAD_LAYER, LAYER_RELOADED } from '../../constants/actionTypes';
import defaultState from '../../defaultState';

export function getReloadLayerId(layers, action) {
  return layers[action.layer.id] ? action.layer.id : null;
}

function addLayer(state, action) {
  return getReloadLayerId(state.layers, action);
}

function reloadLayer(action) {
  return action.layerId;
}

function layerReloaded() {
  return null;
}

export default function reloadLayerIdReducer(
  state = {
    reloadLayerId: defaultState.MAP.reloadLayerId,
    layers: defaultState.MAP.layers,
  },
  action
) {
  switch (action.type) {
    case ADD_LAYER: {
      return addLayer(state, action);
    }
    case RELOAD_LAYER: {
      return reloadLayer(action);
    }
    case LAYER_RELOADED: {
      return layerReloaded();
    }
    default:
      return state.reloadLayerId;
  }
}
