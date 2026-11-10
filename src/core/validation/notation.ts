import { Base, INotation } from '../types/types';

export const notations: { [key in Base]: () => INotation } = {
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
