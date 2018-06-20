import { generateFilterOptions } from '../../src/utils/filters.js';
//files to test on
import { filtersInputObj } from '../fixtures/filters-input.js';
import { filtersOutputObj } from '../fixtures/outputs/filters-output.js';

describe('generateFilterOptions', () => {

	test('Returns the proper filter object', () => {
		expect(generateFilterOptions(filtersInputObj)).toEqual(filtersOutputObj);
	});

})