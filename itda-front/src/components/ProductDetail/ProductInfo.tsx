import StepperButton from "components/common/Atoms/StepperButton";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import {
  detailProductCount,
  detailProductPrice,
} from "stores/ProductDetailAtoms";
import S from "./ProductDetailStyles";
import { withRouter, RouteComponentProps } from "react-router";
import ProductDetailButtonBlock from "./ProductDetailButtonBlock";
import { mockProduct } from "./mocks";
import { useEffect } from "react";
import ProductDetailSellerBlock from "./ProductDetailSellerBlock";
import ProductDetailTableBlock from "./ProductDetailTableBlock";
import ProductDetailHeaderBlock from "./ProductDetailHeaderBlock";

interface MatchParams {
  productId: string;
}

const ProductInfo = ({ match }: RouteComponentProps<MatchParams>) => {
  const seProductPrice = useSetRecoilState(detailProductPrice);

  useEffect(() => {
    // axios.get(`${url}/${match.params.id}`).then(({data})=>{
    //   1. detailProductData 아톰 불러와서 세팅,
    //   2. data.price 값만 빼서 다른 상태에 저장하고, 그걸 통해 stepper로 렌더링
    // });
    seProductPrice(4000);
  }, []);

  return (
    <S.ProductInfo.InfoLayout>
      <S.ProductInfo.ProductDetailLayer>
        <S.ProductInfo.ImageBlock
          src={mockProduct.imageUrl}
          alt="상품 이미지"
        />
        <S.ProductInfo.DetailBlock>
          <ProductDetailHeaderBlock {...mockProduct} />
          <ProductDetailTableBlock {...mockProduct} />
          <ProductDetailBuyBlock />
        </S.ProductInfo.DetailBlock>
      </S.ProductInfo.ProductDetailLayer>
      <S.ProductInfo.ProductPaymentLayer>
        <ProductDetailSellerBlock />
        <ProductDetailButtonBlock />
      </S.ProductInfo.ProductPaymentLayer>
    </S.ProductInfo.InfoLayout>
  );
};

const ProductDetailBuyBlock = () => {
  const [productCount, setProductCount] = useRecoilState(detailProductCount);
  //여기서 따로 product price 관리할 예정

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
