import { REGIONS } from '../../../src/store/reducers';
import defaultState from '../../../src/store/defaultState';
import { INIT_REGIONS, CHANGE_REGION } from '../../../src/store/constants/actionTypes';
import { mapId } from './common';

describe('REGIONS', () => {
  const region1 = {
    name: 'Region1',
    zoom: 10,
    center: [0, 0],
  };
  const region2 = {
    name: 'Region2',
    zoom: 10,
    center: [1, 1],
  };
  const region3 = {
    name: 'Region3',
    zoom: 10,
    center: [2, 2],
  };
  const stateEmpty = [];

  it('should return the initial state', () => {
    expect(REGIONS(undefined, {})).toEqual(defaultState.REGIONS);
  });

  it('should handle INIT_REGIONS', () => {
    const action = {
      type: INIT_REGIONS,
      regions: [region1, region2, region3],
      mapConfig: {
        container: 'map',
        style: '',
        center: [0, 0],
        zoom: 5,
      },
    };
    const actionUndefinedRegions = {
      ...action,
      regions: undefined,
    };
    const actionNoMatch = {
      ...action,
      regions: [region2, region3],
    };
    const [firstRegion, ...otherRegions] = action.regions;

    // Case 1: The state obj is empty
    // Case 1.1: action.regions is undefined
    expect(REGIONS(stateEmpty, actionUndefinedRegions)).toEqual([]);

    // Case 1.2 action.regions is defined
    // Case 1.2.1 Region center in action.regions matches action.mapConfig.center
    expect(REGIONS(stateEmpty, action)).toEqual([
      {
        ...firstRegion,
        current: true,
      },
      ...otherRegions,
    ]);

    // Case 1.2.2 No region center in action.regions matches action.mapConfig.center
    expect(REGIONS(stateEmpty, actionNoMatch)).toEqual(actionNoMatch.regions);

    // Case 2: The state obj is not empty
    const stateOld = [region2, region3];

    // Case 2.1: action.regions is undefined
    expect(REGIONS(stateOld, actionUndefinedRegions)).toEqual([]);

    // Case 2.2 action.regions is defined
    // Case 2.2.1 Region center in action.regions matches action.mapConfig.center
    expect(REGIONS(stateOld, action)).toEqual([
      {
        ...firstRegion,
        current: true,
      },
      ...otherRegions,
    ]);

    // Case 2.2.2 No region center in action.regions matches action.mapConfig.center
    expect(REGIONS(stateOld, actionNoMatch)).toEqual(actionNoMatch.regions);
  });

  it('should handle CHANGE_REGION', () => {
    const action = {
      type: CHANGE_REGION,
      region: region1.name,
      mapId,
    };

    // Case 1: The state obj is empty
    expect(REGIONS(stateEmpty, action)).toEqual([]);

    // Case 1.2: The state obj is not empty
    const stateOldMatchExists = [region1, region2];

    // Case 1.2.1: action.region matches region in state
    expect(REGIONS(stateOldMatchExists, action)).toEqual([
      {
        ...region1,
        current: true,
      },
      region2,
    ]);

    // Case 1.2.2: action.regions does not match region in state
    const stateOldNoMatch = [region2, region3];
    expect(REGIONS(stateOldNoMatch, action)).toEqual([
      {
        ...region2,
        current: false,
      },
      {
        ...region3,
        current: false,
      },
    ]);
  });
});
