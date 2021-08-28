import { atom } from "recoil";
import { IAddProduct } from "types/AddProductTypes";

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

export const addProductInfos = atom<IAddProduct>({
  key: "addProductInputInfos",
  default: {
    name: "",
    productImage: "",
    description: "",
    price: 0,
    salesUnit: "",
    weight: "",
    deliveryFee: 0,
    deliveryFeeCondition: "",
    origin: "",
    packagingType: "",
    detailDescription: "",
    notice: "",
    bank: "",
    accountHolder: "",
    account: "",
  },
});

export const checkBlankInputs = atom({
  key: "checkBlanckInputs",
  default: false,
});

export const editorValue = atom({
  key: "editorValue",
  default: "",
});

export const addProductSelectInput = atom({
  key: "addProductSelectInput",
  default: {
    origin: "",
    packagingType: "",
  },
});
