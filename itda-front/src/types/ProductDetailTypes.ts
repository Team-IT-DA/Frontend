import { ICommonInfo } from "./CommonTypes";

export interface IProductDetail extends ICommonInfo {
  price: number;
  salesUnit: string;
  weight: string;
  deliveryFee: number;
  deliveryFeeCondition: string;
  origin: string;
  packagingType: string;
  detailDescription: string;
  seller: ICommonInfo;
}
