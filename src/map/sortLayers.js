
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
        7  line  primary
        8. line  (other line layers that aren't primary layers)
        9. fill layers
  */
  if (Object.keys(layers).length) {
    const fill = Object.keys(layers).map(d => layers[d]).filter(d => d.type === 'fill');
    if (fill.length) {
      Object.keys(fill).forEach((key) => {
        if (fill[key].id !== nextLayerId) {
          if (map.getLayer(fill[key].id)) {
            map.moveLayer(fill[key].id);
          }
        }
      });
      if (fill.find(c => c.id === nextLayerId) && map.getLayer(nextLayerId)) {
        map.moveLayer(nextLayerId);
      }
    }
    const circles = Object.keys(layers).map(d => layers[d]).filter(d => d.type === 'circle');
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
    const symbols = Object.keys(layers).map(d => layers[d]).filter(d => d.type === 'symbol');

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
    const lines = Object.keys(layers).map(d => layers[d]).filter(d => d.type === 'line');
    if (lines.length) {
      Object.keys(lines).forEach((key) => {
        if (lines[key].id !== nextLayerId) {
          if (map.getLayer(lines[key].id)) {
            map.moveLayer(lines[key].id);
          }
        }
      });
      if (lines.find(c => c.id === nextLayerId) && map.getLayer(nextLayerId)) {
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

    const isLabelActive = Object.keys(layers).map(d =>
      layers[d]).filter(d => d.isLabel);

    if (isLabelActive.length) {
      Object.keys(isLabelActive).forEach((key) => {
        if (map.getLayer(isLabelActive[key].id)) {
          map.moveLayer(isLabelActive[key].id);
        }
      });
      if (isLabelActive.find(d => d.id === nextLayerId) && map.getLayer(nextLayerId)) {
        map.moveLayer(nextLayerId);
      }
    }
  }
}
