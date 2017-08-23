import React from 'react';
import PropTypes from 'prop-types';
import Layer from '../Layer/Layer';

const Layers = ({
  mapTargetId,
  layers,
  layerData,
  headers,
  defaultView,
  selected,
  sector,
  onLayerChange = f => f }) =>
  (<ul
    className="layers"
    style={{
      display: `${selected !== undefined && sector === selected.sector ? 'block' : 'none'}`,
    }}
  >
    {layers.map(layer =>
      (<Layer
        onLayerChange={onLayerChange}
        key={layer}
        mapTargetId={mapTargetId}
        layer={layer}
        layerData={layerData}
        headers={headers}
        defaultView={defaultView}
      />))
    }
  </ul>);

Layers.propTypes = {
  mapTargetId: PropTypes.string.isRequired,
  layers: PropTypes.arrayOf(PropTypes.any),
  layerData: PropTypes.objectOf(PropTypes.any).isRequired,
  onLayerChange: PropTypes.func.isRequired,
  headers: PropTypes.arrayOf(PropTypes.any),
  defaultView: PropTypes.string.isRequired,
  sector: PropTypes.string.isRequired,
  selected: PropTypes.string,
};

Layers.defaultProps = {
  headers: [],
  layers: [],
  selected: '',
};

export default Layers;
