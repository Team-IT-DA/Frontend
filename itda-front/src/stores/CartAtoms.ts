import { atom, selector } from "recoil";
import {
  ICartProduct,
  ICart,
  ISendingCartProduct,
  ICartSelectedProduct,
} from "types/CartTypes";

export const selectedProduct = atom({
  key: "selectedProduct",
  default: new Map<number, ICartSelectedProduct>(),
});

export const cartProductData = atom<ICart[]>({
  key: "cartProductData",
  default: [],
});

export const isDefaultAddress = atom({
  key: "isDefaultAddress",
  default: true,
});

export const consignee = atom({
  key: "consignee",
  default: "",
});

export const phoneFirstPart = atom({
  key: "phoneFirstPart",
  default: "",
});

export const phoneSecondPart = atom({
  key: "phoneSecondPart",
  default: "",
});

export const phoneThirdPart = atom({
  key: "phoneThirdPart",
  default: "",
});

export const regionOneDepthName = atom({
  key: "regionOneDepthName",
  default: "",
});

export const regionTwoDepthName = atom({
  key: "regionTwoDepthName",
  default: "",
});

export const regionThreeDepthName = atom({
  key: "regionThreeDepthName",
  default: "",
});

export const mainBuildingNo = atom({
  key: "mainBuildingNo",
  default: 0,
});

export const subBuildingNo = atom({
  key: "subBuildingNo",
  default: 0,
});

export const zoneNo = atom({
  key: "zoneNo",
  default: 0,
});

export const shippingMessage = atom({
  key: "shippingMessage",
  default: "",
});

export const shippingData = selector({
  key: "shippingData",
  get: ({ get }) => {
    const consigneeState = get(consignee);

    const phoneFirstPartState = get(phoneFirstPart);
    const phoneSecondPartState = get(phoneSecondPart);
    const phoneThirdPartState = get(phoneThirdPart);

    const regionOneDepthNameState = get(regionOneDepthName);
    const regionTwoDepthNameState = get(regionTwoDepthName);
    const regionThreeDepthNameState = get(regionThreeDepthName);

    const mainBuildingNoState = get(mainBuildingNo);
    const subBuildingNoState = get(subBuildingNo);
    const zoneNoState = get(zoneNo);

    const shippingMessageState = get(shippingMessage);

    return {
      consignee: consigneeState,
      phone: `${phoneFirstPartState}${phoneSecondPartState}${phoneThirdPartState}`,
      regionOneDepthName: regionOneDepthNameState,
      regionTwoDepthName: regionTwoDepthNameState,
      regionThreeDepthName: regionThreeDepthNameState,
      mainBuildingNo: mainBuildingNoState,
      subBuildingNo: subBuildingNoState,
      zoneNo: zoneNoState,
      defaultAddrYn: true,
      message: shippingMessageState,
    };
  },
});

export const shippingDefaultInfoState = atom({
  key: "shippingDefaultInfoState",
  default: true,
});
