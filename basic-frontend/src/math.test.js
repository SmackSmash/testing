import { it, expect } from 'vitest';
import { add } from './math';

it('adds 1 + 2 to equal 3', () => {
  expect(add([1, 2])).toBe(3);
});

it('evauluates all elements of an array of unknown length', () => {
  expect(add([1, 2, 3, 4, 5])).toBe(15);
});

it('returns 0 for an empty array', () => {
  expect(add([])).toBe(0);
});

it('works with negative numbers', () => {
  expect(add([-1, -2, -3])).toBe(-6);
});
