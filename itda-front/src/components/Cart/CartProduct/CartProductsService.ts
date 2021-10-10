import { cartAPI } from "util/API/cartAPI";
import { useQuery } from "react-query";

const CartService = () => {
  const { data, isLoading } = useQuery(
    "cartlist",
    cartAPI.get.getCartProductList
  );
  return { cartListData: data?.data, isLoading };
};

const UpdateCartService = (cartList: any) => {
  const { isError } = useQuery("updateCartList", () =>
    cartAPI.post.updateCartProductList(cartList)
  );
};

export { CartService, UpdateCartService };
