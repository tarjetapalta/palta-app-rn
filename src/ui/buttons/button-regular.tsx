import React, { FunctionComponent, useContext } from 'react';
import {
  ViewProps,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';

import { KeyColors } from '@theme/colors';
import styled, { ThemeContext } from '@theme/styled-components';
import {
  WrapperButton,
  TextButton,
  TouchableOpacity,
  TextButtonProps,
} from './base';

const Wrapper = styled(WrapperButton)<{ color?: KeyColors }>`
  ${({ theme, color }) =>
    color &&
    `
    background-color: ${theme.colors[color]};
  `}
`;

type ButtonRegularType = Pick<ViewProps, 'testID'>;

interface ButtonRegularProps
  extends ButtonRegularType,
    Pick<TouchableOpacityProps, 'accessibilityLabel' | 'disabled'>,
    TextButtonProps {
  text: string;
  onActionHandle: () => void;
  loading?: boolean;
  backgroundColor?: KeyColors;
}

export const ButtonRegular: FunctionComponent<ButtonRegularProps> = ({
  /** Test id for test */
  testID,
  /** Text to be displayed inside button. */
  text,
  /** Action function. */
  onActionHandle,
  /** VoiceOver know what element they have selected */
  accessibilityLabel,
  /** Toucheable disabled */
  disabled,
  /** If true, disable all interactions for this component and replace the title with an ActivityIndicator. */
  loading,
  /** Background color */
  backgroundColor,
  /** Text color */
  color,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <TouchableOpacity
      testID={testID}
      onPress={onActionHandle}
      accessibilityLabel={accessibilityLabel}
      disabled={disabled || loading}
    >
      <Wrapper disabled={disabled} color={backgroundColor}>
        {loading ? (
          <ActivityIndicator color={theme.colors.white} />
        ) : (
          <TextButton color={color}>{text}</TextButton>
        )}
      </Wrapper>
    </TouchableOpacity>
  );
};
