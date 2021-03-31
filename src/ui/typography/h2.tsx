import React, { FunctionComponent } from 'react';

import { Text, TextProps } from './base';

export const H2: FunctionComponent<
  Pick<TextProps, 'testID' | 'color' | 'emphasis' | 'textAlign'>
> = ({
  /** Test id for test */
  testID = 'H2',
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
    size="xl"
    weight="bold"
    emphasis={emphasis}
    textAlign={textAlign}
  >
    {children}
  </Text>
);
