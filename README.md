
# Gisida
![gisida](http://gisida.onalabs.org/resources/img/gisida-logo.png)

Gisida is a Javascript data pipeline library that generates map visualizations for [Mapbox GL JS](https://github.com/mapbox/mapbox-gl-js) using MapSpec.

Gisida uses Redux to manage layers data state.

Take a look at [gisida-react](https://github.com/onaio/gisida-react) if you need to quickly build a Map Dashboard using gisida;

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
  APP: {
    mapConfig: {
      container: 'map',
      style: '',
      center: [
        0,
        0,
      ],
      zoom: 5,
    },
    accessToken: false,
    appIcon: 'gisida-sample.png',
    appName: 'React Gisida',
  },
  LAYERS: {

  },
  STYLES: [
    {
      label: 'Satelitte',
      style: 'mapbox: //styles/mapbox/satellite-v9',
    },
    {
      label: 'Satelitte Streets',
      style: 'mapbox: //styles/mapbox/satellite-streets-v9',
    },
  ],
  MAP: {
    isLoaded: false,
    processedLayers: {},
    activeLayers: {},
    layersToRemove: [],
    layersToAdd: [],
  },
}
```

### 2. Import and initializing the store.

```javascript
import { initStore } from 'gisida';

const store = initStore();
```

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

### Local development:
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