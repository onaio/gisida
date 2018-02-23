export default function sortLayers(map, layer) {
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
}
