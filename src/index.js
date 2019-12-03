/* eslint-disable no-underscore-dangle */
/* eslint-disable global-require */
if (!global._babelPolyfill) require('babel-polyfill');

const gisida = {};

gisida.version = require('../package.json').version;
gisida.initStore = require('./store/initStore').default;
gisida.loadLayers = require('./store/initStore').loadLayers;
gisida.reducerRegistry = require('./store/reducerRegistry').default;
gisida.createMapReducer = require('./store/reducers/reducers').createMapReducer;
gisida.reducers = require('./store/reducers/reducers').default;
gisida.Actions = require('./store/actions/actions').default;
gisida.prepareLayer = require('./map/prepareLayer').default;
gisida.addPopUp = require('./map/addPopUp').default;
gisida.sortLayers = require('./map/sortLayers').default;
gisida.getSliderLayers = require('./map/getSliderLayers').default;
gisida.buildFilters = require('./map/buildFilters').default;
gisida.mergeFilters = require('./map/mergeFilters').default;
gisida.generateFilterOptions = require('./utils/filters').generateFilterOptions;
gisida.processFilters = require('./utils/filters').processFilters;
gisida.generateStops = require('./map/generateStops').default;

gisida.formatNum = require('./utils/formatNum').default;
gisida.hexToRgbA = require('./utils/hexToRgbA').default;
gisida.parseMustache = require('./utils/parseMustache').default;
gisida.SupAuth = require('./utils/supAuth').default;

gisida.ONA = require('./connectors/ona-api/ona').default;
gisida.onaAPI = require('./connectors/ona-api/api').default;
gisida.onaAuth = require('./connectors/ona-api/auth').default;
gisida.getData = require('./connectors/ona-api/data').default;
gisida.aggregateFormData = require('./connectors/ona-api/aggregateFormData').default;
gisida.parseData = require('./utils/parseData').default;

gisida.history = require('./helpers/history').default;
gisida.oauthURL = require('./connectors/ona-api/auth').oauthURL;
gisida.buildParsedBasicDetailItem = require('./map/buildDetailView').buildParsedBasicDetailItem;
gisida.processFormData = require('./connectors/ona-api/aggregateFormData').processFormData;
gisida.lngLat = require('./utils/lngLat').default;

gisida.defaultReducers = {};
gisida.defaultReducers.APP = require('./store/reducers/reducers').APP;
gisida.defaultReducers.STYLES = require('./store/reducers/reducers').STYLES;

gisida.files = {};
gisida.files.loadJSON = require('./utils/files').loadJSON;
gisida.files.loadCSV = require('./utils/files').loadCSV;
gisida.addChart = require('./map/addChart').default;
gisida.buildDetailView = require('./map/buildDetailView').default;
gisida.buildParsedBasicDetailItem = require('./map/buildDetailView').buildParsedBasicDetailItem;

gisida.buildFilterState = require('./filter/buildFilterState').default;
gisida.clearFilterState = require('./filter/clearFilterState').default;

gisida.ducks = {};
gisida.ducks.APP = require('./store/ducks/APP');
gisida.ducks.MAP = require('./store/ducks/MAP');
gisida.ducks.STYLES = require('./store/ducks/STYLES');

gisida.localStorage = {};

gisida.localStorage.loadState = require('./utils/localStorage').loadState;
gisida.localStorage.saveState = require('./utils/localStorage').saveState;
gisida.isTokenExpired = require('./utils/isTokenExpired').default;

module.exports = gisida;
