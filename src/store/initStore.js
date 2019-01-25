import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as actions from './actions/actions';
import defaultReducers from './reducers/reducers';
import { loadJSON } from '../utils/files';
import prepareLayer from '../map/prepareLayer';
import reducerRegistry from './reducerRegistry';


export function loadLayers(mapId, dispatch, layers) {
  // Check if config has list of layers and add them to store
  if ((Array.isArray(layers) && layers.length) || Object.keys(layers).length) {
    // helper function to handle layers from spec
    const mapLayers = (layer) => {
      // callback function for handling json repsponse
      function addLayerToStore(responseObj) {
        const layerObj = responseObj;
        // parse layer id from action.group for urls
        const pathSplit = layer.split('/');
        const layerId = pathSplit[pathSplit.length - 1];
        layerObj.id = layerId;

        // add layer to MAP.layers store
        layerObj.loaded = false;
        dispatch(actions.addLayer(mapId, layerObj));

        // load and prepare layer if visible and not loaded
        if (layerObj.visible && !layerObj.loaded) {
          dispatch(actions.toggleLayer(mapId, layerObj.id, true));
          prepareLayer(mapId, layerObj, dispatch);
        }
      }
      if (typeof layer === 'string') {
        const path = layer.indexOf('http') !== -1 ? layer : `config/layers/${layer}.json`;
        // load local or remote layer spec
        return loadJSON(path, addLayerToStore);
      }

      Object.keys(layer).forEach((key) => {
        layer[key].map(mapLayers);
      });

      return true;
    };

    if (Array.isArray(layers)) {
      // add layers to store array
      dispatch(actions.addLayersList(layers));
      // handle all layers
      layers.map(mapLayers);
    } else {
      const groupKeys = Object.keys(layers);
      // loop through all groups of layers
      for (let g = 0; g < groupKeys.length; g += 1) {
        // add layers to store array
        dispatch(actions.addLayersList(layers[groupKeys[g]]));
        // add group to store object
        dispatch(actions.addLayerGroup(mapId, groupKeys[g], layers[groupKeys[g]]));
        // handle layers from group
        layers[groupKeys[g]].map(mapLayers);
      }
    }
  }
}

// Add config to redux store
function addConfigToStore(store, config) {
  store.dispatch(actions.initApp(config.APP));
  store.dispatch(actions.initLoc(config.LOC));
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
