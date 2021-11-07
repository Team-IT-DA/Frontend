import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { productsDataAtom } from "stores/ProductListAtoms";
import useSearchParams from "hooks/useSearchParams";
import productAPI from "util/API/productAPI";

const ProductsService = () => {
  const { search } = useLocation();
  const { paramsKey, params } = useSearchParams(search);
  const setProductsData = useSetRecoilState(productsDataAtom);

  const { isLoading } = useQuery(
    ["products", params, paramsKey],
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
          setProductsData(data?.data?.products);
        } else {
          setProductsData(data?.data);
        }
      },
    }
  );

  return { isLoading };
};

export default ProductsService;
