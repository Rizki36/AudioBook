import {TUser} from '@app/types';
import {atom} from 'jotai';

export const tokenAtom = atom<null | string>(null);
export const viewedOnBoardingAtom = atom<boolean>(true);
export const userAtom = atom<null | TUser>(null);
