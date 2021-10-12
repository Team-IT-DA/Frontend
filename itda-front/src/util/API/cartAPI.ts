import { instanceWithAuth } from "./index";
import { IShippingInfos } from "types/CartTypes";

const postShippingInfos = async (shippingInfos: IShippingInfos) => {
  instanceWithAuth.post("/shippingInfos", shippingInfos);
};

const cartAPI = {
  shipping: {
    post: { postShippingInfos },
  },
};

export default cartAPI;
