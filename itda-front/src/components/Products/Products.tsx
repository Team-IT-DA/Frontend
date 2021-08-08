import Header from "components/common/Header/Header";
import Navigator from "./Navigator";
import ProductList from "./ProductList";
import S from "./ProductsStyles";
const Products = () => {
  return (
    <>
      <S.Products.HeaderLayout>
        <S.Products.HeaderLayer>
          <Header color={"#555555"} />
        </S.Products.HeaderLayer>
        <Navigator />
      </S.Products.HeaderLayout>

      <S.Products.MainLayout>
        <ProductList />
      </S.Products.MainLayout>
    </>
  );
};

export default Products;
