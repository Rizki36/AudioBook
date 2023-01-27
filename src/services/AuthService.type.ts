import {User} from '@app/types';

export type PostLoginArgs = {
  data: {
    email: string;
    password: string;
  };
};

export type PostLoginResponse = {
  data: {
    token: string;
    user: User;
  };
};
