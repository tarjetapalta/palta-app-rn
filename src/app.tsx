import React, { FunctionComponent } from 'react';

import { RootNavigator } from '@routing';
import ThemeProvider from '@theme/context';

export const App: FunctionComponent = () => (
  <ThemeProvider>
    <RootNavigator />
  </ThemeProvider>
);
