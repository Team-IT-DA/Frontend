import StickyHeader from "components/common/Header/StickyHeader";
import Navigator from "./Navigator";
import ProductList from "./ProductList";
import TopButton from "components/common/TopButton";
import S from "./ProductsStyles";

const Products = () => {
  return (
    <>
      <S.Products.HeaderLayout>
        <S.Products.HeaderLayer>
          <StickyHeader />
        </S.Products.HeaderLayer>
        <Navigator />
      </S.Products.HeaderLayout>
      <S.Products.MainLayout>
        <ProductList />
        <TopButton />
      </S.Products.MainLayout>
    </>
  );
};

export default Products;
