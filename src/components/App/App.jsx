import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu/Menu';
import Map from '../Map/Map';
import Sectors from '../Sectors/Sectors';
import Framework from '../Framework/Framework';
import fetchGoogleSheetsData from '../../includes/googlesheetData';


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
      filters: [],
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
  }

  componentDidMount() {
    fetchGoogleSheetsData(this.updateData);
  }

  changeLayer(layer, status, map) {
    const layers = [
      ...this.state.layers,
      {
        title: layer,
        visible: status,
        map,
      },
    ];
    this.setState({ layers });
  }

  toggleView(view) {
    this.setState({ view });
  }

  getFilters(group, filter, status, headers) {
    let regions = this.props.sectorData.filter(a => a.sector === 'REGION').map(f => f.filters)[0];
    let country;
    let region;

    for (let j = 0; j < regions.length; j += 1) {
      if (headers.includes(regions[j])) {
        country = regions[j];
      } else if (filter === regions[j]) {
          region = regions[j] + ' - ' + country;
      }
    }
    
    let obj = region ? { [group]: filter, 'region': region } : { [group]: filter };
    let filters = [...this.state.filters, obj];
    if (this.state.filters.length > 0) {
      for (let i = 0; i < this.state.filters.length; i += 1) {
        let sector = Object.keys(this.state.filters[i])[0];
        if (sector === group) {
          let filteredArr = this.state.filters.filter(f => Object.keys(f)[0] !== group);
          filters = [...filteredArr, obj];
        }
      }
    }

    const filterArr = filters.map(filter => filter[Object.keys(filter)[0]]);
    this.getFilteredData(filterArr);
    this.setState({ filters });
  }

  viewClick(layer, sector) {
    let selected = {sector, layer};
    this.setState({ selected });
  }

  updateData(data) {
    this.setState({ indicatorData: data });
  }

  getFilteredData(filters) {
    this.indicatorData = this.state.indicatorData;
    if (this.state.indicatorData.length > 0) {
      for (let j = 0; j < filters.length; j += 1) {
        let filteredData = this.indicatorData.filter((a) =>
          a.population === filters[j] ||
          a.region === filters[j] ||
          a.year === filters[j]
        )
        this.indicatorData = filteredData;
      }
    }

    this.extendIndicatorDetails(this.indicatorData); 
  }

  extendIndicatorDetails(filteredData) {
    let indicator = [];
    let layerData = {};
    const status = {
      'Well on the way to being achieved': 'green',
      'Not fully met obstacles exist': 'orange',
      'Far from met': 'red',
      'Incomplete data exists': 'grey',
      'Data unavailable': 'white',
    }

    Object.keys(this.props.layerData).forEach((key) => {
      indicator.push({ [key]: { 
        id: this.props.layerData[key].id, 
        label: this.props.layerData[key].label,
        source: this.props.layerData[key].source,
        type: "fill" } 
      });
    });

    indicator.forEach(function (row) {
      Object.keys(row).forEach(function (key) {
        layerData[key] = row[key];
      });
    });

    Object.keys(layerData).forEach((key) => {
      for (let i = 0; i < filteredData.length; i += 1) {
        if (key === filteredData[i].indicator) {
          $.extend(layerData[key], filteredData[i]);
          if (layerData[key].dataratingfordisplaced) {
            let color1 = status[layerData[key].dataratingfordisplaced.split('/ ').shift()];
            let color2 = status[layerData[key].dataratingfordisplaced.split('/ ').pop()];
            layerData[key].color = [color1, color2];
          }
          if (layerData[key].region) {
            layerData[key].source.stops = [[layerData[key].region, "#ff0000"]]
          }
        }
      }
    });
    
    this.setState({ layerData });
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
    const sectorData = this.props.sectorData;
    const layerData = this.state.layerData;
    const styles = this.props.styles;
    const appConfig = this.props.appConfig;
    const currentView = this.state.view;
    const details = this.props.details;
    const selected = this.state.selected;
    const filters = this.state.filters.map(filter => filter[Object.keys(filter)[0]]);
    const UIfilters = this.state.filters.map(filter => filter.region ?
      filter.region : filter[Object.keys(filter)[0]]);

    return (
      <div>
        <Menu
          toggleSingleScreen={singleScreen}
          toggleSplitScreen={splitScreen}
          appConfig={appConfig}
        />
        {this.state.view === 'framework' ?
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
              showSector={showSector}
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
  details: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default App;
