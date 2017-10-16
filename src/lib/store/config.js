const config = {
  APP: {
    mapConfig: {
      container: 'map', 
      style: 'mapbox://styles/ona/cj13lidxb00062rpd2o5vph3q',
      center: [
        42.516,
        5.550
      ], 
      zoom: 5
    },
    accessToken: 'pk.eyJ1Ijoib25hIiwiYSI6IlVYbkdyclkifQ.0Bz-QOOXZZK01dq4MuMImQ',
    appIcon: 'gisida-sample.png',
    appName: 'React Gisida',
  },
  LOCATIONS: {},
  LAYERS: {},
  SECTORS: {
    Default: { layers: []
    },
  },
  STYLES: [
    {
    label: 'Satelitte',
    style: 'mapbox: //styles/mapbox/satellite-v9',
    },
    {
    label: 'Satelitte Streets',
    style: 'mapbox: //styles/mapbox/satellite-streets-v9',
    }
  ],
  SUMMARY: {},
}

export default config;