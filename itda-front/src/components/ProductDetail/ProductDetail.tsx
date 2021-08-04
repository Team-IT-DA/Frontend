import Header from "components/common/Header";
import ProductInfo from "./ProductInfo";
import ProductTab from "./ProductTab";
import S from "./ProductDetailStyles";

const ProductDetail = () => {
  return (
    <>
      <Header color="#55555" />
      <S.ProductDetailWall>
        <ProductInfo />
        <ProductTab />
      </S.ProductDetailWall>
    </>
  );
};

export default ProductDetail;
