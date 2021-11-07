import { atom } from "recoil";

export const sellerProfileImage = atom<{
  file: any;
}>({
  key: "sellerProfileImage",
  default: {
    file: null,
  },
});

export const sellerProfileText = atom<{ text: string }>({
  key: "sellerProfileText",
  default: {
    text: "판매자님을 소개하는 한마디를 적어주세요.",
  },
});
