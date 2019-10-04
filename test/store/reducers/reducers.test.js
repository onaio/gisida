import * as reducers from '../../../src/store/reducers/reducers';
import * as types from '../../../src/store/constants/actionTypes';
import defaultState from '../../../src/store/defaultState';

const mapId = 'map-id';
const layerId = 'layer-id';

describe('reducers.APP', () => {
  it('should return the initial state', () => {
    expect(reducers.APP(undefined, {})).toEqual(defaultState.APP);
  });

  it('should handle INIT_APP', () => {
    const action = {
      type: types.INIT_APP,
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
    expect(reducers.APP(stateEmpty, action)).toEqual({
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

    expect(reducers.APP(stateOld, action)).toEqual({
      ...stateOld,
      ...action.config,
      loaded: true,
    });
  });
});

describe('reducers.LOC', () => {
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
    expect(reducers.LOC(undefined, {})).toEqual(defaultState.LOC);
  });

  it('should handle INIT_LOC', () => {
    const action = {
      type: types.INIT_LOC,
      config,
    };

    // Case 1: Handle INIT_LOC when the state object is empty
    const stateEmpty = {};

    expect(reducers.LOC(stateEmpty, action)).toEqual({
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
      type: types.INIT_LOC,
      config: newConfig,
    };
    expect(reducers.LOC(stateOld, actionNewConfig)).toEqual({
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
      type: types.SET_LOCATION,
      loc,
      mapId,
    };

    // Case 1: Handle SET_LOCATION when the state object is empty
    expect(() => {
      reducers.LOC({}, action);
    }).toThrow(TypeError);

    // Case 2: Handle SET_LOCATION when state object is not empty
    // Case 2.1 locations[loc] is undefined
    const stateOldUndefinedLoc = {
      ...stateOld,
      locations: {},
    };
    expect(reducers.LOC(stateOldUndefinedLoc, action)).toEqual({
      ...stateOldUndefinedLoc,
      doUpdateMap: mapId,
      active: stateOldUndefinedLoc.active,
      location: {
        ...stateOldUndefinedLoc.location,
        doUpdateLOC: false,
      },
    });

    // Case 2.2 locations[loc] is defined
    expect(reducers.LOC(stateOld, action)).toEqual({
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
      type: types.TOGGLE_MAP_LOCATION,
      loc,
    };

    // Case 1: The state obj is empty
    expect(() => {
      reducers.LOC({}, action);
    }).toThrow(TypeError);

    // Case 2: The state obj is not empty
    // Case 2.1 locations[loc] is undefined
    const stateOldUndefinedLoc = {
      ...stateOld,
      locations: {},
    };
    expect(reducers.LOC(stateOldUndefinedLoc, action)).toEqual({
      ...stateOldUndefinedLoc,
      location: {
        ...stateOldUndefinedLoc.location,
        doUpdateLOC: false,
      },
    });

    // Case 2.2 locations[loc] is defined
    expect(reducers.LOC(stateOld, action)).toEqual({
      ...stateOld,
      location: {
        ...stateOld.locations[loc],
        doUpdateLOC: !stateOld.location.doUpdateLOC,
      },
    });
  });
});

describe('reducers.STYLES', () => {
  const style1 = {
    label: 'Satelitte',
    url: 'mapbox://styles/mapbox/satellite-v9',
  };
  const style2 = {
    label: 'Satelitte Streets',
    url: 'mapbox://styles/mapbox/satellite-streets-v9',
  };
  const style3 = {
    label: 'Satelitte Mountains',
    url: 'mapbox://styles/mapbox/satellite-mountains-v9',
  };

  it('should return the initial state', () => {
    expect(reducers.STYLES(undefined, {})).toEqual(defaultState.STYLES);
  });

  it('should handle INIT_STYLES', () => {
    const action = {
      type: types.INIT_STYLES,
      styles: [style1, style2],
      mapConfig: {
        container: 'map',
        style: '',
        center: [0, 0],
        zoom: 5,
      },
    };

    // Case 1: The state obj is empty
    const stateEmpty = [];

    // Case 1.1 Mapconfig style does not match style in array of styles
    const expectedStyles = action.styles.map(s => {
      const style = s;
      if (style.url === action.mapConfig.style) style.current = true;
      return style;
    });

    expect(expectedStyles[0].current === undefined);
    expect(expectedStyles[1].current === undefined);
    expect(reducers.STYLES(stateEmpty, action)).toEqual(expectedStyles);

    // Case 1.2 action.mapConfig.style matches style in the array of styles
    const actionMatchExists = {
      ...action,
      mapConfig: {
        ...action.mapConfig,
        style: style1.url,
      },
    };
    const expectedStylesMatchExists = actionMatchExists.styles.map(s => {
      const style = s;
      if (style.url === actionMatchExists.mapConfig.style) style.current = true;
      return style;
    });

    expect(expectedStylesMatchExists[0].current === true);
    expect(expectedStylesMatchExists[1].current === undefined);
    expect(reducers.STYLES(stateEmpty, actionMatchExists)).toEqual(expectedStylesMatchExists);

    // Case 2: The state obj is not empty
    const stateOld = [style1, style2];

    // Case 2.1 Mapconfig style does not match style in array of styles
    expect(reducers.STYLES(stateOld, action)).toEqual(expectedStyles);

    // Case 2.2 Mapconfig style matches style in array of styles
    expect(reducers.STYLES(stateOld, actionMatchExists)).toEqual(expectedStylesMatchExists);
  });

  it('should handle CHANGE_STYLE', () => {
    const action = {
      type: types.CHANGE_STYLE,
      style: style1.url,
      mapId,
    };
    const actionMapIdUndefined = {
      ...action,
      mapId: undefined,
    };

    // Case 1: The state obj is empty
    const stateEmpty = [];
    expect(reducers.STYLES(stateEmpty, action)).toEqual([]);

    // Case 2: The state obj is not empty
    // Case 2.1: action.style matches style in state
    const stateOldMatchExists = [style1, style2, style3];

    // Case 2.1.1: mapId is defined in action
    expect(reducers.STYLES(stateOldMatchExists, action)).toEqual([
      {
        ...style1,
        [mapId]: {
          current: true,
        },
      },
      style2,
      style3,
    ]);

    // Case 2.1.2: mapId is not defined in action
    expect(reducers.STYLES(stateOldMatchExists, actionMapIdUndefined)).toEqual([
      {
        ...style1,
        current: true,
      },
      style2,
      style3,
    ]);

    // Case 2.2: action.style does not match style in state
    const stateOldNoMatch = [style2, style3];

    // Case 2.2.1: mapId is defined in action
    expect(reducers.STYLES(stateOldNoMatch, action)).toEqual([
      {
        ...style2,
        [mapId]: {
          current: false,
        },
      },
      {
        ...style3,
        [mapId]: {
          current: false,
        },
      },
    ]);

    // Case 2.2.2: mapId is not defined in action
    expect(reducers.STYLES(stateOldNoMatch, actionMapIdUndefined)).toEqual([
      {
        ...style2,
        current: false,
      },
      {
        ...style3,
        current: false,
      },
    ]);
  });
});

describe('reducers.REGIONS', () => {
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
    expect(reducers.REGIONS(undefined, {})).toEqual(defaultState.REGIONS);
  });

  it('should handle INIT_REGIONS', () => {
    const action = {
      type: types.INIT_REGIONS,
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
    expect(reducers.REGIONS(stateEmpty, actionUndefinedRegions)).toEqual([]);

    // Case 1.2 action.regions is defined
    // Case 1.2.1 Region center in action.regions matches action.mapConfig.center
    expect(reducers.REGIONS(stateEmpty, action)).toEqual([
      {
        ...firstRegion,
        current: true,
      },
      ...otherRegions,
    ]);

    // Case 1.2.2 No region center in action.regions matches action.mapConfig.center
    expect(reducers.REGIONS(stateEmpty, actionNoMatch)).toEqual(actionNoMatch.regions);

    // Case 2: The state obj is not empty
    const stateOld = [region2, region3];

    // Case 2.1: action.regions is undefined
    expect(reducers.REGIONS(stateOld, actionUndefinedRegions)).toEqual([]);

    // Case 2.2 action.regions is defined
    // Case 2.2.1 Region center in action.regions matches action.mapConfig.center
    expect(reducers.REGIONS(stateOld, action)).toEqual([
      {
        ...firstRegion,
        current: true,
      },
      ...otherRegions,
    ]);

    // Case 2.2.2 No region center in action.regions matches action.mapConfig.center
    expect(reducers.REGIONS(stateOld, actionNoMatch)).toEqual(actionNoMatch.regions);
  });

  it('should handle CHANGE_REGION', () => {
    const action = {
      type: types.CHANGE_REGION,
      region: region1.name,
      mapId,
    };

    // Case 1: The state obj is empty
    expect(reducers.REGIONS(stateEmpty, action)).toEqual([]);

    // Case 1.2: The state obj is not empty
    const stateOldMatchExists = [region1, region2];

    // Case 1.2.1: action.region matches region in state
    expect(reducers.REGIONS(stateOldMatchExists, action)).toEqual([
      {
        ...region1,
        current: true,
      },
      region2,
    ]);

    // Case 1.2.2: action.regions does not match region in state
    const stateOldNoMatch = [region2, region3];
    expect(reducers.REGIONS(stateOldNoMatch, action)).toEqual([
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

describe('reducers.FILTER', () => {
  const stateEmpty = {};
  const stateOld = {
    [layerId]: {
      doUpdate: false,
      isClear: false,
    },
  };

  it('should return the initial state', () => {
    expect(reducers.FILTER(undefined, {})).toEqual(defaultState.FILTER);
  });

  it('should handle SAVE_FILTER_STATE', () => {
    const action = {
      type: types.SAVE_FILTER_STATE,
      layerId,
      filterState: {
        filterOptions: {},
      },
      mapId,
      isClear: true,
    };
    const actionUndefinedIsClear = {
      ...action,
      isClear: undefined,
    };

    // Case 1: The state obj is empty
    // Case 1.1: action.isClear is defined
    expect(reducers.FILTER(stateEmpty, action)).toEqual({
      ...stateEmpty,
      [action.layerId]: {
        ...action.filterState,
        doUpdate: true,
        isClear: true,
      },
    });

    // Case 1.2: action.isClear is undefined
    expect(reducers.FILTER(stateEmpty, actionUndefinedIsClear)).toEqual({
      ...stateEmpty,
      [action.layerId]: {
        ...action.filterState,
        doUpdate: true,
        isClear: false,
      },
    });

    // Case 2: The state obj is not empty
    // Case 2.1 action.isClear is defined
    expect(reducers.FILTER(stateOld, action)).toEqual({
      ...stateOld,
      [action.layerId]: {
        ...action.filterState,
        doUpdate: true,
        isClear: true,
      },
    });

    // Case 2.2 action.isClear is undefined
    expect(reducers.FILTER(stateOld, actionUndefinedIsClear)).toEqual({
      ...stateOld,
      [action.layerId]: {
        ...action.filterState,
        doUpdate: true,
        isClear: false,
      },
    });
  });

  it('should handle FILTERS_UPDATED', () => {
    const action = {
      type: types.FILTERS_UPDATED,
      mapId,
      layerId,
    };
    const actionLayerIdUndfined = {
      ...action,
      layerId: undefined,
    };

    // Case 1: The state obj is empty
    // Case 1.1: action.layerId is defined
    expect(reducers.FILTER(stateEmpty, action)).toEqual({
      ...stateEmpty,
      [action.layerId]: {
        doUpdate: false,
      },
    });

    // Case 1.2: action.layerId is undefined
    expect(reducers.FILTER(stateEmpty, actionLayerIdUndfined)).toEqual({
      ...stateEmpty,
    });

    // Case 2: The state obj is not empty
    // Case 2.1: action.layerId is defined
    expect(reducers.FILTER(stateOld, action)).toEqual({
      ...stateEmpty,
      [action.layerId]: {
        ...stateOld[action.layerId],
        doUpdate: false,
      },
    });

    // Case 2.2: action.layerId is undefined
    expect(reducers.FILTER(stateOld, actionLayerIdUndfined)).toEqual({
      ...stateOld,
    });
  });
});

describe('reducers.LOCATIONS', () => {
  it('should return the initial state', () => {
    expect(reducers.LOCATIONS(undefined, {})).toEqual({});
  });

  it('should handle INIT_LOCATIONS', () => {
    const action = {
      type: types.INIT_LOCATIONS,
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
    expect(reducers.LOCATIONS({}, action)).toEqual({
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
    expect(reducers.LOCATIONS(stateOld, action)).toEqual({
      ...stateOld,
      ...action.locations,
    });
  });
});

describe('reducers.SUPERSET_CONFIGS', () => {
  it('should return the initial state', () => {
    expect(reducers.SUPERSET_CONFIGS(undefined, {})).toEqual({});
  });

  it('should handle INIT_SUPERSET', () => {
    const action = {
      type: types.INIT_SUPERSET,
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
    expect(reducers.SUPERSET_CONFIGS({}, action)).toEqual({
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
    expect(reducers.SUPERSET_CONFIGS(stateOld, action)).toEqual({
      ...stateOld,
      ...action.config,
    });
  });
});
