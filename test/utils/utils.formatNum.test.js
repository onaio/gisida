import formatNum from '../../src/utils/formatNum.js/';

describe('formatNum', () => {
  test('Formats 100 correctly', () => {
    expect(formatNum(100, 1)).toBe(100);
  });

  test('Formats 1000 correctly', () => {
    expect(formatNum(1000, 1)).toBe('1k');
  });

  test('Formats 10,000 correctly', () => {
    expect(formatNum(100000, 1)).toBe('0.1M');
  });

  test('Formats 100,000 correctly', () => {
    expect(formatNum(100000, 1)).toBe('0.1M');
  });

  test('Formats 1,000,000 correctly', () => {
    expect(formatNum(1000000, 1)).toBe('1M');
  });
});
