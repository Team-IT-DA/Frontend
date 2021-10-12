import { instanceWithAuth } from "./index";
import { IShippingInfos, IOrder } from "types/CartTypes";

const postShippingInfos = async (shippingInfos: IShippingInfos) => {
  instanceWithAuth.post("/shippingInfos", shippingInfos);
};

const getShippingInfos = () => instanceWithAuth.get("/shippingInfos");

const postOrder = async (orderList: IOrder) => {
  instanceWithAuth.post("/shippingInfos", orderList);
};

const cartAPI = {
  shipping: {
    post: { postShippingInfos },
    get: { getShippingInfos },
  },
  order: {
    get: { postOrder },
  },
};

export default cartAPI;
