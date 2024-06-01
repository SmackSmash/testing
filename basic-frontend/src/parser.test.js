import { it, expect } from 'vitest';
import { extractNumbers } from './parser';

it('extracts two numbers from a form', () => {
  const formData = new FormData();
  formData.append('num1', '1');
  formData.append('num2', '2');
  const numbers = extractNumbers(formData);
  expect(numbers).toEqual([1, 2]);
});

it('returns an empty array for an empty form', () => {
  const formData = new FormData();
  const numbers = extractNumbers(formData);
  expect(numbers).toEqual([]);
});

it('throws an error for a form with invalid input', () => {
  const formData = new FormData();
  formData.append('num1', 'a');
  formData.append('num2', 'b');
  expect(() => extractNumbers(formData)).toThrowError('Invalid input');
});
