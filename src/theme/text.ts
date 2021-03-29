export const fontSize = {
  xxl: '28px',
  xl: '24px',
  l: '18px',
  m: '16px',
  s: '14px',
  xs: '12px',
  xxs: '10px',
};

export type FontSizeType = typeof fontSize;
export type KeyFontSize = keyof FontSizeType;

export const fontWeight = {
  light: '300',
  regular: '400',
  medium: '500',
  bold: '700',
  black: '800',
};

export type FontWeightType = typeof fontWeight;
export type KeyFontWeight = keyof FontWeightType;
