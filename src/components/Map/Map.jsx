/* global mapboxgl */
import React from 'react';
import Highcharts from 'highcharts';
import * as d3 from 'd3';
import ss from 'simple-statistics';
import Mustache from 'mustache';
import PropTypes from 'prop-types';
import generateStops from '../../includes/generateStops';
import fetchData from '../../includes/fetchData';
import { formatNum, getLastIndex } from '../../includes/utils';
import aggregateData from '../../includes/aggregateData';
import { processFilters, generateFilterOptions } from '../../includes/filterUtils';
import TimeSeriesSlider from '../Controls/TimeSeriesSlider/TimeSeriesSlider';
import FilterSelector from '../Controls/FilterSelector/FilterSelector';
import StyleSelector from '../Controls/StyleSelector/StyleSelector';
import Export from '../Export/Export';

require('./Map.scss');


const activeLayers = [];

class Map extends React.Component {
  static drawDoughnutChart(container, data, dimension) {
    Highcharts.chart(container, {
      chart: {
        type: 'pie',
        spacing: 0,
        backgroundColor: 'transparent',
        height: dimension,
        width: dimension,
      },
      title: {
        text: '',
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        enabled: false,
        backgroundColor: 'rgba(255,255,255,0)',
        borderWidth: 0,
        shadow: false,
        useHTML: true,
        formatter() {
          if (this.point.options.label !== undefined) {
            return `<div class="chart-Tooltip"><b>${this.point.options.label}: 
            ${this.point.options.y.toFixed(0)}%</b></div>`;
          }
          return '';
        },
      },
      plotOptions: {
        series: {
          animation: true,
          states: {
            hover: {
              enabled: false,
            },
          },
        },
        pie: {
          allowPointSelect: false,
          // borderWidth: 0,
          borderColor: '#fff',
          dataLabels: {
            enabled: false,
            distance: 80,
            crop: false,
            overflow: 'none',
            formatter() {
              if (this.point.scoreLabel !== undefined) {
                return `<b>${this.point.label}</b>`;
              }
              return '';
            },
            style: {
              fontWeight: 'bold',
            },
          },
          center: ['50%', '50%'],
        },
      },
      series: data,
    });
  }

  constructor(props) {
    super(props);
    this.changeStyle = this.changeStyle.bind(this);
    this.filterData = this.filterData.bind(this);
    this.state = {
      layers: props.layers.layers,
      layersObj: [],
      style: this.props.mapConfig.mapDefaultStyle,
      styles: props.styles,
      layerObj: this.props.layerData,
    };
  }

  componentDidMount() {
    mapboxgl.accessToken = this.props.mapConfig.mapAccessToken;
    this.map = new mapboxgl.Map({
      container: this.props.mapId,
      style: this.state.style,
      center: this.props.mapConfig.mapCenter,
      zoom: this.props.mapConfig.mapZoom,
    });
    window.maps.push(this.map);
    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.on('load', () => {
      this.addDefaultLayers();
      // this.addMousemoveEvent();
    });
  }

  componentWillReceiveProps(nextProps) {
    this.map.resize();
    if (nextProps.layers.layers.length > 0) {
      let l = nextProps.layers.layers.length - 1;
      const layers = nextProps.layers.layers;
      const layerData = nextProps.layerData;
      this.setState({
        layers,
        layerData,
      });
      if (nextProps.layers.layers[l].visible === true
        && nextProps.layers.layers[l].map === this.props.mapId) {
        this.prepareLayer(nextProps.layers.layers[l], nextProps.layerData);
      }
      l = (nextProps.layers.layers[l].type === 'radio' && nextProps.layers.layers.length > 1) ?
        l - 1 : l;
      if (nextProps.layers.layers[l].visible === false
        && nextProps.layers.layers[l].map === this.props.mapId
        && nextProps.layers.layers[l].title !== nextProps.layers.layers[l + 1].title) {
        this.removeLayer(nextProps.layers.layers[l]);
      }
    }
  }

  componentDidUpdate() {
    this.addTimeseriesLayers();
    this.addMousemoveEvent();
  }

  getSliderLayers() {
    const sliderIds = [];
    Object.keys(this.props.layerData).forEach((key) => {
      sliderIds.push(key);
    });

    const sliderLayers = [];
    for (let i = 0; i < sliderIds.length; i += 1) {
      if ('aggregate' in this.props.layerData[sliderIds[i]] &&
        'timeseries' in this.props.layerData[sliderIds[i]].aggregate) {
        sliderLayers.push(sliderIds[i]);
      }
    }
    return sliderLayers;
  }

  prepareLayer(layer, layerObj, filterOptions = false) {
    const self = this;
    const layerId = layer.title || layer.id;
    const layerData = layerObj[layerId];
    layerData.id = layerId;

    if (layerData.popup && layerData.type !== 'chart') {
      activeLayers.push(layerData.id);
    }

    function renderData(layerProp) {
      if (!(layerProp.labels)) {
        self.addLayer(layerProp);
      } else {
        d3.csv(layerProp.labels.data, (labels) => {
          layerProp.labels.data = labels;
          self.addLayer(layerProp);
        });
      }
    }

    function readData(layerProp, source) {
      const fileType = source.split('.').pop();
      if (fileType === 'csv') {
        d3.csv(layerProp.source.data, (data) => {
          layerData.source.data = data;
          layerData.mergedData = data;
          if (layerData.aggregate && layerData.aggregate.filter) {
            generateFilterOptions(layerData);
          }
          renderData(layerProp);
        });
      }
      if (fileType === 'geojson') {
        d3.json(layerProp.source.data, (data) => {
          if (layerProp.region) {
            data.features = data.features.filter(feature => feature.properties.Country === layerProp.country);
            layerProp.source.data = data;
          } else layerProp.source.data = data;
          renderData(layerProp);
        });
      }
    }

    // if layer has source
    if (layerData.source) {
      // if not processed, grab the csv or geojson data
      if (typeof layerData.source.data === 'string') {
        readData(layerData, layerData.source.data);
      } else if (layerData.source.data instanceof Array &&
        !(layerData.source.data[0] instanceof Object) &&
        layerData.source.data.length >= 1 &&
        !layerData.loaded) {
        let q = d3.queue();
        const filePaths = layerData.source.data;
        filePaths.forEach((filePath) => {
          if (Number.isInteger(filePath)) {
            q = q.defer(fetchData, self, filePath, layerData.property);
          } else q = q.defer(d3.csv, filePath);
        });
        q.awaitAll((error, data) => {
          const mergedData = [].concat(...data);
          layerData.mergedData = mergedData;
          if (layerData.aggregate && layerData.aggregate.filter) {
            generateFilterOptions(layerData);
          }
          layerData.source.data = layerData.aggregate.type ?
            aggregateData(layerData, this.props.locations) : mergedData;
          layerData.loaded = true;
          renderData(layerData);
        });
      } else if (filterOptions) {
        layerData.source.data =
          layerData.aggregate.type ?
            aggregateData(layerData, this.props.locations, filterOptions) :
            processFilters(layerData, filterOptions);
        self.addLayer(layerData);
      } else if (typeof layerData.labels.data === 'string') {
        const fileName = layerData.labels.data;
        const fileType = fileName.split('.').pop();
        if (fileType === 'csv') {
          renderData(layerData);
        }
      } else {
        // add the already processed layer
        self.addLayer(layerData);
      }
    } else if (layerData.layers) {
      // if layer has sublayers, add all sublayers
      self.addLegend(layerData);
      layerData.layers.forEach((sublayer) => {
        const subLayer = this.props.layerData[sublayer];
        subLayer.id = sublayer;
        if (typeof subLayer.source.data === 'string') {
          readData(subLayer, subLayer.source.data);
        } else {
          self.addLayer(subLayer);
        }
      });
    }
  }

  addLayer(layer) {
    const self = this;
    const timefield = (layer.aggregate && layer.aggregate.timeseries) ? layer.aggregate.timeseries.field : '';
    let stops;

    if (layer === undefined) {
      return null;
    }

    if (this.map.getLayer(layer.id) || this.map.getSource(layer.id)) {
      this.removeLayer(layer);
    }

    const layerObj = layer;
    const layersObj = [...this.state.layersObj, layer];
    this.setState({
      layerObj,
      layersObj,
    });

    if (layer.property) {
      stops = generateStops(layer, timefield);
    }

    if (stops) {
      this.setState({ stops: { stops, id: layer.id } });
      const colorStops = timefield ? stops[0][stops[0].length - 1] : stops[0][0];
      const radiusStops = stops[1][0];
      const stopsData = layer.type === 'circle' ? radiusStops : colorStops;
      const breaks = stops[3];
      const colors = stops[4];
      const currPeriod = stops[2][stops[2].length - 1];
      const currData = layer.source.data.filter(data => data[timefield] === currPeriod);
      const Data = timefield ? currData : layer.source.data;

      this.addLegend(layer, stopsData, Data, breaks, colors);
      this.addLabels(layer, Data);
    } else if (layer.credit && layer.categories.breaks === 'no') {
      this.addLegend(layer);
      this.addLabels(layer, layer.source.data);
    }

    /*
     * CIRCLE ==========================================================
     */
    if (layer.type === 'circle') {
      const circleLayer = {
        id: layer.id,
        type: 'circle',
        source: {
          type: layer.source.type,
        },
        layout: {},
        paint: {
          'circle-color':
          ((layer.categories.color instanceof Array && !layer.paint) ||
            (layer.color && layer.color === 'string')) && stops ?
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

      if (layer.source.data) {
        if (layer.source.type === 'vector') {
          const layerStops = stops ?
            timefield ? stops[1][stops[1].length - 1] : stops[1][0] :
            [[0, 0]];
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
            circleLayer.source.data = layer.source.data;
          } else {
            circleLayer.source.data = layer.source.data;
            circleLayer.paint['circle-radius'] = 10;
            circleLayer.paint['circle-color'] = layer.color[0];
          }
        }
      }
      // add filter
      if (layer.filter) {
        circleLayer.filter = layer.filter;
      }
      this.map.addLayer(circleLayer);
    }

    /*
     * FILL ==========================================================
     */
    if (layer.type === 'fill') {
      const fillLayer = {
        id: layer.id,
        type: 'fill',
        source: {
          type: layer.source.type,
        },
        layout: {},
        paint: {
          'fill-color': 'transparent',
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

      if (layer.source.data) {
        const layerStops = timefield ? stops[0][stops[1].length - 1] : stops ? stops[0][0] : [[0, 'rgba(0,0,0,0)']];
        const Stops = layer.source.stops ? layer.source.stops : layerStops;

        // TODO: refactor to use fill pattern after https://github.com/mapbox/mapbox-gl-js/issues/2732
        // is impelemented.
        if (layer['use-fill-pattern']) {
          fillLayer.type = 'symbol';
          fillLayer.paint = {};
          if (layer.source.type === 'geojson') {
            fillLayer.layout = layer.layout;
          } else {
            fillLayer.layout = {
              'icon-image': {
                property: layer.source.join[0],
                stops: Stops,
                type: 'categorical',
                default: 'rgba(0,0,0,0)',
              },
            };
          }
        } else {
          fillLayer.paint['fill-color'] = {
            property: layer.source.join[0],
            stops: Stops,
            type: 'categorical',
            default: 'rgba(0,0,0,0)',
          };
        }
      }

      // add filter
      if (layer.filter) {
        fillLayer.filter = layer.filter;
      }

      this.map.addLayer(fillLayer);
    }

    /*
     * LINE ==========================================================
     */
    if (layer.type === 'line') {
      const lineLayer = {
        id: layer.id,
        type: 'line',
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
      this.map.addLayer(lineLayer);
    }

    /*
     * SYMBOL ==========================================================
     */
    if (layer.type === 'symbol') {
      const symbolLayer = {
        id: layer.id,
        type: 'symbol',
        source: {
          type: layer.source.type,
        },
        minzoom: layer.source.minzoom ? layer.source.minzoom : this.props.mapConfig.mapZoom,
        maxzoom: layer.source.maxzoom ? layer.source.maxzoom : 22,
        layout: layer.layout,
        paint: layer.paint,
      };

      // add filter
      if (layer.filter) {
        symbolLayer.filter = layer.filter;
      }

      if (layer.source.type === 'geojson') {
        symbolLayer.source.data = layer.source.data;
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

      this.map.addLayer(symbolLayer);
    }
    /*
     * CHART ==========================================================
     */
    if (layer.type === 'chart') {
      let data = layer.source.data;
      if (timefield) {
        const period = [...new Set(layer.source.data.map(p => p[timefield]))];
        this.setState({ stops: { id: layer.id, period, timefield } });
        data = layer.source.data.filter(d => d[timefield] === period[period.length - 1]);
      }
      this.addChart(layer, data);
    }

    // sort the layers
    self.sortLayers();

    return null;
  }

  addChart(layer, data) {
    const population = data.map(d => d[layer.categories.total]);
    const clusters = ss.ckmeans(population, layer.categories.clusters);

    // create a DOM element for the marker
    data.forEach((district) => {
      const total = district[layer.categories.total];
      const chartArr = [];
      let chartProp = '';
      let propTotal = 0;
      let dimension;

      if (layer.categories.title) {
        chartProp += `<div><b>${district[layer.categories.title]}</b></div>`;
      }

      if (layer.categories['total-label']) {
        chartProp += `<div>${layer.categories['total-label']}: <b>${total}</b></div>`;
      }

      for (let i = 0; i < layer.categories.property.length; i += 1) {
        chartArr.push({
          color: layer.categories.color[i],
          y: parseInt(district[layer.categories.property[i]] / total * 100, 10),
          label: layer.categories.label[i],
        });
        propTotal += parseInt(district[layer.categories.property[i]] / total * 100, 10);
        chartProp += `<div><span class="swatch" style="background: ${layer.categories.color[i]};"></span>
          ${layer.categories.label[i]}: 
          <b>${(district[layer.categories.property[i]] / total * 100).toFixed(1)}%</b></div>`;
      }

      if (layer.categories.difference) {
        chartProp +=
          `<div><span class="swatch" style="background: ${layer.categories.difference[1]};"></span>
            ${layer.categories.difference[0]}: <b>${(100 - propTotal).toFixed(1)}%</b></div>`;
        chartArr.splice(0, 0, {
          color: layer.categories.difference[1],
          y: (100 - propTotal),
          label: layer.categories.difference[0],
        });
      }

      for (let i = 0; i < clusters.length; i += 1) {
        if (clusters[i].includes(total)) {
          dimension = layer.categories.dimension[i];
        }
      }

      const chartData = [{
        data: chartArr,
        size: layer.chart.size,
        innerSize: layer.chart.innerSize,
      }];

      const content = `<div><b>${district[layer.source.join[1]]}</b></div>${chartProp}`;

      const el = document.createElement('div');
      el.id = `chart-${district[layer.source.join[1]]}-${layer.id}-${this.props.mapId}`;
      el.className = `marker-chart marker-chart-${layer.id}-${this.props.mapId}`;
      el.style.width = layer.chart.width;
      el.style.height = layer.chart.height;
      $(el).attr('data-map', this.props.mapId);
      $(el).attr('data-lng', district[layer.chart.coordinates[0]]);
      $(el).attr('data-lat', district[layer.chart.coordinates[1]]);
      $(el).attr('data-popup', content);

      // add marker to map
      new mapboxgl.Marker(el, {
        offset: layer.chart.offset,
      })
        .setLngLat([district[layer.chart.coordinates[0]], district[layer.chart.coordinates[1]]])
        .addTo(this.map);

      const container = $(`#chart-${district[layer.source.join[1]]}-${layer.id}-${this.props.mapId}`)[0];
      Map.drawDoughnutChart(container, chartData, dimension);
    });
  }

  sortLayers() {
    const self = this;
    const layerData = this.props.layerData;

    Object.keys(layerData).forEach((key) => {
      if (layerData[key].type === 'line') {
        if (self.map.getLayer(key)) {
          self.map.moveLayer(key);
        }
      }
    });

    Object.keys(layerData).forEach((key) => {
      if (layerData[key].type === 'circle') {
        if (self.map.getLayer(key)) {
          self.map.moveLayer(key);
        }
      }
    });

    Object.keys(layerData).forEach((key) => {
      if (layerData[key].type === 'symbol') {
        if (self.map.getLayer(key)) {
          self.map.moveLayer(key);
        }
      }
    });
  }

  removeLayer(layer) {
    const layerId = layer.title || layer.id;
    const layerData = this.props.layerData[layerId];

    if (layerData.layers) {
      layerData.layers.forEach((sublayer) => {
        this.map.removeLayer(sublayer);
        this.map.removeSource(sublayer);
      });
    }
    if (layerData.popup && layerData.type !== 'chart') {
      const index = activeLayers.indexOf(layerData.id);
      activeLayers.splice(index, 1);
    }
    if (layerData.labels) {
      $(`.marker-label-${layerId}-${this.props.mapId}`).remove();
    }
    if (layerData.type === 'chart') {
      $(`.marker-chart-${layerId}-${this.props.mapId}`).remove();
    } else {
      if (this.map.getLayer(layerId)) {
        this.map.removeLayer(layerId);
      }
      if (this.map.getSource(layerId)) {
        this.map.removeSource(layerId);
      }
    }
    this.setState({ layerObj: null });
    this.removeLabels(layer);
    this.removeLegend(layer);
  }

  addLabels(layer, layerData) {
    const data = layer.source.type === 'geojson' ? layerData.features : layerData;
    if (layer.labels && layer.labels.data && layer.labels.join && data && data instanceof Array) {
      const labels = [];

      data.forEach((row) => {
        const el = document.createElement('div');
        el.className = `marker-label marker-label-${layer.id}-${this.props.mapId}`;
        el.style.width = layer.labels.width;
        el.style.height = layer.labels.height;
        el.style['font-size'] = '12px';
        el.style['font-weight'] = 'normal';
        $(el).html(Mustache.render(layer.labels.label, row.properties || row));
        layer.labels.data.forEach((label) => {
          if (layer.source.type === 'geojson') {
            labels.push({
              el,
              offset: layer.labels.offset,
              coordinates: row.geometry.coordinates,
            });
          } else if (label[layer.labels.join[0]] === row[layer.labels.join[1]]) {
            labels.push({
              el,
              offset: layer.labels.offset,
              coordinates: [label[layer.labels.coordinates[0]], label[layer.labels.coordinates[1]]],
            });
          }
        });
      });

      if (this.map.getZoom() > layer.labels.minzoom) {
        labels.forEach((row) => {
          new mapboxgl.Marker(row.el, {
            offset: row.offset,
          })
            .setLngLat(row.coordinates)
            .addTo(this.map);
        });
      }

      if (typeof layer.labels.maxzoom === 'undefined') {
        layer.labels.maxzoom = 22;
      }
      this.map.on('zoom', () => {
        if (this.map.getZoom() > layer.labels.minzoom
          && this.map.getZoom() < layer.labels.maxzoom
          && this.map.getLayer(layer.id) !== undefined) {
          this.removeLabels(layer);

          labels.forEach((row) => {
            new mapboxgl.Marker(row.el, {
              offset: row.offset,
            })
              .setLngLat(row.coordinates)
              .addTo(this.map);
          });
        } else {
          this.removeLabels(layer);
        }
      });
    }
  }

  removeLabels(layer) {
    const classItems = document.getElementsByClassName(`marker-label-${layer.id}-${this.props.mapId}`);
    while (classItems[0]) {
      classItems[0].parentNode.removeChild(classItems[0]);
    }
  }

  addLegend(layer, stops, data, breaks, colors) {
    const mapId = this.props.mapId;
    let background = '';
    if (layer.credit && layer.type === 'circle' && !layer.categories.shape) {
      $(`.legend.${mapId}`).prepend(`<div id="legend-${layer.id}-${mapId}"` +
        'class="legend-shapes">' +
        `<b>${layer.label}</b>` +
        '<div class="legend-symbols">' +
        `<span class="circle-sm" style="background:${layer.categories.color};"></span>` +
        `<span class="circle-md" style="background:${layer.categories.color};"></span>` +
        `<span class="circle-lg" style="background:${layer.categories.color};"></span>` +
        `</div>${
        layer.credit
        }</div>`);
    } else if (layer.credit && layer.categories.shape || layer.indicator) {
      layer.categories.color.forEach((color, index) => {
        const style = layer.categories.shape[index] === 'triangle-stroked-11' ||
          layer.categories.shape[index] === 'triangle-15' ?
          'border-bottom-color:' : 'background:';

        background += `<li class="layer-symbols"> <span class="${
          layer.categories.shape[index]}" style="${style}${color};"></span>${
          layer.categories.label[index]}</li>`;
      });
      const description = layer[layer.description] ? layer[layer.description] : '';

      $(`.legend.${mapId}`).prepend(`<div id="legend-${layer.id}-${mapId}"` +
        'class="legend-row">' +
        `<b>${layer.label}</b>` +
        `<div class="legend-description">${description}</div>` +
        '<div class="legend-shapes">' +
        `<ul style="left: 0;">${background}</ul> </div>${layer.credit}</div>`);
    } else if (layer.credit && layer.categories.breaks === 'no') {
      layer.categories.color.forEach((color, index) => {
        background += `<li style="background:${color}; width:${
          100 / layer.categories.color.length
          }%;">${layer.categories.label[index]}</li>`;
      });

      $(`.legend.${mapId}`).prepend(`<div id="legend-${layer.id}-${mapId
        }" class="legend-row"><b>${layer.label}</b>` +
        `<div class="legend-fill ${layer.categories ? 'legend-label' : ''}">` +
        `<ul>${background}</ul></div>${layer.credit}</div>`);
    } else if (layer.credit && layer.type !== 'circle' && layer.type !== 'chart') {
      const dataValues = data.map(values => values[layer.property]);
      const colorLegend = [...new Set(stops.map(stop => stop[1]))];
      const legendSuffix = layer.categories.suffix ? layer.categories.suffix : '';

      if (colorLegend.includes('transparent') && !(colors).includes('transparent')) {
        colors.splice(0, 0, 'transparent');
        breaks.splice(1, 0, breaks[0]);
      }

      colorLegend.forEach((color, index) => {
        const firstVal = breaks[index - 1] !== undefined ? breaks[index - 1] : 0;
        const lastVal = color === colorLegend[colorLegend.length - 1] ||
          breaks[index] === undefined ? Math.max(...dataValues) : breaks[index];
        background += `<li class="background-block-${layer.id}-${mapId}"` +
          `data-tooltip="${formatNum(firstVal, 1)}-${formatNum(lastVal, 1)}${legendSuffix}"` +
          `style="background:${color}; width:${100 / colorLegend.length
          }%;"></li > `;
      });

      $(`.legend.${mapId}`).prepend(`<div id="legend-${layer.id}-${mapId}"` +
        'class="legend-row">' +
        `<b>${layer.label}</b>` +
        '<ul class="legend-limit" style="padding: 0% 0% 3% 0%;">' +
        `<li id="first-limit-${layer.id}" class="${mapId
        }"style="position: absolute; list-style: none; display: inline; left: 3%;">${0}${legendSuffix}</li>
        <li id="last-limit-${layer.id}" class="${mapId
        }"style="position: absolute; list-style: none; display: inline; right: 3%;">${
        formatNum(Math.max(...dataValues), 1)}${legendSuffix}</li></ul>
        <div class="legend-fill"><ul id="legend-background">${background}</ul>
        </div>${layer.credit}</div>`);

      $(`.background-block-${layer.id}-${mapId}`).hover(
        () => {
          $(`#first-limit-${layer.id}.${mapId}`).text($('first-limit').text());
          $(`#last-limit-${layer.id}.${mapId}`).text($('last-limit').text());
        }, () => {
        $(`#first-limit-${layer.id}.${mapId}`).text(0 + legendSuffix);
        $(`#last-limit-${layer.id}.${mapId}`).text(formatNum(Math.max(...dataValues), 1) + legendSuffix);
      },
      );
    }
  }

  removeLegend(layer) {
    const layerId = layer.title || layer.id;
    $(`#legend-${layerId}-${this.props.mapId}`).remove();
  }

  filterData(filterOptions) {
    this.removeLayer(this.state.layerObj);
    this.prepareLayer(this.state.layerObj, filterOptions);
  }

  addTimeseriesLayers() {
    const sliderLayers = this.getSliderLayers();
    const viewedIds = this.state.layers.map(layers => layers.title);

    const map = this.map;
    let sliderItem = null;
    // update these to use classes instead of ids for multimap
    const slider = document.getElementById(`${this.props.mapId}-slider`);
    const label = document.getElementById(`${this.props.mapId}-label`);
    for (let i = 0; i < sliderLayers.length; i += 1) {
      const id = sliderLayers[i];
      if (viewedIds.includes(id)) {
        let index = getLastIndex(viewedIds, id);
        const layerObj = this.props.layerData[id];

        if (this.state.layers[index].visible === true &&
          layerObj.source.data instanceof Object && this.state
          && this.state.stops && layerObj.id === this.state.stops.id) {
          let period;
          let colorStops;
          let radiusStops;
          let breaks;
          let colors;
          let Stops;
          let strokeWidthStops;

          if (layerObj.type === 'chart') {
            period = this.state.stops.period;
            colorStops = layerObj.source.data;
          } else {
            const paintStops = this.state.stops.stops;
            colorStops = paintStops[0];
            radiusStops = paintStops[1];
            period = paintStops[2];
            breaks = paintStops[3];
            colors = paintStops[4];
            strokeWidthStops = paintStops[5];
            Stops = layerObj.type === 'circle' ? radiusStops : colorStops;
          }

          if (slider !== null && label !== null) {
            slider.max = (period.length - 1);
            slider.value = (period.length - 1);
            label.textContent = period[period.length - 1];

            slider.addEventListener('input', (e) => {
              index = parseInt(e.target.value, 10);
              label.textContent = period[index];
              if (layerObj.type === 'chart') {
                const data = Stops.filter(d =>
                  d[this.state.stops.timefield] === period[index]);
                $(`.marker-chart-${layerObj.id}-${this.props.mapId}`).remove();
                this.addChart(layerObj, data);
              } else if (map.getLayer(layerObj.id) && Stops[index] !== undefined
                && Stops[index][0][0] !== undefined) {
                const defaultValue = layerObj.type === 'circle' ? 0 : 'rgba(0,0,0,0)';
                const paintProperty = layerObj.type === 'circle' ? 'circle-radius' : 'fill-color';
                const newStops = {
                  property: layerObj.source.join[0],
                  stops: Stops[index],
                  type: 'categorical',
                  default: defaultValue,
                };
                if (layerObj.type === 'circle' && layerObj.categories.color instanceof Array) {
                  const newColorStops = {
                    property: layerObj.source.join[0],
                    stops: colorStops[index],
                    type: 'categorical',
                  };
                  const newStrokeStops = {
                    property: layerObj.source.join[0],
                    stops: strokeWidthStops[index],
                    type: 'categorical',
                  };
                  map.setPaintProperty(layerObj.id, 'circle-color', newColorStops);
                  map.setPaintProperty(layerObj.id, 'circle-stroke-width', newStrokeStops);
                }
                map.setPaintProperty(layerObj.id, paintProperty, newStops);
                const Data = layerObj.source.data.filter(data =>
                  data[layerObj.aggregate.timeseries.field] === period[index]);
                this.removeLabels(layerObj);
                this.addLabels(layerObj, Data);
                this.removeLegend(layerObj);
                this.addLegend(layerObj, Stops[index], Data, breaks, colors);
              }
            });
          }
          sliderItem = <TimeSeriesSlider mapId={this.props.mapId} periods={period} />;
        }
      }
    }
    return sliderItem;
  }

  addDefaultLayers() {
    const layerData = this.props.layerData;

    Object.keys(layerData).forEach((key) => {
      if (layerData[key].visible === true) {
        $(`.layer.${this.props.mapId} > [data-layer="${key}"]`).trigger('click');
      }
    });

    if (this.props.selected) {
      $(`input[type='radio'][name="layer"][value="${this.props.selected.layer}"]`).trigger('click');
    }
  }

  addMousemoveEvent() {
    const self = this;
    const popup = new mapboxgl.Popup({
      closeOnClick: true,
      closeButton: false,
    });

    self.map.on('mousemove', (e) => {
      const layerData = this.state.layerData;
      const features = self.map.queryRenderedFeatures(e.point, {
        layers: activeLayers,
      });

      // Change the cursor style as a UI indicator.
      self.map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

      if (!features.length) {
        popup.remove();
        return;
      }

      const feature = features[0];
      let content = '';
      const activeLayerId = feature.layer.id;
      const layer = layerData[activeLayerId];

      if (layer.type !== 'chart' && layer.popup) {
        const periodData = [];
        if (layer.aggregate && layer.aggregate.timeseries) {
          const currPeriod = document.getElementById(`${self.props.mapId}-label`).textContent;
          layer.source.data.forEach((Obj) => {
            if (Obj[layer.aggregate.timeseries.field] === currPeriod) {
              periodData.push(Obj);
            }
          });
        }
        let data = (layer.aggregate && layer.aggregate.timeseries) ?
          periodData : layer.source.data;
        if (layer.indicator && data) {
          data = data.features ? data.features : data;
          data.forEach((row) => {
            row.rating = layer.dataratingfordisplaced;
            /* eslint max-len: ["error", 130]*/
            row.analysis = layer.analysisandreasonforratingperindicatorbasedonavailabledataandincludingdisaggregatedingormation;
            row.firstColor = layer.color[0];
            row.secondColor = layer.color[1];
            row.region = row.region ? row.region : row.properties.region;
          });
        }

        if (data && data.forEach instanceof Object) {
          data.forEach((row) => {
            if (row[layer.source.join[1]] === feature.properties[layer.source.join[0]]) {
              if (row[layer.popup.header]) {
                content = `<div class="popup-header"><b>${row[layer.popup.header]}</b></div>` +
                  `<div class="popup-body">${Mustache.render(layer.popup.body, row)}</div>`;
              } else {
                content = Mustache.render(layer.popup.body, row);
              }
            }
          });
        }

        if (content) {
          popup.setLngLat(self.map.unproject(e.point))
            .setHTML(content)
            .addTo(self.map);
        }
      }
    });

    // add popups for marker charts
    $(document).on('mousemove', '.marker-chart', (e) => {
      const map = $(e.currentTarget).data('map');
      const lng = $(e.currentTarget).data('lng');
      const lat = $(e.currentTarget).data('lat');
      const content = $(e.currentTarget).data('popup');
      if (map === self.props.mapId) {
        popup.setLngLat([parseFloat(lng), parseFloat(lat)])
          .setHTML(content)
          .addTo(self.map);
      }
    });
  }

  changeStyle(style) {
    const mapLayers = this.props.layers.layers.filter(layer => layer.map === this.props.mapId);
    const layers = mapLayers.map(layer => layer.title);
    const layerProp = [];

    for (let i = 0; i < layers.length; i += 1) {
      const index = getLastIndex(layers, layers[i]);
      if (mapLayers[index].visible === true) {
        layerProp.push(this.state.layersObj.filter(layer => layer.id === layers[i]));
      }
    }

    this.map.setStyle(style);
    this.map.on('style.load', () => {
      layers.forEach((id) => {
        const prop = this.state.layersObj.filter(layer => layer.id === id);
        this.removeLayer(prop[0]);
      });
      for (let j = 0; j < layerProp.length; j += 1) {
        if (!this.map.getSource(layerProp[j][0].id)) {
          this.addLayer(layerProp[j][0]);
        }
      }
    });
    this.setState({ style });
  }

  render() {
    return (
      <div>
        <div
          id={this.props.mapId}
          style={{ top: `${this.props.mapConfig.defaultView === 'framework' ? '3em' : 0}` }}
        >
          {this.addTimeseriesLayers()}
          <div className={`legend ${this.props.mapId}`} />
          <StyleSelector
            changeStyle={this.changeStyle}
            style={this.state.style}
            styles={this.state.styles}
          />
        </div>
        <FilterSelector
          filterData={this.filterData}
          layerObj={this.state.layerObj}
        />
        {this.props.mapConfig.defaultView !== 'framework' ?
          <Export map={this.props.mapId} />
          : ''}
      </div>
    );
  }
}

export default Map;

Map.propTypes = {
  layers: PropTypes.objectOf(PropTypes.array).isRequired,
  mapConfig: PropTypes.objectOf(PropTypes.any).isRequired,
  styles: PropTypes.arrayOf(PropTypes.any).isRequired,
  mapId: PropTypes.string.isRequired,
  layerData: PropTypes.objectOf(PropTypes.any).isRequired,
  locations: PropTypes.objectOf(PropTypes.any).isRequired,
  selected: PropTypes.arrayOf(PropTypes.any),
};

Map.defaultProps = {
  selected: [],
};
