import React, { FunctionComponent, useContext } from 'react';
import { StatusBar as RNStatusBar, Platform } from 'react-native';
import { isIphoneX, getStatusBarHeight } from 'react-native-iphone-x-helper';

import { StatusBarType } from '@store/status-bar';
import { KeyColors } from '@theme/colors';
import styled, { ThemeContext } from '@theme/styled-components';

const StatusBarWrapper = styled.View<{
  backgroundColor?: KeyColors;
}>`
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? theme.colors[backgroundColor] : theme.colors.background};
  height: ${isIphoneX()
    ? `${8 + getStatusBarHeight()}px`
    : `${getStatusBarHeight()}px`};
`;

export const StatusBar: FunctionComponent<{
  backgroundColor?: KeyColors;
  barStyle: 'default' | 'light-content' | 'dark-content' | undefined;
  statusBarStatus: StatusBarType;
}> = ({ backgroundColor, barStyle, statusBarStatus }) => {
  const theme = useContext(ThemeContext);

  if (statusBarStatus === 'UNSHOW') {
    if (Platform.OS === 'ios') {
      return <RNStatusBar barStyle="light-content" />;
    }
    return (
      <StatusBarWrapper backgroundColor={backgroundColor}>
        <RNStatusBar
          translucent
          backgroundColor="black"
          barStyle="light-content"
        />
      </StatusBarWrapper>
    );
  }

  return (
    <StatusBarWrapper backgroundColor={backgroundColor}>
      <RNStatusBar
        translucent
        backgroundColor={
          backgroundColor
            ? theme.colors[backgroundColor]
            : theme.colors.background
        }
        barStyle={barStyle}
      />
    </StatusBarWrapper>
  );
};
