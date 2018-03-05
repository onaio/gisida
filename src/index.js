const gisida = {};

gisida.version = require('../package.json').version;
gisida.initStore = require('./store/initStore').default;
gisida.Actions = require('./store/actions/Actions').default;
gisida.Reducers = require('./store/reducers/Reducers').default;
gisida.prepareLayer = require('./map/prepareLayer').default;
gisida.addPopUp = require('./map/addPopUp').default;
gisida.sortLayers = require('./map/sortLayers').default;
gisida.getSliderLayers = require('./map/getSliderLayers').default;
gisida.buildFilters = require('./map/buildFilters').default;
gisida.mergeFilters = require('./map/mergeFilters').default;
gisida.generateFilterOptions = require('./utils/filters').generateFilterOptions;
gisida.generateStops = require('./map/generateStops').default;
gisida.formatNum = require('./utils/formatNum').default;
gisida.hexToRgbA = require('./utils/hexToRgbA').default;
gisida.addChart = require('./map/addChart').default;

module.exports = gisida;
