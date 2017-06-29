import React from 'react';
import Layers from '../Layers/Layers';

require('./Sectors.scss');

const Sectors = ({ sectorMenuId,
  mapTargetId,
  sectorData,
  layerData,
  onToggleSectors = f => f,
  onSectorClick = f => f,
  onLayerChange = f => f }) =>
  (<div id={`${sectorMenuId}-wrapper`} className="sectors-menu-wrapper">
    <a href="#" onClick={e => onToggleSectors(e)} className="open-btn"><span className="glyphicon glyphicon-list" /></a>
    <div id={sectorMenuId} className="sectors-menu">
      <a className="close-btn" onClick={e => onToggleSectors(e)} href="#"><span className="glyphicon glyphicon-remove" /></a>
      <ul className="sectors">
        {sectorData.map((sector, i) =>
          // eslint-disable-next-line react/no-array-index-key
          (<li className="sector" key={i}><a href="#" onClick={e => onSectorClick(e)}>{sector.sector} <span className="caret" /></a>
            <Layers
              onLayerChange={onLayerChange}
              mapTargetId={mapTargetId}
              layers={sector.layers}
              layerData={layerData}
            />
          </li>))
  }
      </ul>
    </div>
  </div>);


Sectors.propTypes = {
  sectorMenuId: React.PropTypes.string.isRequired,
  mapTargetId: React.PropTypes.string.isRequired,
  sectorData: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
  layerData: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
  onToggleSectors: React.PropTypes.func.isRequired,
  onSectorClick: React.PropTypes.func.isRequired,
  onLayerChange: React.PropTypes.func.isRequired,
};

export default Sectors;
