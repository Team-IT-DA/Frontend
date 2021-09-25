import { instanceWithAuth } from "./index";

const addNewProduct = (newProduct: any) =>
  instanceWithAuth.post("/seller/product", newProduct);

const myPageAPI = {
  seller: { addNewProduct },
  user: {},
};

export default myPageAPI;
