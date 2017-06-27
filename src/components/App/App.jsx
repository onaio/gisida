import React from 'react';
import Menu from '../Menu/Menu';
import Map from '../Map/Map';
import Sectors from '../Sectors/Sectors';

require('./App.scss');

window.maps = [];

class App extends React.Component {
  static showSector(e) {
    e.preventDefault();
    $(e.target).parent('li').find('.layers').toggle();
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
    $(e.target).parents('.sectors-menu-wrapper').find('.open-btn').toggle();
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

    return (
      <div>
        <Menu
          toggleSingleScreen={singleScreen}
          toggleSplitScreen={splitScreen}
          appConfig={this.props.appConfig}
        />
        <Map
          mapId="map-1"
          layerData={layerData}
          layers={layers}
          styles={styles}
          locations={this.props.locations}
          mapConfig={this.props.appConfig}
        />
        <Map
          mapId="map-2"
          layerData={layerData}
          layers={layers}
          styles={styles}
          locations={this.props.locations}
          mapConfig={this.props.appConfig}
        />
        <Sectors sectorMenuId="sector-menu-1" mapTargetId="map-1" onToggleSectors={toggleSectors} onSectorClick={sectorClick} onLayerChange={changeLayer} sectorData={sectorData} layerData={layerData} />
        <Sectors sectorMenuId="sector-menu-2" mapTargetId="map-2" onToggleSectors={toggleSectors} onSectorClick={sectorClick} onLayerChange={changeLayer} sectorData={sectorData} layerData={layerData} />
      </div>
    );
  }

}

App.propTypes = {
  appConfig: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
  layerData: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
  locations: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
  sectorData: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
  styles: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
};

export default App;
