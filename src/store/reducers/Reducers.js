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
  "LAYERS": [

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

const defaultMapState = {
  isLoaded: false,
  processedLayers: {},
  activeLayers: {},
  layersToRemove: [],
  layersToAdd: [],
};

const initialLayersState = {
  layers: [],
  sectors: []
};

// todo - set this default state to defaultState.APP
function APP(state = {}, action) {
  switch (action.type) {
    case 'INIT_APP':
      return Object.assign({}, state, action.config) // todo - change to spread opperator
    default:
      return state;
      break;
  }
}

// todo - set this default state to defaultState.STYLES
function STYLES(state = [], action) {
  switch (action.type) {
    case 'INIT_STYLES':
      return [...state, ...action.styles.slice(0)]
    case 'CHANGE_STYLE':
      state.map((style) => { 

        // if (style.style===action.style)

      } ) 
     return state;
    default:
      return state;
      break;
  }
}

function LAYERS(state = [], action) {
  switch (action.type) { 
    case 'ADD_LAYER': 
      // todo - process node into layer?
      return [...state, action.layer]
    default:
      return state;
      break;
  }
}
// todo - add TIMESERIES reducer
// todo - scope down the default state to only include layers
// todo - update this with latest from App.jsx to avoid runaway layers
// todo - simplify this to 'toggle node'; include in LAYERS reducer
function PROCESSED_LAYERS(state = defaultState, action) {
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

function MAP(state = defaultMapState, action) {
  let activeLayers;
  let activeLayerKeys;
  let processedLayers;
  let layersToRemove;
  let layersToAdd;

  switch (action.type) {
    case 'IS_LOADED':
      return {
        ...state,
        isLoaded: true,
      };
      break;

    case 'ADD_LAYERS':
      processedLayers = { ...state.processedLayers };
      activeLayers = { ...state.activeLayers };
      layersToAdd = [];

      action.layers.forEach((l) => {
        processedLayers[l.id] = l;
        if (!Object.keys(activeLayers).includes(l.id)) {
          layersToAdd.push(l.id);
        }
        activeLayers[l.id] = l;
      })
      return {
        ...state,
        processedLayers,
        activeLayers,
        layersToAdd,
      };
      break;

    case 'REMOVE_LAYERS':
      activeLayerKeys = Object.keys(state.activeLayers);
      activeLayers = {};
      layersToRemove = [];

      activeLayerKeys.forEach((l) => {
        if (!action.layers.includes(l)) {
          activeLayers[l] = { ...state.activeLayers[l] };
        } else {
          layersToRemove.push(l);
        }
      });

      return {
        ...state,
        activeLayers,
        layersToRemove,
      };
      break;

    case 'LAYERS_REMOVED':
      return {
        ...state,
        layersToRemove: [],
      };
      break;

    case 'LAYERS_ADDED':
      return {
        ...state,
        layersToAdd: [],
      };
      break;

    default:
      return state;
      break;
  }
}

// export function LAYERS(state, action) {
//   switch (action.type) {
//     case 'CIRCLE_LAYER':

//       break;

//     default:
//       return state;
//       break;
//   }
// }

export default { APP, LAYERS, STYLES, MAP };
