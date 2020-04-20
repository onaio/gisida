import { TOGGLE_LAYER, UPDATE_PRIMARY_LAYER, ADD_LAYER } from '../../constants/actionTypes';
import defaultState from '../../defaultState';
import { toggleLayer as toggleLayerLayersReducer } from './layersReducer';
import { toggleLayer as toggleLayerActiveLayerIdsReducer } from './activeLayerIdsReducer';

function toggleLayer(state, action) {
  const { layerId } = action;
  const layer = state.layers[layerId];
  const activeLayerIds = toggleLayerActiveLayerIdsReducer(state, action);
  const updatedLayers = toggleLayerLayersReducer(state.layers, action);

  return updatedLayers[layerId].visible && layer.type !== 'line'
    ? layerId
    : activeLayerIds[activeLayerIds.length - 1];
}

function updatePrimaryLayer(action) {
  return action.primaryLayer;
}

function addLayer(action) {
  return action.layer.id;
}

export default function activeLayerIdReducer(
  state = {
    activeLayerId: defaultState.MAP.activeLayerId,
    layers: defaultState.MAP.layers,
    activeLayerIds: defaultState.MAP.activeLayerIds,
  },
  action
) {
  switch (action.type) {
    case TOGGLE_LAYER: {
      return toggleLayer(state, action);
    }
    case UPDATE_PRIMARY_LAYER: {
      return updatePrimaryLayer(action);
    }
    case ADD_LAYER: {
      return addLayer(action);
    }
    default:
      return state.activeLayerId;
  }
}
