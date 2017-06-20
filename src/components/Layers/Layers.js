require('./Layers.scss');
import Layer from '../Layer/Layer'

const Layers = ({ mapTargetId, layers, layerData, onLayerChange = f => f}) =>  
 <ul className="layers">
    {layers.map((layer, i) => 
     <Layer onLayerChange={onLayerChange} key={ i } mapTargetId={ mapTargetId } layer={ layer } layerData={ layerData } />)
  } 
 </ul>

export default Layers
