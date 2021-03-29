import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Home } from '../index';

jest.mock('react-native-gesture-handler', () => {});

test('renders home correctly', () => {
  const app = renderer.create(<Home />).toJSON();
  expect(app).toMatchSnapshot();
});
