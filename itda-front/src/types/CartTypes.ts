import { NumberLiteralType } from "typescript";

interface ICartProduct {
  id: number;
  imageUrl: string;
  productName: string;
  price: number;
  count: number;
}

interface ISendingCartProduct {
  id: number;
  price: number;
  count: number;
}

interface IShippingInfos {
  id?: number;
  consignee: string;
  phone: string;
  regionOneDepthName: string;
  regionTwoDepthName: string;
  regionThreeDepthName: string;
  mainBuildingNo: number;
  subBuildingNo: number;
  zoneNo: number;
  defaultAddrYn: boolean;
  message: string;
}

//TODO: 위에 타입에 합치기

interface IAddressText {
  regionOneDepthName: string;
  regionTwoDepthName: string;
  regionThreeDepthName: string;
}

interface IAddressNumber {
  mainBuildingNo: number;
  subBuildingNo: number;
  zoneNo: number;
}

interface IOrder {
  orderList: IOrderList[];
  orderPrice: number;
  shippingFee: number;
  totalPrice: number;
  shippingAddressId: number;
}

interface IOrderList {
  productId: number;
  count: number;
}

export type {
  ICartProduct,
  ISendingCartProduct,
  IShippingInfos,
  IAddressText,
  IAddressNumber,
  IOrder,
};
