import isNewSeriesData from '../../src/utils/isNewSeriesData.js/';


describe('isNewSeriesData', () => {

	test('Returns true for different arrays', () => {
		expect(isNewSeriesData(['a','b','c'],['a','c','b'])).toBe(true);
	});

	test('Returns true for different arrays', () => {
		expect(isNewSeriesData(['a','b','c'],['a'])).toBe(true);
	});

	test('Returns false for same arrays', () => {
		expect(isNewSeriesData(['a','b','c'],['a','b','c'])).toBe(false);
	});
})