const base = 8;

export const spacers = {
  xl: `${base * 8}px`,
  l: `${base * 6}px`,
  m: `${base * 3}px`,
  s: `${base * 2}px`,
  xs: `${base}px`,
};

export type SpacersType = typeof spacers;
export type KeySizes = keyof typeof spacers;
