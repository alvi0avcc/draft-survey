export const average = (...numbers: number[]): number | undefined => {
  if (numbers.length === 0) return undefined;
  const sum = numbers.reduce((sum, num) => {
    if (typeof num !== 'number' || isNaN(num)) {
      throw new Error(`Invalid number: ${num}`);
    }
    return sum + num;
  }, 0);
  return sum / numbers.length;
};
