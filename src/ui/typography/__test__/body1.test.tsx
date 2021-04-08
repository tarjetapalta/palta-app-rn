import React from 'react';
import renderer from 'react-test-renderer';

import WithTheme from '../../../theme/context';
import { Body1 } from '../body1';

describe('body1 component', () => {
  it('basic Body1 with color "text", emphasis "high" and testID "Body1"', () => {
    const result = renderer
      .create(
        <WithTheme>
          <Body1>Some text</Body1>
        </WithTheme>,
      )
      .toJSON();

    expect(result).toMatchSnapshot();
  });
  it('basic Body1 with color "primary", emphasis "medium"', () => {
    const result = renderer
      .create(
        <WithTheme>
          <Body1 color="primary" emphasis="medium">
            Some text
          </Body1>
        </WithTheme>,
      )
      .toJSON();

    expect(result).toMatchSnapshot();
  });
  it('basic with custom testId', () => {
    const result = renderer
      .create(
        <WithTheme>
          <Body1 testID="custom testID">Some text</Body1>
        </WithTheme>,
      )
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
