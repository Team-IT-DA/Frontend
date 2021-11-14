import { IOrder, ICartSelectedProduct } from "types/CartTypes";
import { instanceWithAuth } from "./index";

const getCartProductList = () => instanceWithAuth.get("/cart");

const updateCartProduct = (product: ICartSelectedProduct) =>
  instanceWithAuth.post("/cart", product);

const updateAllCartProduct = (productList: any) => {
  instanceWithAuth.post("/cart/all", productList);
};

const deleteCartProduct = (productId: number) =>
  instanceWithAuth.delete(`/cart/${productId}`);

const postOrder = async (orderList: IOrder) => {
  instanceWithAuth.post("/order", orderList);
};

const cartAPI = {
  get: { getCartProductList },
  post: { updateCartProduct, updateAllCartProduct },
  delete: { deleteCartProduct },

  order: {
    post: { postOrder },
  },
};

export default cartAPI;
