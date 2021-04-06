import React, { FunctionComponent, useCallback } from 'react';
import auth from '@react-native-firebase/auth';
import { useSetRecoilState } from 'recoil';

import sessionStore from '@core/async-storage/session-store';
import { session } from '@store';
import { ButtonRegular } from '@ui/buttons';
import { Group } from '@ui/group';
import { ScreenWrapper } from '@ui/screen-wrapper';
import { Spacer } from '@ui/spacer';
import { H2 } from '@ui/typography';

export const Profile: FunctionComponent = () => {
  const setSession = useSetRecoilState(session);

  const logout = useCallback(() => {
    auth()
      .signOut()
      .then(() => {
        sessionStore.remove();
        setSession(undefined);
      });
  }, [setSession]);

  return (
    <ScreenWrapper>
      <Group type="bodyWithButton">
        <Group type="bodyWithButtonContent">
          <H2>PROFILE SCREEN</H2>
          <Spacer />
        </Group>
        <ButtonRegular
          text="Salir"
          onActionHandle={logout}
          accessibilityLabel="Salir"
        />
      </Group>
    </ScreenWrapper>
  );
};
