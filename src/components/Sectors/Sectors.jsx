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
}) =>
  (<div id={`${sectorMenuId}-wrapper`} className="sectors-menu-wrapper">
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
          ((sector.filters || sector.views) ?
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
              (<li className="sector" key={i}><a
                href="#"
                onClick={e => onSectorClick(e)}
              >{sector.sector}<span className="caret" /></a>
                <Layers
                  onLayerChange={onLayerChange}
                  mapTargetId={mapTargetId}
                  layers={sector.layers}
                  defaultView={defaultView}
                  headers={sector.headers}
                  layerData={layerData}
                  onFilterSelect={onFilterSelect}
                  selected={selected}
                  sector={sector}
                />
              </li>) : ''))
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
  onFilterSelect: PropTypes.func,
  filters: PropTypes.arrayOf(PropTypes.any),
  selected: PropTypes.arrayOf(PropTypes.any),
};

Sectors.defaultProps = {
  onFilterSelect: null,
  filters: null,
  selected: null,
};

export default Sectors;
