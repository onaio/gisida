import { RECEIVE_DATA, UPDATE_TIMESERIES } from '../../constants/actionTypes';
import defaultState from '../../defaultState';

function receiveData(action) {
  return action.timeseries;
}

function updateTimeSeries(action) {
  return action.timeseries;
}

export default function timeSeriesReducer(timeSeriesState = defaultState.MAP.timeseries, action) {
  switch (action.type) {
    case RECEIVE_DATA: {
      return receiveData(action);
    }
    case UPDATE_TIMESERIES: {
      return updateTimeSeries(action);
    }
    default:
      return timeSeriesState;
  }
}
