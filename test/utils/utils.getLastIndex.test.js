import getLastIndex from '../../src/utils/getLastIndex.js/';

describe('getLastIndex', () => {
  test('Gets correct index for item', () => {
    expect(getLastIndex(['a', 'b', 'c', 'd', 'e'], 'c')).toBe(2);
  });

  test('Gets correct index for item', () => {
    expect(getLastIndex(['a', 'b', 'c', 'd', 'a'], 'a')).toBe(4);
  });

  test('Returns undefined if item does not exist in array', () => {
    expect(getLastIndex(['a', 'b', 'c', 'd', 'e'], 'f')).toBeUndefined();
  });
});
