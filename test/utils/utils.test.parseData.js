import parseData from '../../src/utils/parseData.js/'; //function

import { parseInputObj, parseInputObjCmplx, parseInputData, parseInputDataCmplx } from '../fixtures/parse-data-input.js'; //obj, array
import { parseOutputData, parseOutputDataCmplx } from '../fixtures/outputs/parse-data-output.js'; //array

describe('parseData', () => {

	test('should return correct parsed Data object (single)', () => {
		expect(parseData(parseInputObj, parseInputData[0])).toEqual(parseOutputData[0]);
	});

	test('should return correct parsed Data object (multiple)', () => {
		expect(parseData(parseInputObj, parseInputData[1])).toEqual(parseOutputData[1]);
	});

	test('should return correct parsed Data object (multiple with other)', () => {
		expect(parseData(parseInputObj, parseInputData[2])).toEqual(parseOutputData[2]);
	});

	//now testing the complex data

	test('should return correct parsed Data object', () => {
		expect(parseData(parseInputObjCmplx, parseInputDataCmplx[0])).toEqual(parseOutputDataCmplx[0]);
	});

	test('should return correct parsed Data object', () => {
		expect(parseData(parseInputObjCmplx, parseInputDataCmplx[1])).toEqual(parseOutputDataCmplx[1]);
	});
})
