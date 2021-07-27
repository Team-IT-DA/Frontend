import S from "./CommonStyles";
const ProductCard = () => {
  return (
    <S.ProductCard.CardContainer>
      <S.ProductCard.ProductImageHolder>
        <S.ProductCard.ProductImage
          alt="이미지"
          src="https://t1.daumcdn.net/news/202105/25/catlab/20210525054449077awum.jpg"
        />
      </S.ProductCard.ProductImageHolder>
      <S.ProductCard.ProductDescription>
        <S.ProductCard.ProductDescriptionTop>
          <span>[크롱]</span>
          <span>크롱의 싱싱한 당근 2kg</span>
        </S.ProductCard.ProductDescriptionTop>
        <div>3000원</div>
      </S.ProductCard.ProductDescription>
    </S.ProductCard.CardContainer>
  );
};

export default ProductCard;
