import Header from "components/common/Header";
import ProductInfo from "./ProductInfo";
import ProductTab from "./ProductTab";
import S from "./ProductDetailStyles";
import TopButton from "components/common/TopButton";

const ProductDetail = () => {
  return (
    <>
      <Header />
      <S.ProductDetailWall>
        <ProductInfo />
        <ProductTab />
        <TopButton />
      </S.ProductDetailWall>
    </>
  );
};

export default ProductDetail;
