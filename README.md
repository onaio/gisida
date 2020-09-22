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

**NOTE:** You can alternetively use [`yarn`](https://yarnpkg.com/en/docs/getting-started) to manage your node packages.

### UMD build

```javascript
<script src="http://demo.gisida.onalabs.org/assets/js/gisida.js"> </script>
```

## Getting Started

### 1.Create config file

The application requires a `public/config/site-config.json` to initialize the Map and load `public/config/layers/*.json` configurations. Create a `public/config/site-config.json` which will hold the configurations. An example of a `site-config` configuration is given below

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
    "appColor": "#000",
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

Let's go over each of the keys in the `site-config.json` file

1. `APP` : The `APP` key expects and object. Contains properties for the site settings

- `mapConfig`: An object that contains keys for setting the values for the properties for
  interacting with the map. More information about each of these properties including their defaults
  can be found at the [Mapbox GL JS API Reference](https://docs.mapbox.com/mapbox-gl-js/api/map/)

  - `container`: Your HTML element in which Mapbox GL JS will render the map
  - `style`: The default Mapbox style to be loaded from the Mapbox API of the
    form `mapbox://styles/:owner/:style`
  - `center`: The initial geographical centerpoint of the map (Uses longitude, latitude coordinated order).
  - `zoom` : The initial zoom level of the map

- `accessToken` : Your Mapbox API access token
- `appIcon` : The relative path to image that will be displayed as the logo on the top of the title bar
- `appName`: The name for the app that will be displayed on the title bar
- `appColor`: The app primary color that will be displyed most frequently across the screens such
  as the background of the title bar, buttons
- `appNameDesc` **(Optional)** : A short description of what your app is about. Displayed beneath the app name
- `appLoginIcon` **(Optional)** : The relative path to the image that that will be displayed on the login form if authentication is enabled. If not provided `appIcon` will be used
- `searchBar` **(Optional)** : Accepts a boolean value. Set to `true` if you would like a search box
  to search the layers. The search box is not enabled and not displayed by default
- `mapStateToUrl` **(Optional)** : Accepts a boolean value. Controls if selected layers should be pushed
  to the URL so as to build a shareable URL. This is enabled by default. Set to `false` if you do not want this behaviour
- `layerSupersetLinks` **(Optional, Gisida React Private)** : Uses the ONA superset API to access the data for a specific layer and loads it in an iframe. Applicable where a switch between Map View and Data View is configured. The key is the name of the layer, the superset API link as the value. More information can be found at the [Map View and Data View Documentation](https://github.com/onaio/gisida-react-private/blob/master/docs/map-data-view.md)

  e.g

  ```json
  "layerSupersetLinks": {
    "layer-1": "https://discover.ona.io/superset/dashboard/<id>/?standalone=true"
  }
  ```

  **Note** : Adding the query parameter `standalone=true` loads the iframe without the navigation bar
  with the login links. This is because in cases where authentication is enabled for your app, the
  user will be logged in automically into superset

- `hasNavBar` **(Optional, Gisida React Private)**: Set value to `true` if the app has a navigation bar as a result of configuring the [Data View](https://github.com/onaio/gisida-react-private/blob/master/docs/map-data-view.md) or any other feature that makes use of the [NavBar](https://github.com/onaio/gisida-react-private/tree/master/src/components/NavBar). This property mainly helps the CSS styling to applied appropriately depending on whether the `NavBar` is present or not.
- `supersetBase`: **(Optional)**: The base API URL for superset e.g `"supersetBase": "https://discover.ona.io/"`. This base URL will be used to load datasets from superset
- `authConfig`: **(Optional)**: The ID of the ONA form that holds the layer and view permissions for the users. Read more on how to set this permissions at [Gisida OAuth Implementation](https://github.com/onaio/gisida/blob/master/docs/OAuth.md)

2. `STYLES` : All mapbox styles available the **including the default style** specified in `APP.mapConfig.style`. If the array is more than 1, a user can switch between styles on the map to apply the preferred style.

3. `LAYERS` : Can be an array or an object.

An object is used if the layers are grouped. The top level keys are the category names and the values can be an array of layer names or an array of objects with the group name as the key and an array of layers as the value. The groups can be nested

```json

  "LAYERS": {
    "Category 1" : ["layer-1"],
    "Category 2" : ["layer-2"],
    "Category 3" : [
      {
        "Group 1": ["layer-3"]
      },
      {
        "Group 2": ["layer-4"]
      },
      {
        "Group 3": {
          "Sub group 1": ["layer-5", "layer-6"]
        }
      }
    ]
  }
```

If the layers are not grouped, add the values as an array

```json

"LAYERS": [
  "layer-1",
  "layer-2",
  "layer-3"
]
```

**NOTE**: The layer names above are exactly as they are in `public/config/layers/` without the extension `.json`. Thus a layer will not be displayed if it's not in `public/config/layers/`

4. `SUPERSET_CONFIGS` **(Optional, Gisida React Private)**: This object holds the properties necessary to interact with superset mainly to load the iframes. The following properties for this object are available

- `iframes`: Used to display the dashboard. The keys are the dashboard tab names and the links as the values. More information can be found at the [How to set up a superset dashboard documentation](https://github.com/onaio/gisida-react-private/blob/master/docs/superset-dashboard.md)

```json
 "SUPERSET_CONFIGS": {
  "iframes": {
    "Tab 1": "https://discover.ona.io/superset/dashboard/<id>/?standalone=true",
    "Tab 2": "https://discover.ona.io/superset/dashboard/<id>/?standalone=true",
  }
}
```

**NOTE**: If query param `standalone` with the value of `true` is not added as above, the iframe loaded will contain discover navigation menu which is unnecessary. Omitting `?standalone=true` will show the discover menu

- `splashPage`: Used to display the splash page as an iframe. Accepts a single key `link` whose value is the link to the dashboard. More information can be found at the [How to set up a splash page as an iframe documentation](https://github.com/onaio/gisida-react-private/blob/master/docs/superset-splash-page.md)

```json
 "splashPage": {
    "link": "https://discover.ona.io/superset/dashboard/<id>/?standalone=true"
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
