import parseData from '../../src/utils/parseData.js/'; //function

import { parseInputObj, parseInputData } from '../fixtures/parse-data-input.js'; //obj, array
import { parseOutputData } from '../fixtures/outputs/parse-data-output.js'; //array

describe('parseData', () => {

	test('should return correct parsed Data object (single)', () => {
		expect(parseData(parseObj, parseData[0])).toEqual(outputParseData[0]);
	});

	test('should return correct parsed Data object (multiple)', () => {
		expect(parseData(parseObj, parseData[1])).toEqual(outputParseData[1]);
	});

	test('should return correct parsed Data object (multiple with other)', () => {
		expect(parseData(parseObj, parseData[2])).toEqual(outputParseData[2]);
	});
})
