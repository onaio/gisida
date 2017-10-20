import { createStore } from 'redux';
import { initState, initApp, addNode, initStyles} from './actions/Actions';
import reducers from './reducers/reducers';
import { processNodes } from '../process/processNodes'
import { loadJSON }  from '../files/file';

export default function () {

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

  
  return store
}
