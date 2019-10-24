declare module 'gisida' {
    interface dispatch {
        (arg:any):any
    }
    export const version:string;
    export function initStore(customReducers:object, loadState:any, siteConfigUrl?:string): any;
    export function loadLayers(mapId:string, dispatch:any, layers:object):any
    
    export namespace reducerRegistry {
        export function getReducers():object;
        export function register(name:string, reducer:object):any;
        export function setChangeListener(listener:any):any;
    }
    export function createMapReducer(mapId:string):object

    export namespace reducers {
        export function APP(state:object, action:object):object;
        export function REGIONS(state:object, action:object):object;
        export function FILTER(state:object, action:object):object;
        export function LOCATIONS(state:object, action:object):object;
        export function SUPERSET_CONFIGS(state:object, action:object):object;
        export function LAYERS(state:object, action:object):object;
        export function LOC(state:object, action:object):object;
        export function STYLES(state:object, action:object):object;
        export function AUTH(state:object, action:object):object;
    }

    export namespace Actions {
        export function initApp(config:object):object;
        export function initLoc(config:object):object;
        export function initStyles(styles:Array<object>, mapConfig:object):object;
        export function initRegions(regions:any, mapConfig:object):object;
        export function initLocations(locations:object):object;
        export function initSuperset(config:object):object;
        export function addLayersList(layers:object):object;
        export function addLayer(mapId:string, layer:object):object;
        export function addLayerGroup(mapId:string, groupId:string, group:any):object;
        export function changeRegion(mapId:string, region:any):object;
        export function changeStyle(mapId:string, style:object):object;
        export function toggleLayer(mapId:string, layerId:string, isInit?:boolean):object;
        export function toggleFilter(mapId:string, layerId:string, showFilterPanel:boolean):object;
        export function setLayerFilter(mapId:string, layerId:string, layerFilters:object):object;
        export function filtersUpdated(mapId:string, layerId:string):object;
        export function saveFilterState(mapId:string, layerId:string, filterState:object, isClear:boolean):object;
        export function updatePrimaryLayer(mapId:string, primaryLayer:object):object;
        export function requestData(mapId:string, layerId:string):object;
        export function toggleMenu(mapId:string, menuIsOpen:boolean):object;
        export function toggleCategories(maId:string, category:any, index:number, isRefresh:boolean):object;
        export function receiveData(mapId:string, layer:object, timeseries:any):object;
        export function mapRendered(mapId:string, isRendered:boolean):object;
        export function mapLoaded(mapId:string, isLoaded:boolean):object;
        export function reloadLayer(mapid:string, layerId:string):object;
        export function reloadLayers(mapid:string, reload:any):object;
        export function layerReloaded(mapId:string):object;
        export function updateTimeseries(mapid:string, timeseries:any, layerId:string):object;
        export function detailView(mapid:string, payload:any):object;
        export function resetFilteredLayer(mapid:string, oldLayer:any):object;
        export function triggerSpinner(mapid:string, isLoaded?:boolean):object;
        export function returnState(dispatch:any, getState:any):object;
        export function loginRequest(credentials:object):object;
        export function loginSuccess(user:object):object;
        export function loginFailure(errorMessage:any):object;
        export function getCurrentState():any;
        export function initAuth(config:object):object;
        export function requestLogin(creds:object):object;
        export function receiveLogin(user:object):object;
        export function loginError(message:any):object;
        export function receiveLogout():object;
        export function receiveToken(token:any):object;
        export function getAuthConfigs(config:object):object;
        export function receiveForms(forms:any):object;
        export function fetchFormsError(message:any):object;
        export function loginUser(token:string):object;
        export function getUserForms(token:string):object;
        export function logoutUser():object;
        export function locationUpdated(MapId:string):object;
        export function setLocation(mapId:string, loc:any):object;
        export function toggleMapLocation(loc:any):object;
        
    }

    export function prepareLayer(mapId:string, layer:object, dispatch:any, filterOptions:boolean, doUpdateTsLayer:boolean):any;
    export function addPopUp(mapId:string, mapboxGLdetailViewMap:any, dispatch:any):boolean;
    export function sortLayers(map:object, layers:object, nextLayerId:string):any;
    export function getSliderLayers(layers:object):Array<any>;
    export function buildFilters(filters:object,layerFilters:Array<any>, prevFilters:object):object;
    export function mergeFilters(originalFilters:object, filteredFilters:object, clickedFilterKey:string):object;
    export function generateFilterOptions(layerData:object):any
    export function processFilters(layerData:object, filterOptions:object, isOr:boolean):any;
    export function generateStops(layer:object, timefield:Date, dispatch:any, nextIndex:any):any;
    export function formatNum(num:any, decimal:number):string;
    export function hexToRgbA(hex:any, alpha:any):any;
    export function parseMustache(spec:any, datun:any):any;

    export namespace SupAuth {
        export function defaultOauthC():any;
        export function defaultSupAuthC(User:object, AuthConfig:object):any
        export function defaultUnSupAuthZ():any;
    }

    export const ONA: {
        API: any;
        Oauth2:any;
    }

    export function onaApi(config:object, callback:any):any;

    export namespace onaAuth {
        export function oauthURL(clientID:string, callback:string, baseURL:string):string;
        export function ONAoauth(reqConfig:any, token:string, dispatch:any):any;
    }

    export function getData(formID:number, properties:Array<any>, state:object, callback:any):any;
    export function aggregateFormData(layerData:object, locations:object, filterOptions:object, isOr:boolean):Array<any>;
    export function parseData(spec:object,datum:Array<any>):Array<any>
    export namespace history {};

    export function oauthURL(clientID:string, callback:string, baseURL:string):string;
    export function buildParsedBasicDetailItem(detail:object, properties:object):object;
    export function processFormData(formData:any, layerObj:object):any;
    export function lngLat(LOC:object, APP:Object):object;

    export namespace defaultReducers{
        export function app(state:object, action:object):object;
        export function STYLES(state:object, action:object):object;
    }

    export namespace files {
        export function loadJSON(path:string, callback:any, id:any):any
        export function loadCSV(path:string, callback:any):any;
    }

    export function addChart(layer:object, data:Array<any>, map:any, mapId:string):any;
    export function buildDetailView(mapId:string, LayerObj:object, FeatureProperties:object, dispatch:any, timeSeriesObj:object):boolean;
    export function buildFilterState(mapId:string, filterOptions:object, filters:object, layerObj:object, dispatch:any, regenStops:object, isOr:boolean):object;
    export function clearFilterState(mapId:string, filterState:any, layerId:string, dispatch:any, isClear:boolean):any;

    export namespace localStorage {
        export function loadState():any;
        export function saveState(state:object, isLoggedIn:boolean):any
    }
    
}