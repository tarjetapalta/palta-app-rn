import React, { FunctionComponent } from 'react';

import { ButtonRegular, ButtonLink } from '@ui/buttons';
import { Group } from '@ui/group';
import { ImageBackground, ImageRegular, LogoWrapper } from '@ui/images';
import { ScreenWrapper } from '@ui/screen-wrapper';
import { Spacer } from '@ui/spacer';
import { H2, H5 } from '@ui/typography';

export const Home: FunctionComponent = () => (
  <>
    <ImageBackground name="home" />
    <ScreenWrapper transparent>
      <Group type="header" content="left">
        <LogoWrapper>
          <ImageRegular name="isologo" width={160} height={90} />
        </LogoWrapper>
        <Spacer size="xs" />
        <H2 color="white">Billetera virtual.</H2>
        <H2 color="white">Dinero real.</H2>
      </Group>
      <Group></Group>
      <Group type="footer">
        <H5 color="white" emphasis="pure">
          No tengo cuenta
        </H5>
        <Spacer size="s" />
        <ButtonRegular text="Registrarme" onActionHandle={() => null} />
        <Spacer size="s" />
        <H5 color="white">Ya tengo cuenta</H5>
        <Spacer size="xs" />
        <ButtonLink
          color="primary"
          text="Iniciar sesión"
          onActionHandle={() => null}
        />
      </Group>
    </ScreenWrapper>
  </>
);
