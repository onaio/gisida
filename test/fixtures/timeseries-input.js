export const tsStops = {
  "Stops": {
    "id": "test-layer",
    "stops": [
      [
        [
          "1", "#ffdc00",
          "2", "#ffdc00",
          "3", "#ffdc00"
        ],
        [
          "1", "#ff851b",
          "2", "#ff851b",
          "3", "#ff851b"
        ]
      ],
      [
        [
          "1", 6,
          "2", 6,
          "3", 6
        ],
        [
          "1", 6,
          "2", 6,
          "3", 6
        ]
      ],
      [
        "Feb - June 2017",
        "Aug - Dec 2017"
      ],
      [
        "#ffdc00", "#ff851b"
      ],
      [
        [
          "1", 6,
          "2", 6,
          "3", 6
        ],
        [
          "1", 6,
          "2", 6,
          "3", 6
        ]
      ],
      [
        ["1", "1"],
        ["2", "2"]
      ]
    ]
  }
};

export const testLayer = {
  "id": "test-layer",
  "type": "fill",
  "source": {
    "join": [
      "id", "id"
    ],
    "data": [
      {
        "id": "1",
        "Phase": "1",
        "period": "Feb - June 2017"
      },
      {
        "id": "2",
        "Phase": "2",
        "period": "Feb - June 2017"
      },
      {
        "id": "1",
        "Phase": "1",
        "period": "Aug - Dec 2017"
      },
      {
        "id": "2",
        "Phase": "2",
        "period": "Aug - Dec 2017"
      },
    ],
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    }
  },
  "visible": true
};

export const timeseriesList = {
  "test-layer-1": {
    "layerId": "test-layer"
  }
};

export const timeseriesIds = ["test-layer"];