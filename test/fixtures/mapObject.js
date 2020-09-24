export const MAP = {
    "layers": {
        "region-labels": {
          "label": "Region labels",
          "source": {
            "type": "geojson",
            "data": "data/ipc_regions_centroid.geojson"
          },
          "type": "symbol",
          "minZoom": 0,
          "paint": {
            "text-color": "#000",
            "text-halo-color": "#fff",
            "text-halo-width": 1.3,
            "text-halo-blur": 1
          },
          "layout": {
            "text-size": 14,
            "text-field": "{region}",
            "text-transform": "uppercase"
          },
          "visible": false,
          "category": "Place Labels",
          "id": "region-labels",
          "loaded": false
        },
        "district-labels": {
          "label": "District labels",
          "source": {
            "type": "geojson",
            "data": "data/ipc_distrtics_centroids.geojson"
          },
          "type": "symbol",
          "minZoom": 5.5,
          "paint": {
            "text-color": "#000",
            "text-halo-color": "#fff",
            "text-halo-width": 1.3,
            "text-halo-blur": 1
          },
          "layout": {
            "text-size": 12,
            "text-field": "{name}",
            "text-offset": [
              0,
              2
            ]
          },
          "visible": false,
          "category": "Place Labels",
          "id": "district-labels",
          "loaded": false
        },
        "banadir-labels": {
          "label": "Banadir labels",
          "source": {
            "type": "geojson",
            "data": "data/banadir_districts.geojson"
          },
          "location": {
            "zoom": 12.624128925301363,
            "center": {
              "lng": 45.33207821,
              "lat": 2.047033986
            }
          },
          "type": "symbol",
          "minZoom": 5.5,
          "paint": {
            "text-color": "#000",
            "text-halo-color": "#fff",
            "text-halo-width": 1.3,
            "text-halo-blur": 1
          },
          "layout": {
            "text-size": 12,
            "text-field": "{district_name}",
            "text-offset": [
              0,
              2
            ]
          },
          "visible": false,
          "category": "Place Labels",
          "id": "banadir-labels",
          "loaded": false
        },
        "region-boundaries": {
          "label": "Region boundaries",
          "source": {
            "type": "vector",
            "layer": "som_adm_1-6k13xf",
            "url": "mapbox://ona.bnc2rzsw"
          },
          "type": "line",
          "paint": {
            "line-width": 2,
            "line-color": "#444",
            "line-opacity": 0.6
          },
          "visible": true,
          "category": "Boundaries",
          "id": "region-boundaries",
          "loaded": true,
          "isLoading": false,
          "filters": {},
          "isChartMin": true,
          "legendBottom": 40,
          "styleSpec": {
            "id": "region-boundaries",
            "type": "line",
            "visible": true,
            "source": {
              "type": "vector",
              "url": "mapbox://ona.bnc2rzsw"
            },
            "layout": {},
            "paint": {
              "line-width": 2,
              "line-color": "#444",
              "line-opacity": 0.6
            },
            "source-layer": "som_adm_1-6k13xf"
          }
        },
        "settlements": {
          "label": "Settlements",
          "source": {
            "type": "vector",
            "layer": "som-settlements-7xjvly",
            "url": "mapbox://ona.2nl50kfq"
          },
          "type": "symbol",
          "paint": {
            "text-color": "#585858",
            "text-halo-color": "#fff",
            "text-halo-width": 1.3,
            "text-halo-blur": 1
          },
          "layout": {
            "text-size": {
              "stops": [
                [
                  8,
                  0
                ],
                [
                  8,
                  10
                ],
                [
                  9,
                  10
                ]
              ]
            },
            "text-field": "{NAME} \n({CODE})",
            "text-offset": [
              0,
              1.5
            ],
            "icon-image": "dot-10",
            "icon-allow-overlap": true
          },
          "categories": {
            "breaks": "no",
            "label": [
              "Settlements"
            ],
            "type": [
              "Settlement"
            ],
            "color": [
              "#808080"
            ]
          },
          "popup": {
            "header": "CODE",
            "body": "{{NAME}}"
          },
          "visible": false,
          "credit": "<b> Zoom in to view more settlements </b>",
          "category": "Infrastructure",
          "id": "settlements",
          "loaded": false
        },
        "district-boundaries": {
          "label": "Districts boundaries",
          "source": {
            "type": "vector",
            "layer": "som_adm_2-0j5bly",
            "url": "mapbox://ona.6gl2shzi"
          },
          "type": "line",
          "paint": {
            "line-width": 1,
            "line-color": "#444",
            "line-opacity": 0.6
          },
          "visible": true,
          "category": "Boundaries",
          "id": "district-boundaries",
          "loaded": true,
          "isLoading": false,
          "filters": {},
          "isChartMin": true,
          "legendBottom": 40,
          "styleSpec": {
            "id": "district-boundaries",
            "type": "line",
            "visible": true,
            "source": {
              "type": "vector",
              "url": "mapbox://ona.6gl2shzi"
            },
            "layout": {},
            "paint": {
              "line-width": 1,
              "line-color": "#444",
              "line-opacity": 0.6
            },
            "source-layer": "som_adm_2-0j5bly"
          }
        },
        "road-networks": {
          "label": "Road Networks",
          "source": {
            "type": "vector",
            "layer": "road",
            "url": "mapbox://mapbox.mapbox-streets-v7"
          },
          "type": "line",
          "paint": {
            "line-width": 1,
            "line-color": "#FF851B",
            "line-opacity": 0.6
          },
          "categories": {
            "breaks": "no",
            "label": [
              "Road Networks"
            ],
            "type": [
              "Road Networks"
            ],
            "color": [
              "#FF851B"
            ]
          },
          "visible": false,
          "credit": "<b> Zoom in to view more road networks </b>",
          "category": "Infrastructure",
          "id": "road-networks",
          "loaded": false
        }
    }
}