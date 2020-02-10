# HeatMaps

This directory contains documentation on adding heatmap layers.
For a full documentation follow this [link](https://docs.mapbox.com/help/tutorials/make-a-heatmap-with-mapbox-gl-js/)

## Sample heatmap layer

```
{
    "label": "Sample Layer",
    "type": "heatmap",
    "source": {...},
    "priority": <number>,
    "paint": {
        "heatmap-weight": [...]
        "heatmap-radius": [...],
        "heatmap-opacity": [...],
        "heatmap-color": [...]
    }
}
```
### paint properties

For more details about the meaning and functions of each paint propery go to [Heatmap paint properties](https://docs.mapbox.com/help/tutorials/make-a-heatmap-with-mapbox-gl-js/#heatmap-paint-properties) on Mapbox.


### priority property

This is an optional property (a number) that can be used to give priorities on how heatmap layers are displayed on a map.
When two or more layers are turned on at the same time, the layer with priority 1 will always be on top of the other layers. 


