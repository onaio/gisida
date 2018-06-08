import Mustache from 'mustache';
import { getCurrentState } from '../store/actions/actions';

export default function addMousemoveEvent(mapId, mapboxGLMap, dispatch) {
  const map = mapboxGLMap;
  const popup = new mapboxgl.Popup({
    closeOnClick: true,
    closeButton: false,
  });

  let content;

  // Add mousemove event to map
  map.on('mousemove', (e) => {
    // Get layers from current state
    const currentState = dispatch(getCurrentState());
    const { layers, timeseries, primaryLayer } = currentState[mapId];

    // Generate list of active layers
    const activeLayers = [];
    Object.keys(layers).forEach((key) => {
      const layer = layers[key];
      if (layer.visible && layer.type !== 'chart') {
        activeLayers.push(key);
      }
    });

    // Get rendered features from active layers under mouse pointer
    const features = map.queryRenderedFeatures(e.point, {
      layers: activeLayers.filter(i => map.getLayer(i) !== undefined),
    });

    // Remove pop up if no features under mouse pointer
    if (!features || !features.length > 0
        || !layers[features[0].layer.id]
        || !layers[features[0].layer.id].popup) {
      content = null;
      popup.remove();
      return false;
    }
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

    // Get layer data for feature under mouse pointer
    const feature = features[0];
    const activeLayerId = feature.layer.id;
    const layer = layers[activeLayerId];
    if (layer.popup && layer.type !== 'chart') {
      let periodData = [];
      // Assign period data if layer has time series
      if (layer.aggregate && layer.aggregate.timeseries) {
        const tsLayer = timeseries[primaryLayer];
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
          const rowItem = row;
          if (row[layer.source.join[1]] === feature.properties[layer.source.join[0]]
            || row[layer.popup.join[0]] === feature.properties[layer.popup.join[1]]) {
            const found = [];
            const rxp = /{{([^}]+)}/g;
            const str = layer.labels ? layer.labels.label : null;
            for (let c = rxp.exec(str); c !== null; c = rxp.exec(str)) {
              found.push(c[1]);
            }
            // while (curMatch = rxp.exec(str)) {
            //   found.push(curMatch[1]);
            // }
            found.forEach((f) => {
              rowItem[`${f}`] = rowItem[`${f}`].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            });
            // Add header and body to popup with data from layer
            if (rowItem[layer.popup.header]) {
              content =
                `<div><b>${rowItem[layer.popup.header]}</b></div>` +
                `<div><center>${Mustache.render(layer.popup.body, rowItem)}</center></div>`;
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

  // add popups for marker charts
  $(document).on('mousemove', '.marker-chart', (e) => {
    const mapid = $(e.currentTarget).data('map');
    const lng = $(e.currentTarget).data('lng');
    const lat = $(e.currentTarget).data('lat');
    content = $(e.currentTarget).data('popup');
    if (mapid === mapId) {
      popup.setLngLat([parseFloat(lng), parseFloat(lat)])
        .setHTML(content)
        .addTo(map);
    }
  });
}
