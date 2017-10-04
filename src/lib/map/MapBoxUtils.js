const mapboxgl = require('mapbox-gl');



function renderMap(containerID, accessToken) {
 //MapboxGL render goes here
 
  mapboxgl.accessToken = accessToken;
  var map = new mapboxgl.Map({
    container: containerID, // container id
    style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
    center: [-74.50, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
  }); 
}

const MapBoxUtils = {};
MapBoxUtils.renderMap = renderMap;

export default MapBoxUtils