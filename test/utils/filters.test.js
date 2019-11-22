import { generateFilterOptions, processFilters } from '../../src/utils/filters';
// files to test on
import { filtersInputObj } from '../fixtures/filters-input';
import { filtersOutputData } from '../fixtures/outputs/filters-output';
import aggregateLayerInput from '../fixtures/aggregateLayer-input.json';

describe('generateFilterOptions', () => {

	test('Returns the proper filter object', () => {
		expect(generateFilterOptions(aggregateLayerInput)).toEqual(filtersOutputData[1]);
	});

})

describe('processFilters', () => {

	test('Returns the proper processed data', () => {
		expect(processFilters(filtersInputObj, generateFilterOptions(filtersInputObj)))
		.toEqual(filtersOutputData[0]);
	});

})