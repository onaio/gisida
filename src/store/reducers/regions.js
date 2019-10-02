

import defaultState from '../defaultState';
import * as types from '../constants/actionTypes';


export default function REGIONS(state = defaultState.REGIONS, action) {
  switch (action.type) {
    case types.INIT_REGIONS: {
      const regions = action.regions ? action.regions.map((r) => {
        const region = r;
        // check if mapconfig center matches region center to set current region
        if (
          region.center[0] === action.mapConfig.center[0] &&
          region.center[1] === action.mapConfig.center[1]) {
          region.current = true;
        }
        return region;
      }) : [];
      return regions;
    }
    case types.CHANGE_REGION: {
      const updatedRegions = state.map((r) => {
        const region = r;
        if (action.region === region.name) {
          region.current = true;
        } else region.current = false;
        return region;
      });
      return updatedRegions;
    }
    default:
      return state;
  }
}

