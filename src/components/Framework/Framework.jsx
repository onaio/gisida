import React from 'react';
import PropTypes from 'prop-types';
import App from '../App/App';

require('./Framework.scss');

class Framework extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }

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
                  <b>{layer}</b> :
                  <div>
                    <canvas id="rectangle" ref={(canvas) => { this.canvas = canvas; }} />
                    <a onClick={this.props.onToggleView}>{layer}</a>
                  </div>}
              </li>
            ))
          }
        </ul>
      </div>),
      ));

    return frameworkSector;
  }

  updateCanvas() {
    const ctx = this.canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 75, 150);
    ctx.fillStyle = 'orange';
    ctx.fillRect(75, 0, 75, 150);
  }

  render() {
    return (
      <div className="framework-wrapper">
        <div className="filter-selection">Your Selections</div>
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
