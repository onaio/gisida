import { TOGGLE_LAYER, RECEIVE_DATA } from '../../constants/actionTypes';
import defaultState from '../../defaultState';

function toggleLayer(state, action) {
  const { layerId } = action;
  const layer = state.layers[layerId];
  const updatedLayers = {
    ...state.layers,
    [layerId]: {
      ...layer,
      visible: action.isInit ? layer.visible : !layer.visible,
    },
  };
  if (layer.layers) {
    layer.layers.forEach(subLayerId => {
      updatedLayers[subLayerId].visible = !layer.visible;
      updatedLayers[subLayerId].parent = layer.id;
    });
  }

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

  return {
    ...state,
    visibleLayerId:
      updatedLayers[layerId].visible && layer.credit
        ? layer.id
        : activeLayerIds[activeLayerIds.length - 1],
  };
}

function receiveData(state, action) {
  const { layer } = action;
  return {
    ...state,
    visibleLayerId: layer.id,
  };
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
      return receiveData(state, action);
    }
    default:
      return state;
  }
}
