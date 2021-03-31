import React, { FunctionComponent } from 'react';
import { ViewProps, TextStyle } from 'react-native';

import { KeyColors } from '@theme/colors';
import { KeyEmphasis } from '@theme/emphasis';
import styled from '@theme/styled-components';
import { KeyFontSize, KeyFontWeight } from '@theme/text';

type FontsType =
  | 'BwModelica-Black'
  | 'BwModelica-BlackItalic'
  | 'BwModelica-Bold'
  | 'BwModelica-BoldItalic'
  | 'BwModelica-ExtraBold'
  | 'BwModelica-ExtraBoldItalic'
  | 'BwModelica-Hairline'
  | 'BwModelica-HairlineItalic'
  | 'BwModelica-Light'
  | 'BwModelica-LightItalic'
  | 'BwModelica-Medium'
  | 'BwModelica-MediumItalic'
  | 'BwModelica-Regular'
  | 'BwModelica-RegularItalic'
  | 'BwModelica-Thin'
  | 'BwModelica-ThinItalic';

type TextType = Pick<ViewProps, 'testID'>;

export interface TextProps extends TextType, Pick<TextStyle, 'textAlign'> {
  color?: KeyColors;
  size?: KeyFontSize;
  weight?: KeyFontWeight;
  emphasis?: KeyEmphasis;
  numberOfLines?: number;
}

const setWeight = (weight: KeyFontWeight): FontsType =>
  `BwModelica-${weight}` as FontsType;

export const TextDefault = styled.Text<TextProps>`
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.text};
  font-size: ${({ theme, size }) =>
    size ? theme.text.fontSize[size] : theme.text.fontSize.m};
  opacity: ${({ theme, emphasis }) =>
    emphasis ? theme.emphasis[emphasis] : theme.emphasis.high};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  font-family: ${({ theme, weight }) =>
    weight
      ? setWeight(theme.text.fontWeight[weight] as KeyFontWeight)
      : 'BwModelica-Regular'};
`;

export const Text: FunctionComponent<TextProps> = ({
  /** Test id for test */
  testID,
  /** Text */
  children,
  /** Text color */
  color,
  /** Font size */
  size,
  /** Text font weight */
  weight,
  /** Text font opacity */
  emphasis,
  /** Text align left center or right */
  textAlign,
  /** Number of line to truncate text */
  numberOfLines,
}) => (
  <TextDefault
    testID={testID}
    color={color}
    size={size}
    weight={weight}
    emphasis={emphasis}
    textAlign={textAlign}
    numberOfLines={numberOfLines || 0}
  >
    {children}
  </TextDefault>
);
