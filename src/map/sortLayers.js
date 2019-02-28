
export default function sortLayers(map, layers, nextLayerId) {
  /* Sort layers in the following order circle, symbol and detailview inclusive of primarylayer
   -primary layer should always move on top for all layers in the respective categories
   -the precedence can be viewed as shown below
        1. detail-view primarylayer
        2. detail-view (other detail-view layers that aren't primary layers)
        3. symbol primarylayer
        4. symbol (other symbol layers that aren't primary layers)
        5. circle primarylayer
        6. cirle (other circle layers that aren't primary layers)
        7 line and fill layers primary
        8. line and fill (other line and fill layers that aren't primary layers)
  */
  if (Object.keys(layers).length) {
    const circles = Object.keys(layers).map(d => layers[d]).filter(d => d.type === 'circle'
      && !d['detail-view']);
    if (circles.length) {
      Object.keys(circles).forEach((key) => {
        if (circles[key].id !== nextLayerId) {
          if (map.getLayer(circles[key].id)) {
            map.moveLayer(circles[key].id);
          }
        }
      });
      if (circles.find(c => c.id === nextLayerId) && map.getLayer(nextLayerId)) {
        map.moveLayer(nextLayerId);
      }
    }
    const symbols = Object.keys(layers).map(d =>
      layers[d]).filter(d =>
      d.type === 'symbol' && !d['detail-view']);

    if (symbols.length) {
      Object.keys(symbols).forEach((key) => {
        if (map.getLayer(symbols[key].id)) {
          map.moveLayer(symbols[key].id);
        }
      });
      if (symbols.find(s => s.id === nextLayerId) && map.getLayer(nextLayerId)) {
        map.moveLayer(nextLayerId);
      }
    }
    const detailViewActive = Object.keys(layers).map(d =>
      layers[d]).filter(d => d['detail-view']);

    if (detailViewActive.length) {
      Object.keys(detailViewActive).forEach((key) => {
        if (map.getLayer(detailViewActive[key].id)) {
          map.moveLayer(detailViewActive[key].id);
        }
      });
      if (detailViewActive.find(d => d.id === nextLayerId) && map.getLayer(nextLayerId)) {
        map.moveLayer(nextLayerId);
      }
    }
  }
}
