<h1 align="center">
<div>
<img src="http://gisida.onalabs.org/resources/img/gisida-logo.png" width="85">
</div>
<div>
<img src="http://gisida.onalabs.org/resources/img/gisida-logotype.png" width="100">
</div>
</h1>

Gisida is a Javascript data pipeline library that generates map visualizations for [Mapbox GL JS](https://github.com/mapbox/mapbox-gl-js) using MapSpec.

Gisida uses Redux to manage layers data state.

Take a look at [gisida-react](https://github.com/onaio/gisida-react) if you need to quickly build a Map Dashboard using Gisida and MapSpec layers.

## Installation

```
$ npm install gisida
```

or

```
$ yarn add gisida
```

### UMD build

```javascript
<script src="http://demo.gisida.onalabs.org/assets/js/gisida.js"> </script>
```


## Getting Started

### 1.Create config file

- Create a `config.json` and save it in the application's root path. An example `config.json` file is provided below: 

```json
{
  "APP": {
    "mapConfig": {
      "container": "map",
      "style": "mapbox://styles/mapbox/light-v9",
      "center": [
        36.25
        0.34
      ],
      "zoom": 6
    },
    "accessToken": "<mapbox-studio-access-token>",
    "appIcon": "/img/gisida-logo.png",
    "appName": "GISIDA EXAMPLE",
    "appColor": "darkslategrey",
    "layersPath": "/layers"
  },
  "STYLES": [
    {
      "label": "Light",
      "style": "mapbox://styles/mapbox/light-v9"
    },
    {
      "label": "Streets",
      "style": "mapbox://styles/mapbox/streets-v9"
    },
    {
      "label": "Satellite",
      "style": "mapbox://styles/mapbox/satellite-v9"
    }
  ],
  "LAYERS": [
    "ken-health-sites",
  ]
}
```

### 2. Import and initializing the store.

```javascript
import { initStore } from 'gisida';

const store = initStore();
```

### 3. Adding Layers
- The `layersPath` propery under `APP.mapConfig` is used to define the folder that contains the layers files. 

- The `LAYERS` propery is a list that contains the filenames of the layers that should be loaded into state. 

**NOTE:** The filename is added withouth the `.json` extension in the config file.

An example layer file in the path `/layers/ken-health-sites.json`

```json
{
  "label": "Kenya Health Sites",
  "source": {
    "type": "geojson",
    "data": "data/ken_health_sites.geojson"
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
    "text-field": "{name} ({type})",
    "text-offset": [0,2],
    "icon-image": "hospital-11",
    "icon-allow-overlap": true,
    "text-transform": "uppercase"
  },
  "visible": false,
  "credit": "Global Healthsites Mapping Project<br>Aug 15, 2017"
}

```

Ensure that the data file for the layer is located in the specified source path `data/ken_health_sites.geojson`. 

### 3. Actions 

Gisida provides in-build functions that trigger to process and managed data in the store;

- prepareLayer
- changeStyle
- addLabels
- addChart
- addLegend
- buildTimeSeriesData


TODO: add documentation for Gisida API


## Development
To locally develop and make changes to gisida: 

### Local development
- Clone repo:
```
$ git clone git@github.com:onaio/gisida.git
```

- Link local module  using [`npm link`](https://docs.npmjs.com/cli/link) or [`yarn link`](https://yarnpkg.com/lang/en/docs/cli/link/)

- Run development build:

```
$ npm develop
```
or 
```
$ yarn develop
```

### Prodcution build 

- Build production distribution
```
$ npm build
```

or 

```
$ yarn build
```