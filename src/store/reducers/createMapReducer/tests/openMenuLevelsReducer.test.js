import openMenuLevelsReducer from '../openMenuLevelsReducer';
import { TOGGLE_CATEGORIES, TOGGLE_GROUPS } from '../../../constants/actionTypes';
import { mapId } from './common';

describe('openMenuLevelsReducer', () => {
  it('should return the initial state', () => {
    expect(openMenuLevelsReducer(undefined, {})).toEqual([]);
  });

  it('it should handle TOGGLE_CATEGORIES', () => {
    const action = {
      type: TOGGLE_CATEGORIES,
      category: 'category',
      index: 0,
      isRefresh: false,
      mapId,
    };

    // Case 1: State is empty
    // Case 1.1: action.isRefresh is false
    // Case 1.1.1: action.index > -1
    expect(openMenuLevelsReducer([], action)).toEqual([]);
    // Case 1.1.2: action.index <= -1
    const actionIndex = {
      ...action,
      index: -1,
    };
    expect(openMenuLevelsReducer([], actionIndex)).toEqual(['category']);

    // Case 1.2: action.isRefresh is true
    const actionIsRefresh = {
      ...action,
      isRefresh: true,
    };
    // Case 1.2.1: action.index > -1
    expect(openMenuLevelsReducer([], actionIsRefresh)).toEqual([]);
    const actionIsRefreshIndex = {
      ...actionIsRefresh,
      index: -1,
    };
    // Case 1.2.2: action.index <= -1
    expect(openMenuLevelsReducer([], actionIsRefreshIndex)).toEqual([]);

    // Case 2: State is NOT empty
    const stateOld = ['category', 'category2'];
    // Case 2.1: action.isRefresh is false
    // Case 2.1.1: action.index > -1
    expect(openMenuLevelsReducer(stateOld, action)).toEqual(['category2']);
    // Case 2.1.2: action.index <= -1
    expect(openMenuLevelsReducer(stateOld, actionIndex)).toEqual([...stateOld, action.category]);
    // Case 2.2: action.isRefresh is true
    // Case 2.2.1: action.index > -1
    expect(openMenuLevelsReducer(stateOld, actionIsRefresh)).toEqual([]);
    // Case 2.2.2: action.index <= -1
    expect(openMenuLevelsReducer(stateOld, actionIsRefreshIndex)).toEqual([]);
  });

  it('it should handle TOGGLE_GROUPS', () => {
    const action = {
      type: TOGGLE_GROUPS,
      group: 'group',
      index: 0,
      isRefresh: false,
      mapId,
    };

    // Case 1: State is empty
    // Case 1.1: action.isRefresh is false
    // Case 1.1.1: action.index > -1
    expect(openMenuLevelsReducer([], action)).toEqual([]);
    // Case 1.1.2: action.index <= -1
    const actionIndex = {
      ...action,
      index: -1,
    };
    expect(openMenuLevelsReducer([], actionIndex)).toEqual(['group']);

    // Case 1.2: action.isRefresh is true
    const actionIsRefresh = {
      ...action,
      isRefresh: true,
    };
    // Case 1.2.1: action.index > -1
    expect(openMenuLevelsReducer([], actionIsRefresh)).toEqual([]);
    const actionIsRefreshIndex = {
      ...actionIsRefresh,
      index: -1,
    };
    // Case 1.2.2: action.index <= -1
    expect(openMenuLevelsReducer([], actionIsRefreshIndex)).toEqual([]);

    // Case 2: State is NOT empty
    const stateOld = ['group', 'group2'];
    // Case 2.1: action.isRefresh is false
    // Case 2.1.1: action.index > -1
    expect(openMenuLevelsReducer(stateOld, action)).toEqual(['group2']);
    // Case 2.1.2: action.index <= -1
    expect(openMenuLevelsReducer(stateOld, actionIndex)).toEqual([...stateOld, action.group]);
    // Case 2.2: action.isRefresh is true
    // Case 2.2.1: action.index > -1
    expect(openMenuLevelsReducer(stateOld, actionIsRefresh)).toEqual([]);
    // Case 2.2.2: action.index <= -1
    expect(openMenuLevelsReducer(stateOld, actionIsRefreshIndex)).toEqual([]);
  });
});
