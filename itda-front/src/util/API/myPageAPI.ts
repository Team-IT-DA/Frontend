import { instanceWithAuth } from "./index";

const addNewProduct = async (newProduct: any) =>
  instanceWithAuth.post("/products", newProduct);

const myPageAPI = {
  seller: { addNewProduct },
  user: {},
};

export default myPageAPI;
