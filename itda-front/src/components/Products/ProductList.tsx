import S from "./ProductsStyles";
import ProductCard from "components/common/ProductCard";
import { IProduct } from "types/ProductTypes";
import ProductsService from "./ProductsService";
import LoadingSpinner from "components/common/LoadingSpinner";
import { productsDataAtom } from "stores/ProductListAtoms";
import { useRecoilState } from "recoil";
import { useLocation } from "react-router-dom";
import { productAPI } from "util/API/productAPI";
import { useQuery } from "react-query";
import useSearchParams from "hooks/useSearchParams";

const ProductList = () => {
  // const { productsData, isLoading } = ProductsService();
  const { search } = useLocation();
  const { paramsKey, params } = useSearchParams(search);
  console.log(params);
  const [productsData, setProductsData] = useRecoilState(productsDataAtom);

  const { isLoading } = useQuery(
    "products",
    () => {
      if (params && paramsKey) {
        return productAPI.products.get.getProductBySearchParams(
          paramsKey,
          params
        );
      } else {
        return productAPI.products.get.getProductList();
      }
    },
    {
      onSuccess: data => {
        if (params) {
          console.log(data?.data);
          setProductsData(data?.data?.products);
        } else {
          console.log(data?.data);
          setProductsData(data?.data);
        }
      },
    }
  );

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
