import { SET_LANGUAGE } from '../constants/actionTypes';

export default function CURRENTLANGUAGE(state = {}, action) {
  console.log(action);
  switch (action.type) {
    case SET_LANGUAGE: {
      return {
        ...state,
        ...action.language,
        mapId: action.mapId,
      };
    }
    default:
      return state;
  }
}
