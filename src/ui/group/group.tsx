import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';

import styled from '@theme/styled-components';

type KeyGroup =
  | 'header'
  | 'headerModal'
  | 'body'
  | 'bodyWithButtonContent'
  | 'bodyWithButton'
  | 'footer'
  | 'borderless';
type KeyContent = 'left' | 'center' | 'right';

type GroupType = Pick<ViewProps, 'testID'>;

interface GroupProps extends GroupType {
  type?: KeyGroup;
  content?: KeyContent;
}

const WrapperGroup = styled.View<Pick<GroupProps, 'type' | 'content'>>`
  padding: 0 ${({ theme }) => theme.spacers.l};
  ${({ theme, type }) =>
    type === 'header' &&
    `
    padding-top: ${theme.spacers.l};
  `};
  ${({ type, theme }) =>
    type === 'headerModal' &&
    `
    padding-top: ${theme.spacers.xs};
  `};
  ${({ type }) =>
    type === 'body' &&
    `
    flex: 1;
  `};
  ${({ theme, type }) =>
    type === 'bodyWithButtonContent' &&
    `
    padding: 0 ${theme.spacers.l};
  `};
  ${({ theme, type }) =>
    type === 'bodyWithButton' &&
    `
    flex: 1;
    padding: 0 ${theme.spacers.xs};
  `};
  ${({ theme, type }) =>
    type === 'footer' &&
    `
    padding: 0 ${theme.spacers.xs};
    padding-bottom: ${theme.spacers.l};
  `};
  ${({ type }) =>
    type === 'borderless' &&
    `
    padding: 0px;
  `};
  ${({ content }) =>
    content === 'left' &&
    `
    align-items: flex-start;
  `}
  ${({ content }) =>
    content === 'center' &&
    `
    justify-content: center;
    align-items: center;
  `}
  ${({ content }) =>
    content === 'right' &&
    `
    align-items: flex-end;
  `}
`;

export const Group: FunctionComponent<GroupProps> = ({
  /** Test id for test */
  testID,
  /** Pass children components */
  children,
  /** Specific type depending on the area it occupies on the screen, header | body | footer */
  type,
  /** Makes the content, left | right, for default content is center  */
  content = 'center',
}) => (
  <WrapperGroup testID={testID} type={type} content={content}>
    {children}
  </WrapperGroup>
);
