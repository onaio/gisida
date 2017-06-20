var gisida = module.exports = {};


gisida.version = require('../package.json').version;
gisida.Map = require('./components/Map/Map.js');
gisida.Dashboard = require('./dashboard.js');


const config = require('./config');
mapboxgl.config = config;

gisida.config = ""

Object.defineProperty(gisida, 'accessToken', {
    get: function () { return config.ACCESS_TOKEN; },
    set: function (token) { config.ACCESS_TOKEN = token; }
});   
