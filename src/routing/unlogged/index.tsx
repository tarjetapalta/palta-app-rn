import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../../screens/unlogged/home';

const Stack = createStackNavigator();

const UnloggedStack: FunctionComponent = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

export { UnloggedStack };
