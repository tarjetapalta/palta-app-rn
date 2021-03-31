import React, { FunctionComponent } from 'react';

import { Text, TextProps } from './base';

export const Overline: FunctionComponent<TextProps> = ({
  /** Test id for test */
  testID = 'Overline',
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
    size="xxs"
    weight="light"
    emphasis={emphasis}
    textAlign={textAlign}
  >
    {children}
  </Text>
);
