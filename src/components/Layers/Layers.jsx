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

export default Layers;
