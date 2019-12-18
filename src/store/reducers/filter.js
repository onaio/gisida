

import defaultState from '../defaultState';
import * as types from '../constants/actionTypes';


export default function FILTER(state = defaultState.FILTER, action) {
  switch (action.type) {
    case types.SAVE_FILTER_STATE: {
      return {
        ...state,
        [action.layerId]: {
          ...action.filterState,
          doUpdate: true,
          isClear: action.isClear || false,
        },
      };
    }
    case types.FILTERS_UPDATED: {
      if (!action.layerId) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        [action.layerId]: {
          ...state[action.layerId],
          doUpdate: false,
        },
      };
    }
    default:
      return state;
  }
}

