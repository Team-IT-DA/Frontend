import { IProductDetail } from "types/ProductDetailTypes";
import S from "./ProductDetailStyles";

const ProductDetailHeaderBlock = (mockProduct: IProductDetail) => {
  return (
    <>
      <S.ProductInfo.DetailName>{mockProduct.name}</S.ProductInfo.DetailName>
      <S.ProductInfo.DetailShortInfo>
        {mockProduct.description}
      </S.ProductInfo.DetailShortInfo>
      <S.ProductInfo.DetailPrice>
        {mockProduct.price.toLocaleString()}원
      </S.ProductInfo.DetailPrice>
    </>
  );
};

export default ProductDetailHeaderBlock;
