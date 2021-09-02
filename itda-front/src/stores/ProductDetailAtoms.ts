import { atom } from "recoil";
import { IReview } from "types/ProductDetailTypes";

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

export const currentPage = atom({
  key: "currentReviewPage",
  default: 1,
});

export const tabUIStickyState = atom({
  key: "detailTabStickyState",
  default: false,
});

export const detailProductData = atom({
  key: "detailProductData",
  default: {},
});

export const detailProductPrice = atom({
  key: "productPrice",
  default: 0,
});
