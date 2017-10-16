import { createStore } from 'redux';
import Reducers from './reducers/Reducers';
import config from './config';

function initStore(initialState = config) {
  return createStore(Reducers, initialState);
}

export default initStore;
