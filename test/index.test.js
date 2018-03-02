import gisida from '../src/index';


describe('gisida', () => {

  test('has kest', () => {
    expect(Object.keys(gisida).length).toBeGreaterThan(1)
  });
});