import React from 'react';
import PropTypes from 'prop-types';
import Mustache from 'mustache';
import fetchGoogleSheetsData from '../../includes/googlesheetData';

require('./Framework.scss');

class Framework extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showIndicatorDetails: false,
      indicatorData: [],
      filterData: [],
      details: this.props.details,
    };
    this.updateData = this.updateData.bind(this);
  }

  componentDidMount() {
    this.getKey();
    fetchGoogleSheetsData(this.updateData);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.filters.length > 0) {
      this.getFilteredData(nextProps.filters);
    }
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
                        {indicatorObj[layer] ?
                          <div className="status">
                            <div className="status-1" style={{ background: `${indicatorObj[layer].color}` }} />
                            <div className="status-2" style={{ background: `${indicatorObj[layer].color}` }} />
                          </div>
                          : ''}
                        <div className="status-link">
                          <a data-toggle="modal" data-target={indicatorObj[layer] ? `#${indicatorObj[layer].id}` : ''}>{layer}</a>
                        </div>
                      </div>
                      {
                        indicatorObj[layer] ?
                        <div className="modal fade" id={indicatorObj[layer].id} role="dialog">
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
                                background-color={indicatorObj[layer].color}
                              />
                              <div
                                className="indicator-status-2"
                                background-color={indicatorObj[layer].color}
                              />
                              <p>{indicatorObj[layer].dataratingfordisplaced}</p>
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

    this.setState({ filterData: this.indicatorData });
  }

  extendIndicatorDetails() {
    let indicator = [];
    let indicatorObj = {};

    Object.keys(this.props.details).forEach((key) => {
      indicator.push({ [key]: { id: this.props.details[key].id } });
    });

    indicator.forEach(function (row) {
      Object.keys(row).forEach(function (key) {
        indicatorObj[key] = row[key];
      });
    });

    Object.keys(indicatorObj).forEach((key) => {
      for (let i = 0; i < this.state.filterData.length; i += 1) {
        if (key === this.state.filterData[i].indicator) {
          $.extend(indicatorObj[key], this.state.filterData[i]);
        }
      }
    });

    return indicatorObj;
  }

  render() {
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
