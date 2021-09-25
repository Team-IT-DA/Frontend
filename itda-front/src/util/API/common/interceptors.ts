import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

export function setInterceptors(instance: AxiosInstance) {
  // Add a request interceptor
  instance.interceptors.request.use(
    function (config: AxiosRequestConfig) {
      const authToken = JSON.parse(localStorage.getItem("token") as string);

      if (authToken) {
        config.headers.Authorization = authToken;
      }

      return config;
    },
    function (error: AxiosError) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response: AxiosResponse) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error: AxiosError) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
  return instance;
}
