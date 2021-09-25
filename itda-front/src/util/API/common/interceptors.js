export function setInterceptors(instance) {
  // Add a request interceptor
  instance.interceptors.request.use(
    function (config) {
      // Do something before request is sent

      //여기에 토큰 설정 하면 됩니당 👇
      //   config.headers.Authorization = 우리가 관리할 사용자 토큰;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
  return instance;
}
