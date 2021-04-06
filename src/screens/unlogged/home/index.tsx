import React, { FunctionComponent } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSetRecoilState } from 'recoil';

import { HomeProps } from '@routing/unlogged/types';
import { statusBar } from '@store';
import { ButtonRegular, ButtonLink } from '@ui/buttons';
import { Group } from '@ui/group';
import { ImageBackground, ImageRegular, LogoWrapper } from '@ui/images';
import { ScreenWrapper } from '@ui/screen-wrapper';
import { Spacer } from '@ui/spacer';
import { H2, H5 } from '@ui/typography';

export const Home: FunctionComponent<HomeProps> = ({
  route: {
    params: { wording },
  },
}) => {
  const {
    description,
    descriptionExtends,
    primaryActionLabel,
    primaryAction,
    secondaryActionLabel,
    secondaryAction,
  } = wording;
  const setStatusBarColor = useSetRecoilState(statusBar);
  const { navigate } = useNavigation();

  return (
    <>
      <ImageBackground name="home" />
      <ScreenWrapper transparent>
        <Group type="header" content="left">
          <LogoWrapper>
            <ImageRegular name="isologo" width={110} height={110} />
          </LogoWrapper>
          <Spacer />
          <H2 color="white">{description}</H2>
          <H2 color="white">{descriptionExtends}</H2>
        </Group>
        <Group></Group>
        <Group type="footer">
          <H5 color="white" emphasis="pure">
            {primaryActionLabel}
          </H5>
          <Spacer size="s" />
          <ButtonRegular
            text={primaryAction}
            onActionHandle={() => null}
            accessibilityLabel={primaryAction}
          />
          <Spacer size="s" />
          <H5 color="white">{secondaryActionLabel}</H5>
          <Spacer size="xs" />
          <ButtonLink
            color="primary"
            text={secondaryAction}
            onActionHandle={() => {
              setStatusBarColor('SHOW');
              navigate('SignIn');
            }}
            accessibilityLabel={secondaryAction}
          />
        </Group>
      </ScreenWrapper>
    </>
  );
};
