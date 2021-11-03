import {
  productInfo,
  detailProductPrice,
  detailDescription,
} from "stores/ProductDetailAtoms";
import { useSetRecoilState } from "recoil";
import { AxiosResponse } from "axios";

const ProductDetailService = () => {
  const setProduct = useSetRecoilState(productInfo);
  const setProductPrice = useSetRecoilState(detailProductPrice);
  const setDetailDescription = useSetRecoilState(detailDescription);

  const setDetailProductData = (data: AxiosResponse<any>) => {
    setProduct(data?.data.product);
    setProductPrice(data?.data?.product?.price);
    setDetailDescription(data?.data?.product?.description);
  };

  return { setDetailProductData };
};

export default ProductDetailService;
