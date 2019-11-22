import { MAP_RENDERED } from '../../constants/actionTypes';
import defaultState from '../../defaultState';

function mapRendered(action) {
  return action.isRendered;
}

export default function mapRenderedReducer(mapRenderedState = defaultState.MAP.isRendered, action) {
  switch (action.type) {
    case MAP_RENDERED: {
      return mapRendered(action);
    }
    default:
      return mapRenderedState;
  }
}
