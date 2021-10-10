import { cartAPI } from "util/API/cartAPI";
import { useQuery } from "react-query";

const CartService = () => {
  const { data, isLoading } = useQuery("cart", cartAPI.get.getCartProductList);
  return { cartListData: data?.data, isLoading };
};

export default CartService;
