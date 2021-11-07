import Header from "components/common/Header";
import ProductInfo from "./ProductInfo";
import ProductTab from "./ProductTab";
import S from "./ProductDetailStyles";
import TopButton from "components/common/TopButton";
import { CircularProgress } from "@material-ui/core";
import { RouteComponentProps } from "react-router";
import ProductDetailService from "./ProductDetailService";

interface MatchParams {
  productId: string;
}

const ProductDetail = ({ match }: RouteComponentProps<MatchParams>) => {
  const { isLoading } = ProductDetailService(Number(match.params.productId));
    
  return (
    <>
      <Header />
      {isLoading ? (
        <S.LoadingHolder>
          <CircularProgress size={"120px"} />
        </S.LoadingHolder>
      ) : (
        <>
          <S.ProductDetailWall>
            <ProductInfo />
            <ProductTab />
            <TopButton />
          </S.ProductDetailWall>
        </>
      )}
    </>
  );
};

export default ProductDetail;
