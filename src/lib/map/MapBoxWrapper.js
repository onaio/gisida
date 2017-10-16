const mapboxgl = require('mapbox-gl');
const MapboxWrapper = {};
/**
 * This lib contains function that wrap Mapbox GL JS functionality
 * that used data from the state and renders it on a Map
 *
 *
 */


function renderMap(mapConfig, accessToken) {
  //Set accessToken
  mapboxgl.accessToken = accessToken;
  //initMap
  console.log(mapConfig);
  var map = new mapboxgl.Map(mapConfig);
  // Add Map Contols
 
  map.addControl(new mapboxgl.NavigationControl());
}


MapboxWrapper.renderMap = renderMap;

export default MapboxWrapper