import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as actions from './actions/actions';
import defaultReducers from './reducers/reducers';
import { loadJSON } from '../utils/files';
import prepareLayer from '../map/prepareLayer';
import reducerRegistry from './reducerRegistry';


export function loadLayers(mapId, dispatch, layers) {
  // Check if config has list of layers and add them to store
  if (layers.length > 0) {
    dispatch(actions.addLayersList(layers));
    layers.map((layer) => {
      const path = layer.indexOf('http') !== -1 ? layer : `config/layers/${layer}.json`;
      function addLayerToStore(responseObj) {
        const layerObj = responseObj;
        const pathSplit = layer.split('/');
        const layerId = pathSplit[pathSplit.length - 1];
        layerObj.id = layerId;
        layerObj.loaded = false;
        dispatch(actions.addLayer(mapId, layerObj));
        if (layerObj.visible && !layerObj.loaded) {
          prepareLayer(mapId, layerObj, dispatch);
        }
      }
      return loadJSON(path, addLayerToStore);
    });
  }
}


// Add config to redux store
function addConfigToStore(store, config) {
  store.dispatch(actions.initApp(config.APP));
  store.dispatch(actions.initStyles(config.STYLES, config.APP.mapConfig));
  store.dispatch(actions.initRegions(config.REGIONS, config.APP.mapConfig));
  loadLayers('map-1', store.dispatch, config.LAYERS);
  loadJSON('config/locations.json', locations => store.dispatch(actions.initLocations(locations)));
}

export default function initStore(customReducers = {}) {
  // Register initial reducers
  const reducersToRegiser = {
    ...defaultReducers,
    ...customReducers,
  };
  Object.keys(reducersToRegiser).forEach((reducerName) => {
    reducerRegistry.register(reducerName, reducersToRegiser[reducerName]);
  });
  // Preserve initial state for not-yet-loaded reducers
  const combine = (r) => {
    const reducers = { ...r };
    const reducerNames = Object.keys(reducers);
    Object.keys(defaultReducers).forEach((item) => {
      if (reducerNames.indexOf(item) === -1) {
        reducers[item] = (state = null) => state;
      }
    });
    return combineReducers(reducers);
  };
  // Get combined reducer from registry
  const reducer = combine(reducerRegistry.getReducers());
  // Create initial store
  const store = createStore(reducer, applyMiddleware(thunk));

  // Replace the store's reducer whenever a new reducer is registered.
  reducerRegistry.setChangeListener(reducers => store.replaceReducer(combine(reducers)));

  // Read site-config.json and add to redux store
  loadJSON('config/site-config.json', config => addConfigToStore(store, config));
  return store;
}
