import React from 'react';
import renderer from 'react-test-renderer';

import WithTheme from '../../../theme/context';
import { Spacer } from '../spacer';

describe('spacer component', () => {
  it('basic spacer component with size "m" height "24px"', () => {
    const result = renderer
      .create(
        <WithTheme>
          <Spacer />
        </WithTheme>,
      )
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
