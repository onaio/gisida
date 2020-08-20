export const LAYERS = {
    "layers": [
     {
        "Place Labels": [
          "region-labels",
          "district-labels",
          "banadir-labels"
        ]
      },
      {
        "Boundaries": [
          "region-boundaries",
          "district-boundaries"
        ]
      }
  ],
  "groups": {
    "Boundaries & Labels": [
      {
        "Place Labels": [
          "region-labels",
          "district-labels",
          "banadir-labels"
        ]
      },
      {
        "Boundaries": [
          "region-boundaries",
          "district-boundaries"
        ]
      }
    ]
  }
}
export const layerCategories = [
    {
      category: 'Boundaries & Labels',
      layers: [
        {
          'Place Labels': {
            category: 'Place Labels',
            layers: [
              {
                category: 'Place Labels',
                id: 'region-labels',
                label: 'Region labels',
                layout: { 'text-field': '{region}', 'text-size': 14, 'text-transform': 'uppercase' },
                loaded: false,
                minZoom: 0,
                paint: {
                  'text-color': '#000',
                  'text-halo-blur': 1,
                  'text-halo-color': '#fff',
                  'text-halo-width': 1.3,
                },
                source: { data: 'data/ipc_regions_centroid.geojson', type: 'geojson' },
                type: 'symbol',
                visible: false,
              },
              {
                category: 'Place Labels',
                id: 'district-labels',
                label: 'District labels',
                layout: { 'text-field': '{name}', 'text-offset': [0, 2], 'text-size': 12 },
                loaded: false,
                minZoom: 5.5,
                paint: {
                  'text-color': '#000',
                  'text-halo-blur': 1,
                  'text-halo-color': '#fff',
                  'text-halo-width': 1.3,
                },
                source: { data: 'data/ipc_distrtics_centroids.geojson', type: 'geojson' },
                type: 'symbol',
                visible: false,
              },
              {
                category: 'Place Labels',
                id: 'banadir-labels',
                label: 'Banadir labels',
                layout: { 'text-field': '{district_name}', 'text-offset': [0, 2], 'text-size': 12 },
                loaded: false,
                location: {
                  center: { lat: 2.047033986, lng: 45.33207821 },
                  zoom: 12.624128925301363,
                },
                minZoom: 5.5,
                paint: {
                  'text-color': '#000',
                  'text-halo-blur': 1,
                  'text-halo-color': '#fff',
                  'text-halo-width': 1.3,
                },
                source: { data: 'data/banadir_districts.geojson', type: 'geojson' },
                type: 'symbol',
                visible: false,
              },
            ],
            parent: 'Boundaries & Labels',
          },
        },
        {
          Boundaries: {
            category: 'Boundaries',
            layers: [
              {
                category: 'Boundaries',
                filters: {},
                id: 'region-boundaries',
                isChartMin: true,
                isLoading: false,
                label: 'Region boundaries',
                legendBottom: 40,
                loaded: true,
                paint: { 'line-color': '#444', 'line-opacity': 0.6, 'line-width': 2 },
                source: { layer: 'som_adm_1-6k13xf', type: 'vector', url: 'mapbox://ona.bnc2rzsw' },
                styleSpec: {
                  id: 'region-boundaries',
                  layout: {},
                  paint: { 'line-color': '#444', 'line-opacity': 0.6, 'line-width': 2 },
                  source: { type: 'vector', url: 'mapbox://ona.bnc2rzsw' },
                  'source-layer': 'som_adm_1-6k13xf',
                  type: 'line',
                  visible: true,
                },
                type: 'line',
                visible: true,
              },
              {
                category: 'Boundaries',
                filters: {},
                id: 'district-boundaries',
                isChartMin: true,
                isLoading: false,
                label: 'Districts boundaries',
                legendBottom: 40,
                loaded: true,
                paint: { 'line-color': '#444', 'line-opacity': 0.6, 'line-width': 1 },
                source: { layer: 'som_adm_2-0j5bly', type: 'vector', url: 'mapbox://ona.6gl2shzi' },
                styleSpec: {
                  id: 'district-boundaries',
                  layout: {},
                  paint: { 'line-color': '#444', 'line-opacity': 0.6, 'line-width': 1 },
                  source: { type: 'vector', url: 'mapbox://ona.6gl2shzi' },
                  'source-layer': 'som_adm_2-0j5bly',
                  type: 'line',
                  visible: true,
                },
                type: 'line',
                visible: true,
              },
            ],
            parent: 'Boundaries & Labels',
          },
        },
      ],
    },
  ];