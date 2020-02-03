import isArray from './1-isArray';

describe("isArray", function() {
  it('will return false for a string', () => {
    expect(isArray('')).toBe(false);
  });

  it('will return false for an object', () => {
    expect(isArray({})).toBe(false);
  });

  it('will return false for an integer', () => {
    expect(isArray(1)).toBe(false);
  });

  it('will return true for an array', () => {
    expect(isArray([])).toBe(true);
  });
})
