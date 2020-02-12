# HeatMaps

This directory contains documentation on adding heatmap layers.\
For full documentation follow this [link](https://docs.mapbox.com/help/tutorials/make-a-heatmap-with-mapbox-gl-js/).

## Sample heatmap layer

```
{
    "label": "Sample Layer",
    "type": "heatmap",
    "source": {...},
    "priority": <number>,
    "paint": {
        "heatmap-weight": [
            'interpolate',
            ['linear'],
            ['get', 'magnititude'],
            <magnititude lowest point>,  0,
            <magnititude highest point>, 1
        ],
        "heatmap-intensity": [
            'interpolate',
            ['linear'],
            ['zoom'],
            0, 1,
            9,  3
        ],
        "heatmap-radius": [
            'interpolate',
            ['linear'],
            ['zoom'],
            0, 2,
            9, 20
        ],
        "heatmap-opacity": [
            'interpolate',
            ['linear'],
            ['zoom'],
            7,  1,
            9, 0
        ],
        "heatmap-color": [
            'interpolate',
            ['linear'],
            ['heatmap-density'],
            0, 'rgba(33,102,172,0)',
            0.2, 'rgb(103,169,207)',
            0.4, 'rgb(209,229,240)',
            0.6, 'rgb(253,219,199)',
            0.8, 'rgb(239,138,98)',
            1,  'rgb(178,24,43)'
        ]
    }
}
```

### paint properties

Note: The property `magnititude` in `heatmap-weight` can be any property from the dataset.

For more details about the meaning and functions of each paint propery go to [Heatmap paint properties](https://docs.mapbox.com/help/tutorials/make-a-heatmap-with-mapbox-gl-js/#heatmap-paint-properties) on Mapbox.
