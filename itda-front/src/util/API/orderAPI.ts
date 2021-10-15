import { instanceWithAuth } from "./index";

const getThankyouPageData = () => instanceWithAuth.get("주소");

const orderAPI = {
  thankYou: {
    get: { getThankyouPageData },
  },
};

export default orderAPI;
