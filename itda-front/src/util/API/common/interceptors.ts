import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

export function setInterceptors(
  instance: AxiosInstance,
  withAuth: boolean
): AxiosInstance {
  instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      if (!withAuth) return config;
      const authToken = JSON.parse(localStorage.getItem("token") as string);

      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
      return response.data;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );
  return instance;
}
