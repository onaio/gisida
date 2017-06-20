module.exports = {};

const gisida = module.exports;

gisida.version = require('../package.json').version;
gisida.Map = require('./components/Map/Map');
gisida.Dashboard = require('./dashboard');
const config = require('./config');

gisida.config = config;

Object.defineProperty(gisida, 'accessToken', {
  get() { return config.ACCESS_TOKEN; },
  set(token) { config.ACCESS_TOKEN = token; },
});
