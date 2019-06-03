import Mustache from 'mustache';
import { getCurrentState } from '../store/actions/actions';
import commaFormatting from './../utils/commaFormatting';

export default function addMousemoveEvent(mapId, mapboxGLMap, dispatch) {
  const map = mapboxGLMap;
  const popup = new mapboxgl.Popup({
    closeOnClick: true,
    closeButton: false,
  });

  let content;

  // Add mousemove event to map
  map.on('mousemove', (e) => {
    content = null;
    popup.remove();
    // Get layers from current state
    const currentState = dispatch(getCurrentState());
    const {
      layers,
      timeseries,
    } = currentState[mapId];

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
    }).filter(f =>
      f.layer && layers[f.layer.id] && !layers[f.layer.id].layers && layers[f.layer.id].popup);
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

    // If no features then there no need for a popup
    if (!features.length) return false;

    // Get layer data for feature under mouse pointer
    let feature;
    let layerId;
    let layer;
    let data;
    for (let f = 0; f < features.length; f += 1) {
      feature = features[f];
      layerId = feature && feature.layer && feature.layer.id;
      layer = layerId && layers[layerId];

      if (layer && layer.type !== 'chart') {
        // define data to loop through looking for join matches
        data = (layer.aggregate && layer.aggregate.timeseries) &&
          timeseries && timeseries[layerId] && timeseries[layerId].data ?
          [...timeseries[layerId].data] :
          (layer.source && layer.source.data &&
            (layer.source.data.features || [...layer.source.data]));

        if (data && data.length) {
          let row;
          for (let r = 0; r < data.length; r += 1) {
            row = {
              ...(data[r].properties || data[r]),
            };
            const rowItem = {
              ...row,
              ...feature.properties,
            };
            // if row matches property
            if ((layer.popup.join &&
                (row[layer.popup.join[0]] === feature.properties[layer.popup.join[1]])) ||
              (!layer.popup.join &&
                (row[layer.source.join[1]] === feature.properties[layer.source.join[0]]))) {
              const datum = {
                ...rowItem,
              };
              if (layer.popup && layer.popup.hideNulls) {
                Object.keys(datum).forEach((k) => {
                  if (Number.isNaN(Number(datum[k])) &&
                    (datum[k].toLowerCase() === 'n/a' ||
                      datum[k] === '')) {
                    delete datum[k];
                  }
                });
              }
              const formattedData = commaFormatting(layer, datum, true);
              // Add header and body to popup with data from layer
              if (rowItem[layer.popup.header]) {
                content =
                  `<div><b>${rowItem[layer.popup.header]}</b></div>` +
                  `<div><center>${Mustache.render(layer.popup.body, formattedData)}</center></div>`;
              } else {
                content = Mustache.render(layer.popup.body, formattedData);
              }
              break;
            }
          }
        } else {
          // if no data, use feature.properties to populate popup
          // eslint-disable-next-line no-lonely-if
          const formattedData = commaFormatting(layer, feature.properties, true);
          if (feature.properties[layer.popup.header]) {
            content = `<div><b>${feature.properties[layer.popup.header]}</b></div>`;
            if (layer.popup.body) {
              content += `<div><center>${Mustache.render(layer.popup.body, formattedData)}</center></div>`;
            }
          } else {
            content = Mustache.render(
              layer.popup.body,
              formattedData,
            );
          }
        }
      }
      if (content) break;
    }

    // Todo - we need to be able to render popups from just tileset data as well
    if (!content) {
      // content = Mustache.render(layer.popup.body, feature.properties);
    }

    // Add popup if content exists
    if (content) {
      popup.setLngLat(map.unproject(e.point)).setHTML(content).addTo(map);
    } else {
      // Remove pop up if no features under mouse pointer
      content = null;
      popup.remove();
      return false;
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
