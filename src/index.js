const gisida = {};

gisida.version = require('../package.json').version;
gisida.Gisida = require('./components/Gisida').default;

module.exports = gisida
