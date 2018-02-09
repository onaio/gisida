// import sortLayers from './sortLayers';
// import buildTimeseriesData from './buildTimeseriesData';
import generateStops from './generateStops';
import addChart from './addChart';
import addLegend from './addLegend';
import addLabels from './addLabels';

export default function addLayer(map, layer, mapConfig) {
  const timefield = (layer.aggregate && layer.aggregate.timeseries) ? layer.aggregate.timeseries.field : '';
  let stops;
  // let newStops;
  let circleLayer;
  let fillLayer;
  let lineLayer;
  let symbolLayer;

  if (layer === undefined) {
    return null;
  }

  const layerObj = layer;
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

    addLegend(layer, stopsData, Data, breaks, colors);
    addLabels(map, layer, Data);
  } else if (layer.credit && layer.categories && layer.categories.breaks === 'no') {
    addLegend(layer);
  } else {
    $('.legend-row.primary').removeClass('primary');
  }

  /*
   * CIRCLE ==========================================================
   */
  if (layer.type === 'circle') {
    circleLayer = {
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
      circleLayer.paint = layer.paint;
    }

    if (layer.source.minzoom) {
      circleLayer.minzoom = layer.source.minzoom;
    }
    if (layer.source.maxzoom) {
      circleLayer.maxzoom = layer.source.maxzoom;
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
        circleLayer.paint['circle-radius'] = {
          property: layer.source.join[0],
          stops: layerStops,
          type: 'categorical',
          default: stops ? 0 : 3,
        };
        circleLayer.source.url = layer.source.url;
        circleLayer['source-layer'] = layer.source.layer;
      } else if (layer.source.type === 'geojson') {
        if (stops) {
          circleLayer.paint['circle-radius'] = {
            property: layer.source.join[0],
            stops: stops[1][0],
          };
        }
        circleLayer.source.data = layer.source.data;
      }
    }
    // add filter
    if (layer.filter) {
      circleLayer.filter = layer.filter;
    }

    if (!map.getLayer(circleLayer.id)) map.addLayer(circleLayer);
    if (map.getLayer(circleLayer.id)) {
      map.setLayoutProperty(circleLayer.id, 'visibility', circleLayer.visible ? 'visible' : 'none');
    }
  }

  /*
   * FILL ==========================================================
   */
  if (layer.type === 'fill') {
    fillLayer = {
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
      fillLayer.paint = layer.paint;
    }
    if (layer.source.minzoom) {
      fillLayer.minzoom = layer.source.minzoom;
    }
    if (layer.maxzoom) {
      fillLayer.maxzoom = layer.maxzoom;
    }

    if (!(layer['no-outline'])) {
      fillLayer.paint['fill-outline-color'] = '#fff';
    }

    if (layer.source.type === 'geojson') {
      fillLayer.source.data = layer.source.data;
    } else {
      fillLayer.source.url = layer.source.url;
      fillLayer['source-layer'] = layer.source.layer;
    }

    if (layer.source.data && !layer.paint) {
      const layerStops = timefield ? stops[0][stops[1].length - 1] : stops[0][0];

      fillLayer.paint['fill-color'] = {
        property: layer.source.join[0],
        stops: layerStops,
        type: 'categorical',
        default: 'rgba(0,0,0,0)',
      };
    }
    // add filter
    if (layer.filter) {
      fillLayer.filter = layer.filter;
    }

    if (!map.getLayer(fillLayer.id)) map.addLayer(fillLayer);
    if (map.getLayer(fillLayer.id)) {
      map.setLayoutProperty(fillLayer.id, 'visibility', fillLayer.visible ? 'visible' : 'none');
    }
  }

  /*
   * LINE ==========================================================
   */
  if (layer.type === 'line') {
    lineLayer = {
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
      lineLayer.paint = layer.paint;
    }
    if (layer.source.minzoom) {
      lineLayer.minzoom = layer.source.minzoom;
    }
    if (layer.maxzoom) {
      lineLayer.maxzoom = layer.maxzoom;
    }
    if (layer.source.type === 'geojson') {
      lineLayer.source.data = layer.source.data;
    } else {
      lineLayer.source.url = layer.source.url;
      lineLayer['source-layer'] = layer.source.layer;
    }
    if (!map.getLayer(lineLayer.id)) map.addLayer(lineLayer);
    if (map.getLayer(lineLayer.id)) {
      map.setLayoutProperty(lineLayer.id, 'visibility', lineLayer.visible ? 'visible' : 'none');
    }
  }

  /*
   * SYMBOL ==========================================================
   */
  if (layer.type === 'symbol') {
    symbolLayer = {
      id: layer.id,
      visible: layer.visible,
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
      symbolLayer.filter = layer.filter;
    }

    if (layer.source.type === 'geojson') {
      if (layer.source.data.features
        && layer.source.data.features[0]
        && layer.source.data.features[0].geometry) {
        symbolLayer.source.data = layer.source.data;
      } else if (layer.properties && layer.properties.length) {
        symbolLayer.source.data = {
          type: 'FeatureCollection',
          features: layer.source.data.map((d) => {
            const propertiesMap = {};
            layer.properties.forEach((prop) => {
              propertiesMap[prop] = Number.isNaN(d[prop]) ? d[prop] : Number(d[prop]);
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
      symbolLayer.source.url = layer.source.url;
      symbolLayer['source-layer'] = layer.source.layer;
    }

    if (layer.categories && layer.categories.shape) {
      const iconStops = [];
      layer.categories.type.forEach((type, index) => {
        iconStops.push([type, layer.categories.shape[index]]);
      });
      symbolLayer.layout['icon-image'].stops = iconStops;
    }

    if (!map.getLayer(symbolLayer.id)) {
      if (layer['highlight-layout'] || layer['highlight-paint']) {
        const highlightLayer = Object.assign({}, symbolLayer);

        if (layer['highlight-layout']) {
          highlightLayer.layout = Object.assign({}, highlightLayer.layout, layer['highlight-layout']);
        }
        if (layer['highlight-paint']) {
          highlightLayer.paint = Object.assign({}, highlightLayer.paint, layer['highlight-paint']);
        }

        highlightLayer.id += '-highlight';
        highlightLayer.filter = ['==', 'Fixed Site Unique ID', ''];
        map.addLayer(highlightLayer);

        symbolLayer.filter = ['!=', 'Fixed Site Unique ID', ''];
      }

      map.addLayer(symbolLayer);
    }
    if (map.getLayer(symbolLayer.id)) {
      map.setLayoutProperty(symbolLayer.id, 'visibility', symbolLayer.visible ? 'visible' : 'none');
    }
  }
  /*
   * CHART ==========================================================
   */
  if (layer.type === 'chart') {
    let { data } = layer.source;
    if (timefield) {
      const period = [...new Set(layer.source.data.map(p => p[timefield]))];
      // newStops = { id: layer.id, period, timefield };
      data = layer.source.data.filter(d => d[timefield] === period[period.length - 1]);
    }
    addChart(map, layer, data);
  }

  // Generate layersObj
  // let layersObj = [];
  // for (let lo = 0; lo < this.state.layersObj.length; lo += 1) {
  //   if (this.state.layersObj[lo].id !== layer.id) {
  //     layersObj.push(this.state.layersObj[lo]);
  //   }
  // }
  // layersObj.push(layer);


  // sort the layers
  // sortLayers();

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

  // const timeseriesMap = buildTimeseriesData(newStops);
  // if (timeseriesMap[layer.id]) {
  //   let mbLayer;
  //   switch (layer.type) {
  //     case 'circle':
  //       mbLayer = circleLayer;
  //       break;
  //     case 'fill':
  //       mbLayer = fillLayer;
  //       break;
  //     case 'line':
  //       mbLayer = lineLayer;
  //       break;
  //     case 'symbol':
  //       mbLayer = symbolLayer;
  //       break;
  //     default:
  //       mbLayer = null;
  //   }
  //   timeseriesMap[layer.id].mapBoxLayer = mbLayer;
  // }

  // this.setState({
  //   layerObj,
  //   layersObj,
  //   stops: newStops,
  //   timeseries: Object.assign({}, this.state.timeseries, timeseriesMap),
  // });

  return map;
}
