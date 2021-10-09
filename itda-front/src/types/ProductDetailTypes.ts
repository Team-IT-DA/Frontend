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

export interface IReview {
  id: number;
  writer: ICommonWriterInfo;
  date: string;
  image: string[];
  contents: string;
}

// export interface IProductDetail extends ICommonInfo {
//   [index: string]: string | number;
//   name: string;
//   price: number;
//   subTitle: string;
//   salesUnit: string;
//   capacity: string;
//   deliveryFee: number;
//   deliveryFeeCondition: string;
//   origin: string;
//   packagingType: string;
//   description: string;
//   productImage: string;
//   notice: string;
//   mainCategoryId: number;

// }
