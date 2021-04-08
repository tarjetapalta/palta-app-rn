import React from 'react';
import renderer from 'react-test-renderer';

import WithTheme from '../../../theme/context';
import { Overline } from '../overline';

describe('overline component', () => {
  it('basic Overline with color "text", emphasis "high" and testID "Overline"', () => {
    const result = renderer
      .create(
        <WithTheme>
          <Overline>Some text</Overline>
        </WithTheme>,
      )
      .toJSON();

    expect(result).toMatchSnapshot();
  });
  it('basic Overline with color "primary", emphasis "medium"', () => {
    const result = renderer
      .create(
        <WithTheme>
          <Overline color="primary" emphasis="medium">
            Some text
          </Overline>
        </WithTheme>,
      )
      .toJSON();

    expect(result).toMatchSnapshot();
  });
  it('basic with custom testId', () => {
    const result = renderer
      .create(
        <WithTheme>
          <Overline testID="custom testID">Some text</Overline>
        </WithTheme>,
      )
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
