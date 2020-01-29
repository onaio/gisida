import { APP } from '../../../src/store/reducers';
import defaultState from '../../../src/store/defaultState';
import { INIT_APP } from '../../../src/store/constants/actionTypes';

describe('APP', () => {
  it('should return the initial state', () => {
    expect(APP(undefined, {})).toEqual(defaultState.APP);
  });

  it('should handle INIT_APP', () => {
    const action = {
      type: INIT_APP,
      config: {
        accessToken: false,
        appName: 'React Gisida',
        loaded: false,
        mapConfig: {
          center: [0, 0],
          container: 'map',
          style: '',
          zoom: 10,
        },
      },
    };
    // Case 1: The state obj is empty
    const stateEmpty = {};
    expect(APP(stateEmpty, action)).toEqual({
      ...stateEmpty,
      ...action.config,
      loaded: true,
    });

    // Case 2: The state obj is not empty
    const stateOld = {
      accessToken: false,
      appName: 'Old App Name',
      loaded: true,
      mapConfig: {
        center: [0, 0],
        container: 'map',
        style: '',
        zoom: 10,
      },
    };

    expect(APP(stateOld, action)).toEqual({
      ...stateOld,
      ...action.config,
      loaded: true,
    });
  });
});
