import { useEffect, useState } from "react";

const useSearchParams = (search: string) => {
  const [params, setParams] = useState<undefined | string>();
  const [paramsKey, setParamsKey] = useState<undefined | string>();

  const searchParams = new URLSearchParams(search);
  const productName = searchParams.get("productName");
  const sellerName = searchParams.get("sellerName");

  useEffect(() => {
    productName && setParams(productName);
    setParamsKey("productName");
  }, [productName]);

  useEffect(() => {
    sellerName && setParams(sellerName);
    setParamsKey("sellerName");
  }, [sellerName]);

  return { paramsKey, params };
};

export default useSearchParams;
