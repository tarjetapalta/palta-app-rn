import axios from 'axios';

import { configure } from './use-axios';

export const customAxios = axios.create();

customAxios.interceptors.request.use(
  async (axiosConfig) => {
    if (axiosConfig.baseURL === '') {
      return axiosConfig;
    }
    return axiosConfig;
  },
  (err) => Promise.reject(err),
);

configure({
  axios: customAxios,
});
