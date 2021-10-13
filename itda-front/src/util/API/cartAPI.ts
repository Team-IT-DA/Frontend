import { ICartProduct } from "types/CartTypes";
import { instanceWithAuth } from "./index";

const getCartProductList = () => instanceWithAuth.get("/cart");

const updateCartProductList = (productList: ICartProduct[]) =>
  instanceWithAuth.post("/cart");

const deleteCartProduct = (productId: string) =>
  instanceWithAuth.delete(`/cart?productId=${productId}`);

export const cartAPI = {
  get: { getCartProductList },
  post: { updateCartProductList },
  delete: { deleteCartProduct },
};
