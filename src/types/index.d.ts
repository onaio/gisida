declare type actionsInterface = import('./actionsInterface').Actions;
declare type actionTypesInterface = import('./actionTypesInterface').actionTypes;

declare module 'gisida' {
  import { AnyAction } from 'redux';

  interface FlexFunc {
    (...args: any[]): any;
  }

  const version: string;
  function initStore(customReducers: object, loadState: any, siteConfigUrl?: string): any;
  function loadLayers(mapId: string, dispatch: FlexFunc, layers: object): any;

  namespace reducerRegistry {
    function getReducers(): object;
    function register(name: string, reducer: object): any;
    function setChangeListener(listener: any): any;
  }
  function createMapReducer(mapId?: string): any;

  namespace reducers {
    function APP(state: object, action: object): object;
    function REGIONS(state: object, action: object): object;
    function FILTER(state: object, action: object): object;
    function LOCATIONS(state: object, action: object): object;
    function SUPERSET_CONFIGS(state: object, action: object): object;
    function LAYERS(state: object, action: object): object;
    function LOC(state: object, action: object): object;
    function STYLES(state: object, action: object): object;
  }

  const Actions: actionsInterface;

  function prepareLayer(
    mapId: string,
    layer: object,
    dispatch: FlexFunc,
    filterOptions?: boolean,
    doUpdateTsLayer?: boolean
  ): any;
  function addPopUp(mapId: string, mapboxGLdetailViewMap: object, dispatch: FlexFunc): boolean;
  function sortLayers(map: object, layers: object, nextLayerId: string): any;
  function getSliderLayers(layers: object): Array<string>;
  function buildFilters(filters: object, layerFilters: Array<any>, prevFilters: object): object;
  function mergeFilters(
    originalFilters: object,
    filteredFilters: object,
    clickedFilterKey: string
  ): object;
  function generateFilterOptions(layerData: object): Array<any>;
  function processFilters(layerData: object, filterOptions: object, isOr?: boolean): any;
  function generateStops(
    layer: object,
    timefield: string,
    dispatch: FlexFunc,
    nextIndex?: string
  ): any;
  function formatNum(num: number, decimal: number): number;
  function hexToRgbA(hex: string, alpha?: number): any;
  function parseMustache(spec: string, datun: object): string;

  namespace SupAuth {
    function defaultOauthC(): any;
    function defaultSupAuthC(User: object, AuthConfig: object): boolean;
    function defaultUnSupAuthZ(): any;
    function authorizeUser(
      APP: object,
      AUTH: object,
      accessToken: string,
      willAuthorize?: FlexFunc
    ): any;
    function getUser(): Promise<any>;
    function getAuthConfig(pk: any): Promise<any>;
    function getLocalAuthConfig(path: string): Promise<any>;
    function getMediaAuthConfig(pk: any, token: string): Promise<any>;
    function parseCSVauth(res: Array<object>): object;
    function defaultSupViewAuthC(path: string): boolean;
  }

  interface API {
    apiHeaders(config: object): object;
    apiRequest(config: object, headers: object): object;
    fetch(config: object, callback?: FlexFunc, n?: number): Promise<any>;
    fetchAPI(config: object): Promise<any>;
  }

  const ONA: {
    API: API;
  };

  function onaApi(config: object, callback?: FlexFunc): any;

  function getData(formID: number, properties: any, state: object, callback: FlexFunc): any;
  function aggregateFormData(
    layerData: object,
    locations: object,
    filterOptions: object,
    isOr: boolean
  ): Array<any>;
  function parseData(spec: object, datum: Array<any>): any;
  // namespace history {}

  function buildParsedBasicDetailItem(detail: object, properties: object): any;
  function processFormData(formData: any, layerObj: object): any;
  function lngLat(LOC: object, APP: Object): object;

  namespace defaultReducers {
    function app(state: object, action: object): object;
    function STYLES(state: object, action: object): any;
  }

  namespace files {
    function loadJSON(path: string, callback: FlexFunc, id: string): any;
    function loadCSV(path: string, callback: FlexFunc): any;
  }

  function addChart(layer: object, data: Array<any>, map: any, mapId: string): any;
  function buildDetailView(
    mapId: string,
    LayerObj: object,
    FeatureProperties: object,
    dispatch: FlexFunc,
    timeSeriesObj: object
  ): boolean;
  // function buildParsedBasicDetailItem(affix:any, props:object):string;
  function buildFilterState(
    mapId: string,
    filterOptions: object,
    filters: object,
    layerObj: object,
    dispatch: FlexFunc,
    regenStops: object,
    isOr: boolean
  ): object;
  function clearFilterState(
    mapId: string,
    filterState: any,
    layerId: string,
    dispatch: FlexFunc,
    isClear: boolean
  ): any;

  interface ducksApp {
    INIT_APP: string;
    reducerName: string;
    default(state: object, action: object): object;
    initApp(config: object): object;
  }

  interface ducksMap extends actionsInterface, actionTypesInterface {
    reducerName: string;
  }

  const ducks: {
    APP: ducksApp;
    MAP: ducksMap;
    STYLES: ducksMap;
  };

  namespace localStorage {
    function loadState(): any;
    function saveState(state: object, isLoggedIn: boolean): any;
  }

  function isTokenExpired(): boolean;
}
