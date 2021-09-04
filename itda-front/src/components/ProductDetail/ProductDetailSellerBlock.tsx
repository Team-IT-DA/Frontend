import S from "./ProductDetailStyles";
import { mockProduct } from "./mocks";

const ProductDetailSellerBlock = () => {
  return (
    <S.ProductInfo.SellerBlock>
      <S.ProductInfo.SellerImageWrapper>
        <S.ProductInfo.SellerImage
          src={mockProduct.seller.imageUrl}
          alt="판매자사진"
        />
      </S.ProductInfo.SellerImageWrapper>
      <S.ProductInfo.SellerInfo>
        <S.ProductInfo.SellerName>
          {mockProduct.seller.name}에게 문의하기
        </S.ProductInfo.SellerName>
        <S.ProductInfo.SellerDetail>
          "{mockProduct.seller.description}"
        </S.ProductInfo.SellerDetail>
      </S.ProductInfo.SellerInfo>
    </S.ProductInfo.SellerBlock>
  );
};

export default ProductDetailSellerBlock;
