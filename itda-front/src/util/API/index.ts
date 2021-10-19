import axios from "axios";

import { setInterceptors } from "./common/interceptors";

const createInstance = (isWithAuth: boolean) => {
  const instance = axios.create({
    baseURL: "http://15.164.97.165:8000/api",
  });
  return setInterceptors(instance, isWithAuth);
};

export const instanceWithAuth = createInstance(true);

export const instanceWithoutAuth = createInstance(false);
