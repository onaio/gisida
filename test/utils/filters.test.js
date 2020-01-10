import { generateFilterOptions, processFilters, filterDataByPeriod } from '../../src/utils/filters';
// files to test on
import { filtersInputObj, filterDataByPeriodInput } from '../fixtures/filters-input';
import { filtersOutputData } from '../fixtures/outputs/filters-output';
import aggregateLayerInput from '../fixtures/aggregateLayer-input.json';

describe('generateFilterOptions', () => {

	test('Returns the proper filter object', () => {
		expect(generateFilterOptions(aggregateLayerInput)).toEqual(filtersOutputData[1]);
	});

})

describe('processFilters', () => {
	// to be reviewed
	test('Returns the proper processed data', () => {
		expect(processFilters(filtersInputObj, generateFilterOptions(filtersInputObj), true))
		.toEqual([]);
	});

})

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