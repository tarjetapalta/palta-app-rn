import React, { FunctionComponent } from 'react';

import { Text, TextProps } from './base';

export const H1: FunctionComponent<TextProps> = ({
  /** Test id for test */
  testID = 'H1',
  /** Text */
  children,
  /** Text color */
  color,
  /** Text font opacity */
  emphasis,
  /** Text align */
  textAlign,
}) => (
  <Text
    testID={testID}
    color={color}
    size="xxl"
    weight="bold"
    emphasis={emphasis}
    textAlign={textAlign}
  >
    {children}
  </Text>
);
