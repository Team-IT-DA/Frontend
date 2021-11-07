import StepperButton from "components/common/Atoms/StepperButton";
import { useRecoilState, useRecoilValue } from "recoil";
import S from "./ProductDetailStyles";
import {
  detailProductCount,
  detailProductPrice,
} from "stores/ProductDetailAtoms";

import ProductDetailButtonBlock from "./ProductDetailButtonBlock";
import ProductDetailSellerBlock from "./ProductDetailSellerBlock";
import ProductDetailTableBlock from "./ProductDetailTableBlock";
import ProductDetailHeaderBlock from "./ProductDetailHeaderBlock";
import cartAPI from "util/API/cartAPI";
import ProductDetailCartService from "./ProductDetailCartService";

const ProductInfo = () => {
  const { productData, handleClickAddToCartButton } =
    ProductDetailCartService();

  return (
    <S.ProductInfo.InfoLayout>
      <>
        <S.ProductInfo.ProductDetailLayer>
          <S.ProductInfo.ImageBlock
            src={productData?.imgUrl}
            alt="상품 이미지"
          />
          <S.ProductInfo.DetailBlock>
            <ProductDetailHeaderBlock {...productData} />
            <ProductDetailTableBlock {...productData} />
            <ProductDetailBuyBlock />
          </S.ProductInfo.DetailBlock>
        </S.ProductInfo.ProductDetailLayer>
        <S.ProductInfo.ProductPaymentLayer>
          <ProductDetailSellerBlock {...productData} />
          <ProductDetailButtonBlock
            handleClickAddToCartButton={handleClickAddToCartButton}
          />
        </S.ProductInfo.ProductPaymentLayer>
      </>
    </S.ProductInfo.InfoLayout>
  );
};

const ProductDetailBuyBlock = () => {
  const [productCount, setProductCount] = useRecoilState(detailProductCount);

  const productPrice = useRecoilValue(detailProductPrice);

  return (
    <S.ProductInfo.DetailBuyBlock>
      <StepperButton state={productCount} setState={setProductCount} />
      <S.ProductInfo.DetailPriceDiv>
        <span>총 상품 금액:</span>
        <S.ProductInfo.DetailTotalPrice>
          {(productPrice * productCount).toLocaleString()}원
        </S.ProductInfo.DetailTotalPrice>
      </S.ProductInfo.DetailPriceDiv>
    </S.ProductInfo.DetailBuyBlock>
  );
};

export default ProductInfo;
