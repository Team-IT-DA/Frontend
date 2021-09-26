import axios from "axios";
import { setInterceptors } from "./common/interceptors";

const createInstanceWithAuth = () => {
  const instance = axios.create({
    baseURL: "http://34.64.233.121:3000/api",
  });
  return setInterceptors(instance);
};

export const instanceWithAuth = createInstanceWithAuth();
