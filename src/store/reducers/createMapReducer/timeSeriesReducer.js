import { RECEIVE_DATA, UPDATE_TIMESERIES } from '../../constants/actionTypes';
import defaultState from '../../defaultState';

export default function timeSeriesReducer(timeSeriesState = defaultState.MAP.timeseries, action) {
  switch (action.type) {
    case RECEIVE_DATA: {
      return action.timeseries;
    }
    case UPDATE_TIMESERIES: {
      return action.timeseries;
    }
    default:
      return timeSeriesState;
  }
}
