import { FILTER } from '../../../src/store/reducers';
import defaultState from '../../../src/store/defaultState';
import { SAVE_FILTER_STATE, FILTERS_UPDATED } from '../../../src/store/constants/actionTypes';
import { layerId, mapId } from './common';

describe('FILTER', () => {
  const stateEmpty = {};
  const stateOld = {
    [layerId]: {
      doUpdate: false,
      isClear: false,
    },
  };

  it('should return the initial state', () => {
    expect(FILTER(undefined, {})).toEqual(defaultState.FILTER);
  });

  it('should handle SAVE_FILTER_STATE', () => {
    const action = {
      type: SAVE_FILTER_STATE,
      layerId,
      filterState: {
        filterOptions: {},
      },
      mapId,
      isClear: true,
    };
    const actionUndefinedIsClear = {
      ...action,
      isClear: undefined,
    };

    // Case 1: The state obj is empty
    // Case 1.1: action.isClear is defined
    expect(FILTER(stateEmpty, action)).toEqual({
      ...stateEmpty,
      [action.layerId]: {
        ...action.filterState,
        doUpdate: true,
        isClear: true,
      },
    });

    // Case 1.2: action.isClear is undefined
    expect(FILTER(stateEmpty, actionUndefinedIsClear)).toEqual({
      ...stateEmpty,
      [action.layerId]: {
        ...action.filterState,
        doUpdate: true,
        isClear: false,
      },
    });

    // Case 2: The state obj is not empty
    // Case 2.1 action.isClear is defined
    expect(FILTER(stateOld, action)).toEqual({
      ...stateOld,
      [action.layerId]: {
        ...action.filterState,
        doUpdate: true,
        isClear: true,
      },
    });

    // Case 2.2 action.isClear is undefined
    expect(FILTER(stateOld, actionUndefinedIsClear)).toEqual({
      ...stateOld,
      [action.layerId]: {
        ...action.filterState,
        doUpdate: true,
        isClear: false,
      },
    });
  });

  it('should handle FILTERS_UPDATED', () => {
    const action = {
      type: FILTERS_UPDATED,
      mapId,
      layerId,
    };
    const actionLayerIdUndfined = {
      ...action,
      layerId: undefined,
    };

    // Case 1: The state obj is empty
    // Case 1.1: action.layerId is defined
    expect(FILTER(stateEmpty, action)).toEqual({
      ...stateEmpty,
      [action.layerId]: {
        doUpdate: false,
      },
    });

    // Case 1.2: action.layerId is undefined
    expect(FILTER(stateEmpty, actionLayerIdUndfined)).toEqual({
      ...stateEmpty,
    });

    // Case 2: The state obj is not empty
    // Case 2.1: action.layerId is defined
    expect(FILTER(stateOld, action)).toEqual({
      ...stateEmpty,
      [action.layerId]: {
        ...stateOld[action.layerId],
        doUpdate: false,
      },
    });

    // Case 2.2: action.layerId is undefined
    expect(FILTER(stateOld, actionLayerIdUndfined)).toEqual({
      ...stateOld,
    });
  });
});
