const sumOrder = require('../helpers/calculation');

test('sum of int numbers array [1,2,3,4] to equal 10', () => {
  expect(sumOrder([1,2,3,4])).toBe(10);
});

test('sum of flot numbers array [6.7,2.4,15.7,103.5,70.1] to equal 198.4', () => {
  expect(sumOrder([6.7,2.4,15.7,103.5,70.1])).toBe(198.4);
});

test('sum of flot and int numbers array [9,11.37,21,17.5,4,1] to equal 63.87', () => {
  expect(sumOrder([9,11.37,21,17.5,4,1])).toBe(63.87);
});