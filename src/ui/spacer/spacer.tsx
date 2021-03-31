import React, { FunctionComponent } from 'react';

import { KeySizes } from '@theme/spacers';
import styled from '@theme/styled-components';

const SpacerWrapper = styled.View<{ size?: KeySizes }>`
  height: ${({ size, theme }) =>
    size ? theme.spacers[size] : theme.spacers.m};
`;

export const Spacer: FunctionComponent<{ size?: KeySizes }> = ({
  /** Sizes height to separate components */
  size,
}) => <SpacerWrapper size={size} />;
