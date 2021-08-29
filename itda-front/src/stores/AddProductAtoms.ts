import { atom, selector } from "recoil";
import {
  IAddProduct,
  IAddProductSelectField,
  IAddProductTextField,
} from "types/AddProductTypes";

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

export const addProductInfos = atom<IAddProductTextField>({
  key: "addProductTextFieldValue",
  default: {
    name: "",
    productImage: "",
    description: "",
    price: 0,
    salesUnit: "",
    weight: "",
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
    origin: "",
    packagingType: "",
  },
});

export const finalAddProductValue = selector({
  key: "finalAddProductValue",
  get: ({ get }) => {
    const addProductTextValue = get(addProductInfos);
    const addProductEditorValue = get(editorValue);
    const addProductSelectValue = get(addProductSelectInput);

    return {
      ...addProductTextValue,
      detailDescription: addProductEditorValue,
      ...addProductSelectValue,
    };
  },
});
