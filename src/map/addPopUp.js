import Mustache from 'mustache';

export default function addMousemoveEvent(MapComponent) {
  let content = 'Unknown';
  const { map } = MapComponent;

  const popup = MapComponent.popup || new mapboxgl.Popup({
    closeOnClick: true,
    closeButton: false,
  });
  MapComponent.popup = popup;

  map.on('mousemove', (e) => {
    const activeLayers = [];
    Object.keys(MapComponent.props.MAP.layers).forEach((key) => {
      const layer = MapComponent.props.MAP.layers[key];
      if (layer.visible) {
        activeLayers.push(key);
      }
    });

    const features = map.queryRenderedFeatures(e.point, {
      layers: activeLayers,
    });

    if (!features || !features.length > 0) {
      popup.remove();
      return false;
    }


    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
    popup.setLngLat(map.unproject(e.point))
      .setHTML('Type: ' + features[0].properties.type + '<br/> Fare:' + features[0].properties.fare)
      .addTo(map);
    return true;
  });

  // // add popups for marker charts
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
