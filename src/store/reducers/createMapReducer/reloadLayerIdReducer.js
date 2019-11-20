import { ADD_LAYER, RELOAD_LAYER, LAYER_RELOADED } from '../../constants/actionTypes';
import defaultState from '../../defaultState';

export function getReloadLayerId(layers, action) {
  return layers[action.layer.id] ? action.layer.id : null;
}

function addLayer(state, action) {
  const reloadLayerId = getReloadLayerId(state.layers, action);

  return {
    ...state,
    reloadLayerId,
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
      return reloadLayer(state, action);
    }
    case LAYER_RELOADED: {
      return layerReloaded(state, action);
    }
    default:
      return state;
  }
}
