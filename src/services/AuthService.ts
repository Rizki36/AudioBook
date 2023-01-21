import axiosInstance from '@app/app/axios';
import {PostLoginArgs, PostLoginResponse} from './AuthService.type';

const AuthService = {
  postLogin: (args: PostLoginArgs) => {
    return axiosInstance.post<PostLoginResponse>('v1/auth/sign-in', args.data);
  },
};

export default AuthService;
