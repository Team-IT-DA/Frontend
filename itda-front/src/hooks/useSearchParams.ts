import { useEffect, useState } from "react";

const useSearchParams = (search: string) => {
  const [params, setParams] = useState<undefined | string>();
  const [paramsKey, setParamsKey] = useState<undefined | string>();

  const searchParams = new URLSearchParams(search);
  const productName = searchParams.get("productName");
  const sellerName = searchParams.get("sellerName");
  const category = searchParams.get("category");

  useEffect(() => {
    productName && setParams(productName);
    setParamsKey("productName");
  }, [productName]);

  useEffect(() => {
    sellerName && setParams(sellerName);
    setParamsKey("sellerName");
  }, [sellerName]);

  useEffect(() => {
    category && setParams(category);
    setParamsKey("category");
  }, [category]);

  return { paramsKey, params };
};

export default useSearchParams;
