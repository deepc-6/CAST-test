/**
 * Implement the functionality to pass the tests
 */
function add1(x, y) {
  if (y || y === 0) {
    return x + y;
  } else {
    return function(y) {
      return x + y;
    };
  }
}

// Same function using ES6 arrow function
const add2 = (x, y) => (y || y === 0 ? x + y : (y) => x + y);

describe('add', function() {
  it('should sum the values passed', () => {
    expect(add1(2, 5)).toBe(7);
    expect(add1(2)(5)).toBe(7);
    expect(add2(2, 5)).toBe(7);
    expect(add2(2)(5)).toBe(7);
  });
});
