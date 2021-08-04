const ProductReview = () => {
  return (
    <>
      <div>상품 후기</div>
      <div>리뷰 13건</div>
      <div>
        <div>포토후기</div>
        <div>일반후기</div>
      </div>
      <div>
        <ul>
          {Array.from({ length: 5 }).map((v) => (
            <li>
              <div>크롱</div>
              <div>2021/06/06</div>
              <div>이미지 레이어</div>
              <div>상품이 너무 신선해요 ~ 추천합니다 ! 짱 추 !</div>
            </li>
          ))}
        </ul>
        <div>페이지네이션 1 2 3 4 5 6 7</div>
      </div>
    </>
  );
};

export default ProductReview;
