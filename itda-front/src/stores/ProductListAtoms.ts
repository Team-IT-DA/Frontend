import { atom } from "recoil";

export const categoryList = atom<string[] | null>({
  key: "",
  default: null,
});
