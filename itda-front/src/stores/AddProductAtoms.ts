import { atom, selector } from "recoil";
import {
  IAddProduct,
  IAddProductSelectField,
  IAddProductTextField,
} from "types/AddProductTypes";
import { packagingTypeOptions, originOptions } from "util/constants";

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

export const productImage = atom<any>({
  key: "addProductImageUrl",
  default: "",
});

export const addProductInfos = atom<IAddProductTextField>({
  key: "addProductTextFieldValue",
  default: {
    name: "",
    subTitle: "",
    price: 0,
    salesUnit: "",
    capacity: "",
    deliveryFee: 0,
    deliveryFeeCondition: "",
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

export const addProductSelectInput = atom<IAddProductSelectField>({
  key: "addProductSelectInput",
  default: {
    origin: originOptions[0],
    packagingType: packagingTypeOptions[0],
    mainCategoryId: 0,
  },
});

export const finalAddProductValue = selector<IAddProduct>({
  key: "finalAddProductValue",
  get: ({ get }) => {
    const addProductTextValue = get(addProductInfos);
    const addProductEditorValue = get(editorValue);
    const addProductSelectValue = get(addProductSelectInput);
    const addProductImage = get(productImage);
    return {
      ...addProductTextValue,
      description: addProductEditorValue,
      productImage: addProductImage,
      ...addProductSelectValue,
    };
  },
});
