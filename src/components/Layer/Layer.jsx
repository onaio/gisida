import React from 'react';
require('./Layer.scss');

const Layer = ({ mapTargetId, layer, layerData, visible = false, onLayerChange = f => f }) =>
  (<li className={`layer ${mapTargetId}`}>
    <input
      type="checkbox"
      data-layer={layer}
      onChange={e => onLayerChange(layer, e.target.checked, mapTargetId)}
    />
    <label>{layerData[layer].label}</label>
  </li>);

Layer.propTypes = {
  mapTargetId: React.PropTypes.string.isRequired,
  layer: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
  layerData: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
  onLayerChange: React.PropTypes.func.isRequired,
};

export default Layer;
