import React, { FunctionComponent } from 'react';
import { useRecoilValue } from 'recoil';

import { RootNavigator } from '@routing';
import { statusBar } from '@store';
import ThemeProvider from '@theme/context';
import { StatusBar } from '@ui/status-bar';

export const App: FunctionComponent = () => {
  const statusBarStatus = useRecoilValue(statusBar);

  return (
    <ThemeProvider>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="primary"
        statusBarStatus={statusBarStatus}
      />
      <RootNavigator />
    </ThemeProvider>
  );
};
