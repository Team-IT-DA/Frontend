import { atom, selector } from "recoil";
import { ICartProduct, ISendingCartProduct } from "types/CartTypes";

export const selectedProduct = atom({
  key: "selectedProduct",
  default: new Map<number, ICartProduct>(),
});

export const cartProductData = atom<ICartProduct[]>({
  key: "cartProductData",
  default: [],
});
