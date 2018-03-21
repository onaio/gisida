import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { initApp, initStyles, initRegions, addLayer } from './actions/actions';
import defaultReducers from './reducers/reducers';
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
  const store = createStore(reducers, applyMiddleware(thunk));

  window.dispatch = store.dispatch;

  // Add config to redux store
  function addConfigToStore(config) {
    // Check if config has list of layers and add them to store
    if (config.LAYERS.length > 0) {
      config.LAYERS.map((layer) => {
        const path = layer.indexOf('http') !== -1 ? layer : `config/layers/${layer}.json`;
        function addLayerToStore(responseObj) {
          const layerObj = responseObj;
          const pathSplit = layer.split('/');
          const layerId = pathSplit[pathSplit.length - 1];
          layerObj.id = layerId;
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

  // Read site-config.json and add to redux store
  loadJSON('config/site-config.json', addConfigToStore);
  return store;
}
