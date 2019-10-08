import { INIT_LOCATIONS } from '../constants/actionTypes';

export default function LOCATIONS(state = {}, action) {
  switch (action.type) {
    case INIT_LOCATIONS: {
      return { ...state, ...action.locations };
    }
    default:
      return state;
  }
}
