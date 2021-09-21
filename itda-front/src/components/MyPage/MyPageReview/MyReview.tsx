import S from "../MyPageStyles";

const MyReview = () => {
  return (
    <S.MyReview.Layout>
      {/*
      리뷰 수만큼 돌릴건데.. 여기도 pagination 필요할 느낌쓰
      아니면 편하게 스크롤도 갠춘 ㅎㅎ ^-^
      */}
      {Array.from({ length: 4 }).map((review) => (
        <S.MyReview.Layer>
          <S.MyReview.ReviewInfoBox>
            <S.MyReview.ReviewProductDiv>
              <S.MyReview.ProductImageHolder>
                <S.MyReview.ProductImage
                  alt="제품사진"
                  src="https://ifh.cc/g/gFFnTG.jpg"
                />
              </S.MyReview.ProductImageHolder>
              <S.MyReview.ProductName>
                크롱의 유기농 당근 2kg
              </S.MyReview.ProductName>
            </S.MyReview.ReviewProductDiv>
            <S.MyReview.WrittenDateDiv>
              작성일: 21년 7월 12일
            </S.MyReview.WrittenDateDiv>
          </S.MyReview.ReviewInfoBox>
          <S.MyReview.ReviewContentBox>
            <S.MyReview.ReviewImageHolder>
              <S.MyReview.ReviewImage
                alt="리뷰사진"
                src="https://ifh.cc/g/gFFnTG.jpg"
              />
            </S.MyReview.ReviewImageHolder>
            <S.MyReview.ReviewDescription>
              며칠 전 구매해서 먹어봤는데 어쩌고 저쩌고..... 많이 파세요!!
              응원합니다!! 며칠 전 구매해서 먹어봤는데 어쩌고 저쩌고..... 많이
              파세요!! 응원합니다!!며칠 전 구매해서 먹어봤는데 어쩌고
              저쩌고..... 많이 파세요!! 응원합니다!!
            </S.MyReview.ReviewDescription>
          </S.MyReview.ReviewContentBox>
        </S.MyReview.Layer>
      ))}
    </S.MyReview.Layout>
  );
};

export default MyReview;
