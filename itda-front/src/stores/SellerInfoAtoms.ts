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
