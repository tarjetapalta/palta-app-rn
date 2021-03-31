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
  hairLine: 'Hairline',
  thin: 'Thin',
  light: 'Light',
  regular: 'Regular',
  medium: 'Medium',
  bold: 'Bold',
  extraBold: 'EctraBold',
  black: 'Black',
};

export type FontWeightType = typeof fontWeight;
export type KeyFontWeight = keyof FontWeightType;
