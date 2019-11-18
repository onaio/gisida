import { combineReducers } from 'redux';
import detailViewReducer from './detailViewReducer';

export const createMapReducerCombined = combineReducers({
  detailView: detailViewReducer,
});

export default { createMapReducerCombined };
