import { LOCATIONS } from '../../../src/store/reducers';
import { INIT_LOCATIONS } from '../../../src/store/constants/actionTypes';

describe('LOCATIONS', () => {
  it('should return the initial state', () => {
    expect(LOCATIONS(undefined, {})).toEqual({});
  });

  it('should handle INIT_LOCATIONS', () => {
    const action = {
      type: INIT_LOCATIONS,
      locations: {
        loc1: {
          default: true, // Default is true
          label: 'loc1',
          zoom: 10.978331870416822,
          center: {
            lng: 55.13155473084771,
            lat: 34.50960383103761,
          },
        },
        loc2: {
          default: true, // Default is true
          label: 'loc2',
          zoom: 10.978331870416822,
          center: {
            lng: 55.13155473084771,
            lat: 37.50960383103761,
          },
        },
      },
    };

    // Case 1: The state obj is empty
    expect(LOCATIONS({}, action)).toEqual({
      ...action.locations,
    });

    // Case 2: The state obj is not empty
    const stateOld = {
      loc4: {
        default: true, // Default is true
        label: 'loc4',
        zoom: 10.978331870416822,
        center: {
          lng: 55.13155473084771,
          lat: 34.50960383103761,
        },
      },
    };
    expect(LOCATIONS(stateOld, action)).toEqual({
      ...stateOld,
      ...action.locations,
    });
  });
});
