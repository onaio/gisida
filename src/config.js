const config = {
  APP: {
    container: 'app',
    appIcon: 'gisida-sample.png',
    appName: 'Gisida',
    appNameDesc: 'Dashboard',
  },
  LOCATIONS: {},
  LAYERS: {},
  SECTORS: {
    Default: { layers: [] },
  },
  STYLES: [{
    label: 'Satelitte',
    style: 'mapbox://styles/mapbox/satellite-v9',
  },
  {
    label: 'Satelitte Streets',
    style: 'mapbox://styles/mapbox/satellite-streets-v9',
  }],
};

export default config;
