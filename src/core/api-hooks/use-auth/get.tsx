/* eslint-disable max-nested-callbacks */
import { useState, useCallback, useEffect } from 'react';
import auth from '@react-native-firebase/auth';

import { useAxios } from '../../axios';
import config from '../../config';
import { User } from '../../types';

export const useGetAuth = (): [
  {
    data: User | undefined;
    error: string | undefined;
  },
  (email: string, password: string) => void,
] => {
  const [data, setData] = useState<User | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [{ data: dataGetAuth, error: errorGetAuth }, execute] = useAxios({
    manual: true,
  });

  useEffect(() => {
    if (errorGetAuth) {
      setError('error');
    }
  }, [errorGetAuth]);

  useEffect(() => {
    setError(undefined);
    if (dataGetAuth) {
      setData(dataGetAuth);
    }
  }, [dataGetAuth]);

  const getAuth = useCallback(
    (email, password) => {
      setError(undefined);
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(({ user }) => {
          user
            .getIdToken()
            .then((idToken) => {
              execute({
                baseURL: config.baseUrl,
                url: config.aplications.verifyToken,
                method: 'POST',
                data: { idToken },
              });
            })
            .catch((err) => {
              // eslint-disable-next-line no-console
              console.log('ERROR', err);
              setError('requestError');
            });
        })
        .catch((err) => {
          setError(err.code);
        });
    },
    [execute],
  );

  return [
    {
      data,
      error,
    },
    getAuth,
  ];
};
