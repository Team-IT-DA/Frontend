import { productAPI } from "util/API/productAPI";
import { useQuery } from "react-query";

const ProductsService = () => {
  const { data, isLoading } = useQuery(
    "products",
    productAPI.products.get.getProductList
  );
  return { productsData: data?.data, isLoading };
};

export default ProductsService;
