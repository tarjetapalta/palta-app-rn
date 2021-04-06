import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { RecoilRoot } from 'recoil';

import { home } from '@store/wording';
import WithTheme from '@theme/context';
import { Home } from '../index';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: jest.fn() }),
}));

const routeMock: any = {
  params: {
    wording: home,
  },
};

const navigationMock: any = {
  navigate: jest.fn(),
};

test('renders home correctly', () => {
  const app = renderer
    .create(
      <RecoilRoot>
        <WithTheme>
          <Home navigation={navigationMock} route={routeMock} />
        </WithTheme>
      </RecoilRoot>,
    )
    .toJSON();
  expect(app).toMatchSnapshot();
});
