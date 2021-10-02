import { useRecoilValue } from "recoil";
import { detailDescription } from "stores/ProductDetailAtoms";
import S from "./ProductDetailStyles";

const ProductDescription = () => {
  const productDescription = useRecoilValue(detailDescription);
  return <S.ProductDetailBlock>{productDescription}</S.ProductDetailBlock>;
};

export default ProductDescription;
