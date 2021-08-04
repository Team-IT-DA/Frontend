import { useRecoilState } from "recoil";
import S from "./ProductDetailStyles";
import ProductDescription from "./ProductDescription";
import ProductReview from "./ProductReview";
import { isTabStateDetailInfo } from "stores/ProductDetailAtoms";

const ProductTab = () => {
  const [isTabStateInfo, setTabStateInfo] =
    useRecoilState(isTabStateDetailInfo);

  return (
    <S.ProductTab.TabLayout>
      <S.ProductTab.TabToggleLayer>
        <S.ProductTab.InformationTabBlock
          isInfo={isTabStateInfo}
          onClick={() => setTabStateInfo(true)}
        >
          상품설명
        </S.ProductTab.InformationTabBlock>
        <S.ProductTab.ReviewTabBlock
          isInfo={isTabStateInfo}
          onClick={() => setTabStateInfo(false)}
        >
          후기
        </S.ProductTab.ReviewTabBlock>
      </S.ProductTab.TabToggleLayer>
      {isTabStateInfo ? <ProductDescription /> : <ProductReview />}
    </S.ProductTab.TabLayout>
  );
};

export default ProductTab;
