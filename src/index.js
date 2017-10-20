const gisida = {};

gisida.version = require('../package.json').version;
gisida.initStore = require('./lib/store/initStore').default;
gisida.Actions = require('./lib/store/actions/Actions').default;

module.exports = gisida;
