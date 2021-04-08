import React, { FunctionComponent } from 'react';

import { Text, TextProps } from './base';

export const H4: FunctionComponent<
  Pick<TextProps, 'testID' | 'color' | 'emphasis' | 'textAlign'>
> = ({
  /** Test id for test */
  testID,
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
    size="m"
    weight="regular"
    emphasis={emphasis}
    textAlign={textAlign}
  >
    {children}
  </Text>
);
