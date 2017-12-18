export const initApp = config => ({
  type: 'INIT_APP',
  config,
});

export const initStyles = styles => ({
  type: 'INIT_STYLES',
  styles,
});

export const addLayer = layer => ({
  type: 'ADD_LAYER',
  layer,
});

export const toggleLayer = layerId => ({
  type: 'TOGGLE_LAYER',
  layerId,
});


export const requestData = layerId => ({
  type: 'REQUEST_DATA',
  layerId,
});

export const receiveData = layer => ({
  type: 'RECEIVE_DATA',
  layer,
});

export const mapLoaded = isLoaded => ({
  type: 'IS_LOADED',
  isLoaded,
});


export default {
  initApp,
  initStyles,
  addLayer,
  toggleLayer,
  requestData,
  receiveData,
  mapLoaded,
};
