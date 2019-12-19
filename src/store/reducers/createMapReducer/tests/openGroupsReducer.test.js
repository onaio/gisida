import openGroupsReducer from './../openGroupsReducer';
import defaultState from './../../../../../src/store/defaultState';
import { TOGGLE_GROUPS } from './../../../constants/actionTypes';
import { mapId } from './common';

describe('openGroupsReducer', () => {
  it('should handle the initial state', () => {
    expect(openGroupsReducer(undefined, {})).toEqual(defaultState.MAP.openGroups);
  });

  it('should handle TOGGLE_GROUPS', () => {
    const action = {
      type: TOGGLE_GROUPS,
      group: 'group-id',
      index: 0,
      isRefresh: false,
      mapId,
    };

    // Case 1: State is empty
    // Case 1.1: action.index > -1
    // Case 1.1.1: action.isRefresh is false
    expect(openGroupsReducer([], action)).toEqual([]);
    // Case 1.1.2: action.isRefresh is true
    const actionIsRefresh = {
      ...action,
      isRefresh: true,
    };
    expect(openGroupsReducer([], actionIsRefresh)).toEqual([]);
    // Case 1.2: action.index <= -1
    const actionIndexLess = {
      ...action,
      index: -1,
    };
    // Case 1.2.1: action.isRefresh is false
    expect(openGroupsReducer([], actionIndexLess)).toEqual([action.group]);
    // Case 1.2.2: action.isRefresh is true
    const actionIndexLessIsRefresh = {
      ...actionIndexLess,
      isRefresh: true,
    };
    expect(openGroupsReducer([], actionIndexLessIsRefresh)).toEqual([]);

    // Case 2: State is NOT empty
    const state = ['group-id', 'group-id-2'];
    // Case 2.1: action.index > -1
    // Case 2.1.1: action.isRefresh is false
    expect(openGroupsReducer(state, action)).toEqual(['group-id-2']);
    // Case 2.1.2: action.isRefresh is true
    expect(openGroupsReducer(state, actionIsRefresh)).toEqual([]);
    // Case 2.2: action.index <= 1
    // Case 2.2.1: action.isRefresh is false
    expect(openGroupsReducer(state, actionIndexLess)).toEqual([
      'group-id',
      'group-id-2',
      'group-id',
    ]);
    // Case 2.2.2: action.isRefresh is true
    expect(openGroupsReducer(state, actionIndexLessIsRefresh)).toEqual([]);
  });
});
