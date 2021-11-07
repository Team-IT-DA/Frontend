import { atom } from "recoil";

export const sellerProfilePreviewImage = atom<{
  file: any;
  previewURL: any;
}>({
  key: "sellerProfilePreviewImage",
  default: {
    file: null,
    previewURL: null,
  },
});

export const sellerProfileText = atom<{ text: string }>({
  key: "sellerProfileText",
  default: {
    text: "판매자님을 소개하는 한마디를 적어주세요.",
  },
});
