import { IAnimals } from '../types/types';

export function evaluateGuess(secret: string, guess: string): IAnimals {
  const currentSecret = secret.toLocaleLowerCase();
  const currentGuess = guess.toLocaleLowerCase();
  const secretArr = [...currentSecret];
  const guessArr = [...currentGuess];

  if (secret.length !== guess.length) return { bulls: 0, cows: 0 };
  if (currentSecret === currentGuess) return { bulls: secret.length, cows: 0 };

  const totalMatches = guessArr.filter((guessChar) => currentSecret.includes(guessChar)).length;
  const bulls = secretArr.filter((secretChar, i) => secretChar === guessArr[i]).length;
  const cows = totalMatches - bulls;

  return { bulls, cows };
}
