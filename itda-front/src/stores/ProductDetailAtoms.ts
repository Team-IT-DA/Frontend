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
