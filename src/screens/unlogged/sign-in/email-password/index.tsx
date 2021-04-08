import React, { FunctionComponent, useEffect } from 'react';
import { BackHandler } from 'react-native';
import { useSetRecoilState } from 'recoil';

import { EmailPasswordProps } from '@routing/unlogged/types';
import { statusBar } from '@store';
import { ButtonRegular } from '@ui/buttons';
import { Container } from '@ui/container';
import { TextField } from '@ui/fields';
import { Group } from '@ui/group';
import { Spacer } from '@ui/spacer';
import { useEmailPassword } from './use-email-password';

export const EmailPassword: FunctionComponent<EmailPasswordProps> = ({
  route: {
    params: { wording },
  },
}) => {
  const { inputs } = wording;
  const { email, password } = inputs;
  const setStatusBar = useSetRecoilState(statusBar);
  const {
    control,
    handleSubmit,
    onSubmit,
    errors,
    disabled,
    loading,
  } = useEmailPassword();

  useEffect(() => {
    const backAction = (): boolean => {
      setStatusBar('UNSHOW');
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [setStatusBar]);

  return (
    <Container>
      <Group type="bodyWithButton">
        <Group type="bodyWithButtonContent" content="left">
          <TextField
            name="email"
            label={email.label}
            keyboardType="email-address"
            autoCompleteType="off"
            autoCapitalize="none"
            returnKeyType="next"
            autoCorrect={false}
            autoFocus
            control={control}
            accessibilityLabel={email.label}
            rules={{
              required: email.errors.required,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: email.errors.invalidEmail,
              },
            }}
            error={errors?.email?.message}
          />
          <TextField
            name="password"
            label={password.label}
            keyboardType="default"
            autoCompleteType="off"
            autoCapitalize="none"
            onSubmitEditing={handleSubmit(onSubmit)}
            returnKeyType="next"
            autoCorrect={false}
            control={control}
            secureTextEntry
            accessibilityLabel={password.label}
            rules={{
              required: password.errors.required,
              minLength: {
                value: 6,
                message: password.errors.min,
              },
            }}
            error={errors?.password?.message}
          />
        </Group>
        <Spacer size="l" />
        <ButtonRegular
          text="Ingresar"
          onActionHandle={handleSubmit(onSubmit)}
          accessibilityLabel="Ingresar"
          disabled={disabled}
          loading={loading}
        />
      </Group>
    </Container>
  );
};
