import {TUser} from '@app/types';

export type TPostLoginArgs = {
  data: {
    email: string;
    password: string;
  };
};

export type TPostLoginResponse = {
  data: {
    token: string;
    user: TUser;
  };
};
