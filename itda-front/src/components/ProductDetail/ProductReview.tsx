import { useRecoilState } from "recoil";
import { useRef } from "react";
import useToggle from "hooks/useToggle";
import S from "./ProductDetailStyles";
import {
  isReviewOnlyPhoto,
  reviews,
  currentPage,
} from "stores/ProductDetailAtoms";
import PhotoModal from "./PhotoModal";
import { reviewMock } from "./mocks";
import { useEffect } from "react";
import { IReview } from "types/ProductDetailTypes";

const ProductReview = () => {
  const [isPhotoReview, setIsPhotoReview] = useRecoilState(isReviewOnlyPhoto);
  const reviewTabRef = useRef(null);

  const [productReviews, setProductReviews] = useRecoilState(reviews);
  const [page, setPage] = useRecoilState(currentPage);
  const reviewsPerPage = 5;

  useEffect(() => {
    if (!isPhotoReview) {
      // 포토리뷰가 아니면 그냥 전체 리뷰들 리스트 렌더링 해주면 됨
      setProductReviews(
        reviewMock.slice(
          reviewsPerPage * (page - 1),
          reviewsPerPage * (page - 1) + reviewsPerPage
        )
        // page가 atom으로 현재 default 1로 지정을 해둔 상태입니다. 0~5 5~10 의 인덱스 사이의 데이터 불러오는 로직입니다. 아직 서버를 달지 않아서 일단 이렇게나마 흉내내봤습니다.
      );
    } else {
      setProductReviews(
        //포토리뷰이면 포토리뷰만 필터링해서 렌더링
        reviewMock
          .filter((mock) => mock.image.length)
          .slice(
            reviewsPerPage * (page - 1),
            reviewsPerPage * (page - 1) + reviewsPerPage
          )
        // page가 atom으로 현재 default 1로 지정을 해둔 상태입니다. 0~5 5~10 의 인덱스 사이의 데이터 불러오는 로직입니다. 아직 서버를 달지 않아서 일단 이렇게나마 흉내내봤습니다.
      );
    }
  }, [page, isPhotoReview]);

  // 여기서 useEffect로 productReviews설정할 예정 (의존배열에 reviews가 들어갈듯합니다)
  // setCurrentPage를 Pagination 컴포넌트에 내려주고 있음
  // 그래서 currentPage가 변할때마다 ITDA api 설계글에 쓰여있는대로
  // Get api/products/1/reviews?pageNo=${currentPage}&offset=${reviewsPerPage}
  // 이렇게 할 예정입니다.

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
          {productReviews.map((v) => (
            <Review reviewData={v} />
          ))}
        </S.ReviewTab.ReviewListBlock>
        <Pagination
          reviewsPerPage={reviewsPerPage}
          paginate={setPage}
          totalPosts={
            isPhotoReview
              ? reviewMock.length
              : reviewMock.filter((mock) => mock.image.length).length
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
          <S.ReviewTab.ReviewerImageBlock src="https://ifh.cc/g/gFFnTG.jpg" />
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

interface IPagination {
  reviewsPerPage: number;
  totalPosts: number;
  paginate: (num: number) => void;
  currentPage: number;
}

const Pagination = ({
  reviewsPerPage,
  totalPosts,
  paginate,
  currentPage,
}: IPagination) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / reviewsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <S.ReviewTab.PaginationLayer>
      {pageNumbers.map((number) => (
        <S.ReviewTab.PaginationNumber
          isClicked={number === currentPage}
          onClick={() => paginate(number)}
        >
          {number}
        </S.ReviewTab.PaginationNumber>
      ))}
    </S.ReviewTab.PaginationLayer>
  );
};

export default ProductReview;
