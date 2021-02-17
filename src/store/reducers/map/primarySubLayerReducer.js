import { TOGGLE_LAYER } from '../../constants/actionTypes';
import defaultState from '../../defaultState';
import { toggleLayer as toggleLayerLayersReducer } from './layersReducer';

function toggleLayer(state, action) {
  const { layerId } = action;
  const layer = state.layers[layerId];
  const updatedLayers = toggleLayerLayersReducer(state.layers, action);
  let primarySubLayer = null;

  if (layer.layers) {
    layer.layers.forEach(groupedLayer => {
      let subLayerId = groupedLayer;
      if (subLayerId.includes('http')) {
        subLayerId = subLayerId.split('/').slice(-1).pop();
      }
      primarySubLayer = updatedLayers[subLayerId].visible ? subLayerId : null;
    });
  }

  const activeSubLayerIds = Object.keys(updatedLayers).filter(
    l => updatedLayers[l].visible && updatedLayers[l].parent
  );

  return primarySubLayer || activeSubLayerIds[activeSubLayerIds.length - 1];
}

export default function primarySubLayerReducer(
  state = {
    primarySubLayer: defaultState.MAP.primarySubLayer,
    layers: defaultState.MAP.layers,
  },
  action
) {
  switch (action.type) {
    case TOGGLE_LAYER: {
      return toggleLayer(state, action);
    }
    default:
      return state.primarySubLayer;
  }
}
