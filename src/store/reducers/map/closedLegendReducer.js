import { SET_CLOSED_LEGEND } from '../../constants/actionTypes';
import defaultState from '../../defaultState';

function legendClosed(action) {
  return action.layerId;
}

export default function closedLegendReducer(closedLegendLayerState = defaultState.MAP.closedLegendLayerId, action) {
  switch (action.type) {
    case SET_CLOSED_LEGEND: {
      return legendClosed(action);
    }
    default:
      return closedLegendLayerState;
  }
}
