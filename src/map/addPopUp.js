import Mustache from 'mustache';
import { getCurrentState } from '../store/actions/Actions';

export default function addMousemoveEvent(mapboxGLMap, dispatch) {
  const map = mapboxGLMap;
  const popup = new mapboxgl.Popup({
    closeOnClick: true,
    closeButton: false,
  });
  const self = {};
  let content;

  // Add mousemove event to map
  map.on('mousemove', (e) => {
    // Get layers from current state
    const currentState = dispatch(getCurrentState());
    const { layers } = currentState.MAP;
    // Generate list of active layers
    const activeLayers = [];
    Object.keys(layers).forEach((key) => {
      const layer = layers[key];
      if (layer.visible) {
        activeLayers.push(key);
      }
    });
    // Get rendered features from active layers under mouse pointer
    const features = map.queryRenderedFeatures(e.point, {
      layers: activeLayers,
    });
    // Remove pop up if no features under mouse pointer
    if (!features || !features.length > 0) {
      popup.remove();
      return false;
    }

    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

    const feature = features[0];
    // self.popupFeature = feature;
    // self.popupFeatureId = feature.properties[layers[features[0].layer.id].source.join[0]];

    const activeLayerId = feature.layer.id;
    const layer = layers[activeLayerId];

    if (layer.type !== 'chart' && layer.popup) {
      let periodData = [];
      // Assign period data if layer has time series
      if (layer.aggregate && layer.aggregate.timeseries) {
        const tsLayer = self.state.timeseries[self.state.layerObj.id];
        if (tsLayer) {
          const currPeriod = Object.keys(tsLayer.periodData)[tsLayer.temporalIndex];
          periodData = tsLayer.periodData[currPeriod].data;
        }
      }
      // Assign layer data
      const data = (layer.aggregate && layer.aggregate.timeseries) ? periodData : layer.source.data;

      if (data && data.length) {
        let row;
        for (let r = 0; r < data.length; r += 1) {
          row = data[r];
          if (row[layer.source.join[1]] === feature.properties[layer.source.join[0]]) {
            // Add header and body to popup with data from layer
            if (row[layer.popup.header]) {
              content =
                `<div><b>${row[layer.popup.header]}</b></div>` +
                `<div><center>${Mustache.render(layer.popup.body, row)}</center></div>`;
            } else {
              content = Mustache.render(layer.popup.body, row);
            }
          }
        }
      } else {
        content = Mustache.render(layer.popup.body, feature.properties);
      }
      // Add popup if content exists
      if (content) {
        popup.setLngLat(map.unproject(e.point)).setHTML(content).addTo(map);
      }
    }
    return true;
  });

  // TODO: add popups for marker charts
  // $(document).on('mousemove', '.marker-chart', (e) => {
  //   const mapId = $(e.currentTarget).data('map');
  //   const lng = $(e.currentTarget).data('lng');
  //   const lat = $(e.currentTarget).data('lat');
  //   const content = $(e.currentTarget).data('popup');
  //   if (mapId === self.props.mapId) {
  //     popup.setLngLat([parseFloat(lng), parseFloat(lat)])
  //       .setHTML(content)
  //       .addTo(map);
  //   }
  // });
}
