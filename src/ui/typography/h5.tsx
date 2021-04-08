import React, { FunctionComponent } from 'react';

import { Text, TextProps } from './base';

export const H5: FunctionComponent<TextProps> = ({
  /** Test id for test */
  testID = 'H5',
  /** Text */
  children,
  /** Text color */
  color,
  /** Text font weight */
  weight,
  /** Text font opacity */
  emphasis,
  /** Text align */
  textAlign,
}) => (
  <Text
    testID={testID}
    color={color}
    size="s"
    weight={weight}
    emphasis={emphasis}
    textAlign={textAlign}
  >
    {children}
  </Text>
);
