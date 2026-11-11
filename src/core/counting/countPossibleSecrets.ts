const cache: Map<string, number> = new Map();

export function countPossibleSecrets(length: number, base: number): number {
  const key = `${length}-${base}`;
  if (cache.has(key)) {
    return cache.get(key) ?? 0;
  }

  if (length === 0) return 1;
  if (base <= 0 || base < length) return 0;

  const result = base * countPossibleSecrets(length - 1, base - 1);
  cache.set(key, result);
  return result;
}
