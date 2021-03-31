import React from 'react';
import renderer from 'react-test-renderer';

import WithTheme from '../../../theme/context';
import { ButtonRegular } from '../button-regular';

describe('buttonRegular component', () => {
  it('basic button regular with text, onActionHandle, accessibilityLabel and testID "ButtonRegular"', () => {
    const result = renderer.create(
      <WithTheme>
        <ButtonRegular
          text="Button test"
          onActionHandle={() => null}
          accessibilityLabel="button test"
        />
      </WithTheme>,
    );

    expect(result).toMatchSnapshot();
  });
  it('basic button regular with disabled"', () => {
    const result = renderer.create(
      <WithTheme>
        <ButtonRegular
          text="Button test"
          onActionHandle={() => null}
          accessibilityLabel="button test"
          disabled
        />
      </WithTheme>,
    );

    expect(result).toMatchSnapshot();
  });
  it('basic button regular with loading"', () => {
    const result = renderer.create(
      <WithTheme>
        <ButtonRegular
          text="Button test"
          onActionHandle={() => null}
          accessibilityLabel="button test"
          loading
        />
      </WithTheme>,
    );

    expect(result).toMatchSnapshot();
  });
  it('basic button regular with custom testID"', () => {
    const result = renderer.create(
      <WithTheme>
        <ButtonRegular
          testID="custom testID"
          text="Button test"
          onActionHandle={() => null}
          accessibilityLabel="button test"
        />
      </WithTheme>,
    );

    expect(result).toMatchSnapshot();
  });
});
