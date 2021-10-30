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
  description: string;
}
export type { ESearchCriteria, IProduct };
