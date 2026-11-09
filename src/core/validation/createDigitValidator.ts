enum Base {
  'bin' = 2,
  'oct' = 8,
  'dec' = 10,
  'hex' = 16,
}

export const createDigitValidator =
  (base: Base) =>
  (char: string): (() => boolean) => {
    const notations = {
      [Base.bin]: () => ({
        chars: '01',
        maxLength: 2,
      }),
      [Base.oct]: () => ({
        chars: '01234567',
        maxLength: 6,
      }),
      [Base.dec]: () => ({
        chars: '0123456789',
        maxLength: 6,
      }),
      [Base.hex]: () => ({
        chars: '0123456789ABCDEF',
        maxLength: 6,
      }),
    };

    const currentBase = notations[base];
    const validChars = currentBase().chars.toLowerCase();

    return (): boolean => {
      return char.length === 1 && validChars.includes(char.toLowerCase());
    };
  };
