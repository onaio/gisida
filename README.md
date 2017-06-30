## gisida &middot; [![CircleCI](https://circleci.com/gh/onaio/gisida.svg?style=svg&circle-token=f208fd6ec8d6c2990a75c21602b0da14ed63b59b)](https://circleci.com/gh/onaio/gisida)
Gisida is a Javascript library for quickly building map dashboards using [Mapbox GL JS](https://github.com/mapbox/mapbox-gl-js).

Gisida is built with [React](https://github.com/facebook/react).


## Usage 

### Node:

- Using npm: 
```
$ npm install gisida
```
- Using Yarn:
```
$ yarn add gisida
```

### Browser:

```javascript
<script> 
var options = 
{
  "APP": {
    "appName": "My Dashboard",
    "container": "app",
    "mapAccessToken": "",
    "mapCenter": [-74.5, 40],
    "mapZoom": 5
  },
  "LAYERS": {
    "regions_layer": {
      "label": "Region labels",
      "source": {
        "type": "geojson",
        "data": "regions.geojson"
      },
      "type": "symbol",
      "paint": {
        "text-color": "#000",
      },
      "layout": {
        "text-size": 14,
        "text-field": "{region}",
      }
    }
  },
  "SECTORS": {
    "Default Sector": {
      "layers": [
        "regions_layer"
      ]
    }
  }
}

var dashboard = new gisida.Dashboard({options});
</script>
```

- More  [examples](https://github.com/onaio/gisida/tree/master/examples/)
