import {AxiosError} from 'axios';

type TError = {
  code: string;
  message: string;
  path: string[];
  validation: string;
};

type TResponse = {
  data: null | Record<string, any>;
  errors: null | TError[];
  message: null | string;
};
export const parseErrorMessage = (error: AxiosError<TResponse>): string => {
  const data = error.response?.data;

  if (data?.message) {
    return data.message;
  }

  if (data?.errors?.length) {
    return data.errors[0].message;
  }

  return '-';
};
