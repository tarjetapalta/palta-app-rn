import React, { FunctionComponent } from 'react';
import {
  ViewProps,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';

import styled from '@theme/styled-components';
import {
  WrapperButton,
  TextButton,
  TouchableOpacity,
  TextButtonProps,
} from './base';

const Wrapper = styled(WrapperButton)`
  background-color: transparent;
`;

type ButtonLinkType = Pick<ViewProps, 'testID'>;

interface ButtonLinkProps
  extends ButtonLinkType,
    Pick<TouchableOpacityProps, 'accessibilityLabel' | 'disabled'>,
    TextButtonProps {
  text: string;
  onActionHandle: () => void;
  loading?: boolean;
}

export const ButtonLink: FunctionComponent<ButtonLinkProps> = ({
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
  /** Text color */
  color,
}) => (
  <TouchableOpacity
    testID={testID}
    onPress={onActionHandle}
    accessibilityLabel={accessibilityLabel}
    disabled={disabled || loading}
  >
    <Wrapper disabled={disabled}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <TextButton color={color}>{text}</TextButton>
      )}
    </Wrapper>
  </TouchableOpacity>
);
