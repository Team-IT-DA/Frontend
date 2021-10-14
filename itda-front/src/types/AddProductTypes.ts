export interface IAddProduct {
  [index: string]: string | number;
  name: string;
  price: number;
  subTitle: string;
  salesUnit: string;
  capacity: string;
  deliveryFee: number;
  deliveryFeeCondition: string;
  origin: string;
  packagingType: string;
  description: string;
  bank: string;
  accountHolder: string;
  account: string;
  productImage: string;
  notice: string;
  mainCategoryId: number;
}

export interface IAddProductTextField {
  [index: string]: string | number;
  name: string;
  price: number;
  subTitle: string;
  salesUnit: string;
  capacity: string;
  deliveryFee: number;
  deliveryFeeCondition: string;
  bank: string;
  accountHolder: string;
  account: string;
  productImage: string;
  notice: string;
}

export interface IAddProductSelectField {
  [index: string]: string | number;
  origin: string;
  packagingType: string;
  mainCategoryId: number;
}

export interface IAddProductEditorField {
  description: string;
}
