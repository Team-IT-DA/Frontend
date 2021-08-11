import S from "./CommonStyles";
import useLazyLoad from "hooks/useLazyLoad";

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
  const { imageSrc, imageRef } = useLazyLoad(productImg);

  const verticalCardSize: cardSizeType = {
    small: { width: 150, height: 200, fontSize: 13 },
    large: { width: 200, height: 250, fontSize: 15 },
    extra: { width: 350, height: 450, fontSize: 18 },
  };

  const horizontalCardSize: cardSizeType = {
    small: { width: 200, height: 100, fontSize: 13 },
    large: { width: 250, height: 125, fontSize: 15 },
    extra: { width: 300, height: 400, fontSize: 16 },
  };

  return (
    <S.ProductCard.CardLayout
      horizontal={horizontal}
      size={horizontal ? horizontalCardSize[size] : verticalCardSize[size]}
    >
      <S.ProductCard.ProductImageHolderLayer horizontal={horizontal}>
        <S.ProductCard.ProductImage
          ref={imageRef}
          alt="이미지"
          src={imageSrc}
          horizontal={horizontal}
        />
        <S.ProductCard.ProductCartIcon />
      </S.ProductCard.ProductImageHolderLayer>
      <S.ProductCard.ProductDescriptionLayer>
        <S.ProductCard.ProductTitle
          horizontal={horizontal}
          size={horizontal ? horizontalCardSize[size] : verticalCardSize[size]}
        >
          [{seller}] {productName}
        </S.ProductCard.ProductTitle>
        <S.ProductCard.ProductPrice>{`${productPrice.toLocaleString()}원`}</S.ProductCard.ProductPrice>
        <S.ProductCard.ProductDescription>
          농부가 직접 볶은 빨간 엽기 떡볶이
        </S.ProductCard.ProductDescription>
      </S.ProductCard.ProductDescriptionLayer>
    </S.ProductCard.CardLayout>
  );
};

export default ProductCard;
