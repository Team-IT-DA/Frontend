import { instanceWithAuth, instanceWithoutAuth } from "./index";

const getCategoryList = () => instanceWithAuth.get("/categories");

const getProductDetail = (productId: number) =>
  instanceWithAuth.get(`/products/${productId}`);

const getProductList = () => instanceWithAuth.get("/products");

const getProductBySearchParams = (key: string, seller: string) =>
  instanceWithAuth.get(`/products?${key}=${encodeURIComponent(seller)}`);

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
const postCategory = (name: string) => {
  instanceWithAuth.post("/test/categories", { name });
};

export const productAPI = {
  category: {
    get: { getCategoryList },
    post: { postCategory },
  },

  products: {
    post: {},
    get: {
      getProductDetail,
      getProductList,
      getProductReview,
      getProductBySearchParams,
    },
  },
};
