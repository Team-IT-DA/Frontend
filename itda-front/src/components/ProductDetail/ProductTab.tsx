import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import S from "./ProductDetailStyles";
import ProductDescription from "./ProductDescription";
import ProductReview from "./ProductReview";
import {
  isTabStateDetailInfo,
  tabUIStickyState,
} from "stores/ProductDetailAtoms";

const ProductTab = () => {
  const [isTabStateInfo, setTabStateInfo] =
    useRecoilState(isTabStateDetailInfo);

  const [isSticky, setSticky] = useRecoilState(tabUIStickyState);
  const tabRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkLine = tabRef?.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.boundingClientRect.y <= 0) {
            setSticky(true);
          } else {
            setSticky(false);
          }
        });
      },
      { threshold: [1] }
    );

    io.observe(checkLine as HTMLDivElement);
  }, [tabRef]);

  return (
    <S.ProductTab.TabLayout>
      <div ref={tabRef}></div>
      <S.ProductTab.TabToggleLayer isSticky={isSticky}>
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
      <ProductDescription />
      <ProductReview />
    </S.ProductTab.TabLayout>
  );
};

export default ProductTab;
