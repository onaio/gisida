import categoriesReducer from './../categoriesReducer';
import defaultState from './../../../../../src/store/defaultState';
import { TOGGLE_CATEGORIES } from './../../../constants/actionTypes';
import { mapId } from './common';

describe('categoriesReducer', () => {
  it('should return the initial state', () => {
    expect(categoriesReducer(undefined, {})).toEqual(defaultState.MAP.openCategories);
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
    expect(categoriesReducer([], action)).toEqual([]);
    // Case 1.1.2: action.index <= -1
    const actionIndex = {
      ...action,
      index: -1,
    };
    expect(categoriesReducer([], actionIndex)).toEqual(['category']);

    // Case 1.2: action.isRefresh is true
    const actionIsRefresh = {
      ...action,
      isRefresh: true,
    };
    // Case 1.2.1: action.index > -1
    expect(categoriesReducer([], actionIsRefresh)).toEqual([]);
    const actionIsRefreshIndex = {
      ...actionIsRefresh,
      index: -1,
    };
    // Case 1.2.2: action.index <= -1
    expect(categoriesReducer([], actionIsRefreshIndex)).toEqual([]);

    // Case 2: State is NOT empty
    const stateOld = ['category', 'category2'];
    // Case 2.1: action.isRefresh is false
    // Case 2.1.1: action.index > -1
    expect(categoriesReducer(stateOld, action)).toEqual(['category2']);
    // Case 2.1.2: action.index <= -1
    expect(categoriesReducer(stateOld, actionIndex)).toEqual([...stateOld, action.category]);
    // Case 2.2: action.isRefresh is true
    // Case 2.2.1: action.index > -1
    expect(categoriesReducer(stateOld, actionIsRefresh)).toEqual([]);
    // Case 2.2.2: action.index <= -1
    expect(categoriesReducer(stateOld, actionIsRefreshIndex)).toEqual([]);
  });
});
