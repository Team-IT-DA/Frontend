import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import S from "../CartStyles";
import { CartService } from "components/Cart/CartProduct/CartProductsService";
import CarProductCard from "./CartProductCard";
import CheckButton from "components/common/Atoms/CheckButton";
import { selectedProduct, cartProductData } from "stores/CartAtoms";

const CartProduct = () => {
  CartService();
  const [cartProductState, setCartProductState] = useRecoilState(
    cartProductData
  );
  const [selectedProductState, setSelectedProductState] = useRecoilState(
    selectedProduct
  );
  const [isAllSelected, setIsAllSelected] = useState(false);

  const handleCheckAllButton = () => {
    if (selectedProductState.size < cartProductState.length) {
      //모두 선택
      cartProductState.forEach(({ productId, productCount }) => {
        setSelectedProductState(prev => {
          const newState = new Map(prev);
          newState.set(productId, { id: productId, count: productCount });
          return newState;
        });
      });
      setIsAllSelected(true);
    } else {
      //모두 선택 해제
      setSelectedProductState(new Map());
      setIsAllSelected(false);
    }
  };

  const cartProductList = () => {
    return cartProductState.map(product => (
      <CarProductCard
        key={product.productId}
        id={product.productId}
        imageUrl={product.imgUrl}
        productName={product.productName}
        price={product.price}
        count={product.productCount}
      />
    ));
  };

  useEffect(() => {
    //product checkbox가 모두 채워졌을 때 전체 선택 checkbox도 채운다.
    selectedProductState.size > 0 &&
    selectedProductState.size === cartProductState.length
      ? setIsAllSelected(true)
      : setIsAllSelected(false);
  }, [selectedProductState]);

  const deleteSelectedProduct = () => {
    //선택된 제품을 한번에 지우는 API
    if (selectedProductState.size <= 0)
      alert("장바구니에 담긴 상품이 없습니다.");
    //TODO: deleteCartProduct에 여러개 보낼 수 있는지 확인 필요
  };

  return (
    <S.Cart.ProductsLayer>
      <S.CartProduct.HeaderLayout>
        <CheckButton checked={isAllSelected} onClick={handleCheckAllButton} />
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
