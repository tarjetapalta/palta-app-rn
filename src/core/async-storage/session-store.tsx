/* eslint-disable @typescript-eslint/no-explicit-any */
import AsyncStorage from '@react-native-community/async-storage';

import { SessionStore } from './types';

const STORE_KEY = 'USER_AUTH';

async function removeSessionFromStorage(): Promise<void> {
  return AsyncStorage.removeItem(STORE_KEY);
}

async function getSessionFromStorage(): Promise<SessionStore | undefined> {
  const loginData = await AsyncStorage.getItem(STORE_KEY);

  if (loginData !== null) {
    const parsed = JSON.parse(loginData);

    return parsed;
  }

  return undefined;
}

async function setSessionToStorage(session: SessionStore): Promise<void> {
  const currentData = await getSessionFromStorage();
  AsyncStorage.setItem(
    STORE_KEY,
    JSON.stringify({
      ...(currentData as any),
      ...(session as SessionStore),
    }),
  );
}

export default {
  set: setSessionToStorage,
  remove: removeSessionFromStorage,
  get: getSessionFromStorage,
};
