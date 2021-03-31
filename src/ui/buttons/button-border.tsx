import React, { FunctionComponent } from 'react';
import { ViewProps, TouchableOpacityProps } from 'react-native';

import styled from '@theme/styled-components';
import { WrapperButton, TextButton, TextButtonProps } from './base';

const Text = styled(TextButton)`
  color: ${({ theme }) => theme.colors.white};
  opacity: ${({ theme }) => theme.emphasis.pure};
`;

const Wrapper = styled(WrapperButton)`
  background-color: transparent;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.white};
`;

const TouchableOpacity = styled.TouchableOpacity`
  width: 100%;
`;

type ButtonBorderType = Pick<ViewProps, 'testID'>;

interface ButtonBorderProps
  extends ButtonBorderType,
    Pick<TouchableOpacityProps, 'accessibilityLabel' | 'disabled'>,
    TextButtonProps {
  text: string;
  onActionHandle: () => void;
}

export const ButtonBorder: FunctionComponent<ButtonBorderProps> = ({
  /** Test id for test */
  testID,
  /** Text to be displayed inside button. */
  text,
  /** Action function. */
  onActionHandle,
  /** VoiceOver know what element they have selected */
  accessibilityLabel,
  /** Text color */
  color,
}) => (
  <TouchableOpacity
    testID={testID}
    onPress={onActionHandle}
    accessibilityLabel={accessibilityLabel}
  >
    <Wrapper>
      <Text color={color}>{text}</Text>
    </Wrapper>
  </TouchableOpacity>
);
