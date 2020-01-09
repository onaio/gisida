import { MAP_LOADED, CHANGE_REGION } from '../../constants/actionTypes';
import defaultState from '../../defaultState';

function mapLoaded() {
  return Math.random();
}

function changeRegion(action) {
  return action.region;
}

export default function currentRegionReducer(
  currentRegionState = defaultState.MAP.currentRegion,
  action
) {
  switch (action.type) {
    case MAP_LOADED: {
      return mapLoaded();
    }
    case CHANGE_REGION: {
      return changeRegion(action);
    }
    default:
      return currentRegionState;
  }
}
