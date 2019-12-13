import { INIT_SUPERSET } from '../constants/actionTypes';

export default function SUPERSET_CONFIGS(state = {}, action) {
  switch (action.type) {
    case INIT_SUPERSET: {
      return {
        ...state,
        ...action.config,
      };
    }
    default:
      return state;
  }
}
