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

  const setTabSticky = (checkpoint: IntersectionObserverEntry) => {
    if (checkpoint.boundingClientRect.y <= 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    const checkLine = tabRef?.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setTabSticky(entry);
        });
      },
      { threshold: [1] }
    );

    io.observe(checkLine as HTMLDivElement);
  }, [tabRef]);

  const moveToInfoSection = () => {
    setTabStateInfo(true);
    infoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const moveToReviewSection = () => {
    setTabStateInfo(false);
    reviewRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <S.ProductTab.TabLayout>
      <div ref={tabRef}></div>
      <S.ProductTab.TabToggleLayer isSticky={isSticky}>
        <S.ProductTab.InformationTabBlock
          isInfo={isTabStateInfo}
          onClick={moveToInfoSection}
        >
          상품설명
        </S.ProductTab.InformationTabBlock>
        <S.ProductTab.ReviewTabBlock
          isInfo={isTabStateInfo}
          onClick={moveToReviewSection}
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
