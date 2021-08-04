export interface IProductDetail extends ISeller {
  price: number;
  salesUnit: string;
  weight: string;
  deliveryFee: number;
  deliveryFeeCondition: string;
  origin: string;
  packagingType: string;
  detailDescription: string;
  seller: ISeller;
}

export interface ISeller {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
}
