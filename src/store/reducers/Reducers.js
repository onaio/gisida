import defaultState from '../defaultState';

function APP(state = defaultState.APP, action) {
  switch (action.type) {
    case 'INIT_APP':
      return { ...state, ...action.config };
    default:
      return state;
  }
}

function STYLES(state = defaultState.STYLES, action) {
  switch (action.type) {
    case 'INIT_STYLES': {
      const styles = action.styles.map((s) => {
        const style = s;
        if (style.url === action.mapConfig.style) style.current = true;
        return style;
      });
      return styles;
    }
    case 'CHANGE_STYLE': {
      const updatedStyles = state.map((s) => {
        const style = s;
        if (action.style === style.url) {
          style.current = true;
        } else style.current = false;
        return style;
      });
      return updatedStyles;
    }
    default:
      return state;
  }
}

function LAYERS(state = defaultState.LAYERS, action) {
  switch (action.type) {
    case 'ADD_LAYER': {
      const updatedState = {};
      updatedState[action.layer.id] = action.layer;
      return { ...state, ...updatedState };
    }
    case 'TOGGLE_LAYER': {
      const { layerId } = action;
      const layer = state[layerId];
      return {
        ...state,
        // Update visible property
        [layerId]: {
          ...layer,
          visible: !layer.visible,
        },
      };
    }
    case 'REQUEST_DATA': {
      const { layerId } = action;
      const layer = state[layerId];
      return {
        ...state,
        // Update isLoading property
        [layerId]: {
          ...layer,
          isLoading: true,
          loaded: false,
        },
      };
    }
    case 'RECEIVE_DATA': {
      const { layer } = action;
      const oldLayer = state[layer.id];
      return {
        ...state,
        // Update isLoading property
        [layer.id]: {
          ...oldLayer,
          source: layer.source,
          labels: layer.labels,
          isLoading: false,
          loaded: true,
        },
      };
    }
    default:
      return state;
  }
}


function REGIONS(state = defaultState.REGIONS, action) {
  switch (action.type) {
    case 'INIT_REGIONS': {
      const regions = action.regions.map((r) => {
        const region = r;
        if (
          region.center[0] === action.mapConfig.center[0] &&
          region.center[1] === action.mapConfig.center[1]) {
          region.current = true;
        }
        return region;
      });
      return regions;
    }
    case 'CHANGE_REGION': {
      const updatedRegions = state.map((r) => {
        const region = r;
        if (action.region === region.name) {
          region.current = true;
        } else region.current = false;
        return region;
      });
      return updatedRegions;
    }
    default:
      return state;
  }
}

function MAP(state = defaultState.MAP, action) {
  let activeLayers;
  let activeLayerKeys;
  let processedLayers;
  let layersToRemove;
  let layersToAdd;

  switch (action.type) {
    case 'MAP_RENDERED':
      return {
        ...state,
        isRendered: true,
      };
    case 'MAP_LOADED':
      return {
        ...state,
        isLoaded: true,
      };
    case 'STYLE_CHANGED':
      return {
        ...state,
        styleChanged: action.isStyleChanged,
      };
    case 'CHANGE_STYLE':
      return {
        ...state,
        currentStyle: action.style,
      };
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
      });
      return {
        ...state,
        processedLayers,
        activeLayers,
        layersToAdd,
      };
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
    case 'LAYERS_REMOVED':
      return {
        ...state,
        layersToRemove: [],
      };
    case 'LAYERS_ADDED':
      return {
        ...state,
        layersToAdd: [],
      };
    default:
      return state;
  }
}

export default {
  APP, LAYERS, STYLES, MAP, REGIONS,
};
