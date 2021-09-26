import { instanceWithAuth } from "./index";

const addNewProduct = async (newProduct: any) =>
  instanceWithAuth.post("/products", newProduct);

const checkReview = async () => instanceWithAuth.get("/myPage/reviews");

const myPageAPI = {
  seller: { addNewProduct },
  user: {
    checkReview,
  },
};

export default myPageAPI;
