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
    productImage:
      "https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/pd/21/1/1/0/2/2/9/LdeGY/3721110229_B.jpg",
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
    origin: "",
    packagingType: "",
  },
});

export const finalAddProductValue = selector<IAddProduct>({
  key: "finalAddProductValue",
  get: ({ get }) => {
    const addProductTextValue = get(addProductInfos);
    const addProductEditorValue = get(editorValue);
    const addProductSelectValue = get(addProductSelectInput);

    return {
      ...addProductTextValue,
      description: addProductEditorValue,
      ...addProductSelectValue,
      mainCategoryId: 1,
    };
  },
});
