import React, { FunctionComponent } from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { useRecoilValue } from 'recoil';

import { Home } from '@screens/unlogged/home';
import { wording } from '@store';
import { IOSKeyboardAvoidingView } from '../commons/ios-keyboard-avoiding-view';
import { SignInStack } from './sign-in';
import { UnloggedStackParamList } from './types';

const Stack = createStackNavigator<UnloggedStackParamList>();

const UnloggedStack: FunctionComponent = () => {
  const { screens } = useRecoilValue(wording);

  return (
    <IOSKeyboardAvoidingView>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          initialParams={{ wording: screens.home }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInStack}
          options={() => ({
            gestureEnabled: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          })}
        />
      </Stack.Navigator>
    </IOSKeyboardAvoidingView>
  );
};

export { UnloggedStack };
