# Getting Started with Gisida
## Implementation
Using the [gisida](https://github.com/onaio/gisida) and [gisida-react](https://github.com/onaio/gisida-react) libraries to create new dashboards is as simple as installing, importing, and initializing Gisida components and stores. Doing this in a [Create React App](https://github.com/facebook/create-react-app) project is recommended.
### Install
```
npx create-react-app my-gisida-app && cd my-gisida-app
yarn add gisida gisida-react
yarn start
```

### Import
```
import { initStore } from 'gisida';
import { App, Map, Menu } from 'gisida-react';
```

### Initialize
```
const store = initStore();
ReactDOM.render((
  <Provider store={store}>
    <App>
      <Map mapId="map-1">
        <Menu />
      </Map>
    </App>
  </Provider>
));
```

## Configuration
Initializing the app's redux store via the `gisida.initStore()` method requires both site-level and layer-level configuration files. By default, the application requires a `public/config/site-config.json` to initialize the Map and load `public/config/layers/*.json` configurations.
