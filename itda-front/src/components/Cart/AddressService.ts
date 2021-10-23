import shippingAPI from "util/API/shippingAPI";
import { useQuery } from "react-query";

const AddressService = () => {
  const { data, isLoading } = useQuery(
    "latestShippingInfos",
    shippingAPI.get.getShippingInfos
  );

  return { productsData: data, isLoading };
};

export default AddressService;
