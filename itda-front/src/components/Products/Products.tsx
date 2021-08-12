import Header from "components/common/Header/Header";
import Navigator from "./Navigator";
import ProductList from "./ProductList";
import TopButton from "components/common/TopButton";
import S from "./ProductsStyles";
const Products = () => {
  return (
    <>
      <S.Products.HeaderLayout>
        <S.Products.HeaderLayer>
          <Header />
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
