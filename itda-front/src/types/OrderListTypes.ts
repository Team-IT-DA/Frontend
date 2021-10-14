interface IOrderList {
  productName: string;
  imgSrc: string;
  productId: number;
  price: number;
  shippingFee: number;
  count: number;
  bank: string;
  accountHolder: string;
  account: string;
}

interface IThankyou {
  orderList: IOrderList[];
  totalPrice: number;
}

export type { IOrderList, IThankyou };
