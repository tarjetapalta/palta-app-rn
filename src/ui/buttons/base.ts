import { TouchableOpacityProps } from 'react-native';

import { KeyColors } from '@theme/colors';
import styled from '@theme/styled-components';

export const WrapperButton = styled.View<
  Pick<TouchableOpacityProps, 'disabled'>
>`
  background-color: ${({ theme }) => theme.colors.darkBackground};
  height: 45px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 2px;
  border-top-color: ${({ theme }) => theme.colors.priorityHigh};
  border-top-width: 4px;
  padding-bottom: 2px;
  ${({ disabled, theme }) =>
    disabled &&
    `
    opacity: ${theme.emphasis.low};
  `};
`;

export interface TextButtonProps {
  color?: KeyColors;
}

export const TextButton = styled.Text<TextButtonProps>`
  font-size: ${({ theme }) => theme.text.fontSize.s};
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.white};
  opacity: ${({ theme }) => theme.emphasis.high};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.21px;
  font-family: 'BwModelica-Bold';
`;

export const TouchableOpacity = styled.TouchableOpacity`
  width: 100%;
`;
