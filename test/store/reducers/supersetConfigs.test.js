import { SUPERSET_CONFIGS } from '../../../src/store/reducers';
import { INIT_SUPERSET } from '../../../src/store/constants/actionTypes';

describe('SUPERSET_CONFIGS', () => {
  it('should return the initial state', () => {
    expect(SUPERSET_CONFIGS(undefined, {})).toEqual({});
  });

  it('should handle INIT_SUPERSET', () => {
    const action = {
      type: INIT_SUPERSET,
      config: {
        mapConfig: {
          container: 'map',
          style: '',
          center: [0, 0],
          zoom: 5,
        },
        accessToken: false,
        appName: 'React Gisida',
        loaded: false,
      },
    };

    // Case 1: The state obj is empty
    expect(SUPERSET_CONFIGS({}, action)).toEqual({
      ...action.config,
    });

    // Case 2: The state obj is not empty
    const stateOld = {
      mapConfig: {
        container: 'map',
        style: '',
        center: [0, 0],
        zoom: 5,
      },
      accessToken: false,
      appName: 'React Gisida Gisida',
      loaded: true,
    };
    expect(SUPERSET_CONFIGS(stateOld, action)).toEqual({
      ...stateOld,
      ...action.config,
    });
  });
});
