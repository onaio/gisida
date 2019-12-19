import currentStyleReducer from './../currentStyleReducer';
import { CHANGE_STYLE } from './../../../constants/actionTypes';
import { mapId } from './common';

describe('currentStyleReducer', () => {
  it('should handle the initial state', () => {
    expect(currentStyleReducer(undefined, {})).toEqual('');
  });

  it('should handle CHANGE_STYLE', () => {
    const action = {
      type: CHANGE_STYLE,
      style: 'mapbox://styles/mapbox/satellite-v9',
      mapId,
    };

    // Case 1: State is empty
    expect(currentStyleReducer('', action)).toEqual(action.style);

    // Case 2: State is NOT empty
    const stateOld = 'old-style';
    expect(currentStyleReducer(stateOld, action)).toEqual(action.style);
  });
});
