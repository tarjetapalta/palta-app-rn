import React from 'react';
import renderer from 'react-test-renderer';

import WithTheme from '../../../theme/context';
import { H1 } from '../../typography';
import { Group } from '../group';

describe('group component', () => {
  it('basic Group with type "body", content "center" and testId "Group"', () => {
    const result = renderer.create(
      <WithTheme>
        <Group>
          <H1>Group test</H1>
        </Group>
      </WithTheme>,
    );

    expect(result).toMatchSnapshot();
  });
  it('basic Group with type "header"', () => {
    const result = renderer.create(
      <WithTheme>
        <Group type="header">
          <H1>Group test</H1>
        </Group>
      </WithTheme>,
    );

    expect(result).toMatchSnapshot();
  });
  it('basic Group with content "left"', () => {
    const result = renderer.create(
      <WithTheme>
        <Group content="left">
          <H1>Group test</H1>
        </Group>
      </WithTheme>,
    );

    expect(result).toMatchSnapshot();
  });
  it('basic Group with custom testID', () => {
    const result = renderer.create(
      <WithTheme>
        <Group testID="custom testID">
          <H1>Group test</H1>
        </Group>
      </WithTheme>,
    );

    expect(result).toMatchSnapshot();
  });
});
