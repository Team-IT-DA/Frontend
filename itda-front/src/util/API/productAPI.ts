import { instanceWithAuth } from "./index";

const getCategoryList = () => instanceWithAuth.get("/categories");

const getProductDetail = (productId: number) =>
  instanceWithAuth.get(`/products/${productId}`);

const getProductList = () => instanceWithAuth.get(`/products`);

const getProductReview = (
  productId: number,
  page: number,
  isPhoto: boolean,
  reviewsPerPage: number
) =>
  instanceWithAuth(
    `/products/${productId}/reviews?page=${page}&size=${reviewsPerPage}${
      isPhoto ? "&type=photo" : ""
    }`
  );

export const productAPI = {
  category: {
    get: { getCategoryList },
  },
  products: {
    post: {},
    get: { getProductDetail, getProductList, getProductReview },
  },
};
