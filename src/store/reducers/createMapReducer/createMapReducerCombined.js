import { combineReducers } from 'redux';
import detailViewReducer from './detailViewReducer';
import mapRenderedReducer from './mapRenderedReducer';
import mapLoadedReducer from './mapLoadedReducer';
import reloadLayersReducer from './reloadLayersReducer';
import currentStyleReducer from './currentStyleReducer';
import currentRegionReducer from './currentRegionReducer';
import layersReducer from './layersReducer';
import defaultLayersReducer from './defaultLayersReducer';
import oldLayerObjsReducer from './oldLayerObjsReducer';
import showSpinnerReducer from './showSpinnerReducer';
import menuReducer from './menuReducer';
import categoriesReducer from './categoriesReducer';
import timeSeriesReducer from './timeSeriesReducer';

export const createMapReducerCombined = combineReducers({
  detailView: detailViewReducer,
  isRendered: mapRenderedReducer,
  isLoaded: mapLoadedReducer,
  reloadLayers: reloadLayersReducer,
  currentStyle: currentStyleReducer,
  currentRegion: currentRegionReducer,
  layers: layersReducer,
  defaultLayers: defaultLayersReducer,
  oldLayerObjs: oldLayerObjsReducer,
  showSpinner: showSpinnerReducer,
  menuIsOpen: menuReducer,
  openCategories: categoriesReducer,
  timeseries: timeSeriesReducer,
});

export default { createMapReducerCombined };
