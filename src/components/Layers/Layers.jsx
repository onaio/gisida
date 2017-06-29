import React from 'react';
import Layer from '../Layer/Layer';

require('./Layers.scss');

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
  mapTargetId: React.PropTypes.string.isRequired,
  layers: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
  layerData: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
  onLayerChange: React.PropTypes.func.isRequired,
};

export default Layers;
