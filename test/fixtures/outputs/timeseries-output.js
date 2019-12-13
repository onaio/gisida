export const timeseriesOutputData = {
  "test-layer": {
    "layerId": "test-layer",
    "index": 0,
    "layerObj": {
      "id": "test-layer",
      "type": "fill",
      "source": {
        "join": ["id", "id"],
        "data": [
          {
            "id": "1"
            , "Phase": "1",
            "period": "Feb - June 2017"
          }, {
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
          }
        ],
        "aggregate": {
          "timeseries": {
            "field": "period"
          }
        }
      },
      "visible": true
    }, "categories": {},
    "temporalIndex": 1,
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
      }
    ],
    "charts": null,
    "colors": [
      ["1", 6, "2", 6, "3", 6],
      ["1", 6, "2", 6, "3", 6]],
    "colorStops": [["1", "#ffdc00", "2", "#ffdc00", "3", "#ffdc00"], ["1", "#ff851b", "2", "#ff851b", "3", "#ff851b"]
    ],
    "radiusStops": [["1", 6, "2", 6, "3", 6], ["1", 6, "2", 6, "3", 6]], "period": ["Feb - June 2017", "Aug - Dec 2017"], "allPeriods": ["Feb - June 2017", "Aug - Dec 2017"], "breaks": ["#ffdc00", "#ff851b"], "strokeWidthStops":
      [["1", "1"], ["2", "2"]], "stops": [["1", "#ffdc00", "2", "#ffdc00", "3", "#ffdc00"], ["1", "#ff851b", "2", "#ff851b", "3", "#ff851b"]]
  }
};