import {
  TOGGLE_LAYER,
  REQUEST_DATA,
  RECEIVE_DATA,
  TRIGGER_SPINNER,
} from '../../constants/actionTypes';
import defaultState from '../../defaultState';

export default function showSpinnerReducer(
  state = {
    showSpinner: defaultState.MAP.showSpinner,
    layers: defaultState.MAP.layers,
  },
  action
) {
  switch (action.type) {
    case TOGGLE_LAYER: {
      const { layerId } = action;
      const layer = state.layers[layerId];
      const updatedLayers = {
        ...state.layers,
        [layerId]: {
          ...layer,
          visible: action.isInit ? layer.visible : !layer.visible,
        },
      };
      return {
        ...state,
        showSpinner: updatedLayers[layerId].visible && !updatedLayers[layerId].loaded,
      };
    }
    case REQUEST_DATA: {
      return {
        ...state,
        showSpinner: true,
      };
    }
    case RECEIVE_DATA: {
      const { layer } = action;
      const oldLayer = state.layers[layer.id];
      const updatedLayers = {
        ...state.layers,
        [layer.id]: {
          ...oldLayer,
          ...layer,
          isLoading: false,
          loaded: true,
        },
      };
      return {
        ...state,
        showSpinner: !updatedLayers[layer.id].isLoading && !updatedLayers[layer.id].loaded,
      };
    }
    case TRIGGER_SPINNER: {
      return { ...state, showSpinner: action.isLoaded };
    }
    default:
      return state;
  }
}
