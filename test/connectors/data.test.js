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
});
