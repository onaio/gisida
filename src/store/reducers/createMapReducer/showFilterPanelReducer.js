import {
  TOGGLE_LAYER,
  TOGGLE_FILTER,
  UPDATE_PRIMARY_LAYER,
  DETAIL_VIEW,
} from '../../constants/actionTypes';
import defaultState from '../../defaultState';
import { toggleLayer as toggleLayerLayersReducer } from './layersReducer';
import { getFilterLayerId, primaryLayerHasFilter } from './filterReducer';
import { toggleLayer as toggleLayerActiveLayerIdsReducer } from './activeLayerIdsReducer';

function toggleLayer(state, action) {
  const updatedLayers = toggleLayerLayersReducer(state.layers, action);
  const { layerId } = action;
  const layer = state.layers[layerId];
  const activeLayerIds = toggleLayerActiveLayerIdsReducer(state, action);
  const filterLayerId = getFilterLayerId(updatedLayers, activeLayerIds, layerId, layer);

  return (
    state.showFilterPanel &&
    layerId === filterLayerId &&
    filterLayerId !== '' &&
    updatedLayers[filterLayerId] &&
    updatedLayers[filterLayerId].visible
  );
}

function updatePrimaryLayer(state, action) {
  return primaryLayerHasFilter(state.layers, action) && state.showFilterPanel;
}

function toggleFilter(state) {
  return !state.showFilterPanel;
}

function detailView(state, action) {
  if (!action.payload) {
    return state.showFilterPanel;
  }

  const { properties, layerId } = action.payload;
  const showDetailView = !!properties && !!layerId;

  return showDetailView ? false : state.showFilterPanel;
}

export default function showFilterPanelReducer(
  state = {
    showFilterPanel: defaultState.MAP.showFilterPanel,
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
    case TOGGLE_FILTER: {
      return toggleFilter(state);
    }
    case DETAIL_VIEW: {
      return detailView(state, action);
    }
    default:
      return state.showFilterPanel;
  }
}
