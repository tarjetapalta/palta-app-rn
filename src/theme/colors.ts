import { palette } from './palette';

export const colors = {
  black: palette.black,
  white: palette.white,
  primary: palette.pearCactus,
  darkGradient: palette.colorMeGreen,
  text: palette.chimneySweep,
  background: palette.white,
  lightBackground: palette.bleachedSilk,
  darkBackground: palette.carbon,
  disabledBackground: palette.whiteBlue,
  modalBackground: palette.black,
  danger: palette.redMull,
  link: palette.doverStraits,
  success: palette.vitalize,
  priorityHigh: palette.direWolf,
  priorityMedium: palette.knightsArmor,
};

export type ColorsType = typeof colors;
export type KeyColors = keyof ColorsType;
