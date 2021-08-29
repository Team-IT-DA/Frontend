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
    } else {
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
    selectedProductState.size > 0 &&
    selectedProductState.size === cartProductState.length
      ? setIsAllSelected(true)
      : setIsAllSelected(false);
  }, [selectedProductState]);

  const deleteSelectedProduct = () => {
    //TODO: 장바구니 삭제 POST 적용하면 아래 내용 필요 없음
    const ids = [...selectedProductState.keys()];

    setCartProductState(prev =>
      [...prev].filter(data => !ids.includes(data.id))
    );

    setSelectedProductState(prev => {
      const newState = new Map(prev);
      const ids = [...selectedProductState.keys()];
      ids.forEach(id => newState.delete(id));
      return newState;
    });
  };

  return (
    <S.Cart.ProductsLayer>
      <S.CartProduct.HeaderLayout>
        <CheckButton checked={isAllSelected} onClick={handleCheckButton} />
        <S.CartProduct.HeaderTextLayer>전체선택</S.CartProduct.HeaderTextLayer>
        {selectedProductState.size > 0
          ? `(${selectedProductState.size}개)`
          : ""}
        <S.CartProduct.HeaderTextLayer onClick={deleteSelectedProduct}>
          선택삭제
        </S.CartProduct.HeaderTextLayer>
      </S.CartProduct.HeaderLayout>
      {cartProductList()}
    </S.Cart.ProductsLayer>
  );
};

export default CartProduct;
