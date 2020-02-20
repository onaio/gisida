import { TOGGLE_LAYER, UPDATE_PRIMARY_LAYER } from '../../constants/actionTypes';
import defaultState from '../../defaultState';
import { toggleLayer as toggleLayerLayersReducer } from './layersReducer';
import { toggleLayer as toggleLayerActiveLayerIdsReducer } from './activeLayerIdsReducer';

function toggleLayer(state, action) {
  const { layerId } = action;
  const layer = state.layers[layerId];
  const activeLayerIds = toggleLayerActiveLayerIdsReducer(state, action);
  const updatedLayers = toggleLayerLayersReducer(state.layers, action);

  return updatedLayers[layerId].visible && layer.credit
    ? layer.id
    : activeLayerIds[activeLayerIds.length - 1];
}

function updatePrimaryLayer(action) {
  return action.primaryLayer;
}

export default function primaryLayerReducer(
  state = {
    primaryLayer: defaultState.MAP.primaryLayer,
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
    default:
      return state.primaryLayer;
  }
}
