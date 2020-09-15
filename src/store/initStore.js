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
export function addMapLayerToStore(layerObj, mapId, dispatch) {
  const layerToAdd = {
    ...layerObj,
    loaded: false,
  };
  // add layer to MAP.layers store
  dispatch(actions.addLayer(mapId, layerToAdd));

  // load and prepare layer if visible and not loaded
  if (layerToAdd.visible) {
    dispatch(actions.toggleLayer(mapId, layerToAdd.id, true));
    prepareLayer(mapId, layerToAdd, dispatch);
  }
}

/**
 * Get the map layer object for the given layer and add to store
 * @param {*} layer
 * @param {*} mapId
 * @param {*} dispatch
 */
export function getMapLayer(layer, mapId, dispatch, callback, layerObjLookUp) {
  // load json layer spec files
  if (typeof layer === 'string') {
    const existingLayerObj = layerObjLookUp[layer];

    if (existingLayerObj) {
      /**
       * If layer obj exists in the look up, no need to perform HTTP GET call,
       * use the layer object in the lookup
       */
      addMapLayerToStore(existingLayerObj, mapId, dispatch);
      callback(true, layer);
    } else {
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
            dispatch
          );
          callback(true, layer);
        } else {
          callback(false, layer);
        }
      });
    }
  } else if (layer instanceof Object && layer.type) {
    addMapLayerToStore(layer, mapId, dispatch);
    callback(true, layer.id);
  } else {
    Object.keys(layer).forEach(key => {
      layer[key].forEach(l => {
        getMapLayer(l, mapId, dispatch, callback, layerObjLookUp);
      });
    });
  }
}

export function loadLayers(mapId, dispatch, layers, layerObjLookUp = {}, store = null) {
  const layerIds = []; // lookup list for all ids that are to be added to store

  const addCategoriesToStore = (isLayerAdded, layer) => {
    if (mapId !== 'map-1') return;

    if (!isLayerAdded) {
      /**
       * If layer has not been added e.g if a 404 is returned, remove the layer from
       * the layerIds look up
       */
      const index = layerIds.indexOf(layer);

      if (index > -1) {
        layerIds.splice(index, 1);
      }
    }

    /**
     * If the number of layers in layerIds lookup matches the layers added in the store, i.e
     * we've finished adding the layers, then we can now build the categories
     */
    if (Object.keys(store.getState()[mapId].layers).length === layerIds.length) {
      dispatch(actions.buildCategories(store.getState().LAYERS, store.getState()[mapId]));
    }
  };

  if (Array.isArray(layers)) {
    if (mapId === 'map-1') {
      // add layers to store array. Done only when initialzing map-1
      dispatch(actions.addLayersList(layers));
    }

    // handle all layers
    layers.forEach(layer =>
      getMapLayer(layer, mapId, dispatch, addCategoriesToStore, layerObjLookUp)
    );
  } else {
    if (mapId === 'map-1') {
      /** Add groups and layers list when intializing map-1 only, no
       * need to do this for other maps
       */
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

      Object.keys(layers).forEach(key => {
        // Add layer ids for current group
        layers[key].forEach(addLayerId);
        // add layers to store array
        dispatch(actions.addLayersList(layers[key]));
        // add group to store object
        dispatch(actions.addLayerGroup(key, layers[key]));
      });
    }

    Object.keys(layers).forEach(key => {
      // handle layers from group
      layers[key].forEach(layer =>
        getMapLayer(layer, mapId, dispatch, addCategoriesToStore, layerObjLookUp)
      );
    });
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
  loadLayers('map-1', store.dispatch, config.LAYERS, {}, store);
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
