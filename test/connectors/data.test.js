import { getData, formatParams } from '../../src/connectors/ona-api/data';

const params = {
  country: 'Philippines',
  name: 'map',
};
describe('Test formatParams method', () => {
  test('Should return null', () => {
      expect(formatParams()).toEqual('');
  });
  test('Should return params list', () => {
      expect(formatParams(params)).toEqual('?country=Philippines&name=map');
  });
});

describe('Test getData method', () => {
  //params needed for the
  const callback = (error, Data) => {
      if (error) {
          return error;
      } else if (Data) {
          return Data
      } else {
          return null
      }
  }
  const formID = 448373;
  const properties = null;
  const state = {
      apiAccessToken: 'abc',
      apiHost: 'api.ona.io'
  }

  getData(formID, properties, state, callback)
});