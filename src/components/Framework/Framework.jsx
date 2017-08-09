import React from 'react';
import PropTypes from 'prop-types';
import Mustache from 'mustache';
import fetchGoogleSheetsData from '../../includes/googlesheetData';

require('./Framework.scss');

class Framework extends React.Component {
  constructor() {
    super();
    this.state = {
      showIndicatorDetails: false,
      indicatorData: [],
      filterData: [],
    };

    this.updateData = this.updateData.bind(this);
  }

  componentDidMount() {
    this.getKey();
    fetchGoogleSheetsData(this.updateData);
  }

  onClick() {
    this.setState({ showIndicatorDetails: true });
  }

  onTogglePopup() {
    this.setState({ showIndicatorDetails: false });
  }

  getFrameworkSectors() {
    const sectors = this.props.sectorData.filter(sector => sector.layers).map(sector => sector);
    const frameworkSector = [];
    let indicatorObj = this.extendIndicatorDetails();
    sectors.forEach(sector =>
      frameworkSector.push(
        (<div className="framework-sector" key={sector.sector}>
          <div className="sector-header">
            <div className="header">{sector.sector}</div>
            <img src={sector.icon} alt={sector.sector} className="icon" />
          </div>
          <ul>
            {sector.layers.map(layer =>
              (
                <li className="layerItem" key={Math.random()}>
                  {sector.headers.includes(layer) ?
                    <div className="sub-sector">{layer}</div> :
                    <div>
                      <div className="sector-indicator">
                        {this.props.details[layer] ?
                          <div className="status">
                            <div className="status-1" style={{ background: `${this.props.details[layer].color}` }} />
                            <div className="status-2" style={{ background: `${this.props.details[layer].color}` }} />
                          </div>
                          : ''}
                        <div className="status-link">
                          <a data-toggle="modal" data-target={this.props.details[layer] ? `#${this.props.details[layer].id}` : ''}>{layer}</a>
                        </div>
                      </div>
                      {
                        this.props.details[layer] ?
                        <div className="modal fade" id={this.props.details[layer].id} role="dialog">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <button type="button" className="close" data-dismiss="modal">&times;</button>
                              <h4 className="modal-title">{layer}</h4>
                              <a
                                className="toggle-view-link"
                                onClick={(e) => { this.props.onToggleView("map"); this.props.onViewClick(layer, sector.sector); }}
                              >View on map</a>
                            </div>
                            <div className="modal-body">
                              <h6 className="modal-header">Indicator</h6>
                              <p>test</p>
                              <h6 className="modal-header">Analysis</h6>
                              <div
                                className="indicator-status-1"
                                background-color={this.props.details[layer].color}
                              />
                              <div
                                className="indicator-status-2"
                                background-color={this.props.details[layer].color}
                              />
                              <p>{this.props.details[layer].dataratingfordisplaced}</p>
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
      white: 'Data unavailable',
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

  updateData(data) {
    this.setState({ indicatorData: data });
  }

  getFilteredData() {
    this.indicatorData = this.state.indicatorData;
    if (this.state.indicatorData.length > 0 && this.props.filters.length > 0) {
      for (let j = 0; j < this.props.filters.length; j += 1) {
        let filteredData = this.indicatorData.filter((a) =>
          a.population === this.props.filters[j] ||
          a.region === this.props.filters[j] ||
          a.year === this.props.filters[j]
        )
        this.indicatorData = filteredData;
      }
    }

    let filterData = this.indicatorData;

    this.setState({ filterData });
    return this.indicatorData;
  }

  extendIndicatorDetails() {
    let filterData = this.getFilteredData();
    let indicatorDetails = this.props.details;
    Object.keys(indicatorDetails).forEach((key) => {
      for (let i = 0; i < filterData.length; i += 1) {
        if (key === filterData[i].indicator) {
          $.extend(indicatorDetails[key], filterData[i]);
        }
      }
    });

    return indicatorDetails;
  }

  render() {
    console.log(this.state.filterData);
    return (
      <div className="framework-wrapper">
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
