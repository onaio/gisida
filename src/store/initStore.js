import { createStore, combineReducers } from 'redux';
import { initApp, initStyles, initRegions, addLayer } from './actions/Actions';
import defaultReducers from './reducers/Reducers';
import { loadJSON } from '../utils/files';
import prepareLayer from '../map/prepareLayer';


export default function initStore(customReducers) {
  let reducers;
  if (customReducers) {
    reducers = combineReducers({ ...defaultReducers, ...customReducers });
  } else {
    reducers = combineReducers(defaultReducers);
  }

  // Create initial store
  const store = createStore(reducers);

  // Add config to redux store
  function addConfigToStore(config) {
    // Check if config has list of layers and add them to store
    if (config.LAYERS.length > 0 && config.APP.layersPath) {
      config.LAYERS.map((layer) => {
        // todo: check if `layer` is full URL e.g http://mydomailn/mylayer.json
        // and load it directly
        const path = `${config.APP.layersPath}/${layer}.json`;

        function addLayerToStore(responseObj) {
          const layerObj = responseObj;
          layerObj.id = layer;
          layerObj.loaded = false;
          store.dispatch(addLayer(layerObj));
          if (layerObj.visible && !layerObj.loaded) {
            prepareLayer(layerObj, store.dispatch);
          }
        }

        return loadJSON(path, addLayerToStore);
      });
    }

    store.dispatch(initApp(config.APP));
    store.dispatch(initStyles(config.STYLES, config.APP.mapConfig));
    store.dispatch(initRegions(config.REGIONS, config.APP.mapConfig));
  }

  // Read config.json and add to redux store
  loadJSON('config.json', addConfigToStore);
  return store;
}
