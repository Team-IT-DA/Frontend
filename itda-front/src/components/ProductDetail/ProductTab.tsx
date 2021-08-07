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
  const reviewRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

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

  const handleInfoClick = () => {
    setTabStateInfo(true);
    infoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleReviewClick = () => {
    setTabStateInfo(false);
    reviewRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <S.ProductTab.TabLayout>
      <div ref={tabRef}></div>
      <S.ProductTab.TabToggleLayer isSticky={isSticky}>
        <S.ProductTab.InformationTabBlock
          isInfo={isTabStateInfo}
          onClick={handleInfoClick}
        >
          상품설명
        </S.ProductTab.InformationTabBlock>
        <S.ProductTab.ReviewTabBlock
          isInfo={isTabStateInfo}
          onClick={handleReviewClick}
        >
          후기
        </S.ProductTab.ReviewTabBlock>
      </S.ProductTab.TabToggleLayer>
      <div ref={infoRef}>
        <ProductDescription />
      </div>
      <div ref={reviewRef}>
        <ProductReview />
      </div>
    </S.ProductTab.TabLayout>
  );
};

export default ProductTab;
