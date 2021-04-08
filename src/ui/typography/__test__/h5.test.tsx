import React from 'react';
import renderer from 'react-test-renderer';

import WithTheme from '../../../theme/context';
import { H5 } from '../h5';

describe('h5 component', () => {
  it('basic H5 with color "text", emphasis "high", weight "medium" and testID "H5"', () => {
    const result = renderer
      .create(
        <WithTheme>
          <H5>Some text</H5>
        </WithTheme>,
      )
      .toJSON();

    expect(result).toMatchSnapshot();
  });
  it('basic H5 with color "primary", emphasis "medium"', () => {
    const result = renderer
      .create(
        <WithTheme>
          <H5 color="primary" emphasis="medium">
            Some text
          </H5>
        </WithTheme>,
      )
      .toJSON();

    expect(result).toMatchSnapshot();
  });
  it('basic with custom testId', () => {
    const result = renderer
      .create(
        <WithTheme>
          <H5 testID="custom testID">Some text</H5>
        </WithTheme>,
      )
      .toJSON();

    expect(result).toMatchSnapshot();
  });
  it('basic H5 with weight "light"', () => {
    const result = renderer
      .create(
        <WithTheme>
          <H5 weight="regular">Some text</H5>
        </WithTheme>,
      )
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
