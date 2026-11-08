import { countPossibleSecrets } from './countPossibleSecrets';

describe('countPossibleSecrets', () => {
  test('should return combination count for min length and base', () => {
    const result = countPossibleSecrets(2, 2);
    expect(result).toBe(2);
  });
  test('should return correct number when length is 4 and base is 8', () => {
    const result = countPossibleSecrets(4, 8);
    expect(result).toBe(1680);
  });
  test('should return correct number when length is 5 and base is 10', () => {
    const result = countPossibleSecrets(5, 10);
    expect(result).toBe(30240);
  });
  test('should return combination count for max length and base', () => {
    const result = countPossibleSecrets(6, 16);
    expect(result).toBe(5765760);
  });
  test('should return 0 if base is 0', () => {
    const result = countPossibleSecrets(5, 0);
    expect(result).toBe(0);
  });
});
