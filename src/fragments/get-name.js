/**
 * Fix the method in order to getName returns the proper value expected
 */
const getObjectName = () => {
  const foo = {
    name: 'pepe',
    getName: function() {
      return this.name;
    },
  };
  const getName = foo.getName();

  // Return the correct name
  return getName;
};

describe('getObjectName', () => {
  it('should return "pepe"', () => {
    expect(getObjectName()).toBe('pepe');
  });
});
