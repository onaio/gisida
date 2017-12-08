import { createStore, combineReducers } from 'redux';
import { initApp, addLayer, initStyles} from './actions/Actions';
import { processLayers } from '../utils/prepareLayer'
import { loadJSON } from '../utils/files';
import defaultReducers from './reducers/reducers';

export default function initStore (customReducers) {
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
    const initialState = JSON.parse(config);
    
    // Check if config has list of layers and add them to store
    if (initialState.LAYERS.length > 0 && initialState.APP.layersPath) {
      initialState.LAYERS.map((layer) => {
        // todo: check if `layer` is full URL e.g http://mydomailn/mylayer.json
        // and load it directly
        const path = `${initialState.APP.layersPath}/${layer}`;
        const addLayerToStore = function (resp) {
          const layerResp = JSON.parse(resp);
          layerResp.id = layer;
          store.dispatch(addLayer(layerResp));
        }
        loadJSON(path, addLayerToStore);
      });
    }

    store.dispatch(initApp(initialState.APP));
    store.dispatch(initStyles(initialState.STYLES));
  }

  // Read config.json and add to redux store
  loadJSON('config', addConfigToStore);
  return store;
}
