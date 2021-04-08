import { useEffect, useCallback } from 'react';
import auth from '@react-native-firebase/auth';
import { useSetRecoilState } from 'recoil';

import { session } from '@store';
import sessionStore from '../async-storage/session-store';

const useSplashManager = (): void => {
  const setSession = useSetRecoilState(session);

  const currentSession = useCallback(async () => {
    try {
      const isSession = await sessionStore.get();

      if (isSession) {
        setSession(isSession);
      }

      return null;
    } catch (err) {
      return null;
    }
  }, [setSession]);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) {
        // eslint-disable-next-line no-console
        console.log('USER', user);
        currentSession();
      } else {
        // eslint-disable-next-line no-console
        console.log('NO USER');
      }
    });
    return () => {
      unsubscribe();
    };
  }, [currentSession]);
};

export const SplashManager = (): null => {
  useSplashManager();

  return null;
};
