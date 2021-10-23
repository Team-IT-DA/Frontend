import axios from "axios";

import { setInterceptors } from "./common/interceptors";

const createInstance = (isWithAuth: boolean) => {
  const instance = axios.create({
    baseURL: "http://3.37.99.129:8000/api",
  });
  return setInterceptors(instance, isWithAuth);
};

export const instanceWithAuth = createInstance(true);

export const instanceWithoutAuth = createInstance(false);
