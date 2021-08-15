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
    price: 19900,
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
