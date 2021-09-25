import { instanceWithAuth } from "./index";

const addNewProduct = (newProduct: any) =>
  instanceWithAuth.post("/seller/product", newProduct);

export const productAPI = {
  category: {},
  products: {
    post: {
      addNewProduct,
    },
    get: {},
  },
};
