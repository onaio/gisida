import { RESET_FILTERED_LAYER } from '../../constants/actionTypes';
import defaultState from '../../defaultState';

export default function oldLayerObjsReducer(
  oldLayerObjsState = defaultState.MAP.oldLayerObjs,
  action
) {
  switch (action.type) {
    case RESET_FILTERED_LAYER: {
      const { oldLayer } = action;

      return {
        ...oldLayerObjsState,
        [oldLayer.id]: {
          ...oldLayerObjsState[oldLayer.id],
          ...oldLayer,
        },
      };
    }
    default:
      return oldLayerObjsState;
  }
}
