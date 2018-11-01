import utils from './utils';

test('Adds 2 + 2 to equal 4', () => {
  expect(utils.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
  expect(utils.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
  expect(utils.isNull()).toBeNull();
});

test('Should be falsy', () => {
  expect(utils.checkValue(null)).toBeFalsy();
});

test('User sould be Leonardo Souza object', () => {
  expect(utils.createUser()).toEqual({
    firstName: 'Leonardo',
    lastName: 'Souza',
  });
});