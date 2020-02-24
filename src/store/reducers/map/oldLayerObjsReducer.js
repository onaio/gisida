import { RESET_FILTERED_LAYER } from '../../constants/actionTypes';
import defaultState from '../../defaultState';

function resetFilteredLayer(oldLayerObjsState, action) {
  const { oldLayer } = action;
  const oldLayerObjs = {
    ...oldLayerObjsState,
  };
  if (!oldLayerObjs[oldLayer.id]) {
    oldLayerObjs[oldLayer.id] = {};
  }
  oldLayerObjs[oldLayer.id] = {
    ...oldLayer,
  };

  return oldLayerObjs;
}

export default function oldLayerObjsReducer(
  oldLayerObjsState = defaultState.MAP.oldLayerObjs,
  action
) {
  switch (action.type) {
    case RESET_FILTERED_LAYER: {
      return resetFilteredLayer(oldLayerObjsState, action);
    }
    default:
      return oldLayerObjsState;
  }
}
