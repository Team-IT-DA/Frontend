import { instanceWithAuth } from "./index";

const getCategoryList = () => instanceWithAuth.get("/categories");

const getProductDetail = (productId: number) =>
  instanceWithAuth.get(`/products/${productId}`);

const getProductList = () => instanceWithAuth.get(`/products`);

export const productAPI = {
  category: {
    get: { getCategoryList },
  },
  products: {
    post: {},
    get: { getProductDetail, getProductList },
  },
};
