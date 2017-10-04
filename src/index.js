const gisida = {};

gisida.version = require('../package.json').version;
gisida.GisidaCanvas = require('./components/Gisida').default;
gisida.Reducers = require('./lib/store/reducers/Reducers').default;
gisida.MapBoxUtils = require('./lib/map/MapBoxUtils').default;
gisida.MapSpec = require('./core').default

module.exports = gisida
