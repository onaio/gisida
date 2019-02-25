export default function sortLayers(map, layers) {
  Object.keys(layers).forEach((key) => {
    if (layers[key].type === 'line') {
      if (map.getLayer(key)) {
        map.moveLayer(key);
      }
    }
  });

  Object.keys(layers).forEach((key) => {
    if (layers[key].type === 'circle') {
      if (map.getLayer(key)) {
        map.moveLayer(key);
      }
    }
  });

  Object.keys(layers).forEach((key) => {
    if (layers[key].type === 'symbol') {
      if (map.getLayer(key)) {
        map.moveLayer(key);
      }
    }
  });
  Object.keys(layers).forEach((key) => {
    if (layers[key] && layers[key]['detail-view']) {
      if (map.getLayer(key)) {
        map.moveLayer(key);
      }
    }
  });
}
