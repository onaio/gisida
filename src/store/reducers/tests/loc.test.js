import LOC from '../loc';
import defaultState from '../../defaultState';
import { INIT_LOC, SET_LOCATION, TOGGLE_MAP_LOCATION } from '../../constants/actionTypes';
import { mapId } from './common';

describe('LOC', () => {
  const config = {
    loc1: {
      default: false, // Default is false
      label: 'loc1',
      zoom: 10.978331870416822,
      center: {
        lng: 69.13155473084771,
        lat: 34.50960383103761,
      },
    },
    loc2: {
      default: true, // Default is true
      label: 'loc2',
      zoom: 10.978331870416822,
      center: {
        lng: 55.13155473084771,
        lat: 34.50960383103761,
      },
    },
    loc3: {
      default: true, // Default is true
      label: 'loc3',
      zoom: 10.978331870416822,
      center: {
        lng: 73.13155473084771,
        lat: 34.50960383103761,
      },
    },
  };

  const stateOld = {
    locations: { ...config },
    location: {
      ...Object.keys(config)
        .map(d => config[d])
        .find(d => d.default === true),
      doUpdateLOC: false,
    },
    active: Object.keys(config).find(d => config[d].default === true),
    default: Object.keys(config).find(d => config[d].default === true),
    doUpdateMap: 'old-map-id',
  };

  it('should return the initial state', () => {
    expect(LOC(undefined, {})).toEqual(defaultState.LOC);
  });

  it('should handle INIT_LOC', () => {
    const action = {
      type: INIT_LOC,
      config,
    };

    // Case 1: Handle INIT_LOC when the state object is empty
    const stateEmpty = {};

    expect(LOC(stateEmpty, action)).toEqual({
      ...stateEmpty,
      locations: { ...config },
      location: {
        ...Object.keys(config)
          .map(d => config[d])
          .find(d => d.default === true),
        doUpdateLOC: false,
      },
      active: Object.keys(config).find(d => config[d].default === true),
      default: Object.keys(config).find(d => config[d].default === true),
      doUpdateMap: undefined,
    });

    // Case 2: Handle INIT_LOC when the state object is not empty
    const newConfig = {
      loc4: {
        default: true, // Default is true
        label: 'loc4',
        zoom: 10.978331870416822,
        center: {
          lng: 55.13155473084771,
          lat: 34.50960383103761,
        },
      },
      loc5: {
        default: true, // Default is true
        label: 'loc5',
        zoom: 10.978331870416822,
        center: {
          lng: 55.13155473084771,
          lat: 37.50960383103761,
        },
      },
    };
    const actionNewConfig = {
      type: INIT_LOC,
      config: newConfig,
    };
    expect(LOC(stateOld, actionNewConfig)).toEqual({
      ...stateOld,
      locations: { ...newConfig },
      location: {
        ...Object.keys(newConfig)
          .map(d => newConfig[d])
          .find(d => d.default === true),
        doUpdateLOC: false,
      },
      active: Object.keys(newConfig).find(d => newConfig[d].default === true),
      default: Object.keys(newConfig).find(d => newConfig[d].default === true),
      doUpdateMap: stateOld.doUpdateMap,
    });
  });

  it('should handle SET_LOCATION', () => {
    const loc = 'loc1';
    const action = {
      type: SET_LOCATION,
      loc,
      mapId,
    };

    // Case 1: Handle SET_LOCATION when the state object is empty
    expect(() => {
      LOC({}, action);
    }).toThrow(TypeError);

    // Case 2: Handle SET_LOCATION when state object is not empty
    // Case 2.1 locations[loc] is undefined
    const stateOldUndefinedLoc = {
      ...stateOld,
      locations: {},
    };
    expect(LOC(stateOldUndefinedLoc, action)).toEqual({
      ...stateOldUndefinedLoc,
      doUpdateMap: mapId,
      active: stateOldUndefinedLoc.active,
      location: {
        ...stateOldUndefinedLoc.location,
        doUpdateLOC: false,
      },
    });

    // Case 2.2 locations[loc] is defined
    expect(LOC(stateOld, action)).toEqual({
      ...stateOld,
      doUpdateMap: mapId,
      active: loc,
      location: {
        ...stateOld.locations[loc],
        doUpdateLOC: !stateOld.location.doUpdateLOC,
      },
    });
  });

  it('should handle TOGGLE_MAP_LOCATION', () => {
    const loc = 'loc1';
    const action = {
      type: TOGGLE_MAP_LOCATION,
      loc,
    };

    // Case 1: The state obj is empty
    expect(() => {
      LOC({}, action);
    }).toThrow(TypeError);

    // Case 2: The state obj is not empty
    // Case 2.1 locations[loc] is undefined
    const stateOldUndefinedLoc = {
      ...stateOld,
      locations: {},
    };
    expect(LOC(stateOldUndefinedLoc, action)).toEqual({
      ...stateOldUndefinedLoc,
      location: {
        ...stateOldUndefinedLoc.location,
        doUpdateLOC: false,
      },
    });

    // Case 2.2 locations[loc] is defined
    expect(LOC(stateOld, action)).toEqual({
      ...stateOld,
      location: {
        ...stateOld.locations[loc],
        doUpdateLOC: !stateOld.location.doUpdateLOC,
      },
    });
  });
});
