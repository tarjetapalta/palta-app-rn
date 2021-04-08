import React from 'react';
import renderer from 'react-test-renderer';

import WithTheme from '../../../theme/context';
import { Body2 } from '../body2';

describe('body2 component', () => {
  it('basic Body2 with color "text", emphasis "high" and testID "Body2"', () => {
    const result = renderer
      .create(
        <WithTheme>
          <Body2>Some text</Body2>
        </WithTheme>,
      )
      .toJSON();

    expect(result).toMatchSnapshot();
  });
  it('basic Body2 with color "primary", emphasis "medium"', () => {
    const result = renderer
      .create(
        <WithTheme>
          <Body2 color="primary" emphasis="medium">
            Some text
          </Body2>
        </WithTheme>,
      )
      .toJSON();

    expect(result).toMatchSnapshot();
  });
  it('basic with custom testId', () => {
    const result = renderer
      .create(
        <WithTheme>
          <Body2 testID="custom testID">Some text</Body2>
        </WithTheme>,
      )
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
