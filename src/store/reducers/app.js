import { INIT_APP } from '../constants/actionTypes';
import defaultState from '../defaultState';

export default function APP(state = defaultState.APP, action) {
  switch (action.type) {
    case INIT_APP:
      return {
        ...state,
        ...action.config,
        loaded: true,
      };
    default:
      return state;
  }
}
