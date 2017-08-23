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
  sector,
  layerData,
  headers, defaultView, onLayerChange = f => f }) =>
  (<li className={`layer ${mapTargetId}`}>
    {headers.includes(layer) ? <b>{layer}</b> :
    <label className="label" htmlFor={layer} >
      <input
        type={defaultView === 'framework' ? 'radio' : 'checkbox'}
        id={layer.replace(' ', '-')}
        data-layer={layer}
        name={sector}
        value={layer}
        onClick={e => onLayerChange(layer, e.target.checked, mapTargetId, sector,
        getType(defaultView))}
      />
      {layerData[layer].label}</label>
    }
  </li>);

Layer.propTypes = {
  mapTargetId: PropTypes.string.isRequired,
  layer: PropTypes.string.isRequired,
  layerData: PropTypes.objectOf(PropTypes.any).isRequired,
  onLayerChange: PropTypes.func.isRequired,
  headers: PropTypes.arrayOf(PropTypes.any),
  defaultView: PropTypes.string,
  sector: PropTypes.string,
};

Layer.defaultProps = {
  headers: [],
  sector: '',
  defaultView: '',
};

export default Layer;
