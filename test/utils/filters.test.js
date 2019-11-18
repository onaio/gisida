import { generateFilterOptions, processFilters } from '../../src/utils/filters';
// files to test on
import { filtersInputObj } from '../fixtures/filters-input';
import { filtersOutputData } from '../fixtures/outputs/filters-output';

describe('generateFilterOptions', () => {
	test('Returns the proper filter object', () => {
		expect(generateFilterOptions(filtersInputObj)).toEqual(filtersOutputData[0]);
	});

})

describe('processFilters', () => {

	test('Returns the proper processed data', () => {
		expect(processFilters(filtersInputObj, generateFilterOptions(filtersInputObj)))
		.toEqual(filtersOutputData[1]);
	});

})