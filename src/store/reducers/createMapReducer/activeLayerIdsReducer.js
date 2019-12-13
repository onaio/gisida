import { TOGGLE_LAYER, UPDATE_PRIMARY_LAYER } from '../../constants/actionTypes';
import defaultState from '../../defaultState';
import { toggleLayer as toggleLayerLayersReducer } from './layersReducer';

export function toggleLayer(state, action) {
  const { layerId } = action;
  const updatedLayers = toggleLayerLayersReducer(state.layers, action);
  const activeLayerIds = [...state.activeLayerIds];
  const activeLayerObj = updatedLayers[layerId];
  const addLayerToList = !activeLayerIds.includes(layerId) && activeLayerObj.visible;
  const removeLayerFromList = activeLayerIds.includes(layerId) && !activeLayerObj.visible;
  if (!updatedLayers[layerId].parent) {
    if (addLayerToList) {
      activeLayerIds.push(layerId);
    } else if (removeLayerFromList) {
      const index = activeLayerIds.indexOf(layerId);
      if (index > -1) {
        activeLayerIds.splice(index, 1);
      }
    }
  }

  return activeLayerIds;
}

function updatePrimaryLayer(state, action) {
  const activeIds = [...state.activeLayerIds];
  if (action.primaryLayer !== state.activeLayerIds[state.activeLayerIds.length - 1]) {
    if (activeIds.includes(action.primaryLayer)) {
      activeIds.splice(activeIds.indexOf(action.primaryLayer), 1);
      activeIds.splice(activeIds.length, 1, action.primaryLayer);
    }
  }

  return activeIds;
}

export default function activeLayerIdsReducer(
  state = {
    activeLayerIds: defaultState.MAP.activeLayerIds,
    layers: defaultState.MAP.layers,
  },
  action
) {
  switch (action.type) {
    case TOGGLE_LAYER: {
      return toggleLayer(state, action);
    }
    case UPDATE_PRIMARY_LAYER: {
      return updatePrimaryLayer(state, action);
    }
    default:
      return state.activeLayerIds;
  }
}
