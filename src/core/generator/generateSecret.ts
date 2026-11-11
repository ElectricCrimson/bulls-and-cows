export function generateSecret(length: number, base: number, random = Math.random): string {
  const digits = '0123456789ABCDEF'.slice(0, base);
  const secret = [...digits]
    .sort(() => random() - 0.5)
    .slice(0, length)
    .join('');

  return secret;
}
