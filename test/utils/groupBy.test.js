import groupBy from '../../src/utils/groupBy';

// ex data to test on:
import exInputForGroupBy from '../fixtures/group-by-input';
import exOutputForGroupBy from '../fixtures/outputs/group-by-output';

describe('groupBy', () => {

  test('Returns the correct object', () => {
    expect(groupBy(exInputForGroupBy[0],'Services')).toEqual(exOutputForGroupBy[0]);
  });

  test('Returns the correct object', () => {
    expect(groupBy(exInputForGroupBy[1],'Services')).toEqual(exOutputForGroupBy[1]);
  });

  
})