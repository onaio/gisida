import React from 'react';
import PropTypes from 'prop-types';

const Layer = ({ mapTargetId, layer, layerData, onLayerChange = f => f }) =>
  (<li className={`layer ${mapTargetId}`}>
    <input
      type="checkbox"
      data-layer={layer}
      onChange={e => onLayerChange(layer, e.target.checked, mapTargetId)}
    />
    <label htmlFor={layer} >{layerData[layer].label}</label>
  </li>);

Layer.propTypes = {
  mapTargetId: PropTypes.string.isRequired,
  layer: PropTypes.string.isRequired,
  layerData: PropTypes.objectOf(PropTypes.any).isRequired,
  onLayerChange: PropTypes.func.isRequired,
};

export default Layer;
