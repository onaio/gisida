const gisida = {};

gisida.version = require('../package.json').version;
gisida.initStore = require('./lib/store/store').default;
gisida.Reducers = require('./lib/store/reducers/Reducers').default;
gisida.MapboxWrapper = require('./lib/map/MapboxWrapper').default;

module.exports = gisida;
