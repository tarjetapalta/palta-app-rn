import React, { FunctionComponent } from 'react';

import { KeyColors } from '@theme/colors';
import styled from '@theme/styled-components';

const Wrapper = styled.View<ScreenWrapperProps>`
  flex: 1;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? theme.colors[backgroundColor] : theme.colors.background};
  ${({ transparent }) =>
    transparent &&
    `
  background-color: transparent;
  `};
`;

const SafeArea = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
`;

interface ScreenWrapperProps {
  testID?: string;
  backgroundColor?: KeyColors;
  withoutSafeArea?: boolean;
  transparent?: boolean;
}

export const ScreenWrapper: FunctionComponent<ScreenWrapperProps> = ({
  /** Test id for test */
  testID,
  /** Internal content componets */
  children,
  /** Background color for screen */
  backgroundColor,
  /** With dont use safe area */
  withoutSafeArea,
  /** Make background transparent */
  transparent,
}) => (
  <Wrapper
    testID={testID}
    backgroundColor={backgroundColor}
    transparent={transparent}
  >
    {withoutSafeArea ? children : <SafeArea>{children}</SafeArea>}
  </Wrapper>
);
