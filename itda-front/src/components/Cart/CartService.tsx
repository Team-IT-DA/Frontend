import { useQuery } from "react-query";
import { useSetRecoilState, useRecoilValue } from "recoil";
import cartAPI from "util/API/cartAPI";
import { cartProductData } from "stores/CartAtoms";
import { isSideDrawerClicked } from "stores/SideDrawerAtoms";
import { ICart, ICartSelectedProduct } from "types/CartTypes";

const GetCart = () => {
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

const PostCart = (cartList: ICartSelectedProduct) => {
  const { isError } = useQuery("updateCartList", () =>
    cartAPI.post.updateCartProduct(cartList)
  );
};

const PostCartAll = (newCartList: ICart[]) => {
  const requestData = newCartList.map(({ productId, productCount }) => {
    return {
      id: productId,
      count: productCount,
    };
  });
  cartAPI.post.updateAllCartProduct(requestData);
};

const DeleteCart = (productId: number) => {
  useQuery("deleteCartList", () => cartAPI.delete.deleteCartProduct(productId));
};

export { GetCart, PostCart, PostCartAll, DeleteCart };
