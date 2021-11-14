import {
  IUpdateCartProduct,
  IShippingInfos,
  IOrder,
  ICartSelectedProduct,
} from "types/CartTypes";
import { instanceWithAuth } from "./index";

const getCartProductList = () => instanceWithAuth.get("/cart");

const updateCartProduct = (product: ICartSelectedProduct) =>
  instanceWithAuth.post("/cart", product);

const updateCartProductList = async (product: any) =>
  instanceWithAuth.post("/cart", product);

const deleteCartProduct = (productId: number) =>
  instanceWithAuth.delete(`/cart/${productId}`);

const postOrder = async (orderList: IOrder) => {
  instanceWithAuth.post("/order", orderList);
};

const cartAPI = {
  get: { getCartProductList },
  post: { updateCartProduct, updateCartProductList },
  delete: { deleteCartProduct },

  order: {
    post: { postOrder },
  },
};

export default cartAPI;
