import { atom, selector } from "recoil";
import { IShoppingCartProduct } from "types/ShoppingCartTypes";

export const selectedProduct = atom({
  key: "selectedProduct",
  default: new Map<number, IShoppingCartProduct>(),
});

export const cartProductData = atom<IShoppingCartProduct[]>({
  key: "cartProductData",
  default: [],
});
