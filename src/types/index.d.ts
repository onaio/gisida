declare module 'gisida' {
    interface dispatch {
        (arg:any):any
    }
    const version:string;
    function initStore(customReducers:object, loadState:any, siteConfigUrl?:string): any;
    function loadLayers(mapId:string, dispatch:any, layers:object):any
    
    namespace reducerRegistry {
        function getReducers():object;
        function register(name:string, reducer:object):any;
        function setChangeListener(listener:any):any;
    }
    function createMapReducer(mapId:string):object

    namespace reducers {
        function APP(state:object, action:object):object;
        function REGIONS(state:object, action:object):object;
        function FILTER(state:object, action:object):object;
        function LOCATIONS(state:object, action:object):object;
        function SUPERSET_CONFIGS(state:object, action:object):object;
        function LAYERS(state:object, action:object):object;
        function LOC(state:object, action:object):object;
        function STYLES(state:object, action:object):object;
        function AUTH(state:object, action:object):object;
    }

    namespace Actions {
        function initApp(config:object):object;
        function initLoc(config:object):object;
        function initStyles(styles:Array<object>, mapConfig:object):object;
        function initRegions(regions:any, mapConfig:object):object;
        function initLocations(locations:object):object;
        function initSuperset(config:object):object;
        function addLayersList(layers:object):object;
        function addLayer(mapId:string, layer:object):object;
        function addLayerGroup(mapId:string, groupId:string, group:any):object;
        function changeRegion(mapId:string, region:any):object;
        function changeStyle(mapId:string, style:object):object;
        function toggleLayer(mapId:string, layerId:string, isInit?:boolean):object;
        function toggleFilter(mapId:string, layerId:string, showFilterPanel:boolean):object;
        function setLayerFilter(mapId:string, layerId:string, layerFilters:object):object;
        function filtersUpdated(mapId:string, layerId:string):object;
        function saveFilterState(mapId:string, layerId:string, filterState:object, isClear:boolean):object;
        function updatePrimaryLayer(mapId:string, primaryLayer:object):object;
        function requestData(mapId:string, layerId:string):object;
        function toggleMenu(mapId:string, menuIsOpen:boolean):object;
        function toggleCategories(maId:string, category:any, index:number, isRefresh:boolean):object;
        function receiveData(mapId:string, layer:object, timeseries:any):object;
        function mapRendered(mapId:string, isRendered:boolean):object;
        function mapLoaded(mapId:string, isLoaded:boolean):object;
        function reloadLayer(mapid:string, layerId:string):object;
        function reloadLayers(mapid:string, reload:any):object;
        function layerReloaded(mapId:string):object;
        function updateTimeseries(mapid:string, timeseries:any, layerId:string):object;
        function detailView(mapid:string, payload:any):object;
        function resetFilteredLayer(mapid:string, oldLayer:any):object;
        function triggerSpinner(mapid:string, isLoaded?:boolean):object;
        function returnState(dispatch:any, getState:any):object;
        function loginRequest(credentials:object):object;
        function loginSuccess(user:object):object;
        function loginFailure(errorMessage:any):object;
        function getCurrentState():any;
        function initAuth(config:object):object;
        function requestLogin(creds:object):object;
        function receiveLogin(user:object):object;
        function loginError(message:any):object;
        function receiveLogout():object;
        function receiveToken(token:any):object;
        function getAuthConfigs(config:object):object;
        function receiveForms(forms:any):object;
        function fetchFormsError(message:any):object;
        function loginUser(token:string):object;
        function getUserForms(token:string):object;
        function logoutUser():object;
        function locationUpdated(MapId:string):object;
        function setLocation(mapId:string, loc:any):object;
        function toggleMapLocation(loc:any):object;
        
    }

    function prepareLayer(mapId:string, layer:object, dispatch:any, filterOptions:boolean, doUpdateTsLayer:boolean):any;
    function addPopUp(mapId:string, mapboxGLdetailViewMap:any, dispatch:any):boolean;
    function sortLayers(map:object, layers:object, nextLayerId:string):any;
    function getSliderLayers(layers:object):Array<any>;
    function buildFilters(filters:object,layerFilters:Array<any>, prevFilters:object):object;
    function mergeFilters(originalFilters:object, filteredFilters:object, clickedFilterKey:string):object;
    function generateFilterOptions(layerData:object):any
    function processFilters(layerData:object, filterOptions:object, isOr:boolean):any;
    function generateStops(layer:object, timefield:Date, dispatch:any, nextIndex:any):any;
    function formatNum(num:any, decimal:number):string;
    function hexToRgbA(hex:any, alpha:any):any;
    function parseMustache(spec:any, datun:any):any;

    namespace SupAuth {
        function defaultOauthC():any;
        function defaultSupAuthC(User:object, AuthConfig:object):any
        function defaultUnSupAuthZ():any;
        function authorizeUser(APP:object, AUTH:object, accessToken:string, willAuthorize?:boolean):any;
        function getUser():any;
        function getAuthConfig(pk:any):any;
        function getLocalAuthConfig(path:string):any;
        function getMediaAuthConfig(pk:any, token:string):any;
        function parseCSVauth(res:Array<object>):object;
        function defaultSupViewAuthC(path:any):any;
    }

    const ONA: {
        API: any;
        Oauth2:any;
    }

    function onaApi(config:object, callback:any):any;

    namespace onaAuth {
        function oauthURL(clientID:string, callback:string, baseURL:string):string;
        function ONAoauth(reqConfig:any, token:string, dispatch:any):any;
    }

    function getData(formID:number, properties:Array<any>, state:object, callback:any):any;
    function aggregateFormData(layerData:object, locations:object, filterOptions:object, isOr:boolean):Array<any>;
    function parseData(spec:object,datum:Array<any>):Array<any>
    namespace history {}

    function oauthURL(clientID:string, callback:string, baseURL:string):string;
    function buildParsedBasicDetailItem(detail:object, properties:object):object;
    function processFormData(formData:any, layerObj:object):any;
    function lngLat(LOC:object, APP:Object):object;

    namespace defaultReducers{
        function app(state:object, action:object):object;
        function STYLES(state:object, action:object):object;
    }

    namespace files {
        function loadJSON(path:string, callback:any, id:any):any
        function loadCSV(path:string, callback:any):any;
    }

    function addChart(layer:object, data:Array<any>, map:any, mapId:string):any;
    function buildDetailView(mapId:string, LayerObj:object, FeatureProperties:object, dispatch:any, timeSeriesObj:object):boolean;
    function buildFilterState(mapId:string, filterOptions:object, filters:object, layerObj:object, dispatch:any, regenStops:object, isOr:boolean):object;
    function clearFilterState(mapId:string, filterState:any, layerId:string, dispatch:any, isClear:boolean):any;

    namespace localStorage {
        function loadState():any;
        function saveState(state:object, isLoggedIn:boolean):any
    }
    
}