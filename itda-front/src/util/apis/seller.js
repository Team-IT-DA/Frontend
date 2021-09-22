import { instanceWithAuth } from "./index";

export const addNewProduct = (newProduct) =>
  instanceWithAuth.post("/seller/product", newProduct);
