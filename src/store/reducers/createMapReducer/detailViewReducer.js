import {
  TOGGLE_LAYER,
  UPDATE_PRIMARY_LAYER,
  TOGGLE_FILTER,
  DETAIL_VIEW,
} from '../../constants/actionTypes';
import defaultState from '../../defaultState';

export default function detailViewReducer(
  state = {
    detailView: defaultState.MAP.detailView,
    layers: defaultState.MAP.layers,
  },
  action
) {
  switch (action.type) {
    case TOGGLE_LAYER: {
      const { layerId } = action;
      const layer = state.layers[layerId];
      const updatedLayers = {
        ...state.layers,
        [layerId]: {
          ...layer,
          visible: action.isInit ? layer.visible : !layer.visible,
        },
      };
      return {
        ...state,
        detailView:
          state.detailView &&
          (state.detailView && state.detailView.layerId === layerId) &&
          updatedLayers[layerId] &&
          updatedLayers[layerId].visible,
      };
    }
    case UPDATE_PRIMARY_LAYER: {
      return {
        ...state,
        detailView: null,
      };
    }
    case TOGGLE_FILTER: {
      return {
        ...state,
        detailView: null,
      };
    }
    case DETAIL_VIEW: {
      if (!action.payload) {
        return {
          ...state,
          detailView: null,
        };
      }

      const { properties, layerId, model, detailSpec } = action.payload;
      const showDetailView = !!properties && !!layerId;

      return {
        ...state,
        detailView: showDetailView
          ? {
              model: { ...model },
              spec: { ...detailSpec },
              properties: { ...properties },
              layerId,
            }
          : null,
      };
    }
    default:
      return state;
  }
}
