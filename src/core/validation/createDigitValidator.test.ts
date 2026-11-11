import { createDigitValidator } from './createDigitValidator';

describe('createDigitValidator', () => {
  test('should return a function after base and character are provided', () => {
    const result = createDigitValidator(2)('1');
    expect(result).toEqual(expect.any(Function));
  });
  test('should return false if character is an empty string', () => {
    const result = createDigitValidator(8)('');
    expect(result()).toBe(false);
  });
  test('should return false if character is wrong', () => {
    const result = createDigitValidator(10)('&');
    expect(result()).toBe(false);
  });
  test('should correctly validate binary characters', () => {
    const isBin = createDigitValidator(2);
    expect(isBin('0')()).toBe(true);
    expect(isBin('1')()).toBe(true);
    expect(isBin('3')()).toBe(false);
    expect(isBin('A')()).toBe(false);
  });
  test('should correctly validate octal characters', () => {
    const isOct = createDigitValidator(8);
    expect(isOct('0')()).toBe(true);
    expect(isOct('7')()).toBe(true);
    expect(isOct('8')()).toBe(false);
    expect(isOct('A')()).toBe(false);
  });
  test('should correctly validate decimal characters', () => {
    const isDec = createDigitValidator(10);
    expect(isDec('0')()).toBe(true);
    expect(isDec('9')()).toBe(true);
    expect(isDec('B')()).toBe(false);
  });
  test('should correctly validate hexadecimal characters', () => {
    const isHex = createDigitValidator(16);
    expect(isHex('0')()).toBe(true);
    expect(isHex('9')()).toBe(true);
    expect(isHex('c')()).toBe(true);
    expect(isHex('A')()).toBe(true);
    expect(isHex('F')()).toBe(true);
    expect(isHex('G')()).toBe(false);
  });
});
