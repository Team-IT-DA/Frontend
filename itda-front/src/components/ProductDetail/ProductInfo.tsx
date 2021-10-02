import StepperButton from "components/common/Atoms/StepperButton";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import {
  detailProductCount,
  detailProductPrice,
  detailDescription,
} from "stores/ProductDetailAtoms";
import S from "./ProductDetailStyles";
import { withRouter, RouteComponentProps } from "react-router";
import ProductDetailButtonBlock from "./ProductDetailButtonBlock";
import ProductDetailSellerBlock from "./ProductDetailSellerBlock";
import ProductDetailTableBlock from "./ProductDetailTableBlock";
import ProductDetailHeaderBlock from "./ProductDetailHeaderBlock";
import { useQuery } from "react-query";
import { productAPI } from "util/API/productAPI";

interface MatchParams {
  productId: string;
}

const ProductInfo = ({ match }: RouteComponentProps<MatchParams>) => {
  const setProductPrice = useSetRecoilState(detailProductPrice);
  const setDetailDescription = useSetRecoilState(detailDescription);

  const { data, isLoading } = useQuery(
    "productDetail",
    () =>
      productAPI.products.get.getProductDetail(Number(match.params.productId)),
    {
      onSuccess: (data) => {
        setProductPrice(data?.data?.product?.price);
        setDetailDescription(data?.data?.product?.detailDescription);
      },
    }
  );

  return (
    <S.ProductInfo.InfoLayout>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          <S.ProductInfo.ProductDetailLayer>
            <S.ProductInfo.ImageBlock
              src={data?.data.product.imgUrl}
              alt="상품 이미지"
            />
            <S.ProductInfo.DetailBlock>
              <ProductDetailHeaderBlock {...data?.data.product} />
              <ProductDetailTableBlock {...data?.data.product} />
              <ProductDetailBuyBlock />
            </S.ProductInfo.DetailBlock>
          </S.ProductInfo.ProductDetailLayer>
          <S.ProductInfo.ProductPaymentLayer>
            <ProductDetailSellerBlock {...data?.data.product} />
            <ProductDetailButtonBlock />
          </S.ProductInfo.ProductPaymentLayer>
        </>
      )}
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

export default withRouter(ProductInfo);
