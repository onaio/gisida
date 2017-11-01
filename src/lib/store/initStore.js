import { createStore, combineReducers } from 'redux';
import { initState, initApp, addNode, initStyles} from './actions/Actions';
import defaultReducers from './reducers/reducers';
import { processNodes } from '../process/processNodes'
import { loadJSON }  from '../files/file';

export default function initStore (customReducers) {
  let reducers;
  if (customReducers) {
    reducers = combineReducers({...defaultReducers, ...customReducers});
  } else {
    reducers = combineReducers(defaultReducers);
  }

  // Create initial store
  const store = createStore(reducers);
  function addNodeToStore(node) {
    store.dispatch(addNode(JSON.parse(node)));
  }
  
  function addConfigToStore(config) {
    const initialState = JSON.parse(config);
    if (initialState.NODES.length > 0) {
      initialState.NODES.map((node) => {
        loadJSON(addNodeToStore, node);
      });
      
    }
    store.dispatch(initApp(initialState.APP));
    store.dispatch(initStyles(initialState.STYLES));
  }

  // Load initial state from config.json
  loadJSON(addConfigToStore, 'config');
  return store;
}
