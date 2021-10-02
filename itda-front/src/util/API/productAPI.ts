import { instanceWithAuth } from "./index";

const getCategoryList = () => instanceWithAuth.get("/categories");

const getProductDetail = (productId: number) =>
  instanceWithAuth.get(`/products/${productId}`);

export const productAPI = {
  category: {
    get: { getCategoryList },
  },
  products: {
    post: {},
    get: { getProductDetail },
  },
};
