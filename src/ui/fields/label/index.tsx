import React, { FunctionComponent } from 'react';
import { Animated, LayoutChangeEvent, Platform } from 'react-native';

import styled from '@theme/styled-components';
import { useFieldMaterialAnimation } from './label-material-animation.hooks';

const InputLabel = styled(Animated.Text)<{ focused: boolean }>`
  margin-left: 11px;
  color: ${({ theme, focused }) =>
    focused ? theme.colors.primary : theme.colors.text};
  font-size: 16px;
  ${Platform.OS === 'ios' &&
  `
    padding-bottom: 4px;
  `};
`;

export const Label: FunctionComponent<{
  focused: boolean;
  value: string;
  label?: string;
}> = ({ focused, value, label }) => {
  const {
    translateY,
    translateX,
    opacity,
    scale,
    setLabelWidth,
  } = useFieldMaterialAnimation(focused, value);

  const onLayout = ({ nativeEvent }: LayoutChangeEvent): void => {
    setLabelWidth(nativeEvent.layout.width);
  };

  if (!label) {
    return null;
  }

  return (
    <InputLabel
      onLayout={onLayout}
      focused={focused}
      style={{
        transform: [
          {
            translateY,
          },
          {
            translateX,
          },
          {
            scale,
          },
        ],
        opacity,
      }}
    >
      {label}
    </InputLabel>
  );
};
