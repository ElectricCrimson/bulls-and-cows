import { generateSecret } from './generateSecret';

describe('generateSecret', () => {
  test('should return predictable secret for mocked random', () => {
    const fakeRandom = () => 0;
    const secret = generateSecret(4, 8, fakeRandom);
    expect(secret).toBe('7654');
  });
  test('should generate only 0 and 1 for binary base', () => {
    const secret = generateSecret(2, 2);
    expect(secret).toMatch(/^[01]+$/);
  });
  test('should generate only oct characters for base 8', () => {
    const secret = generateSecret(6, 8);
    expect(secret).toMatch(/^[0-7]+$/);
  });
  test('should generate only dec characters for base 10', () => {
    const secret = generateSecret(6, 10);
    expect(secret).toMatch(/^[0-9]+$/);
  });
  test('should generate only hex characters for base 16', () => {
    const secret = generateSecret(6, 16);
    expect(secret).toMatch(/^[0-9a-fA-F]+$/);
  });
  test('should generate a secret with unique digits', () => {
    const secret = generateSecret(5, 10);
    const uniqueChars = [...new Set(secret)];
    expect([...secret]).toEqual(uniqueChars);
  });
});
