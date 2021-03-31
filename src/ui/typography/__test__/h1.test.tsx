import React from 'react';
import renderer from 'react-test-renderer';

import WithTheme from '../../../theme/context';
import { H1 } from '../h1';

describe('h1 component', () => {
  it('basic H1 with color "text", emphasis "high" and testID "H1"', () => {
    const result = renderer
      .create(
        <WithTheme>
          <H1>Some text</H1>
        </WithTheme>,
      )
      .toJSON();

    expect(result).toMatchSnapshot();
  });
  it('basic H1 with color "primary", emphasis "medium"', () => {
    const result = renderer
      .create(
        <WithTheme>
          <H1 color="primary" emphasis="medium">
            Some text
          </H1>
        </WithTheme>,
      )
      .toJSON();

    expect(result).toMatchSnapshot();
  });
  it('basic with custom testId', () => {
    const result = renderer
      .create(
        <WithTheme>
          <H1 testID="custom testID">Some text</H1>
        </WithTheme>,
      )
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
