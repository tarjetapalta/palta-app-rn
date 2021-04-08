/* eslint-disable max-nested-callbacks */
import React, { FunctionComponent } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Activity } from '@screens/logged/dashboard/activity';
import { Main } from '@screens/logged/dashboard/main';
import { Profile } from '@screens/logged/dashboard/profile';
import { QrScanner } from '@screens/logged/dashboard/qr-scanner';
import { Send } from '@screens/logged/dashboard/send';
import { DashboardTabParamList, DashboardStackParamList } from './types';

const Tab = createBottomTabNavigator<DashboardTabParamList>();

const DashboardTab: FunctionComponent = () => (
  <Tab.Navigator initialRouteName="Main">
    <Tab.Screen name="Main" component={Main} />
    <Tab.Screen name="Activity" component={Activity} />
    <Tab.Screen name="QrScanner" component={QrScanner} />
    <Tab.Screen name="Send" component={Send} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

const MainStack = createStackNavigator();

const DashboardMainStack: FunctionComponent = () => (
  <MainStack.Navigator headerMode="none">
    <MainStack.Screen name="Main" component={DashboardTab} />
  </MainStack.Navigator>
);

const Stack = createStackNavigator<DashboardStackParamList>();

export const DashboardStack: FunctionComponent = () => (
  <Stack.Navigator headerMode="none" mode="modal">
    <Stack.Screen name="Dashboard" component={DashboardMainStack} />
    {/* Modals */}
  </Stack.Navigator>
);
