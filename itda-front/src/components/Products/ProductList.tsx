import S from "./ProductsStyles";
import ProductCard from "components/common/ProductCard";
import { IProduct } from "types/ProductTypes";
import ProductsService from "./ProductsService";
import LoadingSpinner from "components/common/LoadingSpinner";

const ProductList = () => {
  const { productsData, isLoading } = ProductsService();

  const productList = productsData?.map(
    ({
      id,
      imageUrl,
      productName,
      sellerName,
      price,
      description,
    }: IProduct) => (
      <S.ProductList.Block key={`productList-${id}`}>
        <ProductCard
          key={`productCard-${id}`}
          size="extra"
          horizontal={false}
          productImg={imageUrl}
          productName={`[${sellerName}] ${productName}`}
          productPrice={price}
          description={description}
          id={id}
        />
      </S.ProductList.Block>
    )
  );

  const productCount = productsData?.length; //TODO: 검색했을 경우 렌더

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <S.ProductList.Layout>
      <S.ProductList.CountLayer>
        {/* '크롱' 검색 결과 {productCount}건 */}
      </S.ProductList.CountLayer>
      <S.ProductList.Layer>{productList}</S.ProductList.Layer>
    </S.ProductList.Layout>
  );
};

export default ProductList;
