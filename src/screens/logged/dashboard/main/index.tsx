import React, { FunctionComponent } from 'react';

import { Group } from '@ui/group';
import { ScreenWrapper } from '@ui/screen-wrapper';
import { H2 } from '@ui/typography';

export const Main: FunctionComponent = () => (
  <ScreenWrapper>
    <Group>
      <H2>MAIN SCREEN</H2>
    </Group>
  </ScreenWrapper>
);
