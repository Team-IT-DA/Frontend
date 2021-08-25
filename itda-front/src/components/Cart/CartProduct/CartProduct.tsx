import S from "../CartStyles";
import CheckButton from "components/common/Atoms/CheckButton";
import { selectedProduct, cartProductData } from "stores/CartAtoms";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { GETCartData } from "util/mock/GETCartData";
import CarProductCard from "./CartProductCard";
const CartProduct = () => {
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [cartProductState, setCartProductState] = useRecoilState(
    cartProductData
  );
  const [selectedProductState, setSelectedProductState] = useRecoilState(
    selectedProduct
  );

  const handleCheckButton = () => {
    if (selectedProductState.size < cartProductState.length) {
      cartProductState.forEach(x => {
        if (!selectedProductState.has(x.id)) {
          const { id, imageUrl, productName, price, count } = x;
          setSelectedProductState(
            prev =>
              new Map([
                ...prev,
                [
                  id,
                  {
                    id,
                    imageUrl,
                    productName,
                    price,
                    count,
                  },
                ],
              ])
          );
        }
      });
      setIsAllSelected(false);

      //전체 선택 눌러서 나머지 아이템 다 선택
    } else {
      //전체 선택 해제
      setIsAllSelected(false);
      setSelectedProductState(prev => new Map());
    }
  };

  const cartProductList = () => {
    return cartProductState.map(product => (
      <CarProductCard
        key={product.id}
        id={product.id}
        imageUrl={product.imageUrl}
        productName={product.productName}
        price={product.price}
        count={product.count}
      />
    ));
  };

  useEffect(() => {
    //TODO: API : GET CART
    const { data } = GETCartData;
    const { detail } = data;
    setCartProductState(detail);
  }, []);

  useEffect(() => {
    if (selectedProductState.size === cartProductState.length)
      setIsAllSelected(true);
    else setIsAllSelected(false);
  }, [selectedProductState]);

  return (
    <S.Cart.ProductsLayer>
      <S.CartProduct.HeaderLayout>
        <CheckButton checked={isAllSelected} onClick={handleCheckButton} />
        <S.CartProduct.HeaderTextLayer>
          전체선택 ({selectedProductState.size}개)
        </S.CartProduct.HeaderTextLayer>
        <S.CartProduct.HeaderTextLayer>선택삭제</S.CartProduct.HeaderTextLayer>
      </S.CartProduct.HeaderLayout>
      {cartProductList()}
    </S.Cart.ProductsLayer>
  );
};

export default CartProduct;
