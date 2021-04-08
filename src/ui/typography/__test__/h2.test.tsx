import React from 'react';
import renderer from 'react-test-renderer';

import WithTheme from '../../../theme/context';
import { H2 } from '../h2';

describe('h2 component', () => {
  it('basic H2 with color "text", emphasis "high" and testID "H2"', () => {
    const result = renderer
      .create(
        <WithTheme>
          <H2>Some text</H2>
        </WithTheme>,
      )
      .toJSON();

    expect(result).toMatchSnapshot();
  });
  it('basic H2 with color "primary", emphasis "medium"', () => {
    const result = renderer
      .create(
        <WithTheme>
          <H2 color="primary" emphasis="medium">
            Some text
          </H2>
        </WithTheme>,
      )
      .toJSON();

    expect(result).toMatchSnapshot();
  });
  it('basic with custom testId', () => {
    const result = renderer
      .create(
        <WithTheme>
          <H2 testID="custom testID">Some text</H2>
        </WithTheme>,
      )
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
