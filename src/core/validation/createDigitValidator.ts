import { notations, Base } from './notation';

export const createDigitValidator =
  (base: Base) =>
  (char: string): (() => boolean) => {
    const currentBase = notations[base];
    const validChars = currentBase().chars.toLowerCase();

    return (): boolean => {
      return char.length === 1 && validChars.includes(char.toLowerCase());
    };
  };
