import { useRecoilState } from "recoil";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { productAPI } from "util/API/productAPI";
import useSearchParams from "hooks/useSearchParams";
import { productsDataAtom } from "stores/ProductListAtoms";

const ProductsService = () => {
  const { search } = useLocation();
  const { paramsKey, params } = useSearchParams(search);
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
          setProductsData(data?.data?.products);
        } else {
          setProductsData(data?.data);
        }
      },
    }
  );

  return { productsData, isLoading };
};

export default ProductsService;
