import AuthService from '@app/common/services/AuthService';
import {
  TPostLoginArgs,
  TPostLoginResponse,
} from '@app/common/services/AuthService.type';
import {useMutation, UseMutationOptions} from '@tanstack/react-query';

type TUseLoginMutationOptions = UseMutationOptions<
  TPostLoginResponse,
  unknown,
  TPostLoginArgs['data']
>;
const useLoginMutation = (options: TUseLoginMutationOptions) => {
  return useMutation({
    mutationFn: async data => AuthService.postLogin({data}),
    ...options,
  });
};

export default useLoginMutation;
