import { IProductDetail } from "types/ProductDetailTypes";
import S from "./ProductDetailStyles";

const ProductDetailHeaderBlock = (product: IProductDetail) => {
  return (
    <>
      <S.ProductInfo.DetailName>{product.name}</S.ProductInfo.DetailName>
      <S.ProductInfo.DetailShortInfo>
        {product.subTitle}
      </S.ProductInfo.DetailShortInfo>
      <S.ProductInfo.DetailPrice>
        {product.price.toLocaleString()}원
      </S.ProductInfo.DetailPrice>
    </>
  );
};

export default ProductDetailHeaderBlock;
