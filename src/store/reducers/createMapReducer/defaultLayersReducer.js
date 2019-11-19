import { ADD_LAYER } from '../../constants/actionTypes';
import defaultState from '../../defaultState';

export default function defaultLayersReducer(
  state = {
    defaultLayers: defaultState.MAP.defaultLayers,
    layers: defaultState.MAP.layers,
  },
  action
) {
  switch (action.type) {
    case ADD_LAYER: {
      const reloadLayerId = state.layers[action.layer.id] ? action.layer.id : null;
      const defaultLayers = Object.keys(state.layers).filter(
        l =>
          state.layers[l].visible &&
          state.layers[l].id !== reloadLayerId &&
          !state.layers[l].nondefault
      );
      return {
        ...state,
        defaultLayers,
      };
    }
    default:
      return state;
  }
}
