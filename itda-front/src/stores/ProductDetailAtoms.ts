import { atom } from "recoil";
import { IReview, IProductDetail } from "types/ProductDetailTypes";

export const isTabStateDetailInfo = atom({
  key: "isTabStateDetailInfo",
  default: true,
});

export const detailProductCount = atom({
  key: "detailProductCount",
  default: 1,
});

export const isReviewOnlyPhoto = atom({
  key: "isReviewOnlyPhoto",
  default: false,
});

export const reviews = atom<IReview[]>({
  key: "detailPageReviews",
  default: [],
});

export const detailDescription = atom({
  key: "mainContent",
  default: "",
});

export const currentPage = atom({
  key: "currentReviewPage",
  default: 1,
});

export const tabUIStickyState = atom({
  key: "detailTabStickyState",
  default: false,
});

export const detailProductPrice = atom({
  key: "productPrice",
  default: 0,
});

export const productInfo = atom<IProductDetail>({
  key: "productInfo",
  default: {
    name: "",
    imgUrl:
      "https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/pd/21/1/1/0/2/2/9/LdeGY/3721110229_B.jpg",
    description: "",
    packagingType: "",
    id: 0,
    imageUrl: "",
    price: 0,
    salesUnit: "",
    deliveryFee: 0,
    subTitle: "",
    deliveryFeeCondition: "",
    notice: "",
    origin: "",
    capacity: "",
    seller: { id: 0, name: "", imageUrl: "", description: "" },
  },
});
