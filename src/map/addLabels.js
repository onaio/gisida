import $ from 'jquery';
import Mustache from 'mustache';

const mapboxgl = require('mapbox-gl');

// todo: change for split map
const mapId = '01';

function removeLabels(layer) {
  const classItems = document.getElementsByClassName(`marker-label-${layer.id}-${mapId}`);
  while (classItems[0]) {
    classItems[0].parentNode.removeChild(classItems[0]);
  }
}

export default function addLabels(map, layer, data) {
  if (layer.labels && layer.labels.data && layer.labels.join) {
    const labels = [];

    data.forEach((row) => {
      const el = document.createElement('div');
      el.className = `marker-label marker-label-${layer.id}-${mapId}`;
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

    if (map.getZoom() > layer.labels.minzoom) {
      labels.forEach((row) => {
        new mapboxgl.Marker(row.el, {
          offset: row.offset,
        })
          .setLngLat(row.coordinates)
          .addTo(map);
      });
    }

    if (typeof layer.labels.maxzoom === 'undefined') {
      layer.labels.maxzoom = 22;
    }
    map.on('zoom', () => {
      if (map.getZoom() > layer.labels.minzoom
        && map.getZoom() < layer.labels.maxzoom
        && map.getLayer(layer.id) !== undefined) {
        removeLabels(layer);

        labels.forEach((row) => {
          new mapboxgl.Marker(row.el, {
            offset: row.offset,
          })
            .setLngLat(row.coordinates)
            .addTo(map);
        });
      } else {
        removeLabels(layer);
      }
    });
  }
}
