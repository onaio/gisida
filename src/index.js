module.exports = {};

const gisida = module.exports;

gisida.version = require('../package.json').version;
gisida.Map = require('./components/Map/Map').default;
gisida.Dashboard = require('./Dashboard').default;
