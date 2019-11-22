import { TOGGLE_LAYER, UPDATE_PRIMARY_LAYER } from '../../constants/actionTypes';
import defaultState from '../../defaultState';
import { toggleLayer as toggleLayerLayersReducer } from './layersReducer';
import { toggleLayer as toggleLayerActiveLayerIdsReducer } from './activeLayerIdsReducer';

export function getFilterLayerId(updatedLayers, activeLayerIds, layerId, layer) {
  const activeFilterLayerIds = activeLayerIds.filter(
    l => updatedLayers[l].aggregate && updatedLayers[l].aggregate.filter
  );
  let filterLayerId = '';
  if (updatedLayers[layerId].visible && layer.aggregate && layer.aggregate.filter) {
    filterLayerId = layerId;
  } else if (activeFilterLayerIds && activeFilterLayerIds.length) {
    filterLayerId = activeFilterLayerIds[activeFilterLayerIds.length - 1];
  }

  return filterLayerId;
}

function toggleLayer(state, action) {
  const { layerId } = action;
  const layer = state.layers[layerId];
  const updatedLayers = toggleLayerLayersReducer(state.layers, action);
  const activeLayerIds = toggleLayerActiveLayerIdsReducer(state, action);
  const filterLayerId = getFilterLayerId(updatedLayers, activeLayerIds, layerId, layer);

  return {
    ...state.filter,
    layerId: filterLayerId,
  };
}

export function primaryLayerHasFilter(layers, action) {
  return layers[action.primaryLayer].aggregate && layers[action.primaryLayer].aggregate.filter;
}

function updatePrimaryLayer(state, action) {
  const activeIds = [...state.activeLayerIds];
  if (action.primaryLayer !== state.activeLayerIds[state.activeLayerIds.length - 1]) {
    if (activeIds.includes(action.primaryLayer)) {
      activeIds.splice(activeIds.indexOf(action.primaryLayer), 1);
      activeIds.splice(activeIds.length, 1, action.primaryLayer);
    }
  }
  return {
    ...state.filter,
    layerId: primaryLayerHasFilter(state.layers, action) ? action.primaryLayer : false,
  };
}

export default function filterReducer(
  state = {
    filter: defaultState.MAP.filter,
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
      return updatePrimaryLayer(state, action);
    }
    default:
      return state.filter;
  }
}
