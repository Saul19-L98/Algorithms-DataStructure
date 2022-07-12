const reverse = require('./index');

test('Reverse function exists', () => {
  expect(myReverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(myReverse('saul')).toEqual('luas');
});

test('Reverse reverses a string', () => {
  expect(myReverse('apple')).toEqual('elppa');
});
