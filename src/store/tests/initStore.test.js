import configureStore from 'redux-mock-store';
import defaultState from '../defaultState';
import { addMapLayerToStore, getMapLayer } from '../initStore';
import { layerObj1, layerObj2, layer1, layer2, layerGroup } from './fixtures';
import * as types from '../constants/actionTypes';
import * as prepareLayer from '../../map/prepareLayer';
import * as files from '../../utils/files';

const middlewares = [];
const mockStore = configureStore(middlewares);
const mapId = 'map-1';
const prepareLayerSpy = jest.spyOn(prepareLayer, 'default').mockImplementation(() => jest.fn());
const store = mockStore(defaultState);

describe('store/addMapLayerToStore', () => {
  beforeEach(() => {
    store.clearActions();
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('adds map layer object which is not visible correctly', () => {
    addMapLayerToStore({ ...layerObj2, id: layer2 }, mapId, store.dispatch);
    expect(store.getActions()).toEqual([
      {
        type: types.ADD_LAYER,
        layer: {
          ...layerObj2,
          loaded: false,
          id: layer2,
        },
        mapId,
      },
    ]);
  });

  it('adds map layer object which should be visible correctly', () => {
    addMapLayerToStore({ ...layerObj1, id: layer1 }, mapId, store.dispatch);
    expect(store.getActions()).toEqual([
      {
        type: types.ADD_LAYER,
        layer: {
          ...layerObj1,
          loaded: false,
          id: layer1,
        },
        mapId,
      },
      {
        type: types.TOGGLE_LAYER,
        mapId,
        layerId: layer1,
        isInit: true,
      },
    ]);
    expect(prepareLayerSpy).toHaveBeenCalledWith(
      mapId,
      {
        ...layerObj1,
        loaded: false,
        id: layer1,
      },
      store.dispatch
    );
  });
});

describe('store/getMapLayer', () => {
  const layerObjLookUp = {
    [layer1]: {
      ...layerObj1,
      id: layer1,
    },
    [layer2]: {
      ...layerObj2,
      id: layer2,
    },
  };

  beforeEach(() => {
    store.clearActions();
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('adds layer to store if layer is string', () => {
    const callback = jest.fn();
    const loadJSONMock = jest.spyOn(files, 'loadJSON').mockImplementation((_, cb, id) => {
      cb(layerObj2, id);
    });

    getMapLayer(layer2, mapId, store.dispatch, callback);
    expect(store.getActions()).toEqual([
      {
        type: types.ADD_LAYER,
        layer: {
          ...layerObj2,
          loaded: false,
          id: layer2,
        },
        mapId,
      },
    ]);
    expect(loadJSONMock).toHaveBeenCalledWith(`config/layers/${layer2}.json`, expect.any(Function));
    expect(callback).toHaveBeenCalledWith(true, layer2);

    // layer name contains http
    store.clearActions();
    getMapLayer(`http://example.com/${layer2}.json`, mapId, store.dispatch, callback);
    expect(loadJSONMock).toHaveBeenCalledWith(
      `http://example.com/${layer2}.json`,
      expect.any(Function)
    );

    // layer name starts with /
    store.clearActions();
    getMapLayer(`/config/layers/${layer2}.json`, mapId, store.dispatch, callback);
    expect(loadJSONMock).toHaveBeenCalledWith(
      `/config/layers/${layer2}.json`,
      expect.any(Function)
    );
  });

  it('it does not add layer string to store if JSON response falsy', () => {
    const callback = jest.fn();
    const loadJSONMockFalsy = jest.spyOn(files, 'loadJSON').mockImplementation((_, cb, id) => {
      cb(null, id);
    });

    getMapLayer(layer2, mapId, store.dispatch, callback);
    expect(loadJSONMockFalsy).toHaveBeenCalledWith(
      `config/layers/${layer2}.json`,
      expect.any(Function)
    );
    expect(store.getActions()).toEqual([]);
    expect(callback).toHaveBeenCalledWith(false, layer2);
  });

  it('adds layer to store if layer is string map object lookup is present', () => {
    const callback = jest.fn();
    const loadJSONMock = jest.spyOn(files, 'loadJSON').mockImplementation((_, cb, id) => {
      cb(layerObj2, id);
    });

    // Layer is not in default layers
    getMapLayer(layer2, mapId, store.dispatch, callback, layerObjLookUp, []);
    expect(loadJSONMock).not.toHaveBeenCalled();
    expect(store.getActions()).toEqual([
      {
        type: types.ADD_LAYER,
        layer: {
          ...layerObj2,
          loaded: false,
          id: layer2,
        },
        mapId,
      },
    ]);
    expect(callback).toHaveBeenCalledWith(true, layer2);

    // Layer is in default layers
    store.clearActions();
    getMapLayer(layer2, mapId, store.dispatch, callback, layerObjLookUp, [layer2]);
    expect(loadJSONMock).not.toHaveBeenCalled();
    expect(store.getActions()).toEqual([
      {
        type: types.ADD_LAYER,
        layer: {
          ...layerObj2,
          loaded: false,
          visible: true,
          id: layer2,
        },
        mapId,
      },
      {
        type: types.TOGGLE_LAYER,
        mapId,
        layerId: layer2,
        isInit: true,
      },
    ]);
    expect(callback).toHaveBeenCalledWith(true, layer2);
    expect(prepareLayerSpy).toHaveBeenCalledWith(
      mapId,
      {
        ...layerObj2,
        loaded: false,
        visible: true,
        id: layer2,
      },
      store.dispatch
    );
  });

  it('adds layer to store if layer is an object', () => {
    const callback = jest.fn();
    const layerObj = {
      ...layerObj2,
      id: layer2,
    };

    getMapLayer(layerObj, mapId, store.dispatch, callback, layerObjLookUp, []);
    expect(store.getActions()).toEqual([
      {
        type: types.ADD_LAYER,
        layer: {
          ...layerObj,
          loaded: false,
        },
        mapId,
      },
    ]);
    expect(callback).toHaveBeenCalledWith(true, layerObj.id);
  });

  it('adds layers to store if layer is a group', () => {
    const callback = jest.fn();
    getMapLayer(layerGroup, mapId, store.dispatch, callback, layerObjLookUp, [layer1]);
    expect(store.getActions()).toEqual([
      {
        type: types.ADD_LAYER,
        layer: {
          ...layerObj1,
          loaded: false,
          visible: true,
          id: layer1,
        },
        mapId,
      },
      {
        type: types.TOGGLE_LAYER,
        mapId,
        layerId: layer1,
        isInit: true,
      },
      {
        type: types.ADD_LAYER,
        layer: {
          ...layerObj2,
          loaded: false,
          id: layer2,
        },
        mapId,
      },
    ]);
    expect(callback).toHaveBeenCalledTimes(2);
  });
});
