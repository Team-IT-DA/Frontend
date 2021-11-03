import {
  productInfo,
  detailProductPrice,
  detailDescription,
} from "stores/ProductDetailAtoms";
import { useHistory } from "react-router";
import { useSetRecoilState } from "recoil";
import { AxiosResponse } from "axios";
import { productAPI } from "util/API/productAPI";
import { useQuery } from "react-query";

const ProductDetailService = (productId: number) => {
  const setProduct = useSetRecoilState(productInfo);
  const setProductPrice = useSetRecoilState(detailProductPrice);
  const setDetailDescription = useSetRecoilState(detailDescription);

  const history = useHistory();

  const setDetailProductData = (data: AxiosResponse<any>) => {
    setProduct(data?.data.product);
    setProductPrice(data?.data?.product?.price);
    setDetailDescription(data?.data?.product?.description);
  };

  const getProductDetailData = (productId: number) =>
    productAPI.products.get.getProductDetail(productId);

  const productDetailQueryConfig = {
    retry: 1,
    onSuccess: setDetailProductData,
    onError: (err: unknown) => {
      history.push("/notFound");
    },
  };

  const { isLoading } = useQuery(
    "productDetail",
    () => getProductDetailData(productId),
    productDetailQueryConfig
  );

  return { isLoading };
};

export default ProductDetailService;
