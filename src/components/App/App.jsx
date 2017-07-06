import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu/Menu';
import Map from '../Map/Map';
import Sectors from '../Sectors/Sectors';
import Framework from '../Framework/Framework';


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
    };
    this.changeLayer = this.changeLayer.bind(this);
    this.sectorClick = App.showSector.bind(this);
    this.splitScreen = App.splitScreen.bind(this);
    this.singleScreen = App.singleScreen.bind(this);
    this.toggleSectors = App.toggleSectors.bind(this);
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

    if (this.props.layerData[layer].layers) {
      const groupedLayer = this.props.layerData[layer].layers;
      for (let i = 0; i < groupedLayer.length; i += 1) {
        layers.push({
          title: groupedLayer[i],
          visible: status,
          map,
        });
      }
      layers.push({
        title: layer,
        visible: status,
        map,
      });
    }
    this.setState({ layers });
  }

  render() {
    const { changeLayer } = this;
    const { sectorClick } = this;
    const { toggleSectors } = this;
    const { splitScreen } = this;
    const { singleScreen } = this;
    const layers = this.state;
    const sectorData = this.props.sectorData;
    const layerData = this.props.layerData;
    const styles = this.props.styles;
    const appConfig = this.props.appConfig;

    return (
      <div>
        <Menu
          toggleSingleScreen={singleScreen}
          toggleSplitScreen={splitScreen}
          appConfig={appConfig}
        />
        {appConfig.defaultView === 'framework' && !this.props.toggleView ?
          <Framework
            sectorData={sectorData}
          /> :
          <Map
            mapId="map-1"
            layerData={layerData}
            layers={layers}
            styles={styles}
            locations={this.props.locations}
            mapConfig={appConfig}
          />
        }
        <Sectors
          view={appConfig.defaultView}
          sectorMenuId="sector-menu-1"
          mapTargetId="map-1"
          onToggleSectors={toggleSectors}
          onSectorClick={sectorClick}
          onLayerChange={changeLayer}
          sectorData={sectorData}
          layerData={layerData}
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
              onSectorClick={sectorClick}
              onLayerChange={changeLayer}
              sectorData={sectorData}
              layerData={layerData}
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
};

export default App;
