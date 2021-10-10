import axios from "axios";

import { setInterceptors } from "./common/interceptors";

const createInstance = (isWithAuth: boolean) => {
  const instance = axios.create({
    baseURL: "http://34.125.79.175:8000/api",
  });
  return setInterceptors(instance, isWithAuth);
};

export const instanceWithAuth = createInstance(true);

export const instanceWithoutAuth = createInstance(false);
