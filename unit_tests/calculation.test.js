const sum = require('../helpers/calculation');

test('sum array [1,2,3,4] to equal 10', () => {
  expect(sum([1,2,3,4])).toBe(10);
});