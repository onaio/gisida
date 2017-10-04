const gisida = {};

gisida.version = require('../package.json').version;
gisida.Gisida = require('./components/Gisida').default;
gisida.Reducer = require('./reducers/Reducer').default;

module.exports = gisida
