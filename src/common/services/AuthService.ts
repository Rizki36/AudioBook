import axiosInstance from '@app/app/axios';
import {TPostLoginArgs, TPostLoginResponse} from './AuthService.type';

const AuthService = {
  postLogin: (args: TPostLoginArgs) => {
    return axiosInstance
      .post<TPostLoginResponse>('v1/auth/sign-in', args.data)
      .then(res => res.data);
  },
};

export default AuthService;
