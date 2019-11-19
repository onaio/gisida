import { MAP_LOADED, CHANGE_REGION } from '../../constants/actionTypes';
import defaultState from '../../defaultState';

export default function currentRegionReducer(
  currentRegionState = defaultState.MAP.currentRegion,
  action
) {
  switch (action.type) {
    case MAP_LOADED: {
      return Math.random();
    }
    case CHANGE_REGION: {
      return action.region;
    }
    default:
      return currentRegionState;
  }
}
