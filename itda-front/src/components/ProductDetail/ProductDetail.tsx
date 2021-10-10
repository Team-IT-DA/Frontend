import Header from "components/common/Header";
import ProductInfo from "./ProductInfo";
import ProductTab from "./ProductTab";
import S from "./ProductDetailStyles";
import TopButton from "components/common/TopButton";
import { CircularProgress } from "@material-ui/core";
import { RouteComponentProps } from "react-router";
import { useQuery } from "react-query";
import { productAPI } from "util/API/productAPI";
import { useSetRecoilState } from "recoil";
import {
  productInfo,
  detailProductPrice,
  detailDescription,
} from "stores/ProductDetailAtoms";

interface MatchParams {
  productId: string;
}

const ProductDetail = ({
  match,
  history,
}: RouteComponentProps<MatchParams>) => {
  const setProduct = useSetRecoilState(productInfo);
  const setProductPrice = useSetRecoilState(detailProductPrice);
  const setDetailDescription = useSetRecoilState(detailDescription);

  const { isLoading } = useQuery(
    "productDetail",
    () =>
      productAPI.products.get.getProductDetail(Number(match.params.productId)),
    {
      retry: 1,
      onSuccess: (data) => {
        setProduct(data?.data.product);
        setProductPrice(data?.data?.product?.price);
        setDetailDescription(data?.data?.product?.detailDescription);
      },
      onError: (err) => {
        history.push("/notFound");
      },
    }
  );

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
