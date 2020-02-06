import isTokenExpired from '../../src/utils/isTokenExpired';
describe('isTokenExpired', () => {

    test('Should return status of token expiry', () => {
        expect(isTokenExpired()).toEqual(false)
        localStorage.setItem('expiry_time', '1506816000000')
        expect(isTokenExpired()).toEqual(true)
    })
})
