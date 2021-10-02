import { instanceWithAuth } from "./index";

const getCategoryList = () => instanceWithAuth.get<any>("/categories");

export const productAPI = {
  category: {
    get: { getCategoryList },
  },
  products: {
    post: {},
    get: {},
  },
};
