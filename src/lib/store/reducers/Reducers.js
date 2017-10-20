import { combineReducers } from 'redux';

const defaultState = {
  "APP": {
    "mapConfig": {
      "container": "map",
      "style": "",
      "center": [
        0,
        0
      ],
      "zoom": 5
    },
    "accessToken": false,
    "appIcon": "gisida-sample.png",
    "appName": "React Gisida"
  },
  "NODES": [

  ],
  "STYLES": [
    {
      "label": "Satelitte",
      "style": "mapbox: //styles/mapbox/satellite-v9"
    },
    {
      "label": "Satelitte Streets",
      "style": "mapbox: //styles/mapbox/satellite-streets-v9"
    }
  ]
}

const initialLayersState = {
  layers: [],
  sectors: []
};

function APP(state = {}, action) {
  switch (action.type) {
    case 'INIT_APP':
      return Object.assign({}, state, action.config)
    default:
      return state;
      break;
  }
}


function STYLES(state = [], action) {
  switch (action.type) {
    case 'INIT_STYLES':
      return [...state, ...action.styles.slice(0)]
    case 'CHANGE_STYLE':
      state.map((style) => { 

        // if (style.style===action.style)

      } ) 
     return state  
    default:
      return state;
      break;
  }
}

function NODES(state = [], action) {
  switch (action.type) { 
    case 'ADD_NODE': 
      return [...state, action.node]
    default:
      return state;
      break;
  }
}

function PROCESSED_NODES(state = defaultState, action) {
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

const reducers = combineReducers({ APP, NODES, STYLES  });

export default reducers;
