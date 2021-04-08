import { atom } from 'recoil';

import { SessionStore } from '@core/async-storage/types';

export const session = atom<SessionStore | undefined>({
  key: 'session',
  default: undefined,
});
