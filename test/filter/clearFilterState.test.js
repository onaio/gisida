import clearFilterState from '../../src/filter/clearFilterState';


describe('clearFilterState', () => {
    test('Should dispatch saveFilterState action', () => {
        const dispatch = jest.fn();
        clearFilterState('map-1', {}, 'test-layer', dispatch, true)
        expect(dispatch).toHaveBeenCalledTimes(1)
    })
})