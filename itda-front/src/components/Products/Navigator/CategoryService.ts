import productAPI from "util/API/productAPI";
import { useQuery } from "react-query";

const CategoryService = () => {
  const { data, isLoading } = useQuery(
    "categories",
    productAPI.category.get.getCategoryList
  );

  return { categoryData: data?.data.categories, isLoading };
};

export default CategoryService;
