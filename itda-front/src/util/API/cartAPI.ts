import { ICartProduct,IShippingInfos, IOrder } from "types/CartTypes";
import { instanceWithAuth } from "./index";

const getCartProductList = () => instanceWithAuth.get("/cart");

const updateCartProductList = (productList: ICartProduct[]) =>
  instanceWithAuth.post("/cart");

const deleteCartProduct = (productId: string) =>
  instanceWithAuth.delete(`/cart?productId=${productId}`);

const postShippingInfos = async (shippingInfos: IShippingInfos) => {
  instanceWithAuth.post("/shippingInfos", shippingInfos);
};

const getShippingInfos = () => instanceWithAuth.get("/shippingInfos");

const postOrder = async (orderList: IOrder) => {
  instanceWithAuth.post("/order", orderList);
};


const cartAPI = {
  get: { getCartProductList },
  post: { updateCartProductList },
  delete: { deleteCartProduct },
   shipping: {
    post: { postShippingInfos },
    get: { getShippingInfos },
  },
  order: {
    post: { postOrder },
  },
};

export default cartAPI;
