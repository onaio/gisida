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

function REGIONS(state = defaultState.REGIONS, action) {
  switch (action.type) {
    case 'INIT_REGIONS': {
      const regions = action.regions ? action.regions.map((r) => {
        const region = r;
        if (
          region.center[0] === action.mapConfig.center[0] &&
          region.center[1] === action.mapConfig.center[1]) {
          region.current = true;
        }
        return region;
      }) : [];
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
        reloadLayers: true,
      };
    case 'STYLE_CHANGED':
      return {
        ...state,
        styleChanged: action.isStyleChanged,
      };

    case 'RELOAD_LAYERS':
      return {
        ...state,
        reloadLayers: action.reload,
      };
    case 'CHANGE_STYLE':
      return {
        ...state,
        currentStyle: action.style,
      };
    case 'ADD_LAYER': {
      const layers = {};
      layers[action.layer.id] = action.layer;
      const updatedLayers = { ...state.layers, ...layers };
      return {
        ...state,
        layers: updatedLayers,
      };
    }
    case 'TOGGLE_LAYER': {
      const { layerId } = action;
      const layer = state.layers[layerId];
      const updatedLayers = {
        ...state.layers,
        [layerId]: {
          ...layer,
          visible: !layer.visible,
        },
      };
      return {
        ...state,
        // Update visible property
        layers: updatedLayers,
        reloadLayers: Math.random(),
      };
    }
    case 'REQUEST_DATA': {
      const { layerId } = action;
      const layer = state.layers[layerId];
      const updatedLayers = {
        ...state.layers,
        [layerId]: {
          ...layer,
          isLoading: true,
          loaded: false,
        },
      };
      return {
        ...state,
        // Update isLoading property
        layers: updatedLayers,
      };
    }
    case 'RECEIVE_DATA': {
      const { layer } = action;
      const oldLayer = state.layers[layer.id];
      const updatedLayers = {
        ...state.layers,
        [layer.id]: Object.assign({}, oldLayer, layer, {
          source: layer.source,
          labels: layer.labels,
          isLoading: false,
          loaded: true,
          visible: true,
        }),
      };
      return {
        ...state,
        layers: updatedLayers,
        reloadLayers: Math.random(),
      };
    }
    default:
      return state;
  }
}

export default {
  APP, STYLES, MAP, REGIONS,
};
