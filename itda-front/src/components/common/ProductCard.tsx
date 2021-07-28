import S from "./CommonStyles";

type ProductCardPropType = {
  size: string;
  horizontal: boolean;
};

type cardSizeType = {
  [index: string]: widthHeightType;
};

type widthHeightType = {
  width: string;
  height: string;
};

const ProductCard = ({ size, horizontal }: ProductCardPropType) => {
  const verticalCardSize: cardSizeType = {
    small: { width: "150px", height: "200px" },
    large: { width: "200px", height: "250px" },
  };

  const horizontalCardSize: cardSizeType = {
    small: { width: "200px", height: "100px" },
    large: { width: "250px", height: "125px" },
  };

  return (
    <S.ProductCard.CardContainer
      horizontal={horizontal}
      size={horizontal ? horizontalCardSize[size] : verticalCardSize[size]}
    >
      <S.ProductCard.ProductImageHolder horizontal={horizontal}>
        <S.ProductCard.ProductImage
          alt="이미지"
          src="https://t1.daumcdn.net/news/202105/25/catlab/20210525054449077awum.jpg"
        />
      </S.ProductCard.ProductImageHolder>
      <S.ProductCard.ProductDescription>
        <S.ProductCard.ProductTitle>
          <span>[크롱]</span>
          <span>크롱의 싱싱한 당근 2kg</span>
        </S.ProductCard.ProductTitle>
        <S.ProductCard.ProductPrice>3000원</S.ProductCard.ProductPrice>
      </S.ProductCard.ProductDescription>
    </S.ProductCard.CardContainer>
  );
};

export default ProductCard;
