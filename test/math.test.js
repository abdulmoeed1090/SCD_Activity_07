const { add } = require('../utils/math');

describe('add()', () => {
  test('adds positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('throws on invalid args', () => {
    expect(() => add(2, 'x')).toThrow('Invalid arguments');
  });

  test('adds negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });
});
