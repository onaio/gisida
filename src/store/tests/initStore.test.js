import configureStore from 'redux-mock-store';
import defaultState from '../defaultState';
import { addMapLayerToStore } from '../initStore';
import { layerObj1, layerObj2 } from './fixtures';
import * as types from '../constants/actionTypes';
import * as prepareLayer from '../../map/prepareLayer';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('store/addMapLayerToStore', () => {
  const store = mockStore(defaultState);
  const mapId = 'map-1';

  beforeEach(() => {
    store.clearActions();
  });

  it('adds map layer object which is not visible correctly', () => {
    addMapLayerToStore(layerObj2, mapId, store.dispatch);
    expect(store.getActions()).toEqual([
      {
        type: types.ADD_LAYER,
        layer: {
          ...layerObj2,
          loaded: false,
        },
        mapId,
      },
    ]);
  });

  it('adds map layer object which should be visible correctly', () => {
    const prepareLayerSpy = jest.spyOn(prepareLayer, 'default').mockImplementation(() => jest.fn());
    addMapLayerToStore(layerObj1, mapId, store.dispatch);
    expect(store.getActions()).toEqual([
      {
        type: types.ADD_LAYER,
        layer: {
          ...layerObj1,
          loaded: false,
        },
        mapId,
      },
      {
        type: types.TOGGLE_LAYER,
        mapId,
        layerId: layerObj1.id,
        isInit: true,
      },
    ]);
    expect(prepareLayerSpy).toHaveBeenCalledWith(
      mapId,
      {
        ...layerObj1,
        loaded: false,
      },
      store.dispatch
    );
  });
});
