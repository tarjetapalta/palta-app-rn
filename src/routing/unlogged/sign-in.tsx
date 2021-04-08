import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useRecoilValue } from 'recoil';

import { EmailPassword } from '@screens/unlogged/sign-in/email-password';
import { wording } from '@store';
import { Navbar } from '@ui/navbar';
import { NavbarIcon } from '@ui/navbar-icon';
import { SignInParamList } from './types';

const Stack = createStackNavigator<SignInParamList>();

const SignInStack: FunctionComponent = () => {
  const { screens } = useRecoilValue(wording);

  return (
    <Stack.Navigator initialRouteName="EmailPassword" headerMode="screen">
      <Stack.Screen
        name="EmailPassword"
        component={EmailPassword}
        options={{
          headerLeft: () => <NavbarIcon iconId="ARROW_BACK" />,
          header: Navbar,
          title: screens.emailPassword.title,
        }}
        initialParams={{ wording: screens.emailPassword }}
      />
    </Stack.Navigator>
  );
};

export { SignInStack };
