import S from "./ProductDetailStyles";

const ProductDetailButtonBlock = () => {
  return (
    <S.ProductInfo.PaymentBlock>
      <S.ProductInfo.AddToCartButton>
        장바구니 담기
      </S.ProductInfo.AddToCartButton>
      <S.ProductInfo.BuyButton>구매하기</S.ProductInfo.BuyButton>
    </S.ProductInfo.PaymentBlock>
  );
};

export default ProductDetailButtonBlock;
