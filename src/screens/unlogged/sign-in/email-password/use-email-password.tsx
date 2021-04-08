import { useState, useCallback, useEffect, BaseSyntheticEvent } from 'react';
import {
  useForm,
  SubmitHandler,
  SubmitErrorHandler,
  Control,
} from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { useGetAuth } from '@core/api-hooks/use-auth';
import sessionStore from '@core/async-storage/session-store';
import { wording, session } from '@store';

export const useEmailPassword = (): {
  control: Control<Record<string, string>>;
  handleSubmit: <
    TSubmitFieldValues extends Record<string, string> = Record<string, string>
  >(
    onValid: SubmitHandler<TSubmitFieldValues>,
    onInvalid?: SubmitErrorHandler<Record<string, string>> | undefined,
  ) => (e?: BaseSyntheticEvent | undefined) => void;
  onSubmit: SubmitHandler<Record<string, string>>;
  errors: { [key: string]: { [key: string]: string } };
  disabled: boolean;
  loading: boolean;
} => {
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    setError,
  } = useForm({
    mode: 'onChange',
  });
  const [{ data, error }, getAuth] = useGetAuth();
  const {
    screens: { emailPassword },
  } = useRecoilValue(wording);
  const setSession = useSetRecoilState(session);

  useEffect(() => {
    if (data) {
      const auth = {
        isAuth: true,
      };
      sessionStore.set(auth);
      setSession(auth);
      setLoading(false);
    }
  }, [data, setSession]);

  useEffect(() => {
    if (error) {
      setError('email', {
        type: 'requestError',
        message: emailPassword.inputs.email.errors.requestError,
      });
    }
  }, [error, setError, emailPassword.inputs.email.errors.requestError]);

  const onSubmit = useCallback(
    ({ email, password }) => {
      setLoading(true);
      getAuth(email, password);
    },
    [getAuth],
  );

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
    disabled: !isDirty || !isValid,
    loading,
  };
};
