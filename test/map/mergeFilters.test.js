import mergeFilters from '../../src/map/mergeFilters';
import mergeFiltersData from '../fixtures/mergeFilters-data.json';

const {originalFilters, filteredFilters, clickedFilterKey, output } = mergeFiltersData

describe('mergeFilters', () => {

    test('Should return correct originalFilters if not filteredFilters', () => {
        expect(mergeFilters(originalFilters, {}, clickedFilterKey)).toEqual(originalFilters)
    })

    test('Should return correct new filters', () => {
        expect(mergeFilters(originalFilters, filteredFilters, clickedFilterKey)).toEqual(output)
    })
})