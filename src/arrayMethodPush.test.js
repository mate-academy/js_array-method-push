'use strict';

const applyCustomPush = require('./arrayMethodPush');
applyCustomPush();

test('push2 is added to [].__proto__', () => {
  expect([].push2)
    .toBeInstanceOf(Function);
});

test(`push2 doesn't call default push`, () => {
  expect([].push2.toString().includes('.push('))
    .toBe(false);
});

test('push single item', () => {
  const source = [0, 1, 2, 3];
  const result = source.push2(4);
  expect(source)
    .toEqual([0, 1, 2, 3, 4]);
  expect(result)
    .toBe(5);
});

test('push multiple items', () => {
  const source = [0, 1, 2, 3];
  const result = source.push2(4, 5, 6);
  expect(source)
    .toEqual([0, 1, 2, 3, 4, 5, 6]);
  expect(result)
    .toBe(7);
});

test('push no items', () => {
  const source = [0, 1, 2, 3];
  const result = source.push2();
  expect(source)
    .toEqual([0, 1, 2, 3]);
  expect(result)
    .toBe(4);
});

test('push an array', () => {
  const source = [0, 1, 2, 3];
  const result = source.push2([4, 5, 6]);
  expect(source)
    .toEqual([0, 1, 2, 3, [4, 5, 6]]);
  expect(result)
    .toBe(5);
});
