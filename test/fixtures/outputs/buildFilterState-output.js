import layerObj from '../aggregateLayer-input.json';

const aggregate = {
  "filter": [
    "reporter/reporter_org",
    "Upazila"
  ],
  "accepted-filter-values": [
    "all",
    [
      "Teknaf"
    ]
  ],
  "filter-label": [
    "Partner",
    "Upazila"
  ]
}

const originalLayerObj = {
  ...layerObj,
  source: {
    ...layerObj.source,
    data: Array.isArray(layerObj.source.data)
      ? [...layerObj.source.data]
      : { ...layerObj.source.data },
  },
  mergedData: layerObj.mergedData && Array.isArray(layerObj.mergedData)
    ? [...layerObj.mergedData]
    : { ...layerObj.mergedData },
  aggregate: {
    ...layerObj.aggregate,
    ...aggregate,
  },
  filterOptions: {
    ...layerObj.filterOptions,
  },
  filters: {
    ...layerObj.filters,
  },
};

export const buildStateOutput = {
  "aggregate": {
    "accepted-filter-values": [
      "all",
      [
        "Teknaf"
      ]
    ],
    "filter": [
      "reporter/reporter_org",
      "Upazila"
    ],
    "filter-label": [
      "Partner",
      "Upazila"
    ]
  },
  "fauxLayerObj": {
    "aggregate": {
      "accepted-filter-values": [
        "all",
        [
          "Teknaf"
        ]
      ],
      "date-by": "submission/reporting_period",
      "date-parse": {
        "chunk": 0,
        "split": " to "
      },
      "extraProps": [
        "hc_rep/hcvita",
        "hc_rep/hcbvita",
        "hc_rep/hcgvita",
        "submission/location_type",
        "reporter/reporter_org",
        "Settlement",
        "submission/reporting_period",
        "Upazila",
        "New_Camp_S",
        "New_Camp_N"
      ],
      "filter": [
        "reporter/reporter_org",
        "Upazila"
      ],
      "filter-label": [
        "Partner",
        "Upazila"
      ],
      "filter-type": [
        "stops",
        "stops"
      ],
      "group-by": "submission/hc_loc",
      "min": 0,
      "timeseries": {
        "field": "period",
        "type": "cumulative"
      },
      "type": "sum"
    },
    "categories": {
      "breaks": "yes",
      "clusters": 7,
      "color": "Greens"
    },
    "category": "Nutrition",
    "credit": "Number of boys aged 6-59 months who receive vitamin A supplementation.",
    "data-parse": {...layerObj["data-parse"]},
    "detail-view": {...layerObj["detail-view"]},
    "filterOptions": {
      "Upazila": {
        "filterValues": {},
        "label": "Upazila",
        "type": "stops"
      },
      "reporter/reporter_org": {
        "filterValues": {},
        "label": "Partner",
        "type": "stops"
      }
    },
    "geo-columns": [
      "longitude",
      "latitude"
    ],
    "id": "child-6-59-vitamin-A-hc",
    "label": "HC - Number of boys aged 6-59 months who receive vitamin A supplementation",
    "loaded": false,
    "mergedData": {...layerObj.mergedData},

    "popup": {
      "body": "<p style=text-align:left;> <b>Girls:</b> {{hc_rep/hcgvita}} <br> <b>Boys:</b> {{hc_rep/hcbvita}}<span style=float:right;>",
      "header": "parsedUID"
    },
    "property": "hc_rep/hcvita",
    "rohingyaIndicators": {
      "hc_boys": "hc_rep/hcbvita",
      "hc_girls": "hc_rep/hcgvita",
      "hc_total": "hc_rep/hcvita",
      "location_type": "submission/location_type"
    },
    "source": {
      "data": {
        "features": [],
        "type": "FeatureCollection"
      },
      "featureType": "Point",
      "join": [
        "submission/hc_loc",
        "New_Camp_S"
      ],
      "relation": {
        "key": [
          "many",
          "one"
        ],
        "type": "one-to-many"
      },
      "type": "geojson",
      "url": "mapbox://ona.5t6fsdlt"
    },
    "type": "circle",
    "visible": false
  },
  "filterOptions": {
    "Upazila": {
      "filterValues": {
        "Teknaf": 3,
        "Ukhia": 21,
        "undefined": 3
      },
      "label": "Upazila",
      "type": "stops"
    },
    "reporter/reporter_org": {
      "filterValues": {
        "BITA": 1,
        "BRAC": 8,
        "CODEC": 12,
        "Coast Trust": 1,
        "Dan Church Aid": 2,
        "Save the Children": 1,
        "YPSA": 2
      },
      "label": "Partner",
      "type": "stops"
    }
  },
  "filters": {
    "Upazila": {
      "dataType": "ordinal",
      "doAdvFiltering": false,
      "isFiltered": true,
      "isOpen": true,
      "isOriginal": true,
      "label": "Upazila",
      "options": {
        "Teknaf": {
          "count": 3,
          "enabled": true
        },
        "Ukhia": {
          "count": 21,
          "enabled": false
        }
      },
      "queries": [],
      "toggleAllOn": true
    },
    "reporter/reporter_org": {
      "dataType": "ordinal",
      "doAdvFiltering": false,
      "isFiltered": false,
      "isOpen": false,
      "isOriginal": false,
      "label": "Partner",
      "options": {
        "BITA": {
          "count": 0,
          "enabled": false,
          "hidden": false
        },
        "BRAC": {
          "count": 1,
          "enabled": false
        },
        "CODEC": {
          "count": 1,
          "enabled": false
        },
        "Coast Trust": {
          "count": 0,
          "enabled": false,
          "hidden": false
        },
        "Dan Church Aid": {
          "count": 1,
          "enabled": false
        },
        "Save the Children": {
          "count": 0,
          "enabled": false,
          "hidden": false
        },
        "YPSA": {
          "count": 0,
          "enabled": false,
          "hidden": false
        }
      },
      "queries": [],
      "toggleAllOn": true
    }
  },
  "isFiltered": true,
  "originalLayerObj": {...originalLayerObj}
}

  export default {buildStateOutput}