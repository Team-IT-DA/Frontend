import S from "./ProductsStyles";
import ProductCard from "components/common/ProductCard";
import { IProduct } from "types/ProductTypes";
import ProductsService from "./ProductsService";

const ProductList = () => {
  const { productsData, isLoading } = ProductsService();

  const productList = productsData?.map(
    ({ id, imageUrl, productName, sellerName, price }: IProduct) => (
      <S.ProductList.Block key={`productList-${id}`}>
        <ProductCard
          key={`productCard-${id}`}
          size="extra"
          horizontal={false}
          productImg={imageUrl}
          productName={productName}
          productPrice={price}
          description={"description이 API 응답에 없다!!이건 직접 적음"}
          id={id}
        />
      </S.ProductList.Block>
    )
  );

  const productCount = productsData?.length; //TODO: 검색했을 경우 렌더링
  //TODO: BE에게 description={description} 추가해달라 요청

  return isLoading ? (
    <h1>Loading image 넣기</h1>
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
