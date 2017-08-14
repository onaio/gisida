import React from 'react';
import PropTypes from 'prop-types';
import Layers from '../Layers/Layers';
import Filters from '../Filters/Filters';

require('./Sectors.scss');

const Sectors = ({ sectorMenuId,
  mapTargetId,
  sectorData,
  layerData,
  onToggleSectors = f => f,
  onToggleView = f => f,
  onSectorClick = f => f,
  onLayerChange = f => f,
  onFilterSelect = f => f,
  view,
  defaultView,
  filters,
  selected,
  showSector,
  UIfilters
}) =>
  (<div id={`${sectorMenuId}-wrapper`} className="sectors-menu-wrapper">
    <div className="filter-selection">
      <div className="pre-text">YOUR SELECTIONS: </div>
      <div className="selections">{UIfilters.join(', ')}</div>
    </div>
    <a
      href="#"
      onClick={e => onToggleSectors(e)}
      className={
        view === 'framework' || defaultView === 'framework' ? 'framework-open-btn' : 'open-btn'}
    ><span className="glyphicon glyphicon-list" /></a>
    <div
      className={view === 'framework' || defaultView === 'framework' ?
        'framework-sectors-menu' : 'sectors-menu'}
    >
      <a className="close-btn" onClick={e => onToggleSectors(e)} href="#"><span className="glyphicon glyphicon-remove" /></a>
      <ul className="sectors">
        {sectorData.map((sector, i) =>
          // eslint-disable-next-line react/no-array-index-key
          (sector.filters || sector.views) ?
            (<li className="sector" key={i}><a href="#" onClick={e => onSectorClick(e)}>{sector.sector}<span className="caret" /></a>
              <Filters
                sector={sector.sector}
                filters={sector.filters}
                headers={sector.headers}
                views={sector.views}
                onToggleView={onToggleView}
                onFilterSelect={onFilterSelect}
                checked={filters}
                currentView={view}
              />
            </li>) :
            view !== 'framework' ?
              (<li className="sector" key={i}><a href="#"
                onClick={e => onSectorClick(e)}>{sector.sector}<span className="caret" /></a>
                <Layers
                  sector={sector.sector}
                  onLayerChange={onLayerChange}
                  mapTargetId={mapTargetId}
                  layers={sector.layers}
                  defaultView={defaultView}
                  headers={sector.headers}
                  layerData={layerData}
                  onFilterSelect={onFilterSelect}
                  showSector={selected.sector}
                />
              </li>) : '')
        }
      </ul>
    </div>
  </div>);


Sectors.propTypes = {
  sectorMenuId: PropTypes.string.isRequired,
  mapTargetId: PropTypes.string.isRequired,
  sectorData: PropTypes.arrayOf(PropTypes.any).isRequired,
  layerData: PropTypes.objectOf(PropTypes.any).isRequired,
  onToggleSectors: PropTypes.func.isRequired,
  onToggleView: PropTypes.func.isRequired,
  onSectorClick: PropTypes.func.isRequired,
  onLayerChange: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
  defaultView: PropTypes.string.isRequired,
};

export default Sectors;
