require('./Layer.scss');

const Layer = ({ mapTargetId, layer, layerData, onLayerChange = f => f }) =>
  (<li className={`layer ${mapTargetId}`}>
    <input
      type="checkbox"
      data-layer={layer}
      onChange={e => onLayerChange(layer, e.target.checked, mapTargetId)}
    />
    <label htmlFor={layer}>{layerData[layer].label}</label>
  </li>);

export default Layer;
