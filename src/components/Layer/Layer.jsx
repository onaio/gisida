import React from 'react';
import PropTypes from 'prop-types';

require('./Layer.scss');

const Layer = ({ mapTargetId, layer, sector, layerData, headers, defaultView, onLayerChange = f => f }) =>
  (<li className={`layer ${mapTargetId}`}>
    {headers.includes(layer) ? <b>{layer}</b> :
      <label htmlFor={layer} >
        <input
          type={defaultView === 'framework' ? 'radio' : 'checkbox'}
          data-layer={layer}
          name={sector}
          onChange={e => onLayerChange(layer, e.target.checked, mapTargetId)}
        />
        {layerData[layer] ? layerData[layer].label : layer}</label>
    }
  </li>);

Layer.propTypes = {
  mapTargetId: PropTypes.string.isRequired,
  layer: PropTypes.string.isRequired,
  layerData: PropTypes.objectOf(PropTypes.any).isRequired,
  onLayerChange: PropTypes.func.isRequired,
  headers: PropTypes.arrayOf(PropTypes.any),
  defaultView: PropTypes.string.isRequired,
};

Layer.defaultProps = {
  headers: [],
};

export default Layer;