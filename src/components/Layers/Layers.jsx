import React from 'react';
import PropTypes from 'prop-types';
import Layer from '../Layer/Layer';

const Layers = ({ mapTargetId, layers, layerData, onLayerChange = f => f }) =>
  (<ul className="layers">
    {layers.map(layer =>
      (<Layer
        onLayerChange={onLayerChange}
        key={layer}
        mapTargetId={mapTargetId}
        layer={layer}
        layerData={layerData}
      />))
  }
  </ul>);

Layers.propTypes = {
  mapTargetId: PropTypes.string.isRequired,
  layers: PropTypes.arrayOf(PropTypes.any).isRequired,
  layerData: PropTypes.objectOf(PropTypes.any).isRequired,
  onLayerChange: PropTypes.func.isRequired,
};

export default Layers;
