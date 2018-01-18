
const defaultState = {
  APP: {
    mapConfig: {
      container: 'map',
      style: '',
      center: [
        0,
        0,
      ],
      zoom: 5,
    },
    accessToken: false,
    appName: 'React Gisida',
  },
  LAYERS: [
  ],
  STYLES: [
    {
      label: 'Satelitte',
      url: 'mapbox://styles/mapbox/satellite-v9',
    },
    {
      label: 'Satelitte Streets',
      url: 'mapbox://styles/mapbox/satellite-streets-v9',
    },
  ],
  REGIONS: [
  ],
  MAP: {
    isRendered: false,
    isLoaded: false,
    reloadLayers: false,
    currentStyle: '',
    processedLayers: {},
    activeLayers: {},
    layersToRemove: [],
    layersToAdd: [],
  },
};

export default defaultState;
