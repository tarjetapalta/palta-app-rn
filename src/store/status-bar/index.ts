import { atom } from 'recoil';

export type StatusBarType = 'UNSHOW' | 'SHOW';

export const statusBar = atom<StatusBarType>({
  key: 'statusBar',
  default: 'UNSHOW',
});
