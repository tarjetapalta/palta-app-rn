import React, { FunctionComponent } from 'react';
import {
  ViewProps,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';

import styled from '@theme/styled-components';
import { Icon } from '../icons';
import { IconId } from '../icons/types';
import {
  WrapperButton,
  TextButton,
  TouchableOpacity,
  TextButtonProps,
} from './base';

const Touchable = styled(TouchableOpacity)`
  flex: 1;
`;

const Wrapper = styled(WrapperButton)<{
  leftBottomRadius?: boolean;
  rightBottomRadius?: boolean;
}>`
  border-radius: 0px;
  flex: 1;
  ${({ theme, leftBottomRadius }) =>
    leftBottomRadius &&
    `
    border-bottom-left-radius: ${theme.spacers.s};
  `}
  ${({ theme, rightBottomRadius }) =>
    rightBottomRadius &&
    `
    border-bottom-right-radius: ${theme.spacers.s};
  `}
`;

const IconWrapper = styled.View`
  width: 28px;
  height: 28px;
  margin-right: 12px;
  opacity: ${({ theme }) => theme.emphasis.high};
`;

type ButtonRegularType = Pick<ViewProps, 'testID'>;

interface ButtonIconProps
  extends ButtonRegularType,
    Pick<TouchableOpacityProps, 'accessibilityLabel' | 'disabled'>,
    TextButtonProps {
  iconId: IconId;
  text: string;
  onActionHandle: () => void;
  loading?: boolean;
  leftBottomRadius?: boolean;
  rightBottomRadius?: boolean;
}

export const ButtonIcon: FunctionComponent<ButtonIconProps> = ({
  /** Test id for test */
  testID,
  /** Icon to show */
  iconId,
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
  /** Rounded bottom left */
  leftBottomRadius,
  /** Rounded bottom right */
  rightBottomRadius,
  /** Text color */
  color,
}) => (
  <Touchable
    testID={testID}
    onPress={onActionHandle}
    accessibilityLabel={accessibilityLabel}
    disabled={disabled || loading}
  >
    <Wrapper
      disabled={disabled}
      leftBottomRadius={leftBottomRadius}
      rightBottomRadius={rightBottomRadius}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <IconWrapper>
            <Icon iconId={iconId} scale={0.6} />
          </IconWrapper>
          <TextButton color={color}>{text}</TextButton>
        </>
      )}
    </Wrapper>
  </Touchable>
);
