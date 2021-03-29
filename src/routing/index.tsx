import React, { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { UnloggedStack } from './unlogged';

export const RootNavigator: FunctionComponent = () => (
  <NavigationContainer>
    <UnloggedStack />
  </NavigationContainer>
);
