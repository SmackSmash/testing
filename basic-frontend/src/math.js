export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    if (typeof number !== 'number') {
      throw new Error('Invalid input');
    }
    sum += number;
  }
  return sum;
}
