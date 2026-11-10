import { isValidGuess } from './isValidGuess';

describe('isValidGuess', () => {
  test('should return false if guess is empty', () => {
    const result = isValidGuess('', 4, 2);
    expect(result).toBe(false);
  });
  test('should return false if guess contains only whitespace', () => {
    const result = isValidGuess('    ', 4, 2);
    expect(result).toBe(false);
  });
  test('should return false if guess contains invalid character', () => {
    const result = isValidGuess('12345%', 6, 10);
    expect(result).toBe(false);
  });
  test('should return false if guess contains invalid character for bin base', () => {
    const result = isValidGuess('13', 2, 2);
    expect(result).toBe(false);
  });
  test('should return false if guess contains invalid character for hex base', () => {
    const result = isValidGuess('13BCK', 5, 16);
    expect(result).toBe(false);
  });
  test('should return false when length is invalid for bin base', () => {
    const result = isValidGuess('10', 3, 2);
    expect(result).toBe(false);
  });
  test('should return false when length is invalid for hex base', () => {
    const result = isValidGuess('107DE5', 16, 16);
    expect(result).toBe(false);
  });
  test('should return true for valid parameters for bin base', () => {
    const result = isValidGuess('01', 2, 2);
    expect(result).toBe(true);
  });
  test('should return true for valid parameters for dec base', () => {
    const result = isValidGuess('01894', 5, 10);
    expect(result).toBe(true);
  });
  test('should return true for valid parameters for hex base', () => {
    const result = isValidGuess('01c56F', 6, 16);
    expect(result).toBe(true);
  });
});
