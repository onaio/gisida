import {
  MAP_LOADED,
  RELOAD_LAYERS,
  ADD_LAYER,
  TOGGLE_LAYER,
  RECEIVE_DATA,
  UPDATE_TIMESERIES,
} from '../../constants/actionTypes';
import defaultState from '../../defaultState';

export default function reloadLayersReducer(
  state = {
    reloadLayers: defaultState.MAP.reloadLayers,
    layers: defaultState.MAP.layers,
  },
  action
) {
  switch (action.type) {
    case MAP_LOADED: {
      return {
        ...state,
        reloadLayers: true,
      };
    }
    case RELOAD_LAYERS: {
      return {
        ...state,
        reloadLayers: action.reload,
      };
    }
    case ADD_LAYER: {
      const reloadLayerId = state.layers[action.layer.id] ? action.layer.id : null;
      return {
        ...state,
        reloadLayers: reloadLayerId ? Math.random() : state.reloadLayers,
      };
    }
    case TOGGLE_LAYER: {
      return {
        ...state,
        reloadLayers: Math.random(),
      };
    }
    case RECEIVE_DATA: {
      return {
        ...state,
        reloadLayers: Math.random(),
      };
    }
    case UPDATE_TIMESERIES: {
      return {
        ...state,
        reloadLayers: Math.random(),
      };
    }
    default:
      return state;
  }
}
