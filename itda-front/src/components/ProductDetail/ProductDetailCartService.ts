import { useRecoilState, useRecoilValue } from "recoil";
import {
  detailProductCount,
  productInfo,
  detailProductPrice,
} from "stores/ProductDetailAtoms";
import { cartProductData } from "stores/CartAtoms";
import { ICartProduct } from "types/CartTypes";

const ProductDetailCartService = () => {
  const productData = useRecoilValue(productInfo);
  const [cartProductsData, setCartProductData] =
    useRecoilState(cartProductData);
  const productCount = useRecoilValue(detailProductCount);
  const productPrice = useRecoilValue(detailProductPrice);
  const hasSameProductInCart = (id: number) => {
    return cartProductsData.some((product) => product.id === id);
  };

  const handleClickAddToCartButton = () => {
    const productId = Number(productData.id);
    const targetProductData: ICartProduct = {
      id: productId,
      count: productCount,
      price: productPrice,
      productName: productData?.name,
      imageUrl: productData?.imgUrl,
    };
    if (!hasSameProductInCart(productId)) {
      setCartProductData((cartProducts) => [
        ...cartProducts,
        targetProductData,
      ]);
    }
  };
  return { productData, handleClickAddToCartButton };
};

export default ProductDetailCartService;
