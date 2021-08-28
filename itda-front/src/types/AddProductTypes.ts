export interface IAddProduct {
  [index: string]: string | number;
  name: string;
  price: number;
  description: string;
  salesUnit: string;
  weight: string;
  deliveryFee: number;
  deliveryFeeCondition: string;
  origin: string;
  packagingType: string;
  detailDescription: string;
  bank: string;
  accountHolder: string;
  account: string;
  productImage: string;
  notice: string;
}

export interface IAddProductTextField {
  [index: string]: string | number;
  name: string;
  price: number;
  description: string;
  salesUnit: string;
  weight: string;
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
}

export interface IAddProductEditorField {
  detailDescription: string;
}
