import { TOGGLE_LAYER, RECEIVE_DATA } from '../../constants/actionTypes';
import defaultState from '../../defaultState';
import { toggleLayer as toggleLayerLayersReducer } from './layersReducer';
import { toggleLayer as toggleLayerActiveLayerIdsReducer } from './activeLayerIdsReducer';

function toggleLayer(state, action) {
  const { layerId } = action;
  const layer = state.layers[layerId];
  const updatedLayers = toggleLayerLayersReducer(state.layers, action);
  const activeLayerIds = toggleLayerActiveLayerIdsReducer(state, action);

  return updatedLayers[layerId].visible && layer.credit
    ? layer.id
    : activeLayerIds[activeLayerIds.length - 1];
}

function receiveData(action) {
  const { layer } = action;
  return layer.id;
}

export default function layerVisibilityReducer(
  state = {
    activeLayerIds: defaultState.MAP.activeLayerIds,
    layers: defaultState.MAP.layers,
    visibleLayerId: defaultState.MAP.visibleLayerId,
  },
  action
) {
  switch (action.type) {
    case TOGGLE_LAYER: {
      return toggleLayer(state, action);
    }
    case RECEIVE_DATA: {
      return receiveData(action);
    }
    default:
      return state.visibleLayerId;
  }
}
