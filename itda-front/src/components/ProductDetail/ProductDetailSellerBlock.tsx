import S from "./ProductDetailStyles";
import { IProductDetail } from "types/ProductDetailTypes";

const ProductDetailSellerBlock = (product: IProductDetail) => {
  return (
    <S.ProductInfo.SellerBlock>
      <S.ProductInfo.SellerImageWrapper>
        <S.ProductInfo.SellerImage
          src={product.seller.imageUrl}
          alt="판매자사진"
        />
      </S.ProductInfo.SellerImageWrapper>
      <S.ProductInfo.SellerInfo>
        <S.ProductInfo.SellerName>
          {product.seller.name}에게 문의하기
        </S.ProductInfo.SellerName>
        <S.ProductInfo.SellerDetail>
          "{product.seller.description}"
        </S.ProductInfo.SellerDetail>
      </S.ProductInfo.SellerInfo>
    </S.ProductInfo.SellerBlock>
  );
};

export default ProductDetailSellerBlock;
