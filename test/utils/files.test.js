import { isNumber, comparator } from '../../src/utils/files'

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

describe('comparator', () => {
	const a = {p: "July 11 to July 24", date: "Wed Jul 11 2001 00:00:00 GMT+0300 (East Africa Time)"}
	const b = {p: "March 1 to March 20", date: "Thu Mar 01 2001 00:00:00 GMT+0300 (East Africa Time)"}

	test('should return date difference if date objects provided', () => {
		expect(comparator(a, b)).toEqual(11404800000)
	})
})