import { ISendingCartProduct } from "./CartTypes";
import { SetStateAction } from "react";

type TSideDrawer = {
  isSideDrawerClicked: undefined | boolean;
  setIsSideDrawerClicked: (value: undefined | boolean) => void;
};

type TDrawerItem = {
  // productSeller: string
  productId: number;
  productImage: string;
  productName: string;
  productPrice: number;
  removeItem: (id: number) => void;
  cartProductsCount: ISendingCartProduct[];
  setCartProductsCount: React.Dispatch<SetStateAction<ISendingCartProduct[]>>;
};

export type { TSideDrawer, TDrawerItem };
