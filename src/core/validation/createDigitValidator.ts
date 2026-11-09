export const createDigitValidator =
  (base: number) =>
  (char: string): (() => boolean) => {
    if (!base || !char) return () => false;
    return (): boolean => {
      return false;
    };
  };
