import S from "./ProductDetailStyles";

const ProductReview = () => {
  return (
    <S.ReviewTab.ReviewTabLayout>
      <S.ReviewTab.ReviewTitleLayer>상품 후기</S.ReviewTab.ReviewTitleLayer>
      <S.ReviewTab.ReviewCountLayer>리뷰 13건</S.ReviewTab.ReviewCountLayer>
      <S.ReviewTab.ReviewPhotoTabLayer>
        <div>전체후기</div>
        <div>포토후기</div>
      </S.ReviewTab.ReviewPhotoTabLayer>
      <S.ReviewTab.ReviewListLayer>
        <S.ReviewTab.ReviewListBlock>
          {Array.from({ length: 5 }).map((v) => (
            <S.ReviewTab.SingleReviewLayout>
              <S.ReviewTab.ReviewerLayer>
                <S.ReviewTab.ReviewerImageBlock src="https://lh3.googleusercontent.com/proxy/DfvlofHE04O8qN_ybkn8Rs1aM6ew3gWd-DF0AxEWYh38pJkT87Fs1ltJzLlM75DZd-Dyl_GrDLlOiWmXlv8Jfiv0UGpvRyrZTWx_nCG7GFjFldO0Nw" />
                <div>
                  <S.ReviewTab.ReviewerNameBlock>
                    크롱
                  </S.ReviewTab.ReviewerNameBlock>
                  <S.ReviewTab.ReviewDateBlock>
                    2021/06/06
                  </S.ReviewTab.ReviewDateBlock>
                </div>
              </S.ReviewTab.ReviewerLayer>
              <S.ReviewTab.ReviewImageLayer>
                <S.ReviewTab.ReviewImage src="https://lh3.googleusercontent.com/proxy/DfvlofHE04O8qN_ybkn8Rs1aM6ew3gWd-DF0AxEWYh38pJkT87Fs1ltJzLlM75DZd-Dyl_GrDLlOiWmXlv8Jfiv0UGpvRyrZTWx_nCG7GFjFldO0Nw" />
              </S.ReviewTab.ReviewImageLayer>
              <S.ReviewTab.ReviewContentLayer>
                상품이 너무 신선해요 ~ 추천합니다 ! 짱 추 !
              </S.ReviewTab.ReviewContentLayer>
            </S.ReviewTab.SingleReviewLayout>
          ))}
        </S.ReviewTab.ReviewListBlock>
        <S.ReviewTab.PaginationLayer>
          <S.ReviewTab.PaginationNumber>1</S.ReviewTab.PaginationNumber>
          <S.ReviewTab.PaginationNumber>2</S.ReviewTab.PaginationNumber>
          <S.ReviewTab.PaginationNumber>3</S.ReviewTab.PaginationNumber>
          <S.ReviewTab.PaginationNumber>4</S.ReviewTab.PaginationNumber>
          <S.ReviewTab.PaginationNumber>5</S.ReviewTab.PaginationNumber>
        </S.ReviewTab.PaginationLayer>
      </S.ReviewTab.ReviewListLayer>
    </S.ReviewTab.ReviewTabLayout>
  );
};

export default ProductReview;
