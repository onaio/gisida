import $ from 'jquery';

export default function addLabels(layer, data) {
  if (layer.labels && layer.labels.data && layer.labels.join) {
    const labels = [];

    data.forEach((row) => {
      const el = document.createElement('div');
      el.className = `marker-label marker-label-${layer.id}-${this.props.mapId}`;
      el.style.width = layer.labels.width;
      el.style.height = layer.labels.height;
      el.style['font-size'] = '12px';
      el.style['font-weight'] = 'normal';
      $(el).html(Mustache.render(layer.labels.label, row));
      layer.labels.data.forEach((label) => {
        if (label[layer.labels.join[0]] === row[layer.labels.join[1]]) {
          labels.push({
            el,
            offset: layer.labels.offset,
            coordinates: [label[layer.labels.coordinates[0]], label[layer.labels.coordinates[1]]],
          });
        }
      });
    });

    if (this.map.getZoom() > layer.labels.minzoom) {
      labels.forEach((row) => {
        new mapboxgl.Marker(row.el, {
          offset: row.offset,
        })
          .setLngLat(row.coordinates)
          .addTo(this.map);
      });
    }

    if (typeof layer.labels.maxzoom === 'undefined') {
      layer.labels.maxzoom = 22;
    }
    this.map.on('zoom', () => {
      if (this.map.getZoom() > layer.labels.minzoom
        && this.map.getZoom() < layer.labels.maxzoom
        && this.map.getLayer(layer.id) !== undefined) {
        this.removeLabels(layer);

        labels.forEach((row) => {
          new mapboxgl.Marker(row.el, {
            offset: row.offset,
          })
            .setLngLat(row.coordinates)
            .addTo(this.map);
        });
      } else {
        this.removeLabels(layer);
      }
    });
  }
}
