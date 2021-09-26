import { atom } from "recoil";

export const currentSelectedTab = atom({
  key: "currentSelectedTab",
  default: "주문 내역",
});

export const currentSelectedSubtab = atom({
  key: "currentSelectedSubtab",
  default: "기본정보",
});
