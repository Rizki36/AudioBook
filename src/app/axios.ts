import {REACT_APP_BASE_URL} from '@env';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: REACT_APP_BASE_URL,
});

axiosInstance.interceptors.request.use(function (config) {
  return config;
});

export default axiosInstance;
