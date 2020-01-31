<h1 align="center">
<div>
<img src="http://gisida.onalabs.org/resources/img/gisida-logo.png" width="85">
</div>
<div>
<img src="http://gisida.onalabs.org/resources/img/gisida-logotype.png" width="100">
</div>
</h1>
[![Coverage Status](https://coveralls.io/repos/github/onaio/gisida/badge.svg?branch=coverage-badges)](https://coveralls.io/github/onaio/gisida?branch=coverage-badges)

# grp frontend [![CircleCI](https://circleci.com/gh/onaio/grp-frontend.svg?style=svg&circle-token=f8bbcab21f419336fbd9307d00365f4278bd0dc1)](https://circleci.com/gh/onaio/grp-frontend)

[![CircleCI](https://circleci.com/gh/onaio/gisida.svg?style=svg(https://circleci.com/gh/onaio/gisida)

Gisida is a Javascript data pipeline library that generates map visualizations for [Mapbox GL JS](https://github.com/mapbox/mapbox-gl-js) using MapSpec.

Gisida uses Redux to manage layers data state.

Take a look at [gisida-react](https://github.com/onaio/gisida-react) if you need to quickly build a Map Dashboard using Gisida and MapSpec layers.

## Installation

```
$ npm install gisida
```

**NOTE:** You can alternetively use [`yarn`](https://yarnpkg.com/en/docs/getting-started) to manage your node packages.

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
    "text-offset": [0, 2],
    "icon-image": "hospital-11",
    "icon-allow-overlap": true,
    "text-transform": "uppercase"
  },
  "visible": false,
  "credit": "Global Healthsites Mapping Project<br>Aug 15, 2017"
}
```

## Data Sources

Gisida supports various data sources. These include: <br>
**csv -** A [csv](https://en.wikipedia.org/wiki/Comma-separated_values) file can be used solely as a source without joining it with any other source as long as it has geolocations columns i.e longitude and latitude. If the fields are named differently one will need to include geo-columns property on the layer spec as shown below.

```
"geo-columns": ["longitude", "latitude"]
```

An example of such a layer

```json
{
  "label": "Kenya Health Sites",
  "source": {
    "type": "geojson",
    "featureType": "Point",
    "data": "data/ken_health_sites.csv"
  },
  "geo-columns": ["longs", "lats"],
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
    "text-offset": [0, 2],
    "icon-image": "hospital-11",
    "icon-allow-overlap": true,
    "text-transform": "uppercase"
  },
  "visible": false,
  "credit": "Global Healthsites Mapping Project<br>Aug 15, 2017"
}
```

We can also join the csv with a vector layer being served from mapbox. To achieve this we need to add a columns with simmillar data on both datasets for the join to work.

```
"join":["vectorProp","csvProp"]
```

An example of such a layer

```json
{
  "label": "Kenya Health Sites",
  "source": {
    "type": "vector",
    "layer": "province",
    "url": "mapbox://ona.cxeuuuuu",
    "data": "data/ken_health_sites.csv",
    "join": ["ADM2_EN", "province1"]
  },
  "type": "fill",
  "minZoom": 0,
  "categories": {
    "breaks": "yes",
    "color": "Greens",
    "clusters": 3
  },
  "visible": false,
  "credit": "Kenya Health Mapping Project"
}
```

The url points to the tileset which is joined with the csv file on basis of the two files i.e ADM2_EN and province1
<br>
**geojson -** We use [geojon](https://geojson.org/) format mostly to build to render geometric centres (centroids) of regions on a map but they still can be used simmilarly as csv's. An example of geojson data source in action

```json
{
  "label": "District Labels",
  "source": {
    "type": "geojson",
    "data": "data/centroids-2.geojson"
  },
  "type": "symbol",
  "minzoom": 0,
  "paint": {
    "text-color": "#000",
    "text-halo-color": "#fff",
    "text-halo-width": 1.3,
    "text-halo-blur": 1
  },
  "layout": {
    "text-size": 12,
    "text-field": "{NAME}",
    "text-transform": "uppercase",
    "text-offset": [0, 0]
  },
  "visible": false,
  "category": "Boundaries & Labels"
}
```

To test whether the geojson file is working and is of right format you can paste it's content [here](http://geojson.io) and check whether it renders.
<br>
**onadata -** Gisida supports data coming from [Ona](https://ona.io/) forms. When building layers that pull data from Ona you will have to provide the form id on the layer spec.

```
"source": {
        "type": "geojson",
        "data": 899
    }
```

We can also pull data from different forms and join the various form data. Here is an example.

```
"source": {
        "type": "geojson",
        "data": [
            55,
            56,
        ],
        "join": [
            "pd_number",
            "pd_number",
        ],
    }
```

<br>

**superset slice -** Gisida supports [superset/canopy](https://canopyinsights.com/) slices. The slice are api's that hold unique id's. The splice id property should be provided on the layer spec. Here is an example of a superset layer in action:

```
"source": {
            "type": "vector",
            "data": {
            "type": "superset",
            "slice-id": 2238},
            "layer": "homes",
            "url": "mapbox://cncncncnc",
            "join": [
                "homes",
                "homes"
            ]
        },
```

<br>

**Pulling Directly from Mapbox**

Ensure that the data file for the layer is located in the specified source path `data/ken_health_sites.geojson or a remote url that points to the file`.

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

- Link the project folder as local module within your project using [`npm link`](https://docs.npmjs.com/cli/link) or [`yarn link`](https://yarnpkg.com/lang/en/docs/cli/link/) if you use yarn as your preferred node package manager.

- Run development build:

```
$ npm develop
```

- Run tests

```
$ npm test
```

- Run tests and generate coverage report

```
$ npm run test:coverage
```

### Production build

- Build production distribution

```
$ npm build
```

- Publish to npm

```
$ npm publish
```
