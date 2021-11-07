import { instanceWithAuth } from "./index";

// todo: 백엔드에 GET api 요청드릴 것!
const getSellerInfo = async () => {
    const res = await instanceWithAuth.get("/seller");
    return res.data;
};

const updateSellerInfo = (newSellerInfo: any) => {
    instanceWithAuth.post("/seller", newSellerInfo);
}

const sellerAPI = {
    get:{getSellerInfo},
    post:{updateSellerInfo}
}

export default sellerAPI;
