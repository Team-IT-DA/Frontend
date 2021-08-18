import S from "./ShoppingCartStyles";
import Header from "components/common/Header";
import AddressInfo from "./AddressInfo/";
import PaymentInfo from "./PaymentInfo";
import ShoppingCartProduct from "./ShoppingCartProduct";
import CheckButton from "components/common/Atoms/CheckButton";
import { selectedProduct, cartProductData } from "stores/ShoppingCartAtoms";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { GETCartData } from "util/mock/GETCartData";

const ShoppingCart = () => {
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
      <ShoppingCartProduct
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
    <>
      <S.ShoppingCart.HeaderLayout>
        <Header />
      </S.ShoppingCart.HeaderLayout>

      <S.ShoppingCart.CartHeaderLayout>
        장바구니
      </S.ShoppingCart.CartHeaderLayout>
      <S.ShoppingCart.MainLayout>
        <S.ShoppingCart.ContainerLayer>
          <S.ShoppingCart.ProductsLayer>
            <S.ShoppingCartProduct.HeaderLayout>
              <CheckButton
                checked={isAllSelected}
                onClick={handleCheckButton}
              />
              <S.ShoppingCartProduct.HeaderTextLayer>
                전체선택 ({selectedProductState.size}개)
              </S.ShoppingCartProduct.HeaderTextLayer>
              <S.ShoppingCartProduct.HeaderTextLayer>
                선택삭제
              </S.ShoppingCartProduct.HeaderTextLayer>
            </S.ShoppingCartProduct.HeaderLayout>
            {cartProductList()}
          </S.ShoppingCart.ProductsLayer>
          <S.ShoppingCart.SummaryLayer>
            <AddressInfo />
            <S.ShoppingCart.DivisionLine />
            <PaymentInfo />
          </S.ShoppingCart.SummaryLayer>
        </S.ShoppingCart.ContainerLayer>
      </S.ShoppingCart.MainLayout>
    </>
  );
};

export default ShoppingCart;
