import React, { FunctionComponent } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { KeyColors } from '@theme/colors';
import { ScreenWrapper } from '../screen-wrapper';

const wrapperStyles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
});

interface ContainerProps {
  testID?: string;
  backgroundColor: KeyColors;
}

export const Container: FunctionComponent<ContainerProps> = ({
  /** Test id for test */
  testID,
  /** Internal content componets */
  children,
  /** Background color for screen */
  backgroundColor,
}) => (
  <ScreenWrapper
    backgroundColor={backgroundColor || 'background'}
    testID={testID}
  >
    <ScrollView
      scrollEventThrottle={16}
      alwaysBounceVertical={false}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={wrapperStyles.contentContainerStyle}
    >
      {children}
    </ScrollView>
  </ScreenWrapper>
);
