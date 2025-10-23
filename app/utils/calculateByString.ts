import type {
  StringForCalculatingResult,
  StringForCalculatingTest,
} from '@/types';

export const NUMBER_EXPRESSION = /^[\d.]+$/;
export const NUMBER_EXPRESSION_CALCULABLE = /^[\d+\-*/().]+$/;

export const testStringForCalculating = (
  stringValue: string | undefined
): StringForCalculatingTest => {
  if (stringValue === '') stringValue = '0';
  if (stringValue && NUMBER_EXPRESSION_CALCULABLE.test(stringValue)) {
    if (NUMBER_EXPRESSION.test(stringValue)) return 'number';
    return 'calculable';
  }
  return 'error';
};

const calculateByString = (
  stringValue: string | undefined
): StringForCalculatingResult => {
  const checkStringValue: StringForCalculatingTest =
    testStringForCalculating(stringValue);

  if (checkStringValue === 'error')
    return { result: undefined, string: stringValue, type: 'error' };
  if (checkStringValue === 'number')
    return { result: +stringValue!, string: stringValue, type: 'number' };

  try {
    const result = eval(stringValue!);
    return { result, string: stringValue, type: 'calculable' };
  } catch {
    return { result: undefined, string: stringValue, type: 'calculable-error' };
  }
};

export default calculateByString;
