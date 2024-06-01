export function extractNumbers(formData) {
  if (!formData.has('num1') || !formData.has('num2')) {
    return [];
  }

  const num1Input = Number(formData.get('num1'));
  const num2Input = Number(formData.get('num2'));

  if (isNaN(num1Input) || isNaN(num2Input)) {
    throw new Error('Invalid input');
  }

  return [num1Input, num2Input];
}
