import { atom } from "recoil";

export const currentSelectedTab = atom({
  key: "currentSelectedTab",
  default: "주문 내역",
});
