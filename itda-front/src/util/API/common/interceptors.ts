import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

export function setInterceptors(instance: AxiosInstance) {
  instance.interceptors.request.use(
    function (config: AxiosRequestConfig) {
      const authToken = JSON.parse(localStorage.getItem("token") as string);

      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }
      return config;
    },
    function (error: AxiosError) {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    function (response: AxiosResponse) {
      return response;
    },
    function (error: AxiosError) {
      return Promise.reject(error);
    }
  );
  return instance;
}
