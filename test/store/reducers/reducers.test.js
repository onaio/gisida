import reducers from '../../../src/store/reducers/reducers';
import * as types from '../../../src/store/constants/actionTypes';
import defaultState from '../../../src/store/defaultState';

describe('reducers.APP', () => {
  it('should return the initial state', () => {
    const action = {
      type: types.INIT_APP,
      config: defaultState.APP,
    };
    const state = {
      APP:
        {
          accessToken: false,
          appName: 'React Gisida',
          loaded: false,
          mapConfig: {
            center: [0, 0],
            container: 'map',
            style: '',
            zoom: 5,
          },
        },
      MAP:
        {
          activeLayerId: '',
          currentRegion: '',
          currentStyle: '',
          detailView: null,
          filter: {
            filterOptions: {},
            filters: {},
            globalSearchField: false,
            isFiltered: false,
            isLinux: false,
            isMac: false,
            isOpen: false,
            layerId: '',
            prevFilters: null,
          },
          isLoaded: false,
          isRendered: false,
          layers: {},
          defaultLayers: [],
          mapId: 'map-1',
          primaryLayer: '',
          reloadLayers: false,
          showFilterPanel: false,
          showProfile: false,
          timeseries: { visibility: false },
          visibleLayerId: '',
        },
      REGIONS: [],
      STYLES: [
        {
          label: 'Satelitte',
          url: 'mapbox://styles/mapbox/satellite-v9',
        },
        {
          label: 'Satelitte Streets',
          url: 'mapbox://styles/mapbox/satellite-streets-v9',
        }
      ],
      FILTER: {},
      accessToken: false,
      appName: 'React Gisida',
      loaded: true,
      mapConfig: {
        center: [0, 0],
        container: 'map',
        style: '',
        zoom: 5,
      },
      LAYERS: {
        layers: [],
        groups: {},
      },
    };
    expect(reducers.APP(defaultState, action)).toEqual(state);
  });
});
