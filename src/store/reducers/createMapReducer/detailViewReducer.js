import {
  TOGGLE_LAYER,
  UPDATE_PRIMARY_LAYER,
  TOGGLE_FILTER,
  DETAIL_VIEW,
} from '../../constants/actionTypes';
import defaultState from '../../defaultState';
import { toggleLayer as toggleLayerLayersReducer } from './layersReducer';

function toggleLayer(state, action) {
  const { layerId } = action;
  const updatedLayers = toggleLayerLayersReducer(state.layers, action);

  return (
    state.detailView &&
    (state.detailView && state.detailView.layerId === layerId) &&
    updatedLayers[layerId] &&
    updatedLayers[layerId].visible
  );
}

function updatePrimaryLayer() {
  return null;
}

function toggleFilter() {
  return null;
}

function detailView(action) {
  if (!action.payload) {
    return null;
  }

  const { properties, layerId, model, detailSpec } = action.payload;
  const showDetailView = !!properties && !!layerId;

  return showDetailView
    ? {
        model: { ...model },
        spec: { ...detailSpec },
        properties: { ...properties },
        layerId,
      }
    : null;
}

export default function detailViewReducer(
  state = {
    detailView: defaultState.MAP.detailView,
    layers: defaultState.MAP.layers,
  },
  action
) {
  switch (action.type) {
    case TOGGLE_LAYER: {
      return toggleLayer(state, action);
    }
    case UPDATE_PRIMARY_LAYER: {
      return updatePrimaryLayer();
    }
    case TOGGLE_FILTER: {
      return toggleFilter();
    }
    case DETAIL_VIEW: {
      return detailView(action);
    }
    default:
      return state.detailView;
  }
}
