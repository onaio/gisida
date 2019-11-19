import { MAP_LOADED } from '../../constants/actionTypes';
import defaultState from '../../defaultState';

export default function mapLoadedReducer(mapLoadedState = defaultState.MAP.isLoaded, action) {
  switch (action.type) {
    case MAP_LOADED: {
      return action.isLoaded;
    }
    default:
      return mapLoadedState;
  }
}
