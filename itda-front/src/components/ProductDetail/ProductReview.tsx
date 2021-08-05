import { useRecoilState } from "recoil";
import S from "./ProductDetailStyles";
import { isReviewOnlyPhoto } from "stores/ProductDetailAtoms";
import { useState } from "react";

const ProductReview = () => {
  const [isPhotoReview, setIsPhotoReview] = useRecoilState(isReviewOnlyPhoto);

  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;

  // 여기서 useEffect로 reviews설정할 예정 (의존배열에 reviews가 들어갈듯합니다)
  // setCurrentPage를 Pagination 컴포넌트에 내려주고 있음
  // 그래서 currentPage가 변할때마다 ITDA api 설계글에 쓰여있는대로
  // Get api/products/1/reviews?pageNo=${currentPage}&offset=${reviewsPerPage}
  // 이렇게 할 예정입니다.

  return (
    <S.ReviewTab.ReviewTabLayout>
      <S.ReviewTab.ReviewTitleLayer>상품 후기</S.ReviewTab.ReviewTitleLayer>
      <S.ReviewTab.ReviewCountLayer>리뷰 13건</S.ReviewTab.ReviewCountLayer>
      <S.ReviewTab.ReviewPhotoTabLayer isPhoto={isPhotoReview}>
        <div onClick={() => setIsPhotoReview(false)}>전체후기</div>
        <div onClick={() => setIsPhotoReview(true)}>포토후기</div>
      </S.ReviewTab.ReviewPhotoTabLayer>
      <S.ReviewTab.ReviewListLayer>
        <S.ReviewTab.ReviewListBlock>
          {Array.from({ length: 5 }).map((v) => (
            <Review />
          ))}
        </S.ReviewTab.ReviewListBlock>
        <Pagination
          reviewsPerPage={reviewsPerPage}
          paginate={setCurrentPage}
          totalPosts={17}
          currentPage={currentPage}
        />
      </S.ReviewTab.ReviewListLayer>
    </S.ReviewTab.ReviewTabLayout>
  );
};

const Review = () => {
  return (
    <S.ReviewTab.SingleReviewLayout>
      <S.ReviewTab.ReviewerLayer>
        <S.ReviewTab.ReviewerImageBlock src="https://ifh.cc/g/gFFnTG.jpg" />
        <div>
          <S.ReviewTab.ReviewerNameBlock>크롱</S.ReviewTab.ReviewerNameBlock>
          <S.ReviewTab.ReviewDateBlock>2021/06/06</S.ReviewTab.ReviewDateBlock>
        </div>
      </S.ReviewTab.ReviewerLayer>
      <S.ReviewTab.ReviewImageLayer>
        <S.ReviewTab.ReviewImage src="https://ifh.cc/g/gFFnTG.jpg" />
      </S.ReviewTab.ReviewImageLayer>
      <S.ReviewTab.ReviewContentLayer>
        상품이 너무 신선해요 ~ 추천합니다 ! 짱 추 !
      </S.ReviewTab.ReviewContentLayer>
    </S.ReviewTab.SingleReviewLayout>
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

  const handlePageClick = (num: number) => {
    paginate(num);
    console.log(num);
  };

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
