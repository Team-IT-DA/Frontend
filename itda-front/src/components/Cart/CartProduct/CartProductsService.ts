import { useQuery } from "react-query";
import { useSetRecoilState, useRecoilValue } from "recoil";
import cartAPI from "util/API/cartAPI";
import { cartProductData } from "stores/CartAtoms";
import { isSideDrawerClicked } from "stores/SideDrawerAtoms";
import { ICart } from "types/CartTypes";

const CartService = () => {
  const setCartProductState = useSetRecoilState(cartProductData);
  const sideDrawerToggleState = useRecoilValue(isSideDrawerClicked);

  const { isLoading } = useQuery(
    ["cartProducts", sideDrawerToggleState],
    cartAPI.get.getCartProductList,
    {
      onSuccess: data => {
        const tmpProducts: ICart[] = Object.values(data?.data.products);
        setCartProductState(tmpProducts);
      },
    }
  );
  return { isLoading };
};

const UpdateCartService = (cartList: any) => {
  const { isError } = useQuery("updateCartList", () =>
    cartAPI.post.updateCartProductList(cartList)
  );
};

const DeleteCartService = (productId: number) => {
  const { data } = useQuery("deleteCartList", () =>
    cartAPI.delete.deleteCartProduct(productId)
  );
};

export { CartService, UpdateCartService, DeleteCartService };
