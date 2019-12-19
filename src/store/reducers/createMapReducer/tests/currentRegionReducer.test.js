import currentRegionReducer from './../currentRegionReducer';

import { MAP_LOADED, CHANGE_REGION } from './../../../constants/actionTypes';
import { mapId } from './common';

describe('currentRegionReducer', () => {
  const stateOld = 'region';

  it('should handle the initial state', () => {
    expect(currentRegionReducer(undefined, {})).toEqual('');
  });

  it('should handle MAP_LOADED', () => {
    const action = {
      type: MAP_LOADED,
      isLoaded: false,
      mapId,
    };
    // Case 1: The state is empty
    const expected = currentRegionReducer('', action);
    expect(typeof expected).toBe('number');

    // Case 2: The state is NOT empty

    const expectedStateOld = currentRegionReducer(stateOld, action);
    expect(typeof expectedStateOld).toBe('number');
  });

  it('should handle CHANGE_REGION', () => {
    const action = {
      type: CHANGE_REGION,
      region: 'new-region',
      mapId,
    };

    // Case 1: State is empty
    expect(currentRegionReducer('', action)).toEqual(action.region);

    // Case 2: State is NOT empty
    expect(currentRegionReducer(stateOld, action)).toEqual(action.region);
  });
});
