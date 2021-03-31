import React, { FunctionComponent } from 'react';

import { Text, TextProps } from './base';

export const H3: FunctionComponent<TextProps> = ({
  /** Test id for test */
  testID = 'H3',
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
    size="l"
    weight="medium"
    emphasis={emphasis}
    textAlign={textAlign}
  >
    {children}
  </Text>
);
