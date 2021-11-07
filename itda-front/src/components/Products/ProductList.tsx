import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import S from "./ProductsStyles";
import ProductsService from "./ProductsService";
import ProductCard from "components/common/ProductCard";
import LoadingSpinner from "components/common/LoadingSpinner";
import { productsDataAtom } from "stores/ProductListAtoms";
import useSearchParams from "hooks/useSearchParams";
import { IProduct } from "types/ProductTypes";

const ProductList = () => {
  const { isLoading } = ProductsService();
  const { search } = useLocation();
  const { paramsKey, params } = useSearchParams(search);
  const productsData = useRecoilValue(productsDataAtom);

  const getSearchResultSummary = () => {
    if (!params) return;
    if (paramsKey === "category") return;

    const productCount = productsData?.length;

    return `'${params}' 검색 결과 ${productCount ? productCount : 0}건`;
  };

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

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <S.ProductList.Layout>
      <S.ProductList.CountLayer>
        {getSearchResultSummary()}
      </S.ProductList.CountLayer>
      <S.ProductList.Layer>{productList}</S.ProductList.Layer>
    </S.ProductList.Layout>
  );
};

export default ProductList;
