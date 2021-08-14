import S from "./ShoppingCartStyles";
import Header from "components/common/Header";
import AddressInfo from "./AddressInfo/";
import PaymentInfo from "./PaymentInfo";
import ShoppingCartProduct from "./ShoppingCartProduct";
import CheckButton from "components/common/Atoms/CheckButton";
const ShoppingCart = () => {
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
              <CheckButton checked={false} />
              <S.ShoppingCartProduct.HeaderTextLayer>
                전체선택 (1개)
              </S.ShoppingCartProduct.HeaderTextLayer>
              <S.ShoppingCartProduct.HeaderTextLayer>
                선택삭제
              </S.ShoppingCartProduct.HeaderTextLayer>
            </S.ShoppingCartProduct.HeaderLayout>
            <ShoppingCartProduct />
            <ShoppingCartProduct />
            <ShoppingCartProduct />
            <ShoppingCartProduct />
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
