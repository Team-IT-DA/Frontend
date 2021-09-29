import axios from "axios";
import { setInterceptors } from "./common/interceptors";

const createInstanceWithAuth = () => {
  const instance = axios.create({
    baseURL: "http://34.125.79.175:8000/api",
  });
  return setInterceptors(instance);
};

export const instanceWithAuth = createInstanceWithAuth();
