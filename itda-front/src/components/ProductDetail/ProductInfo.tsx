import StepperButton from "components/common/Atoms/StepperButton";
import { useRecoilState, useRecoilValue } from "recoil";

import S from "./ProductDetailStyles";
import {
  detailProductCount,
  productInfo,
  detailProductPrice,
  detailDescription,
} from "stores/ProductDetailAtoms";
import { cartProductData } from "stores/CartAtoms";
import { ICartProduct } from "types/CartTypes";
import ProductDetailButtonBlock from "./ProductDetailButtonBlock";
import ProductDetailSellerBlock from "./ProductDetailSellerBlock";
import ProductDetailTableBlock from "./ProductDetailTableBlock";
import ProductDetailHeaderBlock from "./ProductDetailHeaderBlock";
import { useQuery } from "react-query";
import { productAPI } from "util/API/productAPI";
import LoadingSpinner from "components/common/LoadingSpinner";


const ProductInfo = () => {
  const productData = useRecoilValue(productInfo);
  const [cartProductsData, setCartProductData] =
    useRecoilState(cartProductData);
  const productCount = useRecoilValue(detailProductCount);
  const [productPrice, setProductPrice] = useRecoilState(detailProductPrice);
  const hasSameProductInCart = (id: number) => {
    return cartProductsData.some((product) => product.id === id);
  };
  
  const handleClickAddToCartButton = () => {
    const productId = Number(productData.id);
    const targetProductData: ICartProduct = {
      id: productId,
      count: productCount,
      price: productPrice,
      productName: productData?.name,
      imageUrl: productData?.imgUrl,
    };
    if (!hasSameProductInCart(productId)) {
      setCartProductData((cartProducts) => [
        ...cartProducts,
        targetProductData,
      ]);

    }
  };

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
