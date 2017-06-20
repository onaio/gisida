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

export default Layer;
