import { isNumber } from '../../src/utils/files.js'

describe('isNumber', () => {

	test('Returns true for being a number', () => {
		expect(isNumber(4)).toBe(true);
	});

	test('Returns true for being a number', () => {
		expect(isNumber(2.6)).toBe(true);
	});

	test('Returns false for not being a number', () => {
		expect(isNumber('not a number')).toBe(false);
	});

})