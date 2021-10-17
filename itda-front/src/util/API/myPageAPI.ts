import { instanceWithAuth } from "./index";

const addNewProduct = async (newProduct: any) =>
  instanceWithAuth.post("/products", newProduct);

const checkReview = async () => instanceWithAuth.get("/myPage/reviews");

const checkUserInfo = async () => instanceWithAuth.get("/myPage/user");

const updateUserInfo = async () => instanceWithAuth.post("/myPage/user");

const myPageAPI = {
  seller: { addNewProduct },
  user: {
    checkReview,
    checkUserInfo,
    updateUserInfo,
  },
};

export default myPageAPI;
