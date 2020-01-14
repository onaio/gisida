import timeSeriesReducer from './../timeSeriesReducer';
import { RECEIVE_DATA, UPDATE_TIMESERIES } from './../../../constants/actionTypes';
import { timeseries, mapId, layer, layerId } from './common';

describe('timeSeriesReducer', () => {
  it('should handle the initial state', () => {
    expect(timeSeriesReducer(undefined, {})).toEqual({});
  });

  it('should handle RECEIVE_DATA', () => {
    const action = {
      type: RECEIVE_DATA,
      layer,
      timeseries,
      mapId,
    };
    // Case 1: State is empty
    expect(timeSeriesReducer({}, action)).toEqual(action.timeseries);
    // Case 2: State is NOT empty
    const state = { [layerId]: { adminFilter: ['item'] } };
    expect(timeSeriesReducer(state, action)).toEqual(action.timeseries);
  });

  it('should handle UPDATE_TIMESERIES', () => {
    const action = {
      type: UPDATE_TIMESERIES,
      timeseries,
      mapId,
      layerId,
    };
    // Case 1: State is empty
    expect(timeSeriesReducer({}, action)).toEqual(action.timeseries);
    // Case 2: State is NOT empty
    const state = { [layerId]: { adminFilter: ['item'] } };
    expect(timeSeriesReducer(state, action)).toEqual(action.timeseries);
  });
});
