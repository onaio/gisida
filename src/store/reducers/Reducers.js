import defaultState from '../defaultState';
import buildDetailView from '../../map/buildDetailView'; // todo - move this to a helpers folder?

function APP(state = defaultState.APP, action) {
  switch (action.type) {
    case 'INIT_APP':
      return {
        ...state,
        ...action.config,
        loaded: true,
      };
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
        // check if mapconfig center matches region center to set current region
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
        currentRegion: Math.random(),
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

    case 'CHANGE_REGION':
      return {
        ...state,
        currentRegion: action.region,
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
      if (layer.layers) {
        layer.layers.forEach((subLayerId) => {
          updatedLayers[subLayerId].visible = !layer.visible;
        });
      }
      return {
        ...state,
        // Update visible property
        activeLayerId: layerId,
        layers: updatedLayers,
        reloadLayers: Math.random(),
        primaryLayer: !layer.visible ? layer.id : state.primaryLayer,
        filter: {
          ...state.filter,
          layerId:
            !layer.visible && (layer.aggregate && layer.aggregate.filter) ?
              layerId : false,
        },
      };
    }

    case 'UPDATE_PRIMARY_LAYER':
      return {
        ...state,
        primaryLayer: action.primaryLayer,
      };

    case 'TOGGLE_FILTER': {
      return {
        ...state,
        showFilterPanel: !state.showFilterPanel,
      };
    }

    case 'DETAIL_VIEW': {
      const { properties, layerId } = action;
      const showDetailView = !!properties && !!layerId;
      const detailSpec = state.layers[layerId] && state.layers[layerId]['detail-view'];
      const detailView = showDetailView ? buildDetailView.build(detailSpec, properties) : null;

      return {
        ...state,
        showFilterPanel: showDetailView ? false : state.showFilterPanel,
        detailView: showDetailView ? {
          model: detailView,
          spec: { ...detailSpec },
          properties: { ...properties },
          layerId,
        } : null,
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
        [layer.id]: {
          ...oldLayer,
          ...layer,
          labels: layer.labels,
          isLoading: false,
          loaded: true,
        },
      };
      return {
        ...state,
        layers: updatedLayers,
        reloadLayers: Math.random(),
        timeseries: action.timeseries,
        visibleLayerId: layer.id,
      };
    }
    case 'UPDATE_TIMESERIES': {
      return {
        ...state,
        timeseries: action.timeseries,
      };
    }

    default:
      return state;
  }
}

export default {
  APP, STYLES, MAP, REGIONS,
};
