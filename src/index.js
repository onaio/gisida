const gisida = {};

gisida.version = require('../package.json').version;
gisida.initStore = require('./store/initStore').default;
gisida.Actions = require('./store/actions/Actions').default;
gisida.Reducers = require('./store/reducers/Reducers').default;
gisida.prepareLayer = require('./map/prepareLayer').default;
gisida.addLayers = require('./map/addLayers').default;
gisida.addPopUp = require('./map/addPopUp').default;
gisida.sortLayers = require('./map/sortLayers').default;
gisida.getSliderLayers = require('./map/getSliderLayers').default;

module.exports = gisida;
