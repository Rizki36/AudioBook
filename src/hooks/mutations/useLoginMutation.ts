import AuthService from '@app/services/AuthService';
import {PostLoginArgs, PostLoginResponse} from '@app/services/AuthService.type';
import {useMutation, UseMutationOptions} from '@tanstack/react-query';

type UseLoginMutationOptions = UseMutationOptions<
  PostLoginResponse,
  unknown,
  PostLoginArgs['data']
>;
const useLoginMutation = (options: UseLoginMutationOptions) => {
  return useMutation({
    mutationFn: async data => AuthService.postLogin({data}),
    ...options,
  });
};

export default useLoginMutation;
