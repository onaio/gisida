export default function setPrimaryLayer(e) {
  e.preventDefault();
  const $target = $(e.target).hasClass('legend-row')
    ? $(e.target)
    : $(e.target).parents('.legend-row');
  if ($target.hasClass('primary')) return false;

  // $('.set-primary-layer.primary').removeClass('primary');
  $('.legend-row.primary').removeClass('primary');
  $target.addClass('primary');

  const nextLayerId = $target.data('layer');
  // let nextLayerObj = this.state.layersObj.find(lo => lo.id === nextLayerId);
  // if (!nextLayerObj && this.props.layerData[nextLayerId].layers) {
  //   let nextLayer;
  //   for (let l = 0; l < this.props.layerData[nextLayerId].layers.length; l += 1) {
  //     nextLayer = this.props.layerData[nextLayerId].layers[l];
  //     nextLayerObj = this.state.layersObj.find(lo => lo.id === nextLayer);
  //     if (nextLayerObj) break;
  //   }
  // }
  // if (!nextLayerObj) {
  //   return false;
  // }

  // Move the selected primary layer to the top of the map layers
  window.GisidaMap.moveLayer(nextLayerId);
  // let layerObj;
  // Loop throught all active map layers
  // for (let i = this.state.layersObj.length - 1; i >= 0; i -= 1) {
  //   layerObj = this.state.layersObj[i];
  //   // If 'layerObj' is not a fill OR the selected primary layer
  //   if (layerObj.type !== 'fill' && layerObj.id !== nextLayerId) {
  //     // If 'layerObj' is not the same type as the selected
  //     if (layerObj.type !== nextLayerObj.type) {
  //       // Move 'layerObj' to the top of the map layers
  //       if (window.GisidaMap.getLayer(layerObj.id)) {
  //         window.GisidaMap.moveLayer(layerObj.id);
  //       }
  //     }
  //   }
  // }

  // // Re-order this.state.layersObj array
  // const nextlayersObj = this.state.layersObj.filter(lo => lo.id !== nextLayerId);
  // nextlayersObj.push(nextLayerObj);

  // this.setState({
  //   layerObj: nextLayerObj,
  //   layersObj: nextlayersObj,
  // });
  return true;
}
