import React, { FunctionComponent } from 'react';
import { AppRegistry } from 'react-native';
import { RecoilRoot } from 'recoil';
import 'react-native-gesture-handler';

import { name as appName } from './app.json';
import { App } from './src/app';

const Application: FunctionComponent = () => (
  <RecoilRoot>
    <App />
  </RecoilRoot>
);

AppRegistry.registerComponent(appName, () => Application);
