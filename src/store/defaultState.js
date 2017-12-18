
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
    appIcon: 'gisida-sample.png',
    appName: 'React Gisida',
  },
  LAYERS: {

  },
  STYLES: [
    {
      label: 'Satelitte',
      style: 'mapbox: //styles/mapbox/satellite-v9',
    },
    {
      label: 'Satelitte Streets',
      style: 'mapbox: //styles/mapbox/satellite-streets-v9',
    },
  ],
  MAP: {
    isLoaded: false,
    processedLayers: {},
    activeLayers: {},
    layersToRemove: [],
    layersToAdd: [],
  },
};

export default defaultState;
