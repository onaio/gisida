import gisida from '../src/index';


describe('gisida', () => {
  test('has keys', () => {
    expect(Object.keys(gisida).length).toBeGreaterThan(1);
  });
});