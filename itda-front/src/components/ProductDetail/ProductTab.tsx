import S from "./ProductDetailStyles";
import ProductDescription from "./ProductDescription";
import ProductReview from "./ProductReview";

const ProductTab = () => {
  return (
    <S.ProductTab.TabLayout>
      <S.ProductTab.TabToggleLayer>
        <S.ProductTab.InformationTabBlock>
          상품설명
        </S.ProductTab.InformationTabBlock>
        <S.ProductTab.ReviewTabBlock>후기</S.ProductTab.ReviewTabBlock>
      </S.ProductTab.TabToggleLayer>
      <ProductDescription />
      <ProductReview />
    </S.ProductTab.TabLayout>
  );
};

export default ProductTab;
