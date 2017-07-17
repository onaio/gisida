import React from 'react';
import PropTypes from 'prop-types';

require('./Framework.scss');

class Framework extends React.Component {
  getFrameworkSectors() {
    const sectors = this.props.sectorData.filter(sector => sector.sectors).map(sector => sector);
    const frameworkSector = [];
    sectors.forEach(sector =>
      frameworkSector.push((<div className="framework-sector">
        <div className="sector-header">{sector.sector}</div>
        <ul>
          {sector.sectors.map(layer =>
            (
              <li className="layerItem" key={layer}>
                {sector.headers.includes(layer) ?
                  <div className="sub-sector">{layer}</div> :
                  <div>
                    <div className="status">
                      <div className="status-1" />
                      <div className="status-2" />
                    </div>
                    <div className="status-link">
                      <a onClick={this.props.onToggleView}>{layer}</a>
                    </div>
                  </div>
                  }
              </li>
            ))
          }
        </ul>
      </div>),
      ));
    return frameworkSector;
  }

  render() {
    return (
      <div className="framework-wrapper">
        <div className="filter-selection">
          <div>Your Selections: </div>
          <div className="selections">IDPs, BAIDOA - SOMALIA, 2017</div>
        </div>
        <div className="framework-sectors">
          {this.getFrameworkSectors()}
        </div>
      </div>
    );
  }
}

Framework.propTypes = {
  sectorData: PropTypes.arrayOf(PropTypes.any).isRequired,
  onToggleView: PropTypes.func.isRequired,
};

export default Framework;
