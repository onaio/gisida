import { MAP_RENDERED } from '../../constants/actionTypes';
import defaultState from '../../defaultState';

export default function mapRenderedReducer(mapRenderedState = defaultState.MAP.isRendered, action) {
  switch (action.type) {
    case MAP_RENDERED: {
      return action.isRendered;
    }
    default:
      return mapRenderedState;
  }
}
