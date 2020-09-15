import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as actions from './actions/actions';
import {
  APP,
  FILTER,
  SUPERSET_CONFIGS,
  STYLES,
  REGIONS,
  LOCATIONS,
  LOC,
  LAYERS,
  MAP,
  AUTH,
  CATEGORIES,
} from './reducers';

import { loadJSON } from '../utils/files';
import prepareLayer from '../map/prepareLayer';
import reducerRegistry from './reducerRegistry';

const defaultReducers = {
  SUPERSET_CONFIGS,
  STYLES,
  REGIONS,
  LOCATIONS,
  LOC,
  LAYERS,
  FILTER,
  APP,
  AUTH,
  'map-1': MAP,
  CATEGORIES,
};

/**
 * Add map layer object to store
 * @param {*} layerObj
 */
export function addMapLayerToStore(layerObj, mapId, store) {
  const layerToAdd = {
    ...layerObj,
    loaded: false,
  };
  // add layer to MAP.layers store
  store.dispatch(actions.addLayer(mapId, layerToAdd));

  // load and prepare layer if visible and not loaded
  if (layerObj.visible) {
    store.dispatch(actions.toggleLayer(mapId, layerObj.id, true));
    prepareLayer(mapId, layerObj, store.dispatch);
  }
}

/**
 * Get the map layer object for the given layer and add to store
 * @param {*} layer
 * @param {*} mapId
 * @param {*} dispatch
 */
export function getMapLayer(layer, mapId, store, callback) {
  // load json layer spec files
  if (typeof layer === 'string') {
    const path =
      layer.indexOf('http') !== -1 || layer.indexOf('/') === 0
        ? layer
        : `config/layers/${layer}.json`;
    // load local or remote layer spec

    loadJSON(path, layerObj => {
      // parse layer id from action.group for urls
      if (layerObj) {
        const pathSplit = layer.split('/');
        addMapLayerToStore(
          {
            ...layerObj,
            id: pathSplit[pathSplit.length - 1],
          },
          mapId,
          store
        );
        callback(true, layer);
      } else {
        callback(false, layer);
      }
    });
  } else if (layer instanceof Object && layer.type) {
    addMapLayerToStore(layer, mapId, store);
    callback(true, layer.id);
  } else {
    Object.keys(layer).forEach(key => {
      layer[key].forEach(l => {
        getMapLayer(l, mapId, store, callback);
      });
    });
  }
}

export function loadLayers(mapId, store, layers) {
  const layerIds = [];

  const addCategoriesToStore = (isLayerAdded, layer) => {
    if (!isLayerAdded) {
      const index = layerIds.indexOf(layer);

      if (index > -1) {
        layerIds.splice(index, 1);
      }
    }
    if (Object.keys(store.getState()['map-1'].layers).length === layerIds.length) {
      store.dispatch(actions.buildCategories(store.getState().LAYERS, store.getState()['map-1']));
    }
  };

  if (Array.isArray(layers)) {
    // add layers to store array
    store.dispatch(actions.addLayersList(layers));
    // handle all layers
    layers.forEach(layer => getMapLayer(layer, mapId, store, addCategoriesToStore));
  } else {
    const groupKeys = Object.keys(layers);
    const addLayerId = layer => {
      if (typeof layer === 'string') {
        if (layerIds.indexOf(layer) === -1) {
          layerIds.push(layer);
        }
      } else {
        Object.keys(layer).forEach(key => {
          layer[key].forEach(addLayerId);
        });
      }
    };

    // loop through all groups of layers
    for (let g = 0; g < groupKeys.length; g += 1) {
      // Add layer ids for current group
      layers[groupKeys[g]].forEach(addLayerId);
      // add layers to store array
      store.dispatch(actions.addLayersList(layers[groupKeys[g]]));
      // add group to store object
      store.dispatch(actions.addLayerGroup(mapId, groupKeys[g], layers[groupKeys[g]]));
      // handle layers from group
      layers[groupKeys[g]].forEach(layer => getMapLayer(layer, mapId, store, addCategoriesToStore));
    }
  }
}

// Add config to redux store
function addConfigToStore(store, config) {
  if (config.AUTH) store.dispatch(actions.initAuth(config.AUTH));
  store.dispatch(actions.initApp(config.APP));
  if (config.LOC) {
    store.dispatch(actions.initLoc(config.LOC));
  }
  if (config.SUPERSET_CONFIGS) {
    store.dispatch(actions.initSuperset(config.SUPERSET_CONFIGS));
  }
  store.dispatch(actions.initStyles(config.STYLES, config.APP.mapConfig));
  store.dispatch(actions.initRegions(config.REGIONS, config.APP.mapConfig));
  loadLayers('map-1', store, config.LAYERS);
  loadJSON('config/locations.json', locations => store.dispatch(actions.initLocations(locations)));
}

export default function initStore(
  customReducers = {},
  loadState,
  siteConfigUrl = 'config/site-config.json'
) {
  // Register initial reducers
  const reducersToRegiser = {
    ...defaultReducers,
    ...customReducers,
  };
  Object.keys(reducersToRegiser).forEach(reducerName => {
    reducerRegistry.register(reducerName, reducersToRegiser[reducerName]);
  });
  // Preserve initial state for not-yet-loaded reducers
  const combine = r => {
    const reducers = { ...r };
    const reducerNames = Object.keys(reducers);
    Object.keys(defaultReducers).forEach(item => {
      if (reducerNames.indexOf(item) === -1) {
        reducers[item] = (state = null) => state;
      }
    });
    return combineReducers(reducers);
  };
  // Get combined reducer from registry
  const reducer = combine(reducerRegistry.getReducers());
  let store;
  if (loadState) {
    store = createStore(reducer, loadState(), applyMiddleware(thunk));
  } else {
    store = createStore(reducer, applyMiddleware(thunk));
  }

  // Replace the store's reducer whenever a new reducer is registered.
  reducerRegistry.setChangeListener(reducers => store.replaceReducer(combine(reducers)));

  // Read site-config.json and add to redux store
  loadJSON(siteConfigUrl, config => addConfigToStore(store, config));
  return store;
}
