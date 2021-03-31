import React from 'react';
import renderer from 'react-test-renderer';

import WithTheme from '../../../theme/context';
import { H4 } from '../h4';

describe('h4 component', () => {
  it('basic H4 with color "text", emphasis "high", weight "medium" and testID "H4"', () => {
    const result = renderer
      .create(
        <WithTheme>
          <H4>Some text</H4>
        </WithTheme>,
      )
      .toJSON();

    expect(result).toMatchSnapshot();
  });
  it('basic H4 with color "primary", emphasis "medium"', () => {
    const result = renderer
      .create(
        <WithTheme>
          <H4 color="primary" emphasis="medium">
            Some text
          </H4>
        </WithTheme>,
      )
      .toJSON();

    expect(result).toMatchSnapshot();
  });
  it('basic with custom testId', () => {
    const result = renderer
      .create(
        <WithTheme>
          <H4 testID="custom testID">Some text</H4>
        </WithTheme>,
      )
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
