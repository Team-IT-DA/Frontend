import { ICartProduct, IShippingInfos, IOrder } from "types/CartTypes";
import { instanceWithAuth } from "./index";

const postShippingInfos = async (shippingInfos: IShippingInfos) => {
  instanceWithAuth.post("/shippingInfos", shippingInfos);
};

const getShippingInfos = () => instanceWithAuth.get("/shippingInfos");

const shippingAPI = {
  post: { postShippingInfos },
  get: { getShippingInfos },
};
export default shippingAPI;
