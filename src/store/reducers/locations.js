
import * as types from '../constants/actionTypes';


export default function LOCATIONS(state = {}, action) {
  switch (action.type) {
    case types.INIT_LOCATIONS: {
      return { ...state, ...action.locations };
    }
    default:
      return state;
  }
}

