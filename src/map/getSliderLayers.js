export default function getSliderLayers(layers) {
  const sliderLayers = [];
  Object.keys(layers).forEach((key) => {
    if ('aggregate' in layers[key] && 'timeseries' in layers[key].aggregate) {
      sliderLayers.push(key);
    }
  });
  return sliderLayers;
}
