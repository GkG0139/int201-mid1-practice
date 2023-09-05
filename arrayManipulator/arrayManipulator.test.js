const arrayManipulator = require('./arrayManipulator');

describe('arrayManipulator', () => {
  it('should add, subtract, multiply, and divide correctly', () => {
    const inputArray = [1, 2, 3, 4];

    const config = {
      add: [10, 20],
      subtract: [5],
      multiply: 2,
      divide: 3,
    };

    const result = arrayManipulator(inputArray, config);

    expect(result).toEqual([
      ((1 + 10 - 5) * 2) / 3,
      ((2 + 10 - 5) * 2) / 3,
      ((3 + 10 - 5) * 2) / 3,
      ((4 + 10 - 5) * 2) / 3,
    ]);
  });
});
