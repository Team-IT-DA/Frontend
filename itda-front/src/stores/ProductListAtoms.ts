import { atom } from "recoil";

export const categoryList = atom<string[] | null>({
  key: "categoryList",
  default: null,
});

export const productsDataAtom = atom({
  key: "productsDataAtom",
  default: [],
});
