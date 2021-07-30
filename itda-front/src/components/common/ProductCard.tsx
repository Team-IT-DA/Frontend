import S from "./CommonStyles";

type ProductCardPropType = {
  size: string;
  horizontal: boolean;
  productImg: string;
  productName: string;
  productPrice: number;
  seller: string;
};

type cardSizeType = {
  [index: string]: widthHeightType;
};

type widthHeightType = {
  width: number;
  height: number;
  fontSize: number;
};

const ProductCard = ({
  size,
  horizontal,
  productImg,
  productName,
  productPrice,
  seller,
}: ProductCardPropType) => {
  const verticalCardSize: cardSizeType = {
    small: { width: 150, height: 200, fontSize: 13 },
    large: { width: 200, height: 250, fontSize: 15 },
  };

  const horizontalCardSize: cardSizeType = {
    small: { width: 200, height: 100, fontSize: 13 },
    large: { width: 250, height: 125, fontSize: 15 },
  };

  return (
    <S.ProductCard.CardLayout
      horizontal={horizontal}
      size={horizontal ? horizontalCardSize[size] : verticalCardSize[size]}
    >
      <S.ProductCard.ProductImageHolderLayer horizontal={horizontal}>
        <S.ProductCard.ProductImage alt="이미지" src={productImg} />
      </S.ProductCard.ProductImageHolderLayer>
      <S.ProductCard.ProductDescriptionLayer>
        <S.ProductCard.ProductTitle
          horizontal={horizontal}
          size={horizontal ? horizontalCardSize[size] : verticalCardSize[size]}
        >
          <span>{`[${seller}]`}</span>
          <span>{productName}</span>
        </S.ProductCard.ProductTitle>
        <S.ProductCard.ProductPrice>{`${productPrice}원`}</S.ProductCard.ProductPrice>
      </S.ProductCard.ProductDescriptionLayer>
    </S.ProductCard.CardLayout>
  );
};

export default ProductCard;
