import generateStops from './generateStops';
import { isNumber } from '../utils/files';


export default function addLayer(layer, mapConfig) {
  const layerObj = { ...layer };
  layerObj.filters = layerObj.filters || {};
  const timefield = (layer.aggregate && layer.aggregate.timeseries) ? layer.aggregate.timeseries.field : '';
  let stops;
  let styleSpec;


  if (layer === undefined) {
    return null;
  }

  if (typeof layerObj.isChartMin === 'undefined') {
    layerObj.isChartMin = true;
    layerObj.legendBottom = 40;
  }

  if (layer.property) {
    stops = generateStops(layer, timefield);
  }

  if (stops) {
    // newStops = { stops, id: layer.id };
    const colorStops = timefield ? stops[0][stops[0].length - 1] : stops[0][0];
    const radiusStops = stops[1][0];
    const stopsData = layer.type === 'circle' ? radiusStops : colorStops;
    const breaks = stops[3];
    const colors = stops[4];
    const currPeriod = stops[2][stops[2].length - 1];
    const currData = layer.source.data.filter(data => data[timefield] === currPeriod);
    const Data = timefield ? currData : layer.source.data;


    layerObj.stopsData = stopsData;
    layerObj.breaks = breaks;
    layerObj.colors = colors;
    layerObj.Data = Data;
    layerObj.stops = stops;
  } else {
    $('.legend-row.primary').removeClass('primary');
  }

  /*
   * CIRCLE ==========================================================
   */
  if (layer.type === 'circle') {
    styleSpec = {
      id: layer.id,
      visible: layer.visible,
      type: 'circle',
      source: {
        type: layer.source.type,
      },
      layout: {},
      paint: {
        'circle-color': (layer.categories.color instanceof Array && !layer.paint) ?
          {
            property: layer.source.join[0],
            stops: timefield ? stops[0][stops[0].length - 1] : stops[0][0],
            type: 'categorical',
          } :
          layer.categories.color,
        'circle-opacity': 0.8,
        'circle-stroke-color': '#fff',
        'circle-stroke-width': (layer.categories.color instanceof Array && !layer.paint) ?
          {
            property: layer.source.join[0],
            stops: timefield ? stops[5][stops[5].length - 1] : stops[5][0],
            type: 'categorical',
            default: 0,
          } :
          1,
        'circle-stroke-opacity': 1,
      },
    };

    // override from layers.json
    if (layer.paint) {
      styleSpec.paint = layer.paint;
    }

    if (layer.source.minzoom) {
      styleSpec.minzoom = layer.source.minzoom;
    }
    if (layer.source.maxzoom) {
      styleSpec.maxzoom = layer.source.maxzoom;
    }

    if (layer.source.data) {
      if (layer.source.type === 'vector') {
        let layerStops;
        // eslint doesnt allow nested ternary expressions
        if (stops) {
          if (timefield) {
            layerStops = stops[1][stops[1].length - 1];
          } else {
            const [, second] = stops;
            const [first] = second;
            layerStops = first;
          }
        } else {
          layerStops = [[0, 0]];
        }
        styleSpec.paint['circle-radius'] = {
          property: layer.source.join[0],
          stops: layerStops,
          type: 'categorical',
          default: stops ? 0 : 3,
        };
        styleSpec.source.url = layer.source.url;
        styleSpec['source-layer'] = layer.source.layer;
      } else if (layer.source.type === 'geojson') {
        if (stops) {
          styleSpec.paint['circle-radius'] = {
            property: layer.source.join[0],
            stops: stops[1][0],
          };
        }
        styleSpec.source.data = layer.source.data;
      }
    }
    // add filter
    if (layer.filter) {
      styleSpec.filter = layer.filter;
    }
  }

  /*
   * FILL ==========================================================
   */
  if (layer.type === 'fill') {
    styleSpec = {
      id: layer.id,
      visible: layer.visible,
      type: 'fill',
      source: {
        type: layer.source.type,
      },
      layout: {},
      paint: {
        'fill-color': '#f00',
        'fill-opacity': 0.7,
      },
    };

    // override from layers.json
    if (layer.paint) {
      styleSpec.paint = layer.paint;
    }
    if (layer.source.minzoom) {
      styleSpec.minzoom = layer.source.minzoom;
    }
    if (layer.maxzoom) {
      styleSpec.maxzoom = layer.maxzoom;
    }

    if (!(layer['no-outline'])) {
      styleSpec.paint['fill-outline-color'] = '#fff';
    }

    if (layer.source.type === 'geojson') {
      styleSpec.source.data = layer.source.data;
    } else {
      styleSpec.source.url = layer.source.url;
      styleSpec['source-layer'] = layer.source.layer;
    }

    if (layer.source.data && !layer.paint) {
      const layerStops = timefield ? stops[0][stops[1].length - 1] : stops[0][0];

      styleSpec.paint['fill-color'] = {
        property: layer.source.join[0],
        stops: layerStops,
        type: 'categorical',
        default: 'rgba(0,0,0,0)',
      };
    }
    // add filter
    if (layer.filter) {
      styleSpec.filter = layer.filter;
    }
  }

  /*
   * LINE ==========================================================
   */
  if (layer.type === 'line') {
    styleSpec = {
      id: layer.id,
      type: 'line',
      visible: layer.visible,
      source: {
        type: layer.source.type,
      },
      layout: {},
      paint: {
        'line-color': '#f00',
        'line-width': 1,
      },
    };
    if (layer.paint) {
      styleSpec.paint = layer.paint;
    }
    if (layer.source.minzoom) {
      styleSpec.minzoom = layer.source.minzoom;
    }
    if (layer.maxzoom) {
      styleSpec.maxzoom = layer.maxzoom;
    }
    if (layer.source.type === 'geojson') {
      styleSpec.source.data = layer.source.data;
    } else {
      styleSpec.source.url = layer.source.url;
      styleSpec['source-layer'] = layer.source.layer;
    }
  }

  /*
   * SYMBOL ==========================================================
   */
  if (layer.type === 'symbol') {
    styleSpec = {
      id: layer.id,
      type: 'symbol',
      source: {
        type: layer.source.type,
      },
      minzoom: layer.source.minzoom ? layer.source.minzoom : mapConfig.zoom,
      maxzoom: layer.source.maxzoom ? layer.source.maxzoom : 22,
      layout: layer.layout,
      paint: layer.paint,
    };

    // add filter
    if (layer.filter) {
      styleSpec.filters.base = layer.filter;
    }

    if (layer.source.type === 'geojson') {
      if (layer.source.data.features
        && layer.source.data.features[0]
        && layer.source.data.features[0].geometry) {
        styleSpec.source.data = layer.source.data;
      } else if (layer.properties && layer.properties.length) {
        styleSpec.source.data = {
          type: 'FeatureCollection',
          features: layer.source.data.map((d) => {
            const propertiesMap = {};
            layer.properties.forEach((prop) => {
              propertiesMap[prop] = isNumber(d[prop]) ? d[prop] : Number(d[prop]);
            });
            return {
              type: 'Feature',
              properties: propertiesMap,
              geometry: {
                type: 'Point',
                coordinates: [Number(d.Longitude), Number(d.Latitude)],
              },
            };
          }),
        };
      }
    } else {
      styleSpec.source.url = layer.source.url;
      styleSpec['source-layer'] = layer.source.layer;
    }

    if (layer.categories && layer.categories.shape) {
      const iconStops = [];
      layer.categories.type.forEach((type, index) => {
        iconStops.push([type, layer.categories.shape[index]]);
      });
      styleSpec.layout['icon-image'].stops = iconStops;
    }

    if (layer['highlight-filter-property']
      && (layer['highlight-layout'] || layer['highlight-paint'])) {
      layerObj.filters.rHighlight = ['!=', layer['highlight-filter-property'], ''];
      layerObj.filters.highlight = ['==', layer['highlight-filter-property'], ''];
    }
  }
  /*
   * CHART ==========================================================
   */
  // if (layer.type === 'chart') {
  //   let { data } = layer.source;
  //   if (timefield) {
  //     const period = [...new Set(layer.source.data.map(p => p[timefield]))];
  //     newStops = { id: layer.id, period, timefield };
  //     data = layer.source.data.filter(d => d[timefield] === period[period.length - 1]);
  //   }
  //   addChart(map, layer, data);
  // }

  // Generate layersObj
  // let layersObj = [];
  // for (let lo = 0; lo < this.state.layersObj.length; lo += 1) {
  //   if (this.state.layersObj[lo].id !== layer.id) {
  //     layersObj.push(this.state.layersObj[lo]);
  //   }
  // }
  // layersObj.push(layer);

  // disallow multiple fill layers on the map (todo - convert filters to nested for loops)
  // let id;
  // const filterLayerObjs = lo => lo.id !== id;
  // const filterActiveLayers = lo => lo !== id;
  // for (let l = 0; l < this.state.layersObj.length; l += 1) {
  //   if (this.state.layersObj[l].type === 'fill') {
  //     id = this.state.layersObj[l].id;
  //     if (map.getLayer(id)) {
  //       map.removeLayer(id);
  //       if (map.getSource(id)) {
  //         map.removeSource(id);
  //       }
  //       this.removeLabels(this.state.layersObj[l]);
  //       this.removeLegend(this.state.layersObj[l]);
  //       layersObj = layersObj.filter(filterLayerObjs);
  //       self.activeLayers = self.activeLayers.filter(filterActiveLayers);
  //     }
  //   }
  // }


  // this.setState({
  //  - layerObj,
  //   - layersObj,
  //   stops: newStops,
  //   timeseries: Object.assign({}, this.state.timeseries, timeseriesMap),
  // });

  layerObj.styleSpec = styleSpec;

  // layerObj.timeseries = Object.assign({}, this.state.timeseries, timeseriesMap)
  return layerObj;
}
