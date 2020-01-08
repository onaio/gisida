import { AnyAction } from 'redux';

interface generalObjects {
    [key: string]: any
}

export interface Actions {
    initApp(config:object):AnyAction;
    initLoc(config:object):AnyAction;
    initStyles(styles:Array<object>, mapConfig:object):AnyAction;
    initRegions(regions:any, mapConfig:object):AnyAction;
    initLocations(locations:object):AnyAction;
    initSuperset(config:object):AnyAction;
    addLayersList(layers:object):AnyAction;
    addLayer(mapId:string, layer:object):AnyAction;
    addLayerGroup(mapId:string, groupId:string, group:any):AnyAction;
    changeRegion(mapId:string, region:any):AnyAction;
    changeStyle(mapId:string, style:object):AnyAction;
    toggleLayer(mapId:string, layerId:string, isInit?:boolean):AnyAction;
    toggleFilter(mapId:string, layerId:string, showFilterPanel:boolean):AnyAction;
    setLayerFilter(mapId:string, layerId:string, layerFilters:object):AnyAction;
    filtersUpdated(mapId:string, layerId:string):AnyAction;
    saveFilterState(mapId:string, layerId:string, filterState:object, isClear:boolean):AnyAction;
    updatePrimaryLayer(mapId:string, primaryLayer:object):AnyAction;
    requestData(mapId:string, layerId:string):AnyAction;
    toggleMenu(mapId:string, menuIsOpen:boolean):AnyAction;
    toggleCategories(maId:string, category:any, index:number, isRefresh:boolean):AnyAction;
    receiveData(mapId:string, layer:object, timeseries:any):AnyAction;
    mapRendered(mapId:string, isRendered:boolean):AnyAction;
    mapLoaded(mapId:string, isLoaded:boolean):AnyAction;
    reloadLayer(mapid:string, layerId:string):AnyAction;
    reloadLayers(mapid:string, reload:any):AnyAction;
    layerReloaded(mapId:string):AnyAction;
    updateTimeseries(mapid:string, timeseries:any, layerId:string):AnyAction;
    detailView(mapid:string, payload:any):AnyAction;
    resetFilteredLayer(mapid:string, oldLayer:any):AnyAction;
    triggerSpinner(mapid:string, isLoaded?:boolean):AnyAction;
    loginRequest(credentials:object):AnyAction;
    loginSuccess(user:generalObjects):AnyAction;
    loginFailure(errorMessage:any):AnyAction;
    getCurrentState():any;
    initAuth(config:object):AnyAction;
    receiveLogin(user:generalObjects):AnyAction;
    loginError(message:any):AnyAction;
    receiveToken(token:string):AnyAction;
    getAuthConfigs(config:object):AnyAction;
    receiveForms(forms:any):AnyAction;
    fetchFormsError(message:any):AnyAction;
    loginUser(token:string):AnyAction;
    logoutUser():AnyAction;
    locationUpdated(MapId:string):AnyAction;
    setLocation(mapId:string, loc:any):AnyAction;
    toggleMapLocation(loc:any):AnyAction;
}