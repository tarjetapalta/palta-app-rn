/* eslint-disable max-statements */
import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { DashboardStack } from './dashboard';
import { LoggedStackParamList } from './types';

const Stack = createStackNavigator<LoggedStackParamList>();

export const LoggedStack: FunctionComponent = () => (
  <Stack.Navigator
    initialRouteName="Dashboard"
    headerMode="screen"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Dashboard" component={DashboardStack} />
  </Stack.Navigator>
);
