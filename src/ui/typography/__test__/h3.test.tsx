import React from 'react';
import renderer from 'react-test-renderer';

import WithTheme from '../../../theme/context';
import { H3 } from '../h3';

describe('h3 component', () => {
  it('basic H3 with color "text", emphasis "high" and testID "H3"', () => {
    const result = renderer
      .create(
        <WithTheme>
          <H3>Some text</H3>
        </WithTheme>,
      )
      .toJSON();

    expect(result).toMatchSnapshot();
  });
  it('basic H3 with color "primary", emphasis "medium"', () => {
    const result = renderer
      .create(
        <WithTheme>
          <H3 color="primary" emphasis="medium">
            Some text
          </H3>
        </WithTheme>,
      )
      .toJSON();

    expect(result).toMatchSnapshot();
  });
  it('basic with custom testId', () => {
    const result = renderer
      .create(
        <WithTheme>
          <H3 testID="custom testID">Some text</H3>
        </WithTheme>,
      )
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
