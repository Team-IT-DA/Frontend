import { useRecoilState } from "recoil";
import { useRef } from "react";
import useToggle from "hooks/useToggle";
import S from "./ProductDetailStyles";
import { isReviewOnlyPhoto } from "stores/ProductDetailAtoms";
import PhotoModal from "./PhotoModal";
import { IReview } from "types/ProductDetailTypes";
import Pagination from "components/common/Atoms/Pagination";
import { useReviewList } from "hooks/useReviewList";

const ProductReview = () => {
  const [isPhotoReview, setIsPhotoReview] = useRecoilState(isReviewOnlyPhoto);
  const reviewTabRef = useRef(null);

  const { data, isLoading, setPage, page, reviewsPerPage } = useReviewList();

  const getPhotoReviewOnly = () => {
    setIsPhotoReview(true);
    setPage(1);
  };

  const getTotalReview = () => {
    setIsPhotoReview(false);
    setPage(1);
  };

  return (
    <S.ReviewTab.ReviewTabLayout ref={reviewTabRef}>
      <S.ReviewTab.ReviewTitleLayer>상품 후기</S.ReviewTab.ReviewTitleLayer>
      <S.ReviewTab.ReviewCountLayer>
        리뷰 {data?.data.totalCounts}건
      </S.ReviewTab.ReviewCountLayer>
      <S.ReviewTab.ReviewPhotoTabLayer isPhoto={isPhotoReview}>
        <div onClick={getTotalReview}>전체후기</div>
        <div onClick={getPhotoReviewOnly}>포토후기</div>
      </S.ReviewTab.ReviewPhotoTabLayer>
      <S.ReviewTab.ReviewListLayer>
        <S.ReviewTab.ReviewListBlock>
          {data?.data.reviewsOfProductDtos?.map((review: IReview) => (
            <Review reviewData={review} key={review.id} />
          ))}
        </S.ReviewTab.ReviewListBlock>
        <Pagination
          itemsPerPage={reviewsPerPage}
          paginate={setPage}
          totalPosts={data?.data.totalCounts}
          currentPage={page}
        />
      </S.ReviewTab.ReviewListLayer>
    </S.ReviewTab.ReviewTabLayout>
  );
};

const Review = ({ reviewData }: { reviewData: IReview }) => {
  const [toggleState, setToggle] = useToggle(false);

  const handlePhotoClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.className === "photoImg") return;
    setToggle();
  };

  return (
    <>
      <S.ReviewTab.SingleReviewLayout>
        <S.ReviewTab.ReviewerLayer>
          <div>
            <S.ReviewTab.ReviewerNameBlock>
              {reviewData.writer.name}
            </S.ReviewTab.ReviewerNameBlock>
            <S.ReviewTab.ReviewDateBlock>
              {reviewData.date}
            </S.ReviewTab.ReviewDateBlock>
          </div>
        </S.ReviewTab.ReviewerLayer>
        {reviewData.image.length !== 0 && (
          <S.ReviewTab.ReviewImageLayer>
            {reviewData.image.map((imgUrl) => (
              <S.ReviewTab.ReviewImage
                onClick={handlePhotoClick}
                src={imgUrl}
              />
            ))}
          </S.ReviewTab.ReviewImageLayer>
        )}
        <S.ReviewTab.ReviewContentLayer>
          {reviewData.contents}
        </S.ReviewTab.ReviewContentLayer>
      </S.ReviewTab.SingleReviewLayout>
      {toggleState && <PhotoModal handlePhotoClick={handlePhotoClick} />}
    </>
  );
};

export default ProductReview;
