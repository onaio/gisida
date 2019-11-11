import {
  APP,
  FILTER,
  LAYERS,
  LOC,
  LOCATIONS,
  STYLES,
  SUPERSET_CONFIGS,
  REGIONS,
  MAP,
} from '../../../src/store/reducers';
import * as types from '../../../src/store/constants/actionTypes';
import defaultState from '../../../src/store/defaultState';

const mapId = 'map-id';
const layerId = 'layer-id';
const layerId2 = 'layer-id-2';
const layer = {
  id: layerId,
  visible: true,
  nondefault: true,
  loaded: false,
  credit: 'credit',
};
const layer2 = {
  id: layerId2,
  visible: true,
  nondefault: false,
  loaded: false,
  credit: 'credit',
};

describe('APP', () => {
  it('should return the initial state', () => {
    expect(APP(undefined, {})).toEqual(defaultState.APP);
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
      type: types.INIT_LOC,
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
      type: types.INIT_LOC,
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
      type: types.SET_LOCATION,
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
      type: types.TOGGLE_MAP_LOCATION,
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

describe('STYLES', () => {
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
    expect(STYLES(undefined, {})).toEqual(defaultState.STYLES);
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
    expect(STYLES(stateEmpty, action)).toEqual(expectedStyles);

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
    expect(STYLES(stateEmpty, actionMatchExists)).toEqual(expectedStylesMatchExists);

    // Case 2: The state obj is not empty
    const stateOld = [style1, style2];

    // Case 2.1 Mapconfig style does not match style in array of styles
    expect(STYLES(stateOld, action)).toEqual(expectedStyles);

    // Case 2.2 Mapconfig style matches style in array of styles
    expect(STYLES(stateOld, actionMatchExists)).toEqual(expectedStylesMatchExists);
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
    expect(STYLES(stateEmpty, action)).toEqual([]);

    // Case 2: The state obj is not empty
    // Case 2.1: action.style matches style in state
    const stateOldMatchExists = [style1, style2, style3];

    // Case 2.1.1: mapId is defined in action
    expect(STYLES(stateOldMatchExists, action)).toEqual([
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
    expect(STYLES(stateOldMatchExists, actionMapIdUndefined)).toEqual([
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
    expect(STYLES(stateOldNoMatch, action)).toEqual([
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
    expect(STYLES(stateOldNoMatch, actionMapIdUndefined)).toEqual([
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
      type: types.CHANGE_REGION,
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

describe('FILTER', () => {
  const stateEmpty = {};
  const stateOld = {
    [layerId]: {
      doUpdate: false,
      isClear: false,
    },
  };

  it('should return the initial state', () => {
    expect(FILTER(undefined, {})).toEqual(defaultState.FILTER);
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
    expect(FILTER(stateEmpty, action)).toEqual({
      ...stateEmpty,
      [action.layerId]: {
        ...action.filterState,
        doUpdate: true,
        isClear: true,
      },
    });

    // Case 1.2: action.isClear is undefined
    expect(FILTER(stateEmpty, actionUndefinedIsClear)).toEqual({
      ...stateEmpty,
      [action.layerId]: {
        ...action.filterState,
        doUpdate: true,
        isClear: false,
      },
    });

    // Case 2: The state obj is not empty
    // Case 2.1 action.isClear is defined
    expect(FILTER(stateOld, action)).toEqual({
      ...stateOld,
      [action.layerId]: {
        ...action.filterState,
        doUpdate: true,
        isClear: true,
      },
    });

    // Case 2.2 action.isClear is undefined
    expect(FILTER(stateOld, actionUndefinedIsClear)).toEqual({
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
    expect(FILTER(stateEmpty, action)).toEqual({
      ...stateEmpty,
      [action.layerId]: {
        doUpdate: false,
      },
    });

    // Case 1.2: action.layerId is undefined
    expect(FILTER(stateEmpty, actionLayerIdUndfined)).toEqual({
      ...stateEmpty,
    });

    // Case 2: The state obj is not empty
    // Case 2.1: action.layerId is defined
    expect(FILTER(stateOld, action)).toEqual({
      ...stateEmpty,
      [action.layerId]: {
        ...stateOld[action.layerId],
        doUpdate: false,
      },
    });

    // Case 2.2: action.layerId is undefined
    expect(FILTER(stateOld, actionLayerIdUndfined)).toEqual({
      ...stateOld,
    });
  });
});

describe('LOCATIONS', () => {
  it('should return the initial state', () => {
    expect(LOCATIONS(undefined, {})).toEqual({});
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

describe('SUPERSET_CONFIGS', () => {
  it('should return the initial state', () => {
    expect(SUPERSET_CONFIGS(undefined, {})).toEqual({});
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

describe('LAYERS', () => {
  const stateEmpty = {};
  const stateOld = {
    layers: [
      {
        id: 'contours',
        type: 'line',
        source: 'contours',
        'source-layer': 'contour',
        layout: {
          visibility: 'visible',
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#877b59',
          'line-width': 1,
        },
      },
    ],
    groups: {
      group2: ['E3', 'E4', 'E5'],
    },
  };

  it('should return the initial state', () => {
    expect(LAYERS(undefined, {})).toEqual(defaultState.LAYERS);
  });

  it('should handle ADD_LAYERS_LIST', () => {
    const action = {
      type: types.ADD_LAYERS_LIST,
      layers: [
        {
          id: 'rivers',
          source: 'my-source',
          'source-layer': 'waterway',
          type: 'line',
          paint: {
            'line-color': '#FFC0CB',
          },
        },
        {
          id: 'museums',
          type: 'circle',
          source: 'museums',
          layout: {
            visibility: 'visible',
          },
          paint: {
            'circle-radius': 8,
            'circle-color': 'rgba(55,148,179,1)',
          },
          'source-layer': 'museum-cusco',
        },
      ],
      groups: {
        group1: ['E1', 'E2'],
        group2: ['E3', 'E4', 'E5'],
      },
    };

    // Case 1: The state obj is empty
    expect(() => {
      LAYERS(stateEmpty, action);
    }).toThrow(TypeError);

    // Case 2: The state obj is not empty
    expect(LAYERS(stateOld, action)).toEqual({
      ...stateOld,
      layers: [...stateOld.layers, ...action.layers],
    });
  });

  it('should handle ADD_LAYER_GROUP', () => {
    const groupId = 'group-id';
    const group = ['E1', 'E2'];
    const action = {
      type: types.ADD_LAYER_GROUP,
      mapId,
      groupId,
      group,
    };
    const actionHttpSubstring = {
      ...action,
      group: [...group, 'http://example.com/E3'],
    };
    const actionLayerObj = {
      ...action,
      group: [
        ...group,
        'http://example.com/E3',
        {
          layer1: ['E4', 'E5'],
        },
      ],
    };

    // Case 1: The state obj is empty
    // Case 1.1: action.group has layer of type string
    // Case 1.1.1: action.group has a layer without a 'http' substring
    expect(LAYERS(stateEmpty, action)).toEqual({
      groups: {
        [action.groupId]: action.group,
      },
    });

    // Case 1.1.2: action.group has a layer with a http substring
    expect(LAYERS(stateEmpty, actionHttpSubstring)).toEqual({
      groups: {
        [action.groupId]: [actionHttpSubstring.group[0], actionHttpSubstring.group[1], 'E3'],
      },
    });

    // Case 1.2 action.group has a layer of type object
    expect(LAYERS(stateEmpty, actionLayerObj)).toEqual({
      groups: {
        [action.groupId]: [
          actionLayerObj.group[0],
          actionLayerObj.group[1],
          'E3',
          {
            layer1: ['E4', 'E5'],
          },
        ],
      },
    });

    // Case 2: The state obj is not empty
    // Case 2.1: action.group has layer of type string
    // Case 2.1.1 action.group has a layer without a 'http' substring
    expect(LAYERS(stateOld, action)).toEqual({
      ...stateOld,
      groups: {
        ...stateOld.groups,
        [action.groupId]: action.group,
      },
    });

    // Case 2.1.2: action.group has a layer with a http substring
    expect(LAYERS(stateOld, actionHttpSubstring)).toEqual({
      ...stateOld,
      groups: {
        ...stateOld.groups,
        [action.groupId]: [actionHttpSubstring.group[0], actionHttpSubstring.group[1], 'E3'],
      },
    });

    // Case 2.2: action.group has a layer of type object
    expect(LAYERS(stateOld, actionLayerObj)).toEqual({
      ...stateOld,
      groups: {
        ...stateOld.groups,
        [action.groupId]: [
          actionLayerObj.group[0],
          actionLayerObj.group[1],
          'E3',
          {
            layer1: ['E4', 'E5'],
          },
        ],
      },
    });
  });
});

describe('MAP', () => {
  const stateEmpty = {};
  const stateOld = {
    isRendered: true,
    mapId,
    layers: {},
    reloadLayers: false,
    timeseries: {},
  };
  const stateOldMapIdNoMatch = {
    ...stateOld,
    mapId: 'no-match-id',
  };
  const stateOldLayerObjNotEmpty = {
    ...stateOld,
    layers: {
      [layerId]: layer,
    },
    activeLayerIds: [layerId],
    filter: {},
    detailView: null,
    showFilterPanel: false,
  };

  it('should return the initial state', () => {
    expect(MAP(undefined, {})).toEqual(defaultState.MAP);
  });

  it('should handle MAP_RENDERED', () => {
    const action = {
      type: types.MAP_RENDERED,
      isRendered: false,
      mapId,
    };

    // Case 1: The state object is empty
    expect(MAP(stateEmpty, action)).toEqual({});
    // Case 2: The state obj is not empty
    // Case 2.1: action.mapId matches state.mapId
    expect(MAP(stateOld, action)).toEqual({ ...stateOld, isRendered: action.isRendered });
    // Case 2.1: action.mapId does NOT match state.mapId
    expect(MAP(stateOldMapIdNoMatch, action)).toEqual(stateOldMapIdNoMatch);
  });

  it('should handle MAP_LOADED', () => {
    const action = {
      type: types.MAP_LOADED,
      isLoaded: false,
      mapId,
    };

    // Case 1: The state object is empty
    expect(MAP(stateEmpty, action)).toEqual({});
    // Case 2: The state obj is not empty
    // Case 2.1: action.mapId matches state.mapId
    const expectedObj = MAP(stateOld, action);
    const { currentRegion } = expectedObj;
    delete expectedObj.currentRegion;

    expect(typeof currentRegion).toBe('number');
    expect(expectedObj).toEqual({
      ...stateOld,
      isLoaded: action.isLoaded,
      reloadLayers: true,
    });
    // Case 2.1: action.mapId does NOT match state.mapId
    expect(MAP(stateOldMapIdNoMatch, action)).toEqual(stateOldMapIdNoMatch);
  });

  it('should handle RELOAD_LAYERS', () => {
    const action = {
      type: types.RELOAD_LAYERS,
      reload: true,
      mapId,
    };

    // Case 1: The state object is empty
    expect(MAP(stateEmpty, action)).toEqual({});
    // Case 2: The state obj is not empty
    // Case 2.1: action.mapId matches state.mapId
    expect(MAP(stateOld, action)).toEqual({ ...stateOld, reloadLayers: action.reload });
    // Case 2.1: action.mapId does NOT match state.mapId
    expect(MAP(stateOldMapIdNoMatch, action)).toEqual(stateOldMapIdNoMatch);
  });

  it('should handle CHANGE_STYLE', () => {
    const action = {
      type: types.CHANGE_STYLE,
      style: 'mapbox://styles/mapbox/satellite-v9',
      mapId,
    };

    // Case 1: The state object is empty
    expect(MAP(stateEmpty, action)).toEqual({});
    // Case 2: The state obj is not empty
    // Case 2.1: action.mapId matches state.mapId
    expect(MAP(stateOld, action)).toEqual({ ...stateOld, currentStyle: action.style });
    // Case 2.1: action.mapId does NOT match state.mapId
    expect(MAP(stateOldMapIdNoMatch, action)).toEqual(stateOldMapIdNoMatch);
  });

  it('should handle CHANGE_REGION', () => {
    const action = {
      type: types.CHANGE_REGION,
      region: Math.random(),
      mapId,
    };

    // Case 1: The state object is empty
    expect(MAP(stateEmpty, action)).toEqual({});
    // Case 2: The state obj is not empty
    // Case 2.1: action.mapId matches state.mapId
    expect(MAP(stateOld, action)).toEqual({ ...stateOld, currentRegion: action.region });
    // Case 2.1: action.mapId does NOT match state.mapId
    expect(MAP(stateOldMapIdNoMatch, action)).toEqual(stateOldMapIdNoMatch);
  });

  it('should handle ADD_LAYER', () => {
    const action = {
      type: types.ADD_LAYER,
      layer,
      mapId,
    };

    // Case 1: The state obj is empty
    expect(MAP(stateEmpty, action)).toEqual({});
    // Case 2: The state obj is NOT empty
    // Case 2.1: action.mapId does NOT match state.mapId
    expect(MAP(stateOldMapIdNoMatch, action)).toEqual(stateOldMapIdNoMatch);

    // Case 2.2: action.mapId matches state.mapId
    // Case 2.2.1: action.layer.id does NOT match state.layers[action.layer.id]
    // Case 2.2.1.1: Layers that satisy default layer conditions DO NOT exist in state
    expect(MAP(stateOld, action)).toEqual({
      ...stateOld,
      reloadLayerId: null,
      layers: { ...stateOld.layers, [action.layer.id]: { ...action.layer } },
      defaultLayers: [],
      activeLayerId: action.layer.id,
      reloadLayers: stateOld.reloadLayers,
    });

    // Case 2.2.1.2: Layers that satisfy default layer conditions exist in state
    const stateOldLayerDefault = {
      ...stateOld,
      layers: {
        ...stateOld.layers,
        [layerId2]: layer2,
      },
    };

    expect(MAP(stateOldLayerDefault, action)).toEqual({
      ...stateOldLayerDefault,
      reloadLayerId: null,
      layers: { ...stateOldLayerDefault.layers, [action.layer.id]: { ...action.layer } },
      defaultLayers: [layerId2],
      activeLayerId: action.layer.id,
      reloadLayers: stateOldLayerDefault.reloadLayers,
    });

    // Case 2.2.2: action.layer.id matches state.layers[action.layer.id]
    // Case 2.2.2.1: Layers that satisfy default layer conditions DO NOT exist in state
    const expectedObj = MAP(stateOldLayerObjNotEmpty, action);
    const { reloadLayers } = expectedObj;
    delete stateOldLayerObjNotEmpty.reloadLayers;
    delete expectedObj.reloadLayers;

    expect(typeof reloadLayers).toBe('number');
    expect(expectedObj).toEqual({
      ...stateOldLayerObjNotEmpty,
      reloadLayerId: action.layer.id,
      layers: { ...stateOldLayerObjNotEmpty.layers, [action.layer.id]: { ...action.layer } },
      defaultLayers: [],
      activeLayerId: action.layer.id,
    });

    // Case 2.2.2.2: Layers that satisfy default layer conditions exist in state
    const stateOldLayerObjNotEmptyDefault = {
      ...stateOldLayerObjNotEmpty,
      layers: {
        ...stateOldLayerObjNotEmpty.layers,
        [layerId2]: layer2,
      },
    };

    const expectedObjDefault = MAP(stateOldLayerObjNotEmptyDefault, action);
    expect(typeof expectedObjDefault.reloadLayers).toBe('number');
    delete stateOldLayerObjNotEmptyDefault.reloadLayers;
    delete expectedObjDefault.reloadLayers;

    expect(expectedObjDefault).toEqual({
      ...stateOldLayerObjNotEmptyDefault,
      reloadLayerId: action.layer.id,
      layers: { ...stateOldLayerObjNotEmptyDefault.layers, [action.layer.id]: { ...action.layer } },
      defaultLayers: [layerId2],
      activeLayerId: action.layer.id,
    });
  });

  it('should handle TOGGLE_LAYER', () => {
    const action = {
      type: types.TOGGLE_LAYER,
      layerId,
      isInit: true,
      mapId,
    };
    const actionInitFalse = {
      ...action,
      isInit: false,
    };

    // Case 1: The state obj is empty
    expect(MAP(stateEmpty, action)).toEqual({});

    // Case 2: The state obj is NOT empty
    // Case 2.1: action.mapId does NOT match state.mapId
    expect(MAP(stateOldMapIdNoMatch, action)).toEqual(stateOldMapIdNoMatch);

    // Case 2.2: action.mapId matches state.mapId
    // Case 2.2.1: action.layerId is NOT defined in state.layers
    // Case 2.2.1.1: action.isInit is true
    expect(() => {
      MAP(stateOld, action);
    }).toThrow(TypeError);

    // Case 2.2.1.2: action.isInit is false
    expect(() => {
      MAP(stateOld, actionInitFalse);
    }).toThrow(TypeError);

    // Case 2.2.2: action.layerId is defined in state.layers
    // Case 2.2.2.1: action.isInit is true
    // Case 2.2.2.1.1.1: state.layers[action.layerId].layers is NOT defined
    // Case 2.2.2.1.2.1: state.layers[action.layerId].type is NOT 'line'
    // Case 2.2.2.1.3.1: state.layers[action.layerId].credit is NOT empty
    // Case 2.2.2.1.4.1: state.layers[action.layerId] does NOT have parent
    // Case 2.2.2.1.5.1: state.layers[action.layerId].aggregate does NOT exist
    // Case 2.2.2.1.6.1: state.detailView is NULL
    // Case 2.2.2.1.7.1: state.showFilterPanel is false
    const expectedObj = MAP(stateOldLayerObjNotEmpty, action);
    const { reloadLayers } = expectedObj;
    delete stateOldLayerObjNotEmpty.reloadLayers;
    delete expectedObj.reloadLayers;

    expect(typeof reloadLayers).toBe('number');
    expect(expectedObj).toEqual({
      ...stateOldLayerObjNotEmpty,
      primarySubLayer: undefined,
      activeLayerId: action.layerId,
      lastLayerSelected: action.layerId,
      layers: {
        ...stateOldLayerObjNotEmpty.layers,
        [layerId]: {
          ...stateOldLayerObjNotEmpty.layers[layerId],
          visible: action.isInit,
        },
      },
      showSpinner: true,
      visibleLayerId: layerId,
      primaryLayer: layerId,
      timeseries: stateOldLayerObjNotEmpty.timeseries,
      activeLayerIds: stateOldLayerObjNotEmpty.activeLayerIds,
      filter: {
        ...stateOldLayerObjNotEmpty.filter,
        layerId: '',
      },
      detailView: null,
      showFilterPanel: false,
    });

    // Case 2.2.2.1.1.2: state.layers[action.layerId].layers is defined
    // Case 2.2.2.1.2.2: state.layers[action.layerId].type is 'line'
    // Case 2.2.2.1.3.2: state.layers[action.layerId].credit is empty
    // Case 2.2.2.1.5.2: state.layers[action.layerId].aggregate exists
    // Case 2.2.2.1.6.2.1: state.detailView is NOT null, state.detailView.layerId === action.layerId
    // Case 2.2.2.1.7.2: state.showFilterPanel is true
    const stateOldLayerObjLayersExists = {
      ...stateOldLayerObjNotEmpty,
      layers: {
        ...stateOldLayerObjNotEmpty.layers,
        [layerId]: {
          ...stateOldLayerObjNotEmpty.layers[layerId],
          layers: [layerId2],
          type: 'line',
          credit: '',
          aggregate: {
            timeseries: {
              field: 'period',
            },
            filter: {},
          },
        },
        [layerId2]: layer2,
      },
      detailView: { layerId },
      showFilterPanel: true,
    };
    const expectedObjLayerObjLayersExist = MAP(stateOldLayerObjLayersExists, action);

    expect(typeof expectedObjLayerObjLayersExist.reloadLayers).toBe('number');

    delete expectedObjLayerObjLayersExist.reloadLayers;
    delete stateOldLayerObjLayersExists.reloadLayers;

    expect(expectedObjLayerObjLayersExist).toEqual({
      ...stateOldLayerObjLayersExists,
      primarySubLayer: undefined,
      activeLayerId:
        stateOldLayerObjLayersExists.activeLayerIds[
          stateOldLayerObjLayersExists.activeLayerIds.length - 1
        ],
      lastLayerSelected: action.layerId,
      layers: {
        ...stateOldLayerObjLayersExists.layers,
        [layerId]: {
          ...stateOldLayerObjLayersExists.layers[layerId],
          visible: action.isInit,
        },
        [layerId2]: {
          ...layer2,
          visible: !stateOldLayerObjLayersExists.layers[layerId].visible,
        },
      },
      showSpinner: true,
      visibleLayerId:
        stateOldLayerObjLayersExists.activeLayerIds[
          stateOldLayerObjLayersExists.activeLayerIds.length - 1
        ],
      primaryLayer:
        stateOldLayerObjLayersExists.activeLayerIds[
          stateOldLayerObjLayersExists.activeLayerIds.length - 1
        ],
      timeseries: stateOldLayerObjLayersExists.timeseries,
      activeLayerIds: stateOldLayerObjLayersExists.activeLayerIds,
      filter: {
        ...stateOldLayerObjLayersExists.filter,
        layerId,
      },
      detailView: true,
      showFilterPanel: true,
    });

    // Case 2.2.2.1.6.2.2: state.detailView is NOT null, state.detailView.layerId !== action.layerId
    const stateOldDetailViewNoMatch = {
      ...stateOldLayerObjLayersExists,
      detailView: { layerId2 },
    };
    const expectedObjDetailViewNoMatch = MAP(stateOldDetailViewNoMatch, action);

    expect(typeof expectedObjDetailViewNoMatch.reloadLayers).toBe('number');

    delete expectedObjDetailViewNoMatch.reloadLayers;
    delete stateOldDetailViewNoMatch.reloadLayers;

    expect(expectedObjDetailViewNoMatch).toEqual({
      ...stateOldDetailViewNoMatch,
      primarySubLayer: undefined,
      activeLayerId:
        stateOldDetailViewNoMatch.activeLayerIds[
          stateOldDetailViewNoMatch.activeLayerIds.length - 1
        ],
      lastLayerSelected: action.layerId,
      layers: {
        ...stateOldDetailViewNoMatch.layers,
        [layerId]: {
          ...stateOldDetailViewNoMatch.layers[layerId],
          visible: action.isInit,
        },
        [layerId2]: {
          ...layer2,
          visible: !stateOldLayerObjLayersExists.layers[layerId].visible,
        },
      },
      showSpinner: true,
      visibleLayerId:
        stateOldDetailViewNoMatch.activeLayerIds[
          stateOldDetailViewNoMatch.activeLayerIds.length - 1
        ],
      primaryLayer:
        stateOldDetailViewNoMatch.activeLayerIds[
          stateOldDetailViewNoMatch.activeLayerIds.length - 1
        ],
      timeseries: stateOldDetailViewNoMatch.timeseries,
      activeLayerIds: stateOldDetailViewNoMatch.activeLayerIds,
      filter: {
        ...stateOldDetailViewNoMatch.filter,
        layerId,
      },
      detailView: false,
      showFilterPanel: true,
    });

    // Case 2.2.2.2: action.isInit is false
    // Case 2.2.2.2.1.1: state.layers[action.layerId].layers is NOT defined
    // Case 2.2.2.2.2.1: state.layers[action.layerId].type is NOT 'line'
    // Case 2.2.2.2.3.1: state.layers[action.layerId].credit is NOT empty
    // Case 2.2.2.2.4.1: state.layers[action.layerId] does NOT have parent
    // Case 2.2.2.2.5.1: state.layers[action.layerId].aggregate does NOT exist
    // Case 2.2.2.2.6.1: state.detailView is NULL
    // Case 2.2.2.2.7.1: state.showFilterPanel is false
    const expectedObjInitFalse = MAP(stateOldLayerObjNotEmpty, actionInitFalse);

    expect(typeof expectedObjInitFalse.reloadLayers).toBe('number');

    delete stateOldLayerObjNotEmpty.reloadLayers;
    delete expectedObjInitFalse.reloadLayers;

    expect(expectedObjInitFalse).toEqual({
      ...stateOldLayerObjNotEmpty,
      primarySubLayer: undefined,
      activeLayerId: undefined,
      lastLayerSelected: undefined,
      layers: {
        ...stateOldLayerObjNotEmpty.layers,
        [layerId]: {
          ...stateOldLayerObjNotEmpty.layers[layerId],
          visible: false,
        },
      },
      showSpinner: false,
      visibleLayerId: undefined,
      primaryLayer: undefined,
      timeseries: stateOldLayerObjNotEmpty.timeseries,
      activeLayerIds: [],
      filter: {
        ...stateOldLayerObjNotEmpty.filter,
        layerId: '',
      },
      detailView: null,
      showFilterPanel: false,
    });

    // Case 2.2.2.2.1.2: state.layers[action.layerId].layers is defined
    // Case 2.2.2.2.2.2: state.layers[action.layerId].type is 'line'
    // Case 2.2.2.2.3.2: state.layers[action.layerId].credit is empty
    // Case 2.2.2.2.5.2: state.layers[action.layerId].aggregate exists
    // Case 2.2.2.2.6.2.1: state.detailView is NOT null, state.detailView.layerId === action.layerId
    // Case 2.2.2.2.7.2: state.showFilterPanel is true
    const expectedObjInitFalseLayerObjLayersExists = MAP(
      stateOldLayerObjLayersExists,
      actionInitFalse
    );

    expect(typeof expectedObjInitFalseLayerObjLayersExists.reloadLayers).toBe('number');

    delete expectedObjInitFalseLayerObjLayersExists.reloadLayers;
    delete stateOldLayerObjLayersExists.reloadLayers;

    expect(expectedObjInitFalseLayerObjLayersExists).toEqual({
      ...stateOldLayerObjLayersExists,
      primarySubLayer: undefined,
      activeLayerId: undefined,
      lastLayerSelected: undefined,
      layers: {
        ...stateOldLayerObjLayersExists.layers,
        [layerId]: {
          ...stateOldLayerObjLayersExists.layers[layerId],
          visible: !stateOldLayerObjLayersExists.layers[layerId].visible,
        },
        [layerId2]: {
          ...layer2,
          visible: !stateOldLayerObjLayersExists.layers[layerId].visible,
        },
      },
      showSpinner: false,
      visibleLayerId: undefined,
      primaryLayer: undefined,
      timeseries: stateOldLayerObjLayersExists.timeseries,
      activeLayerIds: [],
      filter: {
        ...stateOldLayerObjLayersExists.filter,
        layerId: '',
      },
      detailView: false,
      showFilterPanel: false,
    });

    // Case 2.2.2.1.6.2.2: state.detailView is NOT null, state.detailView.layerId !== action.layerId
    const expectedObjInitFalseDetailViewNoMatch = MAP(stateOldDetailViewNoMatch, actionInitFalse);

    expect(typeof expectedObjInitFalseDetailViewNoMatch.reloadLayers).toBe('number');

    delete expectedObjInitFalseDetailViewNoMatch.reloadLayers;
    delete stateOldDetailViewNoMatch.reloadLayers;

    expect(expectedObjInitFalseDetailViewNoMatch).toEqual({
      ...stateOldDetailViewNoMatch,
      primarySubLayer: undefined,
      activeLayerId: undefined,
      lastLayerSelected: undefined,
      layers: {
        ...stateOldLayerObjLayersExists.layers,
        [layerId]: {
          ...stateOldLayerObjLayersExists.layers[layerId],
          visible: !stateOldLayerObjLayersExists.layers[layerId].visible,
        },
        [layerId2]: {
          ...layer2,
          visible: !stateOldLayerObjLayersExists.layers[layerId].visible,
        },
      },
      showSpinner: false,
      visibleLayerId: undefined,
      primaryLayer: undefined,
      timeseries: stateOldLayerObjLayersExists.timeseries,
      activeLayerIds: [],
      filter: {
        ...stateOldLayerObjLayersExists.filter,
        layerId: '',
      },
      detailView: false,
      showFilterPanel: false,
    });
  });
});
