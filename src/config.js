const config = {
  APP: {
    container: 'app',
    appIcon: 'gisida-sample.png',
    appName: 'Gisida',
    appNameDesc: 'Dashboard',
    mapDefaultStyle: 'mapbox://styles/ona/cj13lidxb00062rpd2o5vph3q',
    mapAccessToken: 'pk.eyJ1Ijoib25hIiwiYSI6IlVYbkdyclkifQ.0Bz-QOOXZZK01dq4MuMImQ',
    mapCenter: [42.516, 5.550],
    mapZoom: 5,
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
