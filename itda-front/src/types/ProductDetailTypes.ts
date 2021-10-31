import { ICommonInfo, ICommonWriterInfo } from "./CommonTypes";

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

export interface IProductDetail extends ICommonInfo {
  name: string;
  price: number;
  subTitle: string;
  salesUnit: string;
  imgUrl: string;
  capacity: string;
  deliveryFee: number;
  deliveryFeeCondition: string;
  origin: string;
  packagingType: string;
  description: string;
  notice: string;
  seller: ICommonInfo;
}
