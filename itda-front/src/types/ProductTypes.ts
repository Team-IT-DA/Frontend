enum ESearchCriteria {
  PRODUCT = "PRODUCT",
  SELLER = "SELLER",
}

interface IProduct {
  id: number;
  imageUrl: string;
  productName: string;
  sellerName: string;
  price: number;
}
export type { ESearchCriteria, IProduct };
