import { combineReducers } from 'redux';
import detailViewReducer from './detailViewReducer';
import mapRenderedReducer from './mapRenderedReducer';
import mapLoadedReducer from './mapLoadedReducer';
import reloadLayersReducer from './reloadLayersReducer';
import currentStyleReducer from './currentStyleReducer';
import currentRegionReducer from './currentRegionReducer';
import layersReducer from './layersReducer';

export const createMapReducerCombined = combineReducers({
  detailView: detailViewReducer,
  isRendered: mapRenderedReducer,
  isLoaded: mapLoadedReducer,
  reloadLayers: reloadLayersReducer,
  currentStyle: currentStyleReducer,
  currentRegion: currentRegionReducer,
  layers: layersReducer,
});

export default { createMapReducerCombined };
