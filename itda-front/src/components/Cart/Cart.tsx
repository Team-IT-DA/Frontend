import S from "./CartStyles";
import Header from "components/common/Header";
import AddressInfo from "./AddressInfo";
import PaymentInfo from "./PaymentInfo";
import CartProduct from "./CartProduct/CartProduct";

const Cart = () => {
  return (
    <>
      <S.Cart.HeaderLayout>
        <Header />
      </S.Cart.HeaderLayout>
      <S.Cart.CartHeaderLayout>장바구니</S.Cart.CartHeaderLayout>
      <S.Cart.MainLayout>
        <S.Cart.ContainerLayer>
          <S.Cart.ProductsLayer>
            <CartProduct />
          </S.Cart.ProductsLayer>
          <S.Cart.SummaryLayer>
            <AddressInfo />
            <S.Cart.DivisionLine />
            <PaymentInfo />
          </S.Cart.SummaryLayer>
        </S.Cart.ContainerLayer>
      </S.Cart.MainLayout>
    </>
  );
};

export default Cart;
