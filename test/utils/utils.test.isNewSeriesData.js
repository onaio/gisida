import isNewSeriesData from '../../src/utils/isNewSeriesData.js/';

import exInputForNewSeries from '../fixtures/is-new-series-data-input.js/';


describe('isNewSeriesData', () => {
//string
	test('Returns true for different arrays', () => {
		expect(isNewSeriesData(['a','b','c'],['a','c','b'])).toBe(true);
	});

	test('Returns true for different arrays', () => {
		expect(isNewSeriesData(['a','b','c'],['a'])).toBe(true);
	});

	test('Returns false for same arrays', () => {
		expect(isNewSeriesData(['a','b','c'],['a','b','c'])).toBe(false);
	});
//object
	test('Returns true for different array of object', () => {
		expect(isNewSeriesData(exInputForNewSeries[0],exInputForNewSeries[1])).toBe(true);
	});

	test('Returns false for same array of object', () => {
		expect(isNewSeriesData(exInputForNewSeries[0],exInputForNewSeries[2])).toBe(false);
	});
//nested object
	test('Returns true for different array of nested object', () => {
		expect(isNewSeriesData(exInputForNewSeries[3],exInputForNewSeries[4])).toBe(true);
	});

	test('Returns false for same array of nested object', () => {
		expect(isNewSeriesData(exInputForNewSeries[3],exInputForNewSeries[5])).toBe(false);
	});
})