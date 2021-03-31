import React, { FunctionComponent } from 'react';

import { Text, TextProps } from './base';

export const Body1: FunctionComponent<
  Pick<
    TextProps,
    'testID' | 'color' | 'emphasis' | 'textAlign' | 'numberOfLines'
  >
> = ({
  /** Test id for test */
  testID = 'Body1',
  /** Text */
  children,
  /** Text color */
  color,
  /** Text font opacity */
  emphasis,
  /** Text align */
  textAlign,
  /** Number of line to truncate text */
  numberOfLines,
}) => (
  <Text
    testID={testID}
    color={color}
    size="s"
    weight="light"
    emphasis={emphasis}
    textAlign={textAlign}
    numberOfLines={numberOfLines}
  >
    {children}
  </Text>
);
