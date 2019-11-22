import { MAP_LOADED } from '../../constants/actionTypes';
import defaultState from '../../defaultState';

function mapLoaded(action) {
  return action.isLoaded;
}

export default function mapLoadedReducer(mapLoadedState = defaultState.MAP.isLoaded, action) {
  switch (action.type) {
    case MAP_LOADED: {
      return mapLoaded(action);
    }
    default:
      return mapLoadedState;
  }
}
