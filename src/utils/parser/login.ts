import {AxiosError} from 'axios';

type errorType = {
  code: string;
  message: string;
  path: string[];
  validation: string;
};

type responseType = {
  data: null | Record<string, any>;
  errors: null | errorType[];
  message: null | string;
};
export const parseErrorMessage = (error: AxiosError<responseType>): string => {
  const data = error.response?.data;

  if (data?.message) {
    return data.message;
  }

  if (data?.errors?.length) {
    return data.errors[0].message;
  }

  return '-';
};
