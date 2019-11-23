/**
 * Implement the functionality to pass the tests
 */
const sameXOAmount = (str) =>
  (str.match(/x/gi) || []).length === (str.match(/o/gi) || []).length;

describe('sameXOAmount()', () => {
  it('should return `true` if number of `X` and `O` is equal', () => {
    expect(sameXOAmount('xXoO')).toEqual(true);
    expect(sameXOAmount('aAxXXbBoOo')).toEqual(true);
    expect(sameXOAmount('abc')).toEqual(true);
  });

  it('should return `false` if number of `X` and `O` is not equal', () => {
    expect(sameXOAmount('OaAxXbBoO')).toEqual(false);
    expect(sameXOAmount('xgXoXsdxOxz')).toEqual(false);
    expect(sameXOAmount('aaAmmMxMM')).toEqual(false);
  });
});
