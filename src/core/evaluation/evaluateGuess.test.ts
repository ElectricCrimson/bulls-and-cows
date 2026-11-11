import { evaluateGuess } from './evaluateGuess';

describe('evaluateGuess', () => {
  test('should return 0 bulls, 3 cows for misplaced matches', () => {
    const result = evaluateGuess('23890', '90752');
    expect(result).toEqual({ bulls: 0, cows: 3 });
  });
  test('should return 1 bull, 1 cow for mixed matches', () => {
    const result = evaluateGuess('1235', '1509');
    expect(result).toEqual({ bulls: 1, cows: 1 });
  });
  test('should return 0 bulls, 0 cows for different lengths', () => {
    const result = evaluateGuess('C235E7', 'C235');
    expect(result).toEqual({ bulls: 0, cows: 0 });
  });
  test('should return 0 bulls, 0 cows when no matches', () => {
    const result = evaluateGuess('3706', '1245');
    expect(result).toEqual({ bulls: 0, cows: 0 });
  });
  test('should return 0 bulls, 0 cows for empty guess', () => {
    const result = evaluateGuess('984', '');
    expect(result).toEqual({ bulls: 0, cows: 0 });
  });
  test('should return 2 bulls, 0 cows for exact match', () => {
    const result = evaluateGuess('01', '01');
    expect(result).toEqual({ bulls: 2, cows: 0 });
  });
  test('should return 3 bulls, 0 cows ignoring case', () => {
    const result = evaluateGuess('eA7', 'Ea7');
    expect(result).toEqual({ bulls: 3, cows: 0 });
  });
  test('should return 0 bulls, 4 cows ignoring case', () => {
    const result = evaluateGuess('eA75', '57Ea');
    expect(result).toEqual({ bulls: 0, cows: 4 });
  });
});
