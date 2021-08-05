import { atom } from "recoil";

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

export const reviews = atom({
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
