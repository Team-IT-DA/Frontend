import { useRecoilState, useRecoilValue } from "recoil";
import { useRef } from "react";
import useToggle from "hooks/useToggle";
import S from "./ProductDetailStyles";
import {
  isReviewOnlyPhoto,
  reviews,
  currentPage,
  productInfo,
} from "stores/ProductDetailAtoms";
import PhotoModal from "./PhotoModal";
import { reviewMock } from "./mocks";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { IReview } from "types/ProductDetailTypes";
import Pagination from "components/common/Atoms/Pagination";
import { productAPI } from "util/API/productAPI";

const ProductReview = () => {
  const [isPhotoReview, setIsPhotoReview] = useRecoilState(isReviewOnlyPhoto);
  const reviewTabRef = useRef(null);

  const [productReviews, setProductReviews] = useRecoilState(reviews);
  const [page, setPage] = useRecoilState(currentPage);
  const reviewsPerPage = 5;

  const productData = useRecoilValue(productInfo);

  const { isLoading } = useQuery(
    "productDetail",
    () =>
      productAPI.products.get.getProductReview(
        productData.id,
        page,
        isPhotoReview,
        reviewsPerPage
      ),
    {
      retry: 1,
      onSuccess: (data) => {
        setProductReviews(data?.data);
      },
    }
  );

  useEffect(() => {
    if (!isPhotoReview) {
      setProductReviews(
        reviewMock.slice(
          reviewsPerPage * (page - 1),
          reviewsPerPage * (page - 1) + reviewsPerPage
        )
      );
    } else {
      setProductReviews(
        reviewMock
          .filter((mock) => mock.image.length)
          .slice(
            reviewsPerPage * (page - 1),
            reviewsPerPage * (page - 1) + reviewsPerPage
          )
      );
    }
  }, [page, isPhotoReview]);
  //http://34.125.79.175:8000/api/products/1/reviews?page=1&size=5

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
      <S.ReviewTab.ReviewCountLayer>리뷰 13건</S.ReviewTab.ReviewCountLayer>
      <S.ReviewTab.ReviewPhotoTabLayer isPhoto={isPhotoReview}>
        <div onClick={getTotalReview}>전체후기</div>
        <div onClick={getPhotoReviewOnly}>포토후기</div>
      </S.ReviewTab.ReviewPhotoTabLayer>
      <S.ReviewTab.ReviewListLayer>
        <S.ReviewTab.ReviewListBlock>
          {productReviews.map((review) => (
            <Review reviewData={review} key={review.id} />
          ))}
        </S.ReviewTab.ReviewListBlock>
        <Pagination
          itemsPerPage={reviewsPerPage}
          paginate={setPage}
          totalPosts={
            isPhotoReview
              ? reviewMock.filter((mock) => mock.image.length).length
              : reviewMock.length
          }
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
