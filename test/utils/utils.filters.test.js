import { generateFilterOptions, processFilters, filterDataByPeriod } from '../../src/utils/filters.js';
//files to test on
import { filtersInputObj, filterDataByPeriodInput, filterLayerDataOnMultiselectSelection } from '../fixtures/filters-input.js';
import { filtersOutputData, processedFiltersData } from '../fixtures/outputs/filters-output.js';

describe('generateFilterOptions', () => {
	test('Returns the proper filter object', () => {
		expect(generateFilterOptions(filtersInputObj)).toEqual(filtersOutputData[0]);
	});
	test('Returns filter options for multiselect layers', () => {
		expect(generateFilterOptions(filterLayerDataOnMultiselectSelection)).toEqual(filtersOutputData[1]);
	})
})

describe('processFilters', () => {
	test('Returns the proper processed data for layers without filter options', () => {
		expect(processFilters(filtersInputObj))
		.toEqual(processedFiltersData);
	});
	test('Returns empty array if no data is provided by layer', () => {
		filtersInputObj.source.data = [];
		expect(processFilters(filtersInputObj)).toEqual([]);
	})
});

describe('filterDataByPeriod', () => {
	test("Correctly filters data if period string is provided", () => {
		const periodField = 'period';
		const periodVal = 'March';
		expect(filterDataByPeriod(filterDataByPeriodInput, periodField, periodVal)).toEqual([filterDataByPeriodInput[1]])
	});

	test("Correctly filters data if period string is not provided", () => {
		const periodField = 'period';
		expect(filterDataByPeriod(filterDataByPeriodInput, periodField)).toEqual([filterDataByPeriodInput[3]])
	});
})