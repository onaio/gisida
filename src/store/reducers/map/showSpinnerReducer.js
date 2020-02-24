import {
  TOGGLE_LAYER,
  REQUEST_DATA,
  RECEIVE_DATA,
  TRIGGER_SPINNER,
} from '../../constants/actionTypes';
import defaultState from '../../defaultState';
import {
  toggleLayer as toggleLayerLayersReducer,
  receiveData as receiveDataLayersReducer,
} from './layersReducer';

function toggleLayer(state, action) {
  const { layerId } = action;
  const updatedLayers = toggleLayerLayersReducer(state.layers, action);

  return updatedLayers[layerId].visible && !updatedLayers[layerId].loaded;
}

function requestData() {
  return true;
}

function receiveData(state, action) {
  const { layer } = action;
  const updatedLayers = receiveDataLayersReducer(state.layers, action);

  return !updatedLayers[layer.id].isLoading && !updatedLayers[layer.id].loaded;
}

function triggerSpinner(action) {
  return action.isLoaded;
}

export default function showSpinnerReducer(
  state = {
    showSpinner: defaultState.MAP.showSpinner,
    layers: defaultState.MAP.layers,
  },
  action
) {
  switch (action.type) {
    case TOGGLE_LAYER: {
      return toggleLayer(state, action);
    }
    case REQUEST_DATA: {
      return requestData();
    }
    case RECEIVE_DATA: {
      return receiveData(state, action);
    }
    case TRIGGER_SPINNER: {
      return triggerSpinner(action);
    }
    default:
      return state.showSpinner;
  }
}
