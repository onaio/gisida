import { TOGGLE_LAYER } from '../../constants/actionTypes';
import defaultState from '../../defaultState';
import { toggleLayer as toggleLayerLayersReducer } from './layersReducer';
import { toggleLayer as toggleLayerActiveLayerIdsReducer } from './activeLayerIdsReducer';

function toggleLayer(state, action) {
  const { layerId } = action;
  const activeLayerIds = toggleLayerActiveLayerIdsReducer(state, action);
  const updatedLayers = toggleLayerLayersReducer(state.layers, action);

  return {
    ...state,
    lastLayerSelected: !updatedLayers[layerId].visible
      ? activeLayerIds[activeLayerIds.length - 1]
      : layerId,
  };
}

export default function lastLayerSelectedReducer(
  state = {
    lastLayerSelected: defaultState.MAP.lastLayerSelected,
    layers: defaultState.MAP.layers,
    activeLayerIds: defaultState.MAP.activeLayerIds,
  },
  action
) {
  switch (action.type) {
    case TOGGLE_LAYER: {
      return toggleLayer(state, action);
    }
    default:
      return state;
  }
}
