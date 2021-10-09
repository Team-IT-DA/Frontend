import { ICommonInfo, ICommonWriterInfo } from "./CommonTypes";

export interface IProductDetail extends ICommonInfo {
  price: number;
  salesUnit: string;
  deliveryFee: number;
  deliveryFeeCondition: string;
  origin: string;
  packagingType: string;
  detailDescription: string;
  seller: ICommonInfo;
  notice: string;
  weight: string;
  imgUrl: string;
}

// export interface ITargetProductDetail {
//   id: number;
//   imageUrl: string;
//   productName: string;
//   price: number;
//   count: number;
// }

export interface IReview {
  id: number;
  writer: ICommonWriterInfo;
  date: string;
  image: string[];
  contents: string;
}
