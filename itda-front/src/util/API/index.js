import axios from "axios";
import { setInterceptors } from "./common/interceptors";

const createInstanceWithAuth = () => {
  const instance = axios.create({
    baseUrl: "https://af425ed2-ed9f-4a0b-9ece-5c69c5ce9d3e.mock.pstmn.io/api",
  });
  return setInterceptors(instance);
};

export const instanceWithAuth = createInstanceWithAuth();
