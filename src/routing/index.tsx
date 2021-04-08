import React, { FunctionComponent, useRef } from 'react';
import { NavigationContainer, NavigationState } from '@react-navigation/native';
import { useRecoilValue } from 'recoil';

import { trackNavigationChange } from '@core/analitycs';
import { session } from '@store';
import { LoggedStack } from './logged';
import { UnloggedStack } from './unlogged';

export const RootNavigator: FunctionComponent = () => {
  const isSession = useRecoilValue(session);
  const prevState = useRef<NavigationState>();

  return (
    <NavigationContainer
      onStateChange={(state) => {
        if (state !== undefined && prevState.current !== undefined) {
          trackNavigationChange(prevState.current, state);
        }

        prevState.current = state;
      }}
    >
      {isSession?.isAuth ? <LoggedStack /> : <UnloggedStack />}
    </NavigationContainer>
  );
};
