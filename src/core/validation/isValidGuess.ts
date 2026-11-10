import { createDigitValidator } from './createDigitValidator';
import { Base } from '../types/types';
import { notations } from './notation';

export function isValidGuess(guess: string, length: number, base: Base): boolean {
  if (!guess.trim()) return false;
  const { maxLength } = notations[base]();

  const checkChars = [...guess].every((currentChar) => createDigitValidator(base)(currentChar)());
  const checkLength = length > 1 && length <= maxLength;

  return checkChars && checkLength;
}
