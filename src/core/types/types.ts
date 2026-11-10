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
