import React from 'react';
import PropTypes from 'prop-types';

require('./Layer.scss');

function getType(defaultView) {
  const type = defaultView === 'framework' ? 'radio' : 'checkbox';

  return type;
}
const Layer = ({
  mapTargetId,
  layer,
  layerData,
  headers, defaultView, onLayerChange = f => f }) =>
  (headers.includes(layer) ?
  (<li className={`layer ${mapTargetId}`}>
    <b>{layer}</b>
  </li>) :
  (<li className={`layer ${mapTargetId}`}>
    <input
      type={defaultView === 'framework' ? 'radio' : 'checkbox'}
      id={layer.replace(' ', '-')}
      data-layer={layer}
      name={'layer'}
      value={layer}
      onClick={e => onLayerChange(layer, e.target.checked, mapTargetId,
          getType(defaultView))}
    />
    <label htmlFor={layer} >{layerData[layer].label}</label>
  </li>));

Layer.propTypes = {
  mapTargetId: PropTypes.string.isRequired,
  layer: PropTypes.string.isRequired,
  layerData: PropTypes.objectOf(PropTypes.any).isRequired,
  onLayerChange: PropTypes.func.isRequired,
  headers: PropTypes.arrayOf(PropTypes.any),
  defaultView: PropTypes.string,
};

Layer.defaultProps = {
  headers: [],
  defaultView: '',
};

export default Layer;
