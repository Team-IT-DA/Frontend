import S from "./ProductDetailStyles";

type TProductDetailButtonBlock = {
  handleClickAddToCartButton: () => void;
};

const ProductDetailButtonBlock = ({
  handleClickAddToCartButton,
}: TProductDetailButtonBlock) => {
  return (
    <S.ProductInfo.PaymentBlock>
      <S.ProductInfo.AddToCartButton onClick={handleClickAddToCartButton}>
        장바구니 담기
      </S.ProductInfo.AddToCartButton>
      <S.ProductInfo.BuyButton>구매하기</S.ProductInfo.BuyButton>
    </S.ProductInfo.PaymentBlock>
  );
};

export default ProductDetailButtonBlock;
