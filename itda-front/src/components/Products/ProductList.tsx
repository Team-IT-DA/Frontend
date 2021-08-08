import S from "./ProductsStyles";
import ProductCard from "components/common/ProductCard";
import productPage from "util/mock/productData";

const ProductList = () => {
  const { products } = productPage.data;
  const productList = products.map(
    ({ id, imageUrl, productName, sellerName, price }) => (
      <S.ProductList.Block>
        <ProductCard
          key={id}
          size="extra"
          horizontal={false}
          productImg={imageUrl}
          productName={productName}
          productPrice={price}
          seller={sellerName}
        />
      </S.ProductList.Block>
    )
  );

  return (
    <S.ProductList.Layout>
      <S.ProductList.CountLayer>'크롱' 검색 결과 3건</S.ProductList.CountLayer>
      <S.ProductList.Layer>{productList}</S.ProductList.Layer>
    </S.ProductList.Layout>
  );
};

export default ProductList;
