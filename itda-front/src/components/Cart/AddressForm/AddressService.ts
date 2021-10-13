import cartAPI from "util/API/cartAPI";
import { useQuery } from "react-query";

const AddressService = () => {
  const { data, isLoading } = useQuery(
    "latestShippingInfos",
    cartAPI.shipping.get.getShippingInfos
  );

  return { productsData: data, isLoading };
};

export default AddressService;
