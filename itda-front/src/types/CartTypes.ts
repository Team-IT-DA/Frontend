interface ICartProduct {
  id: number;
  imageUrl: string;
  productName: string;
  price: number;
  count: number;
}

interface ICartSelectedProduct {
  id: number;
  count: number;
}

interface ICart {
  imgUrl: string;
  price: number;
  productCount: number;
  productId: number;
  productName: string;
  sellerName: string;
  shippingFee: number;
}

interface IUpdateCartProduct {
  count: number;
  id: number;
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
  ICart,
  ICartSelectedProduct,
  IUpdateCartProduct,
  ISendingCartProduct,
  IShippingInfos,
  IAddressText,
  IAddressNumber,
  IOrder,
};
