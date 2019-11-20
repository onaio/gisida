import { ADD_LAYER } from '../../constants/actionTypes';
import defaultState from '../../defaultState';
import { getReloadLayerId } from './reloadLayerIdReducer';

function addLayer(state, action) {
  const defaultLayers = Object.keys(state.layers).filter(
    l =>
      state.layers[l].visible &&
      state.layers[l].id !== getReloadLayerId(state.layers, action) &&
      !state.layers[l].nondefault
  );
  return {
    ...state,
    defaultLayers,
  };
}

export default function defaultLayersReducer(
  state = {
    defaultLayers: defaultState.MAP.defaultLayers,
    layers: defaultState.MAP.layers,
  },
  action
) {
  switch (action.type) {
    case ADD_LAYER: {
      return addLayer(state, action);
    }
    default:
      return state;
  }
}
