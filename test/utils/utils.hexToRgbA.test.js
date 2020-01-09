import hexToRgbA from '../../src/utils/hexToRgbA.js';

describe('hexToRgbA', () => {
  test('Converts Hex (with alpha) properly to RGBA', () => {
    expect(hexToRgbA('#fbafff', 0.8)).toBe('rgba(251, 175, 255, 0.8)');
  });

  test('Converts Hex (with alpha) properly to RGBA', () => {
    expect(hexToRgbA('#FFDC00', 1)).toBe('rgba(255, 220, 0, 1)');
  });

  test('Converts Hex (without alpha) properly to RGBA', () => {
    expect(hexToRgbA('#fbafff')).toBe('rgba(251, 175, 255, 1)');
  });

  test('Throw an error for a bad hex', () => {
    expect(() => hexToRgbA('blahh')).toThrow(new Error('Bad Hex'));
  });
});
