import { createStore, combineReducers } from 'redux';
import { initState, initApp, addLayer, initStyles} from './actions/Actions';
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
  
  function addLayerToStore(layer) {
    store.dispatch(addLayer(JSON.parse(layer)));
  }
  
  // Add config to redux store
  function addConfigToStore(config) {
    const initialState = JSON.parse(config);
    
    // Check if config has list of layers and add them to store
    if (initialState.LAYERS.length > 0) {
      initialState.LAYERS.map((layer) => {
        loadJSON(layer, addLayerToStore);
      });
    }

    store.dispatch(initApp(initialState.APP));
    store.dispatch(initStyles(initialState.STYLES));
  }

  // Read config.json and add to redux store
  loadJSON('config', addConfigToStore);
  return store;
}
