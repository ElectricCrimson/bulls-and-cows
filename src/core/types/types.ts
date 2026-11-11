export enum Base {
  'bin' = 2,
  'oct' = 8,
  'dec' = 10,
  'hex' = 16,
}

export interface INotation {
  chars: string;
  maxLength: number;
}

export interface IAnimals {
  bulls: number;
  cows: number;
}

export interface IHistory {
  guess: string;
  bulls: number;
  cows: number;
}
