import { combineReducers } from 'redux';
import defaultConfig from './../config';
const options = window.gisidaOptions; // not sure how else to get this from the Host...

const initialLayersState = {
  layers: [],
  sectors: []
};

function updateLayers (sate = initialLayersState, action) {
  switch (action.type) {
    case 'CHANGE_LAYER':
      const { layer, status, map } = action;
      const layers = [...state.layers];

      if (state.layerData[layer].layers) {
        const groupedLayer = state.layerData[layer].layers;
        for (let i = 0; i < groupedLayer.length; i += 1) {
          layers.push({
            title: groupedLayer[i],
            visible: status,
            map,
          });
        }
      }

      layers.push({
        title: layer,
        visible: status,
        map,
      });

      state.layers = layers;
      return state;
    break;

    default:
      return state;
    break;
  }
}

const initialAppState = { // todo - initiate these with configs and options?
  sectorData: {},
  layerData: {},
  styles: {},
  appConfig: {},
  locations: {}
}

function appState (state = initialAppState, action) {
  switch (action.type) {
    default:
      return state;
    break;
  }
}

const Reducers = combineReducers({appState, updateLayers});

export default Reducers;
