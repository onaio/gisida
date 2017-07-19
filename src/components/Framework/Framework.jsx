import React from 'react';
import PropTypes from 'prop-types';

require('./Framework.scss');

class Framework extends React.Component {
  componentDidMount() {
    this.getKey();
  }
  getFrameworkSectors() {
    const sectors = this.props.sectorData.filter(sector => sector.sectors).map(sector => sector);
    const frameworkSector = [];
    sectors.forEach(sector =>
      frameworkSector.push((<div className="framework-sector">
        <div className="sector-header">
          <div className="header">{sector.sector}</div>
          <img src={sector.icon} alt={sector.sector} className="icon" />
        </div>
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

  getKey() {
    const colors = {
      white: 'Data unavilable',
      transparent: 'Incomplete data exists',
      red: 'Far from met',
      orange: 'Not fully met, obstacles exist',
      green: 'Well on way to being achieved',
    };
    let status = '';
    Object.keys(colors).forEach((color) => {
      const border = color === 'white' ? '1px solid #eee' : color === 'transparent' ? '1px dotted #555' : '';
      status += `<li>
      <div class="status-key" style="background: ${color}; border: ${border};"></div>
      <div class="status-description">${colors[color]}</div>
      </li>`;
    });
    $('.key').prepend(`<ul><li><div id="key-label">Key</div></li>${status}</ul>`);
  }
// <div className="status-description">${colors[color]}</div>
  render() {
    return (
      <div className="framework-wrapper">
        <div className="filter-selection">
          <div className="pre-text">YOUR SELECTIONS: </div>
          <div className="selections">IDPs, BAIDOA - SOMALIA, 2017</div>
        </div>
        <div className="key" />
        <div className="framework-sectors">
          {this.getFrameworkSectors()}
        </div>
        <div className="powered-by" />
      </div>
    );
  }
}

Framework.propTypes = {
  sectorData: PropTypes.arrayOf(PropTypes.any).isRequired,
  onToggleView: PropTypes.func.isRequired,
};

export default Framework;
