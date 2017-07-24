import React from 'react';
import PropTypes from 'prop-types';
import Mustache from 'mustache';

require('./Framework.scss');

class Framework extends React.Component {
  constructor() {
    super();
    this.state = {
      showIndicatorDetails: false,
    };
  }
  componentDidMount() {
    this.getKey();
  }

  onClick() {
    this.setState({ showIndicatorDetails: true });
  }

  onTogglePopup() {
    this.setState({ showIndicatorDetails: false });
  }

  getFrameworkSectors() {
    const sectors = this.props.sectorData.filter(sector => sector.sectors).map(sector => sector);
    const frameworkSector = [];
    sectors.forEach(sector =>
      frameworkSector.push(
        (<div className="framework-sector" key={sector.sector}>
          <div className="sector-header">
            <div className="header">{sector.sector}</div>
            <img src={sector.icon} alt={sector.sector} className="icon" />
          </div>
          <ul>
            {sector.sectors.map(layer =>
              (
                <li className="layerItem" key={Math.random()}>
                  {sector.headers.includes(layer) ?
                    <div className="sub-sector">{layer}</div> :
                    <div>
                      <div className="sector-indicator">
                        <div className="status">
                          <div className="status-1" />
                          <div className="status-2" />
                        </div>
                        <div className="status-link">
                          <a data-toggle="modal" data-target={this.props.details[layer] ? `#${this.props.details[layer].id}` : ''}>{layer}</a>
                        </div>
                      </div>
                      {this.props.details[layer] ?
                        <div className="modal fade" id={this.props.details[layer].id} role="dialog">
                          <div
                            className="modal-dialog"
                          >
                            <div className="modal-content">
                              <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">{layer}</h4>
                                <a
                                  className="toggle-view-link"
                                  onClick={this.props.onToggleView}
                                >View on map</a>
                              </div>
                              <div className="modal-body">
                                <h6 className="modal-header">Indicator</h6>
                                <p>{this.props.details[layer].indicator}</p>
                                <h6 className="modal-header">Analysis</h6>
                                <div
                                  className="indicator-status-1"
                                  background-color={this.props.details[layer].analysis.status[0]}
                                />
                                <div
                                  className="indicator-status-2"
                                  background-color={this.props.details[layer].analysis.status[1]}
                                />
                                <p>{this.props.details[layer].analysis.details}</p>
                              </div>
                            </div>

                          </div>
                        </div>
                        : ''
                      }
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
    let popup = '';
    Object.keys(colors).forEach((color) => {
      const border = color === 'white' ? '1px solid #eee' : color === 'transparent' ? '1px dotted #555' : '';
      status += `<li>
      <div class="status-key" style="background: ${color}; border: ${border};"></div>
      </li>`;
      popup += `
      <div>
      <div class="popup-status-key" style="background: ${color}; border: ${border};"></div>
      <div class="popup-status-description">${colors[color]}</div></div>`;
    });
    $('.key').prepend(`<ul><li><div id="key-label">Key</div></li>${status}</ul>`);
    $('.key-popup').prepend(`<div id="popup-key-label">Key</div>${popup}`);
  }

  render() {
    return (
      <div className="framework-wrapper">
        <div className="filter-selection">
          <div className="pre-text">YOUR SELECTIONS: </div>
          <div className="selections">IDPs, BAIDOA - SOMALIA, 2017</div>
        </div>
        <div className="key" />
        <div className="key-popup" />
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
  details: PropTypes.objectOf(PropTypes.any).isRequired,
  onToggleView: PropTypes.func.isRequired,
};

export default Framework;
