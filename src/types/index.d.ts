declare module 'gisida' {

    import { AnyAction } from 'redux';

    interface generalFunc {
        (...args: any[]):any
    }

    interface generalObjects {
        [key: string]: any
    }

    const version:string;
    function initStore(customReducers:object, loadState:any, siteConfigUrl?:string): any;
    function loadLayers(mapId:string, dispatch:generalFunc, layers:object):any
    
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
        function initApp(config:object):AnyAction;
        function initLoc(config:object):AnyAction;
        function initStyles(styles:Array<object>, mapConfig:object):AnyAction;
        function initRegions(regions:any, mapConfig:object):AnyAction;
        function initLocations(locations:object):AnyAction;
        function initSuperset(config:object):AnyAction;
        function addLayersList(layers:object):AnyAction;
        function addLayer(mapId:string, layer:object):AnyAction;
        function addLayerGroup(mapId:string, groupId:string, group:any):AnyAction;
        function changeRegion(mapId:string, region:any):AnyAction;
        function changeStyle(mapId:string, style:object):AnyAction;
        function toggleLayer(mapId:string, layerId:string, isInit?:boolean):AnyAction;
        function toggleFilter(mapId:string, layerId:string, showFilterPanel:boolean):AnyAction;
        function setLayerFilter(mapId:string, layerId:string, layerFilters:object):AnyAction;
        function filtersUpdated(mapId:string, layerId:string):AnyAction;
        function saveFilterState(mapId:string, layerId:string, filterState:object, isClear:boolean):AnyAction;
        function updatePrimaryLayer(mapId:string, primaryLayer:object):AnyAction;
        function requestData(mapId:string, layerId:string):AnyAction;
        function toggleMenu(mapId:string, menuIsOpen:boolean):AnyAction;
        function toggleCategories(maId:string, category:any, index:number, isRefresh:boolean):AnyAction;
        function receiveData(mapId:string, layer:object, timeseries:any):AnyAction;
        function mapRendered(mapId:string, isRendered:boolean):AnyAction;
        function mapLoaded(mapId:string, isLoaded:boolean):AnyAction;
        function reloadLayer(mapid:string, layerId:string):AnyAction;
        function reloadLayers(mapid:string, reload:any):AnyAction;
        function layerReloaded(mapId:string):AnyAction;
        function updateTimeseries(mapid:string, timeseries:any, layerId:string):AnyAction;
        function detailView(mapid:string, payload:any):AnyAction;
        function resetFilteredLayer(mapid:string, oldLayer:any):AnyAction;
        function triggerSpinner(mapid:string, isLoaded?:boolean):AnyAction;
        function loginRequest(credentials:object):AnyAction;
        function loginSuccess(user:generalObjects):AnyAction;
        function loginFailure(errorMessage:any):AnyAction;
        function getCurrentState():any;
        function initAuth(config:object):AnyAction;
        function receiveLogin(user:generalObjects):AnyAction;
        function loginError(message:any):AnyAction;
        function receiveToken(token:string):AnyAction;
        function getAuthConfigs(config:object):AnyAction;
        function receiveForms(forms:any):AnyAction;
        function fetchFormsError(message:any):AnyAction;
        function loginUser(token:string):AnyAction;
        function logoutUser():AnyAction;
        function locationUpdated(MapId:string):AnyAction;
        function setLocation(mapId:string, loc:any):AnyAction;
        function toggleMapLocation(loc:any):AnyAction;
        
    }

    function prepareLayer(mapId:string, layer:object, dispatch:generalFunc, filterOptions:boolean, doUpdateTsLayer:boolean):any;
    function addPopUp(mapId:string, mapboxGLdetailViewMap:any, dispatch:generalFunc):boolean;
    function sortLayers(map:object, layers:object, nextLayerId:string):any;
    function getSliderLayers(layers:object):Array<any>;
    function buildFilters(filters:object,layerFilters:Array<any>, prevFilters:object):object;
    function mergeFilters(originalFilters:object, filteredFilters:object, clickedFilterKey:string):object;
    function generateFilterOptions(layerData:object):any
    function processFilters(layerData:object, filterOptions:object, isOr:boolean):any;
    function generateStops(layer:object, timefield:Date, dispatch:generalFunc, nextIndex:any):any;
    function formatNum(num:any, decimal:number):string;
    function hexToRgbA(hex:any, alpha:any):any;
    function parseMustache(spec:any, datun:any):any;

    namespace SupAuth {
        function defaultOauthC():any;
        function defaultSupAuthC(User:generalObjects, AuthConfig:object):any
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

    function onaApi(config:object, callback:generalFunc):any;

    namespace onaAuth {
        function oauthURL(clientID:string, callback:generalFunc, baseURL:string):string;
        function ONAoauth(reqConfig:any, token:string, dispatch:generalFunc):any;
    }

    function getData(formID:number, properties:Array<any>, state:object, callback:generalFunc):any;
    function aggregateFormData(layerData:object, locations:object, filterOptions:object, isOr:boolean):Array<any>;
    function parseData(spec:object,datum:Array<any>):Array<any>
    namespace history {}

    function oauthURL(clientID:string, callback:generalFunc, baseURL:string):string;
    function buildParsedBasicDetailItem(detail:object, properties:object):object;
    function processFormData(formData:any, layerObj:object):any;
    function lngLat(LOC:object, APP:Object):object;

    namespace defaultReducers{
        function app(state:object, action:object):object;
        function STYLES(state:object, action:object):object;
    }

    namespace files {
        function loadJSON(path:string, callback:generalFunc, id:any):any
        function loadCSV(path:string, callback:generalFunc):any;
    }

    function addChart(layer:object, data:Array<any>, map:any, mapId:string):any;
    function buildDetailView(mapId:string, LayerObj:object, FeatureProperties:object, dispatch:generalFunc, timeSeriesObj:object):boolean;
    function buildFilterState(mapId:string, filterOptions:object, filters:object, layerObj:object, dispatch:generalFunc, regenStops:object, isOr:boolean):object;
    function clearFilterState(mapId:string, filterState:any, layerId:string, dispatch:generalFunc, isClear:boolean):any;

    namespace localStorage {
        function loadState():any;
        function saveState(state:object, isLoggedIn:boolean):any
    }
    
}