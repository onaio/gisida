import mapboxgl from 'mapbox-gl';

const { MockBrowser } = require('mock-browser').mocks;

const browser = new MockBrowser();
const window = browser.getWindow();
global.window = window;

MockBrowser.createWindow();

export default function createMap(layers, callback) {
  const container = window.document.createElement('div');
  // container.offsetWidth = 200;
  // container.offsetHeight = 200;

  const map = new mapboxgl.Map({
    container,
    interactive: false,
    attributionControl: false,
    style: {
      version: 8,
      sources: {},
      layers,
    },
  });

  if (callback) {
    map.on('load', () => {
      callback(null, map);
    });
  }
  return map;
}
