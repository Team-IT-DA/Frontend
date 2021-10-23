import { instanceWithAuth, instanceWithoutAuth } from "./index";

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
  instanceWithoutAuth.get(
    `/products/${productId}/reviews?page=${page}&size=${reviewsPerPage}${
      isPhoto ? "&type=photo" : ""
    }`
  );

export const getProductBySellerName = (seller: string) =>
  instanceWithAuth.get(`/products?sellerName=${seller}`);

export const getProductByProductName = (product: string) =>
  instanceWithAuth.get(`/products?productName=${product}`);

export const productAPI = {
  category: {
    get: { getCategoryList },
  },

  products: {
    post: {},
    get: {
      getProductDetail,
      getProductList,
      getProductReview,
      getProductBySellerName,
      getProductByProductName,
    },
  },
};
