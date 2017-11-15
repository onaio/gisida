import React from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';
import Menu from '../Menu/Menu';
import Map from '../Map/Map';
import Sectors from '../Sectors/Sectors';
import Framework from '../Framework/Framework';
import Selections from '../Selections/Selections';
import fetchGoogleSheetsData from '../../includes/googlesheetData';
import { flattenObj } from '../../includes/utils';


require('./App.scss');

window.maps = [];

class App extends React.Component {
  static showSector(e) {
    e.preventDefault();
    $(e.target).parent('li').find('.layers').toggle();
    $(e.target).parent('li').find('.filters').toggle();
  }

  static splitScreen(e) {
    e.preventDefault();
    $('#map-1').css('width', '52%');
    $('#map-2, #sector-menu-2-wrapper .open-btn').show();
    window.maps[0].resize();
    window.maps[1].resize();
  }

  static singleScreen(e) {
    e.preventDefault();
    $('#map-1').css('width', '100%');
    $('#map-2, #sector-menu-2').hide();
    $('#sector-menu-2-wrapper .open-btn').hide();
    window.maps[0].resize();
    window.maps[1].resize();
  }

  static toggleSectors(e) {
    e.preventDefault();
    $(e.target).parents('.sectors-menu-wrapper').find('.sectors-menu').toggle();
    $(e.target).parents('.sectors-menu-wrapper').find('.framework-sectors-menu').toggle();
    $(e.target).parents('.sectors-menu-wrapper').find('.open-btn').toggle();
    $(e.target).parents('.sectors-menu-wrapper').find('.framework-open-btn').toggle();
  }

  constructor(props) {
    super(props);
    this.state = {
      layers: [],
      sectors: [],
      view: this.props.appConfig.defaultView,
      filters: [{ POPULATION: 'Overall' },
      { REGION: 'Lower Juba', region: 'Lower Juba - Somalia' },
      { YEAR: '2016' }],
      layerData: this.props.layerData,
    };
    this.changeLayer = this.changeLayer.bind(this);
    this.sectorClick = App.showSector.bind(this);
    this.splitScreen = App.splitScreen.bind(this);
    this.singleScreen = App.singleScreen.bind(this);
    this.toggleSectors = App.toggleSectors.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.getFilters = this.getFilters.bind(this);
    this.viewClick = this.viewClick.bind(this);
    this.updateData = this.updateData.bind(this);
    this.getFilteredData = this.getFilteredData.bind(this);
    this.fetchFilters = this.fetchFilters.bind(this);
  }

  componentDidMount() {
    fetchGoogleSheetsData(this.props.appConfig.dataURL, this.updateData);
  }

  getFilters(group, filter, status, headers) {
    const regions = this.props.sectorData.filter(a => a.sector === 'REGION').map(f => f.filters)[0];
    let country;
    let region;

    for (let j = 0; j < regions.length; j += 1) {
      if (headers.includes(regions[j])) {
        country = regions[j];
      } else if (filter === regions[j]) {
        region = filter.split(' - ').length > 1 ? filter : `${regions[j]} - ${country}`;
      }
    }

    const obj = region ? { [group]: filter, region } : { [group]: filter };
    let filters = [...this.state.filters, obj];
    if (this.state.filters.length > 0) {
      for (let i = 0; i < this.state.filters.length; i += 1) {
        const sector = Object.keys(this.state.filters[i])[0];
        if (sector === group) {
          const filteredArr = this.state.filters.filter(f => Object.keys(f)[0] !== group);
          filters = [...filteredArr, obj];
        }
      }
    }

    const filterArr = filters.map(item => item[Object.keys(item)[0]]);
    const filterKeys = [].concat(...filters.map(a => Object.keys(a)));
    const defaultFilters = Object.keys(this.props.defaults);
    if (defaultFilters.includes(filterArr[filterArr.length - 1])) {
      filters = this.props.defaults[filterArr[filterArr.length - 1]];
      this.getFilteredData(filters.map(row => row.POPULATION || row.REGION || row.YEAR));
    } else if (filterKeys.includes('POPULATION') && filterKeys.includes('YEAR')
      && this.state.view === 'map') {
      this.getFilteredData(filterArr);
    } else if (filterArr.length === 3) {
      this.getFilteredData(filterArr);
    }
    this.setState({ filters });
  }

  getFilteredData(filters) {
    this.indicatorData = this.state.indicatorData;
    if (this.state.indicatorData.length > 0) {
      for (let j = 0; j < filters.length; j += 1) {
        const filteredData = this.indicatorData.filter(a =>
          a.population === filters[j] ||
          a.region === filters[j] ||
          a.year === filters[j],
        );
        this.indicatorData = filteredData;
      }
    }
    const uniqueData = this.indicatorData.filter((row, index, self) => self.findIndex(t =>
      t.indicator === row.indicator && t.year === row.year && t.region === row.region) === index);
    this.extendIndicatorDetails(uniqueData, filters);
  }

  changeLayer(layer, status, map, type) {
    let layers;
    const index = this.state.layers.length - 1;
    if (type === 'radio' && index !== -1) {
      layers = [
        ...this.state.layers,
        {
          title: this.state.layers[index].title,
          visible: false,
          map: this.state.layers[index].map,
          type,
        },
        {
          title: layer,
          visible: status,
          map,
          type,
        },
      ];
    } else {
      layers = [
        ...this.state.layers,
        {
          title: layer,
          visible: status,
          map,
          type,
        },
      ];
    }

    this.setState({ layers });
  }

  toggleView(view) {
    this.setState({ view });
  }

  viewClick(layer, sector) {
    const selected = { sector, layer };
    this.setState({ selected });
  }

  updateData(data) {
    this.setState({ indicatorData: data });
  }

  extendIndicatorDetails(filteredData, filters) {
    // To be refactored
    const indicator = [];
    const layerData = {};
    const status = {
      'Well on the way to being achieved': 'green',
      'Not fully met, obstacles exist': 'orange',
      'Far from met': 'red',
      'Incomplete data exists': 'transparent',
      'Data unavailable': 'white',
    };
    const countries = ['Tanzania', 'Uganda'];
    Object.keys(this.props.layerData).forEach((key) => {
      indicator.push({
        [key]: {
          id: key,
          label: this.props.layerData[key].label,
          source: {
            type: 'vector',
            layer: 'eastern_africa_regions1geojson',
            data: 'data/refugee_camps.geojson',
            url: 'mapbox://ona.2puzee3z',
            join: ['region', 'region'],
          },
          paint: {},
          type: this.props.layerData[key].type,
          labels: {
            data: 'data/eastern_regions.csv',
            label: '<b> {{region}} </b>',
            join: ['region', 'region'],
            coordinates: ['longitude', 'latitude'],
            minzoom: 3.5,
            height: 30,
            width: 30,
            offset: [-15, -5],
          },
          // labels: this.props.layerData[key].labels,
          categories: this.props.layerData[key].categories,
          description: this.props.layerData[key].description,
          credit: this.props.layerData[key].credit,
          popup: this.props.layerData[key].popup,
        },
      });
    });

    indicator.forEach((row) => {
      Object.keys(row).forEach((key) => {
        layerData[key] = row[key];
      });
    });

    Object.keys(layerData).forEach((key) => {
      if (filters.length === 2) {
        const layerArr = filteredData.filter(row =>
          row.indicator === layerData[key].label).filter(item => item.region.split(' - ').shift() !== 'Settlements');
        if (layerArr.length > 0) {
          /* eslint max-len: ["error", 130]*/
          layerData[key].source.data = layerArr.reduce((data, item) => data.concat(
            {
              region: item.region,
              firstColor: status[item.dataratingfordisplaced.split('/ ').shift()],
              secondColor: status[item.dataratingfordisplaced.split('/ ').pop()],
              analysis: item.analysisandreasonforratingperindicatorbasedonavailabledataandincludingdisaggregatedingormation,
              rating: item.dataratingfordisplaced,
            }), []);
          layerData[key].source.stops = layerData[key].source.data.reduce((stops, item) =>
            stops.concat([[item.region, (item.firstColor === item.secondColor) ?
              item.firstColor : `${item.firstColor}-${item.secondColor}`]]), []);
          if (layerData[key].source.stops.filter(stop => stop[1].split('-').length === 2).length > 0) {
            layerData[key]['use-fill-pattern'] = true;
          }
          if (layerData[key].source.stops[0][1] === 'transparent') {
            layerData[key].type = 'line';
          }
        }
      } else {
        for (let i = 0; i < filteredData.length; i += 1) {
          if (layerData[key].label === filteredData[i].indicator) {
            $.extend(layerData[key], filteredData[i]);
            if (layerData[key].dataratingfordisplaced) {
              const color1 = status[layerData[key].dataratingfordisplaced.split('/ ').shift()];
              const color2 = status[layerData[key].dataratingfordisplaced.split('/ ').pop()];
              layerData[key].color = [color1, color2];
            }
            if (layerData[key].color && layerData[key].color.length > 1
              && layerData[key].color[0] !== layerData[key].color[1]) {
              const color = `${layerData[key].color[0]}-${layerData[key].color[1]}`;
              layerData[key]['use-fill-pattern'] = true;
              if ((layerData[key].region).split(' - ').shift() === 'Settlements'
                || countries.includes(layerData[key].region)) {
                layerData[key].layout = {
                  'icon-image': color,
                  'icon-size': 0.25,
                };
              } else {
                layerData[key].source.stops = [[layerData[key].region, color]];
              }
            } else if (layerData[key].color && layerData[key].color.includes('transparent')) {
              layerData[key].type = 'line';
            }
            if (layerData[key].region && layerData[key].color) {
              if (layerData[key].region === 'All regions' || layerData[key].region === 'Regions') {
                d3.csv(layerData[key].labels.data, (data) => {
                  const stops = [];
                  layerData[key].source.data = data.filter(row =>
                    row.country === layerData[key].country);
                  layerData[key].source.data.forEach((row) => {
                    stops.push([row[layerData[key].source.join[0]], layerData[key].color[0]]);
                  });
                  layerData[key].source.stops = stops;
                });
              } else if ((layerData[key].region).split(' - ').shift() === 'Settlements'
                || countries.includes(layerData[key].region)) {
                layerData[key].type = layerData[key].color[0] === layerData[key].color[1] ? 'circle' : layerData[key].type;
                layerData[key].source.type = 'geojson';
                layerData[key].labels.offset = [-10, 10];
              } else {
                layerData[key].source.data = [{ region: layerData[key].region }];
                if (layerData[key].color.length > 1 && layerData[key].color[0] === layerData[key].color[1]) {
                  layerData[key].source.stops = [[layerData[key].region, layerData[key].color[0]]];
                }
              }
            }
          }
        }
      }
    });
    this.setState({ layerData });
  }

  fetchFilters() {
    const arr = ['population', 'region', 'year'];
    if (this.state.indicatorData !== undefined) {
      const headers = [...new Set(this.state.indicatorData.map(row =>
        row.country))].filter(country => country !== undefined);
      const countries = {};
      headers.forEach((country) => {
        if (country !== 'Ethiopia') {
          countries[country] = [];
        }
      });
      for (let i = 0; i < this.state.indicatorData.length; i += 1) {
        const row = this.state.indicatorData[i];
        for (let j = 0; j < this.props.sectorData.length; j += 1) {
          for (let k = 0; k < arr.length; k += 1) {
            if (this.props.sectorData[j].sector === 'REGION') {
              Object.keys(countries).forEach((country) => {
                if (row.country === country) {
                  if (!countries[country].includes(row.region)) {
                    countries[country].push(row.region);
                  }
                }
              });
            } else if (row[arr[k]] && this.props.sectorData[j].sector === (arr[k]).toUpperCase()
              && !this.props.sectorData[j].filters.includes(row[arr[k]])) {
              this.props.sectorData[j].filters.push(row[arr[k]]);
            }
          }
        }
      }
      const index = this.props.sectorData.map(x => x.sector).indexOf('REGION');
      Object.keys(countries).forEach((key) => {
        if (!this.props.sectorData[index].headers.includes(key)) {
          this.props.sectorData[index].headers.push(key);
        }
      });
      this.props.sectorData[index].filters = flattenObj(countries);
    }

    return this.props.sectorData;
  }

  render() {
    const { changeLayer } = this;
    const { sectorClick } = this;
    const { toggleSectors } = this;
    const { splitScreen } = this;
    const { singleScreen } = this;
    const { toggleView } = this;
    const { getFilters } = this;
    const { viewClick } = this;
    const layers = this.state;
    const layerData = this.state.layerData;
    const styles = this.props.styles;
    const appConfig = this.props.appConfig;
    const sectorData = appConfig.defaultView === 'framework' ? this.fetchFilters() : this.props.sectorData;
    const currentView = this.state.view;
    const selected = this.state.selected;
    const filters = this.state.filters.map(filter => filter[Object.keys(filter)[0]]);
    const UIfilters = this.state.filters.map(filter =>
      filter.region || filter[Object.keys(filter)[0]]);
    return (
      <div>
        <Menu
          toggleSingleScreen={singleScreen}
          toggleSplitScreen={splitScreen}
          appConfig={appConfig}
        />
        {currentView === 'framework' ?
          <Framework
            sectorData={sectorData}
            onToggleView={toggleView}
            onViewClick={viewClick}
            onSectorClick={sectorClick}
            layerData={layerData}
          /> :
          <Map
            mapId="map-1"
            layerData={layerData}
            layers={layers}
            styles={styles}
            locations={this.props.locations}
            mapConfig={appConfig}
            selected={selected}
          />
        }
        {appConfig.defaultView === 'framework' ?
          <Selections
            UIfilters={UIfilters}
          /> : ''}
        <Sectors
          view={currentView}
          defaultView={appConfig.defaultView}
          sectorMenuId="sector-menu-1"
          mapTargetId="map-1"
          onToggleSectors={toggleSectors}
          onSectorClick={sectorClick}
          onToggleView={toggleView}
          onLayerChange={changeLayer}
          onFilterSelect={getFilters}
          sectorData={sectorData}
          layerData={layerData}
          filters={filters}
          UIfilters={UIfilters}
          selected={selected}
        />
        {appConfig.splitView ?
          <div>
            <Map
              mapId="map-2"
              layerData={layerData}
              layers={layers}
              styles={styles}
              locations={this.props.locations}
              mapConfig={appConfig}
            />
            <Sectors
              sectorMenuId="sector-menu-2"
              mapTargetId="map-2"
              onToggleSectors={toggleSectors}
              onToggleView={toggleView}
              onSectorClick={sectorClick}
              onLayerChange={changeLayer}
              onFilterSelect={getFilters}
              sectorData={sectorData}
              layerData={layerData}
              filters={filters}
              selected={selected}
            />
          </div>
          : null}
      </div>
    );
  }

}

App.propTypes = {
  appConfig: PropTypes.objectOf(PropTypes.any).isRequired,
  layerData: PropTypes.objectOf(PropTypes.any).isRequired,
  locations: PropTypes.objectOf(PropTypes.any).isRequired,
  sectorData: PropTypes.arrayOf(PropTypes.any).isRequired,
  styles: PropTypes.arrayOf(PropTypes.any).isRequired,
  defaults: PropTypes.objectOf(PropTypes.any),
};

App.defaultProps = {
  defaults: null,
};

export default App;
