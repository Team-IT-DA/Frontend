import { atom } from "recoil";

export const productPreviewImage = atom<{
  file: any;
  previewURL: any;
}>({
  key: "productPreviewImage",
  default: {
    file: null,
    previewURL: null,
  },
});
