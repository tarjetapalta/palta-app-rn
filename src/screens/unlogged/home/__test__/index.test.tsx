import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import WithTheme from '@theme/context';
import { Home } from '../index';

jest.mock('react-native-gesture-handler', () => {});

test('renders home correctly', () => {
  const app = renderer
    .create(
      <WithTheme>
        <Home />
      </WithTheme>,
    )
    .toJSON();
  expect(app).toMatchSnapshot();
});
